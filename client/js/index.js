const array = [1, 2, 3];

let example = "Showing this string in the console! Matt YOU BITCH!";

console.log(array[0], example);

//Question for Nick
let question =
  "How do I load a JS file into a browser so I can view the output of the JS code?";

console.log(array[1], question);

const answer = `One of two ways. Either post your code in the index.js file. 
Or create another js file and referrance it in the index.html
<script src="js/bitchFace.js"></script>
*Best idea becuase that is what you'll be doing on the job.*
Or just copy and paste it into your browser console. Browsers can read javascript natively.`;

console.log(array[2], answer);

//================ BEGIN: Code School =======================================================================================

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

//First 4 Generators
//62 MW Each
//While Loop

while (currentGen <= 4) {
  totalMW += 62;
  console.log(
    `Generator # ${currentGen} is on, adding 62 MW, for a total of ${totalMW} MW!`
  );
  currentGen++;
}

//Second 15 Generators
//124 MW Each
//For Loop

for (totalMW += 124; currentGen <= totalGen; currentGen++) {
  console.log(
    `Generator # ${currentGen} is on, adding 124 MW, for a total of ${totalMW} MW!`
  );
  totalMW += 124;
}
