const login = () => {

    let user = "admin";

    return () => {
        console.log(user);
    };

};

let check = login();

check();