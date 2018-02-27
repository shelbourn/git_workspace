//Challenge: Using Map With Arrays II

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];
modifiedNames.map (function (arrayCell) {
  alert ("Yo, " + arrayCell + "!");
}
                   );

//Challenge: Expressions Inside Arrays

var puzzlers = [
  
    //Function 1
    function (input) {
      return (3 * input) - 8;
    },
    
    //Function 2
    function (input) {
      return (input + 2) * (input + 2) * (input + 2);
    },
    
    //Function 3
    function (input) {
      return (input * input) - 9;
    },
    
    //Function 4
    function (input) {
      return input % 4;
    }
    ];

    //Challenge: Choose Their Own Adventure

    function adventureSelector(userChoice) {
        // return anonymous functions inside conditional blocks
        
        //Function 1
        if (userChoice == 1) {
          return function() {
            alert ("You selected the Vines of Doom!");
          };
        }
            
        //Function 2
        else if (userChoice == 2) {
          return function() {
            alert ("Looks like you want the Lake of Despair!");
          };
        }
        
        //Function 3
          else {
            return function() {
              alert ("The Caves of Catastrophe!");
            };
          }
      }

      //Challenge: Queue Builder [THIS WAS A TOUGH ONE]

      var puzzlers = [
        function(a) { return 8 * a - 10; },
        function(a) { return (a - 3) * (a - 3) * (a - 3); },
        function(a) { return a * a + 4; },
        function(a) { return a % 5; }
      ];
      var start = 2;
      
      // build applyAndEmpty function expression here
      var applyAndEmpty = function(input, queue) {
      var length = queue.length;
      for (var i = 0; i < length; i++) {
        input = queue.shift()(input);
      }
        return input;
      };
      alert(applyAndEmpty(start, puzzlers));

      //Challenge: Immediately-Invoked Puzzler
      //This one was tricky too. You have to think in reverse and break down the code into small chunks to make it more manageable.

      var puzzlers = [
        function(a) { return 8 * a - 10; },
        function(a) { return (a - 3) * (a - 3) * (a - 3); },
        function(a) { return a * a + 4; },
        function(a) { return a % 5; }
      ];
      
      //Alert using one line of code
      //puzzlers[3](9)
      //puzzlers[1](3)
      //puzzlers[puzzlers[1](3)](puzzlers[3](9))
      alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
      