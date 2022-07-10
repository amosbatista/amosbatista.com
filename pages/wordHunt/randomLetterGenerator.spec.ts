import randomLetterGenerator from './randomLetterGenerator';

describe('random letter generator', ()=> {

  it('must return a random letter', () => {
    console.log(randomLetterGenerator())
    expect(randomLetterGenerator()).toBeTruthy();
  });
})