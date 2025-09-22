import { fetchMovieAvailability, fetchMovieList } from "./api.js";

// selectors

const mainElement = document.querySelector("main")
// fetch list of all movies
// shows a loader till fetching of movies is going on...
// display data
// remove loader 


// task : conver html string to html DOM Elememt

const convertToHtmlDom = (HtmlStringFormat) => {
    const element = document.createElement('div');
    element.innerHTML = HtmlStringFormat;
    return element.firstElementChild;
}

const renderMovieTheater = (event)=>{
    event.preventDefault();

const movieNAme = event.target.innerText ? event.target.innerText : event.target.parentElement.innerText;
console.log(movieNAme)
fetchMovieAvailability(movieNAme).then((result) => {
    console.log(result);

    // make h3 element of booker div visible  
    const  bookerElementHEader = document.querySelector("#booker h3")
    bookerElementHEader.classList.toggle("v-none");       
    
    // rough work 
   // const grid = convertToHtmlDom(`<div class="grid-element"</div>`)
 // const bookergridholder =  document.querySelector("#booker-grid-holder");
 // bookergridholder.appendChild(grid)
});

}

const rendermoovielist = async () => {
    mainElement.appendChild(loader) // adding loader before making appi call
    const movielist = await fetchMovieList();
    console.log(movielist)

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