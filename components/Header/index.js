// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create elements
    let header = document.createElement('div');
    let date = document.createElement('span');
    let h1 = document.createElement('h1');
    let temp = document.createElement('span');

    // classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // content
    date.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    temp.textContent = "98°";

    // append
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    return header;
}

let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());