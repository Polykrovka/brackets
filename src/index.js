module.exports = function check(str, bracketsConfig) {
    let strSplit = str.split('');

    let firstBracket = strSplit[0];
    let secondBracket = 1;
    let internalCheck = [];
    do{
      if(compatibility(firstBracket, strSplit[secondBracket], bracketsConfig)){

        
        internalCheck =  strSplit.slice(1, secondBracket);
        while(internalCheck.includes(firstBracket)){
          internalCheck.splice(internalCheck.indexOf(firstBracket))
        }
        if(internalCheck.length % 2 !== 0){
          return false;
        } else if (internalCheck.length > 0){
          if(!check(internalCheck.join(''), bracketsConfig)){
            return false;
          }
        }    

        strSplit.splice(0, 1);
        strSplit.splice(secondBracket - 1, 1);
        secondBracket = 1
        firstBracket = strSplit[0];
      } else {
        secondBracket += 1;
        if(secondBracket >= strSplit.length){
          return false;
        }
      }
    } while(strSplit.length > 0);
    return true;
  
    function compatibility(open, close, bracketsConfig){
      let trueOrFalse = false
      bracketsConfig.forEach(function(bracket){
        if(open == bracket[0] && bracket[1] == close){
          trueOrFalse = true;
        }
      });
      return trueOrFalse;
    }
  
}
