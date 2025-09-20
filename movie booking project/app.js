import {fetchMovieAvailability,fetchMovieList} from "./api.js";

// selectors

const mainElement = document.querySelector("main")
// fetch list of all movies
// shows a loader till fetching of movies is going on...
// display data
// remove loader 


const rendermoovielist = async()=>{
    const movielist = await fetchMovieList();
    console.log(movielist)

    const movieholder = document.createElement('div');
    movieholder.classList.add('movie-holder');

    movielist.forEach(movies => {
        const moviesElement =   ` <a class="movie-link" href="/${movies.name}">
         <div class="movie" data-id="/${movies.name}">
             <div class="movie-img-wrapper">
             </div>
             <h4>/${movies.name}</h4>
         </div>
    </a>`

    movieholder.innerHTML = moviesElement;
    });
    mainElement.appendChild(movieholder);
}

rendermoovielist();
