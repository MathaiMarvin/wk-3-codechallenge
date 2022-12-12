//displaying the first movie

//Declaring variables
let moviesUrl ="http://localhost:3000/films"



document.addEventListener('DOMContentLoaded', () =>{


    //Creating first movie constituents
    function firstMovie(poster, title, runtime, showtime, description){

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

        const movieDescription = document.createElement('p')
        movieDescription.classList.add('card-text')
        movieDescription.innerText = description


        //Appending the elements together
        //Append the body card first

        bodyDiv.appendChild(movieTitle)
        bodyDiv.appendChild(movieRuntime)
        bodyDiv.appendChild(movieShowtime)
        bodyDiv.appendChild(movieDescription)

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



//Loading the first movie constituents
function loadFirstMovie(){

    fetch (moviesUrl)
        .then(response => response.json())
        .then((data)=>{
            const movieData = data[0]
            const poster = movieData.poster
            const title = `Movie Title: ${movieData.title}`
            const runtime = `Runtime: ${movieData.runtime} minutes`
            const showtime =`Showtime: ${movieData.showtime}`
            const description = `Description: ${movieData.description}`

            const firstMovieNow = firstMovie(poster, title, runtime, showtime, description)
            document.getElementById('first-movie-now').appendChild(firstMovieNow)
        })
}

loadFirstMovie()

})
