

const stringReverse = (s) => {
  // let splitted = s.split("").reverse().join("");
  // return splitted;

  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
};

console.log(stringReverse("1234"));
