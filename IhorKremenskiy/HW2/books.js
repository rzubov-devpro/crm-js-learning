
let bookName = prompt("Please enter a book name"); // Asking a user to enter a book name
let bookAuthor = prompt("Please enter a book author"); // Asking a user to enter a book author
let bookYear = prompt("Please enter a book publication year"); // Asking a user to enter a book publication year
let bookPages = prompt("Please enter a book pages count"); // Asking a user to enter a book pages count



// When all questions answered, the user should be asked to _confirm_ book save:
// - Would you like to add "%bookName%" to the library?
// If the user chooses "OK" he should be notified with the message:
// - "%bookName%" by  %bookAuthor% successfully saved to the library!
// (example: "The Adventures of Tom Sawyer" by Mark Twain successfully saved to the library!)


// If the user chooses "Cancel" program should stop.

if (confirm (`Would you like to add ${bookName} to the library?`)){
    alert (`${bookName} by ${bookAuthor} successfully saved to the library`)

} else close
   // The *bookManager* function should _return_ an object with all data collected and some functions implemented, object structure should be like:
// {
//   name:"",
//   author:"",
//   plublication_year:"",
//   pages_count:"",
//   getBookSize:function(){},
//   getPublicationCentury:function(){}

// }
function bookManager(){
    return {
        name: `${bookName}`,
        author: `${bookAuthor}`,
        publication_year: bookYear,
        pages_count: bookPages,
        getBookSize: function (){
            if (pages_count < 101){
                return 'S';
            } else if (pages_count < 251 && pages_count >= 101) {
                return 'M';
            } else if (pages_count < 501 && pages_count >= 251) {
                return 'L';
            } else  {
                return 'XL';
            }


        },
        getPublicationCentury: function (){
            if (publication_year >= 2000 ){
                return '21st century';
            } else if (publication_year > 2000 && publication_year >= 1900) {
                return '20th century';
            } else if (publication_year > 1900 && publication_year >= 1800) {
                return '19th century';
            }  else if (publication_year > 1800 && publication_year >= 1700) {
                return '18th century';
            }   else if (publication_year > 1700 && publication_year >= 1600) {
                return '17th century';
            }   else if (publication_year > 1600 && publication_year >= 1500) {
                return '16th century';
            }   else if (publication_year > 1500 && publication_year >= 1400) {
                return '15th century';
            } else  {
                return 'Antique book';
            }
        },
    }

};

console.log (bookManager.getBookSize());

// getBookSize - should _return_ S,M,L or XL depending on pages_count. S - less than 101 pages, M - less than 251 pages, L - less than 501 pages, XL - more than 500 pages
// getPublicationCentury - should return book publication century based on book publication year.

// There is an example of how *bookManager* should work:

// let book = bookManager();
// book.getBookSize();

// *ADDITIONAL TASK*
// Please extend book object with extra property bookmarks, which equal to empty array by default, implement 2 extra functions: addBookmark, removeBookmark.
// Both functions should take single argument - pageNumber.

// addBookmark - should check if pageNumber less or equal to pages_count, otherwise should alert a validation message.
//  Should check if bookmark is unique, otherwise should return a validation message. If all validations is OK bookmark should be added to the bookmarks array.
 
// removeBookmark - should remove bookmark from bookmarks array if exists, otherwise should return a validation message.


