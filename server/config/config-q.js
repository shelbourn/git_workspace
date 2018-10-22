const example = "stage";
process.env.NODE_ENV = example;

console.log(`${example} configuration`);

console.log({ myVar: process.env.yarn_config_myVar });

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
