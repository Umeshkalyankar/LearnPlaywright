// A switch statement is used when you have many fixed values to check.
// Instead of writing multiple if...else if, you can use switch.
// A switch statement is used to execute different blocks of code based on matching a value with multiple fixed cases.
// break - is needed to stop further execution

let day = 2;
switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}