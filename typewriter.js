//For loop using setTimeout() to print out the letters of a string like a typewriter would.

const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time);
  time += 50;
};
//returns console.log() after the loop runs so that a new line is ready for input
setTimeout(() => {
  console.log();
}, time);