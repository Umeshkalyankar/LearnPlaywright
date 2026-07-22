// static variable / methods belongs to the class
// no need to create an object to access static variable or method
// can accessed using classname

class student {

    static batch_name = "Playwright with AI";     // static variable
    static mentor_name = "Pramod";

    constructor(student_name, phone_no) {
        this.student_name = student_name;
        this.phone_no = phone_no;
    }

    static classinfo() {        // static method
        console.log("In this batch we are learning Playwright with typescript!");
    }
}

// static variable accessed without creation of object
// classname.variablename();

console.log(student.batch_name);
console.log(student.mentor_name);

student.classinfo();    // static method calling

let s1 = new student("Umesh", 9552377672);
console.log(s1);