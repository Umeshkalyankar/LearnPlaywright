class Father {

    Home() {
        console.log("Father's home!");
    }

    Car() {
        console.log("Father's Car!");
    }
}

class Son extends Father {

}

let sonobj = new Son;

sonobj.Home();
sonobj.Car(); 