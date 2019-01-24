
function bookManger() {
    let bookname = window.prompt ('Please, enter a book name: ');
    let bookauthor = window.prompt ('Pleas, enter a book author: ');
    let bookyear = window.prompt ('Please enter a book publication year: ');
    let pagecount = window.prompt ('Please enter a book pages count: ');

    window.confirm(`Would you like to add ${bookname} to the library ? `);
    if (window.confirm) {
        window.alert(`${bookname} by ${bookauthor} successfully saved to the library!`)
    }
    else {
        return;
        }

    book = {
        name: bookname,
        author: bookauthor,
        publication_year: bookyear,
        pages_count: pagecount,
        getBookSize: function() {
            if (pagecount < 101) {
               booksize = "Small Size"
            } else if (100 < pagecount < 251) {
               booksize = "Medium Size"
            } else if (251 < pagecount < 501) {
                booksize = "Large Size"
            }
                else booksize = "XLarge Size"
        },
        getPublicationCenturyy: function(){
            if (bookyear < 0){
                publicatiocentury = "Before our domination"
            } else if (bookyear <=1000){
                publicatiocentury = "Very Old Book"
            } else if (1000 < bookyear < 2000) {
                publicatiocentury = "So Old Book"
            } else  publicatiocentury = "Normal Fresh book"
        },

    }    
};

console.log(bookManger());
console.log(getBookSize(pagecount));
console.log(getPublicationCentury(bookyear));



