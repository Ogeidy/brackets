module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];

  for (let currentBracket of str) {
    for (let confRow = 0; confRow < bracketsConfig.length; confRow++) {
      if (currentBracket == bracketsConfig[confRow][0]) {

        if (bracketsConfig[confRow][0] == bracketsConfig[confRow][1]) {
          let popConfRow = bracketsStack[bracketsStack.length-1];
          if (popConfRow != confRow) {
            bracketsStack.push(confRow);
          } else {
            bracketsStack.pop();
          }
        } else {
          bracketsStack.push(confRow);
        }

      } else if (currentBracket == bracketsConfig[confRow][1]) {

        let popConfRow = bracketsStack.pop();
        if (popConfRow != confRow) {
          return false;
        }

      }
    }
  }

  if (bracketsStack.length > 0) {
    return false;
  }
  
  return true;
}
