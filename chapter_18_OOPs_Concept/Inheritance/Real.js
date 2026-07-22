// Parent Class
class BasePage {

    constructor(page) {
        this.page = page;
    }
    async takeScreenshot() {
        console.log("Screenshot Taken");
    }

}

// Child Class
class LoginPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async login() {
        console.log("Login Successful");
    }

}

let loginPage = new LoginPage(page);

// Inherited Method
loginPage.takeScreenshot();

// Child Method
loginPage.login();