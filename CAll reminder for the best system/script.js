// Optimized Contact Stack Manager with private fields
class ContactStack {
    #contacts;
    #currentIndex = 0;
    static #STORAGE_KEY = 'callReminders';
    static #DEFAULT_CONTACTS = [
    ];

    constructor() {
        this.#contacts = this.#loadFromStorage();
    }

    #loadFromStorage() {
        try {
            return JSON.parse(localStorage.getItem(ContactStack.#STORAGE_KEY)) || ContactStack.#DEFAULT_CONTACTS;
        } catch (e) {
            console.error('Storage load failed:', e);
            return ContactStack.#DEFAULT_CONTACTS;
        }
    }

    #saveToStorage() {
        try {
            localStorage.setItem(ContactStack.#STORAGE_KEY, JSON.stringify(this.#contacts));
        } catch (e) {
            console.error('Storage save failed:', e);
        }
    }

    #clampIndex() {
        this.#currentIndex = Math.max(0, Math.min(this.#currentIndex, this.#contacts.length - 1));
    }

    getCurrent() {
        return this.#contacts.length ? this.#contacts[this.#currentIndex] : null;
    }

    next() {
        if (!this.#contacts.length) return false;
        this.#currentIndex = (this.#currentIndex + 1) % this.#contacts.length;
        return true;
    }

    previous() {
        if (!this.#contacts.length) return false;
        this.#currentIndex = (this.#currentIndex - 1 + this.#contacts.length) % this.#contacts.length;
        return true;
    }

    add(contact) {
        contact.id = Date.now();
        this.#contacts.push(contact);
        this.#currentIndex = this.#contacts.length - 1;
        this.#saveToStorage();
        return contact;
    }

    removeCurrent() {
        if (!this.#contacts.length) return false;
        this.#contacts.splice(this.#currentIndex, 1);
        this.#clampIndex();
        this.#saveToStorage();
        return true;
    }

    getCount() {
        return this.#contacts.length;
    }

    getCurrentIndex() {
        return this.#currentIndex;
    }
}

// Optimized UI Manager with event delegation and CSS classes
class UIManager {
    #stack;
    #theme;
    #notifyTimeout;
    #elements = {};
    #themes = ['blue', 'green', 'red', 'black'];
    #themeColors = {
        blue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        green: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        red: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        black: 'linear-gradient(135deg, #434343 0%, #000000 100%)'
    };

    constructor(contactStack) {
        this.#stack = contactStack;
        this.#theme = localStorage.getItem('callReminderTheme') || 'blue';
        this.#cacheElements();
        this.#setupEventListeners();
        this.#applyTheme(this.#theme);
        this.#updateDisplay();
        this.#createModal();
    }


    #cacheElements() {
        this.#elements = {
            name: document.querySelector('.callerName'),
            image: document.querySelector('.profile-image'),
            purpose: document.querySelectorAll('.info-item .value')[0],
            position: document.querySelectorAll('.info-item .value')[1],
            cardHeader: document.querySelector('.card-header h2'),
            card: document.querySelector('.card'),
            body: document.body
        };
    }

    #setupEventListeners() {
        // Delegate nav button clicks
        const navButtons = document.querySelector('.nav-controls');
        navButtons?.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (btn.classList.contains('add-btn')) this.#openAddModal();
            else if (btn.classList.contains('up-btn')) this.#handleNext();
            else if (btn.classList.contains('down-btn')) this.#handlePrevious();
        });

        // Delegate action button clicks
        const actionButtons = document.querySelector('.action-buttons');
        actionButtons?.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (btn.classList.contains('btn-call')) this.#handleCall();
            else if (btn.classList.contains('btn-message')) this.#handleMessage();
        });

        // Delegate theme selection
        document.querySelector('.theme-selector')?.addEventListener('click', (e) => {
            const themeBtn = e.target.closest('.theme-btn');
            if (themeBtn) {
                const index = Array.from(document.querySelectorAll('.theme-btn')).indexOf(themeBtn);
                this.#changeTheme(this.#themes[index]);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') this.#handleNext();
            if (e.key === 'ArrowDown') this.#handlePrevious();
            if (e.key === '+' || e.key === '=') this.#openAddModal();
        });
    }

    #handleNext() {
        this.#stack.next() && this.#updateDisplay();
    }

    #handlePrevious() {
        this.#stack.previous() && this.#updateDisplay();
    }

    #handleCall() {
        const contact = this.#stack.getCurrent();
        if (contact) {
            this.#notify(`📞 Calling ${contact.name}...`);
            console.log(`Calling: ${contact.name}`);
        }
    }

    #handleMessage() {
        const contact = this.#stack.getCurrent();
        if (contact) {
            this.#notify(`💬 Message to ${contact.name}`);
            console.log(`Messaging: ${contact.name}`);
        }
    }

    #updateDisplay() {
        const contact = this.#stack.getCurrent();
        const count = this.#stack.getCount();
        const index = this.#stack.getCurrentIndex() + 1;

        if (contact) {
            this.#elements.name.textContent = contact.name;
            this.#elements.purpose.textContent = contact.purpose;
            this.#elements.position.textContent = contact.position;
            this.#elements.image.src = contact.image;
        } else {
            this.#elements.name.textContent = 'No Contacts';
            this.#elements.purpose.textContent = 'N/A';
            this.#elements.position.textContent = 'N/A';
        }

        this.#elements.cardHeader.textContent = `Contact ${index} of ${count}`;
        this.#animateCard();
    }

    #createModal() {
        const modal = document.createElement('div');
        modal.id = 'addModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Add New Contact</h2>
                    <button class="close-btn" type="button">&times;</button>
                </div>
                <form id="contactForm">
                    <input type="text" name="name" placeholder="Name" required>
                    <input type="text" name="purpose" placeholder="Purpose" required>
                    <input type="text" name="position" placeholder="Position" required>
                    <input type="text" name="image" placeholder="Image URL (optional)">
                    <div class="form-actions">
                        <button type="submit" class="btn btn-submit">Add</button>
                        <button type="button" class="btn btn-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        this.#elements.body.appendChild(modal);

        const form = modal.querySelector('form');
        const closeBtn = modal.querySelector('.close-btn');
        const cancelBtn = modal.querySelector('.btn-cancel');

        const closeModal = () => {
            modal.classList.remove('active');
            this.#elements.body.style.overflow = 'auto';
        };

        form.addEventListener('submit', (e) => this.#handleAddContact(e, form, closeModal));
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => e.target === modal && closeModal());

        this.#elements.modal = modal;
        this.#elements.form = form;
    }

    #openAddModal() {
        this.#elements.modal?.classList.add('active');
        this.#elements.body.style.overflow = 'hidden';
        this.#elements.form?.querySelector('input').focus();
    }

    #handleAddContact(e, form, closeModal) {
        e.preventDefault();
        const data = new FormData(form);
        const contact = {
            name: data.get('name'),
            purpose: data.get('purpose'),
            position: data.get('position'),
            image: data.get('image') || '../GOD LEVEL/moksh.jpg'
        };

        this.#stack.add(contact);
        this.#updateDisplay();
        closeModal();
        this.#notify(`✅ Contact "${contact.name}" added!`);
        form.reset();
    }

    #changeTheme(theme) {
        this.#theme = theme;
        localStorage.setItem('callReminderTheme', theme);
        this.#applyTheme(theme);
        this.#notify(`🎨 ${theme.charAt(0).toUpperCase() + theme.slice(1)}`);
    }

    #applyTheme(theme) {
        const gradient = this.#themeColors[theme];
        document.body.style.background = gradient;
        const cardHeaderDiv = this.#elements.cardHeader?.parentElement;
        if (cardHeaderDiv) cardHeaderDiv.style.background = gradient;
    }

    #animateCard() {
        this.#elements.card?.classList.add('animate');
        setTimeout(() => this.#elements.card?.classList.remove('animate'), 300);
    }

    #notify(msg) {
        clearTimeout(this.#notifyTimeout);
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            this.#elements.body.appendChild(notification);
        }
        notification.textContent = msg;
        notification.classList.add('show');
        this.#notifyTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
}

