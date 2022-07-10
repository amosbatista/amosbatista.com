import renderGenerator from './letterRenderListGenerator';

describe('letter list render generator', ()=> {

  it('must generate a list of letters to render ', () => {
    
    const letterRandomGenerator = jest.fn()
      .mockReturnValueOnce('A')
      .mockReturnValueOnce('E')
      .mockReturnValueOnce('B')
      .mockReturnValueOnce('C')

    const generator = new renderGenerator(letterRandomGenerator)
    const listSize = 4;
    const expected = generator.generate(listSize);

    expect(expected).toEqual(['A', 'E', 'B', 'C']);
  });
})