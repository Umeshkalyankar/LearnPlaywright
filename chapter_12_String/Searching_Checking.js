let url = "https://staging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("staging"));  // treu  - case sensitive 
console.log(url.includes("production")); // false

// startsWith / endsWith
console.log(url.startsWith("https"));  // true
console.log(url.startsWith("http://")) // false
console.log(url.endsWith("true")); // true
console.log(url.endsWith(".com")); // false

// indexOf / lastIndexOf
console.log(url.indexOf("a"));  // index of 1st matching char.
console.log(url.lastIndexOf("a")); // starts with end

console.log(url.indexOf("z")); // if not found > -1

// search
console.log(url.search(/login/));  //regex - regular expression