// Inject optimized styles (minified)
function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;align-items:center;justify-content:center;backdrop-filter:blur(5px)}.modal.active{display:flex;animation:fadeIn .2s ease}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.modal-content{background:white;border-radius:20px;width:90%;max-width:450px;box-shadow:0 20px 60px rgba(0,0,0,.3);animation:slideUp .3s ease}@keyframes slideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}.modal-header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:20px;border-radius:20px 20px 0 0;display:flex;justify-content:space-between;align-items:center}.modal-header h2{margin:0;font-size:1.5rem}.close-btn{background:0;border:0;color:white;font-size:28px;cursor:pointer;width:32px;height:32px;padding:0}.close-btn:hover{opacity:.8}#contactForm{padding:30px;display:flex;flex-direction:column;gap:15px}#contactForm input{padding:12px;border:2px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;transition:.3s}#contactForm input:focus{outline:0;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,.1)}.form-actions{display:flex;gap:12px;margin-top:10px}.btn-submit,.btn-cancel{padding:12px 20px;border:0;border-radius:10px;font-weight:600;cursor:pointer;flex:1;transition:.3s}.btn-submit{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white}.btn-submit:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(102,126,234,.4)}.btn-cancel{background:#f0f0f0;color:#333;border:2px solid #ddd}.btn-cancel:hover{background:#e0e0e0}#notification{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,.8);color:white;padding:15px 30px;border-radius:50px;z-index:999;opacity:0;transition:opacity .3s;pointer-events:none}#notification.show{opacity:1;pointer-events:auto}.card.animate{animation:slideIn .3s ease}
    `;
    document.head.appendChild(style);
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    injectStyles();
    new UIManager(new ContactStack());
    console.log('✨ Call Reminder App Optimized');
}
