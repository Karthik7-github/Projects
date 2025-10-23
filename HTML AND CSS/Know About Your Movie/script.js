let moviename = document.querySelector(".search-bar");
let searchbtn = document.querySelector(".button-box");
let result = document.querySelector(".result");
let key = "c79b9958"; // Replace with your key
let Poster = document.querySelector(".Poster");


let getmovie = () => {
  let movie = moviename.value.trim();
  let url = `https://www.omdbapi.com/?t=${movie}&apikey=${key}`;

  if (movie.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter a Movie Name</h3>`;
  } else {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        let genres = data.Genre ? data.Genre.split(", ") : [];
        let actors = data.Actors ? data.Actors.split(", ") : [];
        let rating = data.Ratings && data.Ratings[0] ? data.Ratings[0].Value : "N/A";
        console.log(data);
        // Assuming `data.Poster` contains something like "poster.jpg" or a full URL
        document.getElementById("poster").src = data.Poster;


        result.innerHTML = `
        <div class="mname-rating">
            <h2 class="title">${data.Title}</h2>
            <h2 class="rating">Rating : ${rating}</h2>
        </div>
        <div class="time-date-ua">
          <h4> Rated : ${data.Rated}</h4>
          <h4>Released : ${data.Released}</h4>
          <h4>Runtime : ${data.Runtime}</h4>
        </div>
        <div class="genres">
            <h3>${genres[0]}</h3>
            <h3>${genres[1]}</h3>
             <h3>${genres[2]}</h3>
        </div>
        <div class="collect-dir">
            <h3>Box Office Collection : ${data.BoxOffice}</h3>
        </div>
        <div class="plot-cast">
          <p><strong>Awards :</strong> ${data.Awards}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Cast:</strong> ${actors.join(", ")}</p>
        </div>`;
      });
  }
};

// Run once page loads
window.addEventListener("load", getmovie);

// Run when button clicked
searchbtn.addEventListener("click", getmovie);


//${genres.map(g => `<h3>${g}</h3>`).join("")}