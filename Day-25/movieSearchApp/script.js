document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query.trim() === "") {
        alert("Please enter a movie name");
        return;
    }

    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                document.getElementById('results-container').innerHTML = `<p>${data.Error}</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayMovies(movies) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p class="movie-year">${movie.Year}</p>
                <button class="more-info-button" data-id="${movie.imdbID}">More Info</button>
            </div>
        `;
        resultsContainer.appendChild(movieElement);
    });

    document.querySelectorAll('.more-info-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const movieId = event.target.getAttribute('data-id');
            fetchMovieDetails(movieId);
        });
    });
}

function fetchMovieDetails(movieId) {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                console.error(data.Error);
            }
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    document.getElementById('modal-title').textContent = movie.Title;
    document.getElementById('modal-poster').src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
    document.getElementById('modal-plot').textContent = movie.Plot;
    document.getElementById('modal-director').textContent = movie.Director;
    document.getElementById('modal-actors').textContent = movie.Actors;

    const modal = document.getElementById('movie-modal');
    modal.style.display = 'block';

    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
