const url= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
var quoteContainer = document.querySelector('#text');
var authorContainer = document.querySelector('#author');
var body

const setColors = () => {
    var setBg = document.getElementsByClassName('randomBg');
    var setCol = document.getElementsByClassName('randomCol');
    let randomizer = Math.floor(Math.random()*16777215).toString(16) ;
    for(let i=0; i<setBg.length; i++) {
        setBg[i].style.backgroundColor = '#'+randomizer;
        setCol[i].style.color = '#'+randomizer;
    }

}

function newQuote() {
    let randomizer = Math.floor(Math.random() * 100);

    fetch(url)
    .then(response=> response.json())
    .then(data =>{ 
        let quote = data.quotes[randomizer]
        quoteContainer.innerHTML=quote.quote;
        authorContainer.innerHTML=quote.author;
    }
    )
    setColors();
}

const button = document.querySelector('#new-quote');
button.addEventListener('click', newQuote);
newQuote();
setColors();