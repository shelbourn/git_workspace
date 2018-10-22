const example = "development";
process.env.NODE_ENV = example;

console.log(`${example} configuration`);

console.log("arguments: " + process.argv.slice(2));

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
