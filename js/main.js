

var cardsDiv = document.querySelector('.cards');
cardsDiv.classList.add('cards');

function create_card(list){
    list.map(item=>{
        var cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        var cardImg = document.createElement('img');
        cardImg.src = item.posterurl;
        cardImg.alt = item.title + ' img';

        var cardInfoDiv = document.createElement('div');

        var cardTitle = document.createElement('a');
        cardTitle.innerText=item.title;

        var cardYear = document.createElement('h3');
        cardYear.innerText='year: '+item.year;

        var cardRating = document.createElement('h3');
        cardRating.innerText='Rating: '+item.imdbRating;

        var cardGenres = document.createElement('p');
        cardGenres.innerText = 'Genres: '+item.genres;

        cardInfoDiv.appendChild(cardTitle);
        cardInfoDiv.appendChild(cardYear);
        cardInfoDiv.appendChild(cardRating);
        cardInfoDiv.appendChild(cardGenres);

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardInfoDiv);

        cardsDiv.appendChild(cardDiv);
    })

}
create_card(movies);

var buttons = document.querySelectorAll('button');

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        cardsDiv.innerHTML='';
        var res = [];
        for(let j=0; j<movies.length; j++){
            if(movies[j].genres.includes(buttons[i].innerText)){
                res.push(movies[j]);
            }
        }
        create_card(res);
    })
}

function search(){
    document.querySelector('.search-input').addEventListener('keyup', (e)=>{
        var seachvalue = e.target.value;
        console.log(e);
        var searchres = [];
        cardsDiv.innerHTML='';
        for(let i=0; i<movies.length; i++){
            if(movies[i].title.toLowerCase().includes(seachvalue.toLowerCase())){
                searchres.push(movies[i]);
            }
        }
        create_card(searchres);
    })
}

search();
