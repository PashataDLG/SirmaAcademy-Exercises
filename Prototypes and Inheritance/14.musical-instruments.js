class Instrument {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    play() {
        return `This ${this.name} makes a ${this.type} sound`;
    }

    tune() {
        return `${this.name} is getting tuned now`;
    }
}

class StringInstrument extends Instrument {
    constructor(name, type){
        super(name, type);
    }

    play() {
        return `The string instrument ${this.name} makes a string sound typcal for ${this.type} type`;
    }

    tune() {
        return `The ${this.name} is now tuned`;
    }

}

class PercussionInstrument extends Instrument {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        return `The percussion instrument ${this.name} make a percussion sound typical for ${this.type} type`;
    }

    tune() {
        return `The prucession instrument ${this.name} is now tuned`;
    }
  
};

const guitar = new StringInstrument('guitar', 'string');
console.log(guitar.play());
console.log(guitar.tune());

const drums = new PercussionInstrument('drums', 'percussion');
console.log(drums.play());
console.log(drums.tune());