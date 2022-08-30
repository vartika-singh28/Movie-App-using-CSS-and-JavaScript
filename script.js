console.log(document.querySelector('.titles').innerHTML);
	fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=1')
	.then((apidata) =>{
		return apidata.json();
	}).then((actualdata) =>{
		for(let i=0 ;i<actualdata.results.length;i++){
			console.log(actualdata.results[i].title);
			let title = actualdata.results[i].title;
			let imageUrl = " https://image.tmdb.org/t/p/original/" + actualdata.results[i].poster_path;
			let imdb = actualdata.results[i].vote_average;
			let d = actualdata.results[i].release_date;
			let summary = actualdata.results[i].overview;
			let year = d.split("-");
			let fullyear = (year[0]);
			let movie = `<div class="column">
								<div class="overlay">
    								<div class="para"><h4 class="head">SUMMARY</h4>${summary}</div>
  								</div>
								<img class="image" src="${imageUrl}">
								<h3 class="text">${title}</h3>
								<div class="word">
									<p class="year"><b>Release Year:</b>${fullyear}</p>
									<p class="rating"><b>IMDB:</b>${imdb}</p>
								</div>
						</div>`;
			document.querySelector('.titles').innerHTML += movie;
		}
	
}).catch((error) =>{
	console.log(error);
})