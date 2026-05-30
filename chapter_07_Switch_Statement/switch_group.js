let browser = "safari";

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("Chromium Project!");
        break;

    case "firefox":
        console.log("Mozila Project!");
        break;

    case "safari":
        console.log("Apple Project!");
        break;

    default:
        console.log("No browser match - Manual Testing needed");

}