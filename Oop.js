// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

    function makeGame1(argument) {
         var obj = {};
           obj.upperbound= upperbound
           obj.rand=randInt(upper)
           obj.counter = 0;

    guessMyNumber =function(n){
         counter++;
             if (n > upper) {
                  return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
             } else if (n === rand) {
                  return "You guessed my number!";
      }
                       return "Nope! That wasn't it!";
    },
         giveUp = function(){
      return rand;
    },
          numOfGuesses =function(){
      return counter;
    }
    return obj ; 
  }

