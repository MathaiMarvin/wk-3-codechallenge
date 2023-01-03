//Declaring variables
const moviesUrl = 'https://mathaimarvin.github.io/server/db.json'

const moviesList = document.getElementById('movies-now');
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementsByClassName('movies-listed')[0].remove()
    getMovies()
    loadFirstMovie()
})

//Function that displays the movies gotten from the json file

const getMovies = ()=>{
    fetch(moviesUrl)
        .then(response => response.json())
        .then((data)=>{
            showMovies(data);
            })
}

//Function that shows the title of the movies

const showMovies = (nameMovie) =>{
   
    nameMovie.films.forEach((element) =>{
        const listed = document.createElement('li');
        //listed.style.cursor = 'flex'
        listed.textContent = element.title
        moviesList.appendChild(listed)

        
    })
    handleClick()
   
}

//Adding click event

const handleClick = () =>{
    let children = moviesList.children
    for (let i=0; i<children.length; i++){
        let child = children[i]

        // adding an event listener to the child
        child.addEventListener('click', ()=>{
            fetch(`${moviesUrl}`)
                .then(res => res.json())
                .then((data) =>{
                    document.getElementById('ticket-movie-buying').textContent
                    loadingMovies(data.films[i])
                })

    document.getElementById('first-movie-now').style.display = 'none';
    document.getElementById('all-movies').removeAttribute('hidden');
    document.getElementById('all-movies').style.display = "flex";
        })
        
    }

}

//Displaying the movies
const loadingMovies = (filmsListed)=>{

    //The movie image
    const imgPoster = document.getElementById('poster')
    imgPoster.src = filmsListed.poster;
    

    //The movie Title
    const titleMovie = document.getElementById('movie-card-title');
    titleMovie.textContent = `Title of Movie: ${filmsListed.title}`;

    //The movies runtime
    const runtimeMovie = document.getElementById('movie-card-runtime');
    runtimeMovie.textContent =  `Runtime: ${filmsListed.runtime} Minutes`;

    //Movie description
    const descriptionMovies = document.getElementById('movie-info');
    descriptionMovies.textContent = `Description: ${filmsListed.description}`;

    //Showtime
    const movieShowtime = document.getElementById('showtime-movie');
    movieShowtime.textContent = `Showtime: ${filmsListed.showtime}`;

    //Available Tickets of the movies 
    const moviesListTickets = document.getElementById('remaining-tickets')
    moviesListTickets.textContent = `Available Tickets: ${filmsListed.capacity-filmsListed.tickets_sold}`;


}



//Loading first MOvie constituents

function loadFirstMovie(){

    fetch (moviesUrl)
        .then(response => response.json())
        .then((data)=>{
            const movieData = data.films[0]
            const poster = movieData.poster
            const title = `Movie Title: ${movieData.title}`
            const runtime = `Runtime: ${movieData.runtime} minutes`
            const showtime =`Showtime: ${movieData.showtime}`
            const tickets = `Available Tickets: ${movieData.capacity-movieData.tickets_sold}`
            const description = `Description: ${movieData.description}`

            const firstMovieNow = firstMovie(poster, title, runtime, showtime, tickets, description)
            const oneMovie= document.getElementById('first-movie-now')
            oneMovie.appendChild(firstMovieNow)
        })
}

//Displaying first Movie
function firstMovie(poster, title, runtime, showtime, tickets, description){

            const cardDiv = document.createElement('div')
            cardDiv.classList.add('card', 'col-12', 'px-0', 'mb-3')
    
            const rowDiv = document.createElement('div')
            rowDiv.classList.add('row')
    
            const imgDiv = document.createElement('div')
            imgDiv.classList.add('col-6')
            
    
            const bodyDiv = document.createElement('div')
            bodyDiv.classList.add('col-6','card-body')
    
            const moviePoster = document.createElement('img')
            moviePoster.classList.add('card-img', 'h-100')
            moviePoster.src = poster
            moviePoster.objectFit = 'cover'
    
            const movieTitle = document.createElement('h5')
            movieTitle.classList.add('card-title')
            movieTitle.innerText = title
    
            const movieRuntime = document.createElement('p')
            movieRuntime.classList.add('card-text')
            movieRuntime.innerText = runtime
    
            const movieShowtime = document.createElement('p')
            movieShowtime.classList.add('card-text')
            movieShowtime.innerText = showtime
    
            const availableTickets = document.createElement('p')
            availableTickets.classList.add('card-text')
            availableTickets.innerText = tickets
    
            const movieDescription = document.createElement('p')
            movieDescription.classList.add('card-text')
            movieDescription.innerText = description
    
    
            //Appending the elements together
            //Append the body card first
    
            bodyDiv.appendChild(movieTitle)
            bodyDiv.appendChild(movieRuntime)
            bodyDiv.appendChild(movieShowtime)
            bodyDiv.appendChild(movieDescription)
            bodyDiv.appendChild(availableTickets)
    
            //Appending image to image div
            imgDiv.appendChild(moviePoster)
    
            //append Divs to row div
            rowDiv.appendChild(imgDiv)
            rowDiv.appendChild(bodyDiv)
    
    
            //appending to the card div
            cardDiv.appendChild(rowDiv)
    
    
            //return the cardDiv
            return cardDiv
            
    
        }


//The sold out tickets
const btnClick = document.getElementById('ticket-movie-buying')
btnClick.addEventListener('click', ()=>{

           
            let tickets = document.getElementById('remaining-tickets')
            
            let currentTickets = parseInt(tickets.textContent.split('')[0]);
            
            if(currentTickets > 0){

                const newTicketCount = currentTickets -1;

                //Updating in span
                tickets.textContent = `${newTicketCount}`;
            }
            else if(parseInt(tickets, 10)===0){
                btnClick.textContent = 'Sold Out'
            }
     })
