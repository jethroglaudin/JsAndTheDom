const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);


// Returns one element
var books =document.querySelector('#book-list li .name');
// console.log(books)

// Returns a collection of elements
books =document.querySelectorAll('#book-list li .name');

// console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});
