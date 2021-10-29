const Card = ({headline, authorPhoto, authorName}) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.

  // define new elements
    const cardV = document.createElement('div');
    const headlineV = document.createElement('div');
    const authorV = document.createElement('div');
    const containerV = document.createElement('div');
    const imgV = document.createElement('img');
    const nameV = document.createElement('span');

  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // setup heirarchy of elemen
  cardV.appendChild(headlineV);
  cardV.appendChild(authorV);
  authorV.appendChild(containerV);
  containerV.appendChild(imgV);
  containerV.appendChild(nameV);

  // set class names
  cardV.classList.add('card');
  headlineV.classList.add('headline');
  authorV.classList.add('author');
  containerV.classList.add('img-container');

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // set text content
  headlineV.textContent = headline;
  nameV.textContent = authorName;
  imgV.src = authorPhoto;

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //add event listner
  cardV.addEventListener('click', () => {
    console.log(headlineV);
  })
  return cardV;
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
