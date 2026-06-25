let loginPage = {
    username: "admin",
    password: "12345",

    login(browser) {
        console.log(this.username + " login on " + browser);
    }
};
loginPage.login("Chrome");