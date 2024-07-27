class Library {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

class Book extends Library {
    constructor(title, author, pageNumber, datePublished){
        super(title, author);
        this.pageNumber = pageNumber;
        this.datePublished = datePublished;
    }

    pagesAndDate() {
        return `The book ${this.title} by ${this.author} has ${this.pageNumber} pages and it was published ${this.datePublished}`
    };
};

class Magazine extends Library {
    constructor(title, author, type, celebrity) {
        super(title, author);
        this.type = type;
        this.celeberity = celebrity;
    }

    showDetails() {
        return `The magazine ${this.title} by ${this.author} is a ${this.type}-type magazine and includes ${this.celeberity}`;
    };
};

const newBook = new Book('IT', 'Stephen King', '1473', 1978);
console.log(newBook.pagesAndDate());

const newMagazine = new Magazine('F1', 'Martin Brundle', 'Motorsport', 'Lewis Hamilton');
console.log(newMagazine.showDetails());