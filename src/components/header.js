const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.

  //define new elements
  const divV = document.createElement('div');
  const dateV = document.createElement('span');
  const h1V = document.createElement('h1');
  const tempV = document.createElement('span');

  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!

  //setup heirarchy
  divV.appendChild(dateV);
  divV.appendChild(h1V);
  divV.appendChild(tempV);

  //set class names
  divV.classList.add('header');
  dateV.classList.add('date');
  tempV.classList.add('temp');

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //set text content
  dateV.textContent = date;
  h1V.textContent = title;
  tempV.textContent = temp;
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return divV
}

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.

const headerAppender = (object) => {
  const head = document.querySelector('.header-container');
  head.appendChild(Header(object.title, object.date, object.temp));
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  return head
  }

console.log(headerAppender)



export { Header, headerAppender }
