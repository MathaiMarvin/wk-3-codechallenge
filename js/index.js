//displaying the first movie

//Declaring variables
let moviesUrl ="http://localhost:3000/films"



document.addEventListener('DOMContentLoaded', () =>{


    //Creating first movie constituents
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
            const tickets = `Available Tickets: ${movieData.capacity-movieData.tickets_sold}`
            const description = `Description: ${movieData.description}`

            const firstMovieNow = firstMovie(poster, title, runtime, showtime, tickets, description)
            const oneMovie= document.getElementById('first-movie-now')
            oneMovie.appendChild(firstMovieNow)
        })
}

//Loading all the movies
function loadAllMovies(){
    fetch(moviesUrl)
        .then(res => res.json())
        .then((data)=> {
            menuMovies(data)
        })
}

//Function for getting all the movie names
function menuMovies(nameMovie){
    nameMovie.forEach((element)=>{
        const movieAsNamed = document.createElement('li')

        movieAsNamed.innerText= element.title;
        let unorderedlist = document.getElementById('menu-movies');

        
        unorderedlist.appendChild(movieAsNamed).addEventListener('click', ()=>{
            
            const cardAllDiv = document.createElement('div')
            cardAllDiv.classList.add('card', 'col-12', 'px-0', 'mb-3')

            const rowAllDiv = document.createElement('div')
            rowAllDiv.classList.add('row')
    
            const imgAllDiv = document.createElement('div')
            imgAllDiv.classList.add('col-6')
            
            const bodyAllDiv = document.createElement('div')
            bodyAllDiv.classList.add('col-6','card-body')

            const movieAllPoster = document.createElement('img')
            movieAllPoster.classList.add('card-img', 'h-100')
            movieAllPoster.src = element.poster
            movieAllPoster.objectFit = 'cover'

            const movieAllTitle = document.createElement('h5')
            movieAllTitle.classList.add('card-title')
            movieAllTitle.innerText = `Movie Title: ${element.title}`

            const movieAllRuntime = document.createElement('p')
            movieAllRuntime.classList.add('card-text')
            movieAllRuntime.innerText = `Run Time: ${element.runtime} minutes`

            const movieAllShowtime = document.createElement('p')
            movieAllShowtime.classList.add('card-text')
            movieAllShowtime.innerText = `Show Time: ${element.showtime}`

            const movieAllDescription = document.createElement('p')
            movieAllDescription.classList.add('card-text')
            movieAllDescription.innerText = `Description: ${element.description}`


            const availableAllTickets = document.createElement('p')
            availableAllTickets.classList.add('card-text')
            const nowTicket = element.capacity-element.tickets_sold;
            //availableAllTickets.innerText = `Available Tickets: ${nowTicket}`


            const exitButton = document.createElement('button')
            exitButton.textContent ="Exit"
            exitButton.addEventListener('click', rem)

            
            let ticketsBought= 0;
            const movieBuyTicket = document.createElement('button')
            movieBuyTicket.classList.add('btn', 'btn-dark')
            movieBuyTicket.textContent = `Buy Tickets: ${ticketsBought}`
           
            movieBuyTicket.addEventListener('click', ()=>{
                
                    if (nowTicket>0 && ticketsBought<nowTicket){
                    ticketsBought+=1
                    
                    movieBuyTicket.textContent = `Buy Tickets: ${ticketsBought}`

                    
                }
            })

            //Appending the elements together
            //Append the body card first

            bodyAllDiv.appendChild(movieAllTitle)
            bodyAllDiv.appendChild(movieAllRuntime)
            bodyAllDiv.appendChild(movieAllShowtime)
            bodyAllDiv.appendChild(movieAllDescription)
            bodyAllDiv.appendChild(movieBuyTicket)
            bodyAllDiv.appendChild(availableAllTickets)
            bodyAllDiv.appendChild(exitButton)

            //Appending image to image div
            imgAllDiv.appendChild(movieAllPoster)

            //append Divs to row div
            rowAllDiv.appendChild(imgAllDiv)
            rowAllDiv.appendChild(bodyAllDiv)


            //appending to the card div
            cardAllDiv.appendChild(rowAllDiv)


            document.getElementById('first-movie-now').style.display='none'
            document.getElementById('movies-now').style.display = 'justify-content'

            document.getElementById('movies-now').appendChild(cardAllDiv);

            
           
            //return Card Div
             cardAllDiv
             

        })
        

     
    })

}


function rem(e){
    e.target.parentNode.remove()
    return loadFirstMovie()
}
loadAllMovies()
loadFirstMovie()

})
