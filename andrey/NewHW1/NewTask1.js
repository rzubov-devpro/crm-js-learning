function bookManager() {
    let bookName = window.prompt ('Please, enter a book name: ');
    let bookAuthor = window.prompt ('Pleas, enter a book author: ');
    let bookYear = window.prompt ('Please enter a book publication year: ');
    let pageCount = window.prompt ('Please enter a book pages count: ');

    if (window.confirm (`Would you like to add ${bookName} to the library ? `)) {
        window.alert(`${bookName} by ${bookAuthor} successfully saved to the library!`)
    }
    else {
        return;
        }

    return {
        name: bookName,
        author: bookAuthor,
        publication_year: bookYear,
        pages_count: pageCount,
        getBookSize: function() {
            if (this.pages_count < 101) {
                 return "Small Size";
            } else if (this.pages_count < 251) {
                return "Medium Size";
            } else if (this.pages_count < 501) {
                return "Large Size";
            }
                else {
                    return "XLarge Size";
                }
        },
        getPublicationCenturyy: function(){
            return publication_century = (this.publication_year - (this.publication_year % 100) / 100 + 1);
            
            //if (bookYear < 0){
              //  this.publication_year = "Before our domination"
            //} else if (bookYear <=1000){
              //  this.publication_year = "Very Old Book"
            //} else if (1000 < bookYear < 2000) {
              //  this.publication_year = "So Old Book"
            //} else  this.publication_year = "Normal Fresh book"
        },

    }    
};

let book = bookManager();
book.getBookSize();
console.log(bookManager());




