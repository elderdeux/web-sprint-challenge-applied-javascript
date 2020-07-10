// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.



const cardsContainer = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        let articles = response.data.articles;
        for(topic in articles){
            articles[topic].forEach(item => {
                let newCard = CardCreator(item);
                cardsContainer.appendChild(newCard);
            })
        }
    })
    .catch(error => {
        console.log('WOOOPS!!', error)
    })

    function CardCreator(obj) {
        // elements
        let card = document.createElement('div');
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let imgContainer = document.createElement('div');
        let img = document.createElement('img');
        let authorName = document.createElement('span');

        // classes
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        // content
        headline.textContent = obj.headline;
        img.src = obj.authorPhoto;
        authorName.textContent = `By ${obj.authorName}`;

        // append
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(authorName);
        
        return card;
    }