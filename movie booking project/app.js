import { fetchMovieAvailability, fetchMovieList } from "./api.js";

// selectors

const mainElement = document.querySelector("main")
const bookerElement = document.querySelector("#booker")
const bookerGridElement = document.querySelector("#booker-grid-holder")

// fetch list of all movies
// shows a loader till fetching of movies is going on...
// display data
// remove loader 

 
// task : convert html string to html DOM Elememt

const convertToHtmlDom = (HtmlStringFormat) => {
    const element = document.createElement('div');
    element.innerHTML = HtmlStringFormat;
    return element.firstElementChild;
}

const renderTheaterLayout = (seatNooffset = 1) =>{

    // make a grid of 4/3
    const grid = convertToHtmlDom(`<div class="booking-grid"></div>`)

    // insert grid elements basically theatre seats
    let theatreseats = "";

    for(let i =0; i<12; i++){
        theatreseats = theatreseats + `<div class="grid-cell seat${i+seatNooffset}">${i+seatNooffset}</div>`;
    }
    grid.innerHTML = theatreseats;
    bookerGridElement.appendChild(grid)
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
    
   
    // render theater layout view
    renderTheaterLayout();
    renderTheaterLayout(13);
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