export const soundGeneratorPersistece = () => {
  const LOCALSTORAGE_KEY = 'amos-sound-generator';
  const TONE_ON_VALUE = 1
  return () => ({
    set: (row: number, col: number, value: number) => {
      const gameMemoryString = useCookie(LOCALSTORAGE_KEY, { default: () => '[]'}).value;

      if (!gameMemoryString) {
        useCookie(LOCALSTORAGE_KEY).value = '[]';
      }
      
      const gameMemory = typeof gameMemoryString === 'string' ? 
        JSON.parse(gameMemoryString) :
        gameMemoryString;

      const thisCellIndex = gameMemory.findIndex( (cell: { row: number, col: number}) => cell.row === row && cell.col === col);

    if(thisCellIndex > 0) {
      if (value === 0) {
        gameMemory.splice(thisCellIndex, TONE_ON_VALUE)
      }
    }
    else {
      gameMemory.push({ row, col, value: TONE_ON_VALUE})
    }

    useCookie(LOCALSTORAGE_KEY).value = JSON.stringify(gameMemory)
  }, 
  clear: () => {
    useCookie(LOCALSTORAGE_KEY).value = '[]';
  },
  get: () => {
    const gameMemoryString =useCookie(LOCALSTORAGE_KEY, { default: () => '[]'}).value

    if (!gameMemoryString || gameMemoryString?.length <= 0) {
      return []
    }
    const gameMemory = gameMemoryString 

    return gameMemory
  }});

};
