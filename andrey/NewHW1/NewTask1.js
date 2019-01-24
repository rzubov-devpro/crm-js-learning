let book = function bookManger() {
    let bookName = window.prompt ('Please, enter a book name: ');
    let bookAuthor = window.prompt ('Pleas, enter a book author: ');
    let bookYear = window.prompt ('Please enter a book publication year: ');
    let pageCount = window.prompt ('Please enter a book pages count: ');

    window.confirm(`Would you like to add ${bookName} to the library ? `);
    if (window.confirm) {
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
            if (pageCount < 101) {
                this.pages_count = "Small Size"
            } else if (100 < pageCount < 251) {
                this.pages_count = "Medium Size"
            } else if (251 < pageCount < 501) {
                this.pages_count = "Large Size"
            }
                else this.pages_count = "XLarge Size"
        },
        getPublicationCenturyy: function(){
            if (bookYear < 0){
                this.publication_year = "Before our domination"
            } else if (bookYear <=1000){
                this.publication_year = "Very Old Book"
            } else if (1000 < bookYear < 2000) {
                this.publication_year = "So Old Book"
            } else  this.publication_year = "Normal Fresh book"
        },

    }    
};


console.log(bookManger());




