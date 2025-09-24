import { fetchMovieAvailability, fetchMovieList } from "./api.js";

// selectors

const mainElement = document.querySelector("main")
const bookerElement = document.querySelector("#booker")
const bookerGridElement = document.querySelector("#booker-grid-holder")
const bookTicketBtn = document.querySelector("#book-ticket-btn")

// fetch list of all movies
// shows a loader till fetching of movies is going on...
// display data
// remove loader 

const renderSucessMessage = (mobile, email) =>{
    const sucess = convertToHtmlDom(`<div id="Sucess"> 
        <h4>Bookig Details</h4>
        <div> Seats: ${selectedSeats.join(",")}</div>
        <div>Phone Number: ${mobile}</div> 
        <div>Email: ${email}</div>
        <div>Enjoy the Movie!</div> 

    </div>`)
    bookerElement.appendChild(sucess);
}

const onPurchaseBtnClickHandler = (event) => {
    event.preventDefault();
    const mobile = document.querySelector("#Phone").value;
    const email = document.querySelector("#email").value;
    bookerElement.innerHTML = "";
    renderSucessMessage(mobile,email);
}




function renderConfirmPurchaseForm(){
    const form = convertToHtmlDom(`
<div id="confirm-purchase">
    <h3>Confirm your booking for seat numbers:${selectedSeats.join(",")}</h3>
    <form id="customer-detail-form">
        <div> 
        <label for="email">Email: </label>
        <input type="email" required id="email">
        </div>

        <label for="Phone">Phone Number :</label>
        <input type="tel" required id="Phone">
        <div>
        <button type="submit" id="Movie-Submit-button">Purchase</button>
    
        </div>
        </form>
</div>`);

bookerElement.appendChild(form);
document.querySelector("form").addEventListener("submit", onPurchaseBtnClickHandler)
}

bookTicketBtn.addEventListener("click", onbooktickethandler);
function onbooktickethandler  ()  {
    bookerElement.innerHTML = "";
    renderConfirmPurchaseForm();
}



// store selected seats

let selectedSeats = [];
 
// task : convert html string to html DOM Elememt

const convertToHtmlDom = (HtmlStringFormat) => {
    const element = document.createElement('div');
    element.innerHTML = HtmlStringFormat;
    return element.firstElementChild;
}

const onseatclick = (event) => {
    event.target.classList.toggle("selected");

    // logic if element is having selected-seat class then it is needs to be push
    // on selected seats Array and if it is not having then, remove that seat from selectedseats array

    if (event.target.classList.contains("selected")) {
               selectedSeats.push(event.target.innerText)
    } else{
        selectedSeats.filter(seat => seat !== event.target.innerText)
    }

    if(selectedSeats.length <  0){
        bookTicketBtn.classList.add("v-none");
    } else{
        bookTicketBtn.classList.remove("v-none")
    }
} 

const renderTheaterLayout = (listOfUnAvalilableseats = [] ,seatNooffset = 1) =>{

    // make a grid of 4/3
    const grid = convertToHtmlDom(`<div class="booking-grid"></div>`)

    // insert grid elements basically theatre seats
    let theatreseats = "";

    for(let i =0; i<12; i++){
        theatreseats = theatreseats + `<div class="grid-cell seat${i+seatNooffset} ${listOfUnAvalilableseats.includes(i+seatNooffset)? "Unavailable" : "available"} ">${i+seatNooffset}</div>`;
    }

    grid.innerHTML = theatreseats;

  
    bookerGridElement.appendChild(grid);

    document.querySelectorAll(".grid-cell").forEach((cell) => cell.addEventListener("click", onseatclick));

}



const renderMovieTheater = (event)=>{
    event.preventDefault();



const movieNAme = event.target.innerText ? event.target.innerText : event.target.parentElement.innerText;

fetchMovieAvailability(movieNAme).then((listOfUnAvalilableseats) => {


    // make h3 element of booker div visible  
    const  bookerElementHEader = document.querySelector("#booker h3")
    bookerElementHEader.classList.toggle("v-none");  
    
   
    // render theater layout view
    renderTheaterLayout(listOfUnAvalilableseats);
    renderTheaterLayout(listOfUnAvalilableseats, 13);
});

}

const rendermoovielist = async () => {
    mainElement.appendChild(loader) // adding loader before making appi call
    const movielist = await fetchMovieList();

    const movieholder = document.createElement('div');
    movieholder.classList.add('movie-holder');

    movielist.forEach(movies => {
        const moviesElement = convertToHtmlDom(` <a class="movie-link" href="${movies.name}">
         <div class="movie" data-id="${movies.name}">
             <div class="movie-img-wrapper" style="background-image: url('${movies.imgUrl}'); background-size: cover;">
             </div>
             <h4>${movies.name}</h4>
         </div>
    </a>`)
            moviesElement.addEventListener("click", renderMovieTheater);
        movieholder.appendChild(moviesElement);
    });
    loader.remove(); // removing loader after fetching the data

    mainElement.appendChild(movieholder);
}
// removing loader after fetching the data

const loader = convertToHtmlDom(`<div class="Loader"> Loading...........</div>`)
rendermoovielist(); 
