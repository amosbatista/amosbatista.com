export default class {

  constructor(
    private randomGenerator: any
  ) {}

  generate(limit = 50):Array<string> {
    const theList = new Array<string>();

    for(var lettersToAdd = 0; lettersToAdd < limit; lettersToAdd++){
      theList.push(this.randomGenerator());
    }

    return theList;
  }
}