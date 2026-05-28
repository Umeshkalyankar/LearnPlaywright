// if ("hello") console.log("String is truthy"); // it can be used - truthy condition

// if (33) console.log("Number is truthy");

// if ({}) console.log("Empty object is truthy");

// if ([]) console.log("Empty Array is truthy");


if ("") console.log("Won't print");
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");

//ex.
let name = undefined;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye!");
}
