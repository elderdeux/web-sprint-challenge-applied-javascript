/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
  
var references = ["./assets/carousel/computer.jpeg",
                  "./assets/carousel/mountains.jpeg",
                  "./assets/carousel/trees.jpeg",
                  "./assets/carousel/turntable.jpeg"];
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const articles = response.data.articles;
      for(var value in articles){
          articles[value].forEach(article => {
              references.push(article.authorPhoto);
          });
      }

      document.querySelector('.carousel-container').appendChild(createCarousel(references));
  })
  .catch(error => {
      alert('Oops Probably another bug :/.');
      console.log(error);
  });

function createCarousel(imageSources){
  //create elements
  const length = imageSources.length;
  let index = 0;
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');

  carousel.appendChild(leftButton);

  imageSources.forEach(source => {
    let image = document.createElement('img');
    image.src = source;
    carousel.appendChild(image);
  });
  const rightButton = document.createElement('div');
  carousel.appendChild(rightButton);

  //add classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //set content
  leftButton.textContent = " ← ";
  rightButton.textContent = " → ";

  carousel.querySelectorAll("img")[index].style.setProperty('display', 'block', 'important');

  leftButton.addEventListener("click", event => {
    carousel.querySelectorAll("img")[index].style.setProperty('display', 'none', 'important');
    
    index = (index != 0) ? index - 1 : length - 1;

    carousel.querySelector('.right-button').style['background-color'] = "#333";
    
    carousel.querySelectorAll("img")[index].style.setProperty('display', 'block', 'center', 'important');
  });

  rightButton.addEventListener("click", event => {
    carousel.querySelectorAll("img")[index].style.setProperty('display', 'none', 'important');
    index = (index != length - 1) ? index + 1 : 0; 

    carousel.querySelector('.left-button').style['background-color'] = "#333";
    
    carousel.querySelectorAll("img")[index].style.setProperty('display', 'block',  'important');
  });


  return carousel;
}
