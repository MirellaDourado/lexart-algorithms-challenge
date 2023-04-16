const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
const generateId = () => {
  let resultID = '';
  for(let index = 0; index <= 3; index += 1){
    for(let i = 0; i <= 4; i += 1) {
      const randomPosition = Math.floor(Math.random()*characters.length);
      resultID += characters[randomPosition];
    }
    if (index === 3) return resultID;
    resultID += '-'
  }
  return resultID;
};

console.log(generateId());