const wordSearch = (letters, word) => { 
    if (! horizontalSearch(letters, word)) {
        if (! horizontalSearch(backwards(letters), word)) {
            if (! horizontalSearch(transpose(letters), word)) return false;
            return true;
        } return true;
    } return true;
}

// const diagonalArray = (letters) => {
//     let array = [[]];
//     for (let i = 0; )
// }

const horizontalSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (l of horizontalJoin) {
        //console.log(l)
        if (l.includes(word)) return true
    }
    return false;
}

const backwards = (letters) => {
    const backwardsJoin = letters.map(ls => ls.reverse());
    return backwardsJoin;
}

const transpose = function(matrix) {
  let array = [[]];
  // loop from 0 -> row length
  for (let i = 0; i < matrix[0].length; i++) {
    array[i] = [];
    // loop for 0 -> column length
    for (let j = 0; j < matrix.length; j++) {
      array[i][j] = matrix[j][i];
    }
  }
  return array;
};

const result = wordSearch([
    ["1", "O", "O", "O"],
    ["0", "", "O", "O"],
    ["x", "O", "O", "O"],
    ["3", "O", "O", "O"],
  ], '1O')

  console.log(result);


module.exports = wordSearch 