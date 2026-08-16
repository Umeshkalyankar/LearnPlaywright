class Employee {

    public name: string = "Umesh";
    protected salary: number = 50000;
    private password: string = "12345";
}

class QAEngineer extends Employee {

    test(): void {

        console.log(this.name);      // ✅ public
        console.log(this.salary);    // ✅ protected
        //  console.log(this.password);  // ❌ private

    }
}

const qa = new QAEngineer();

console.log(qa.name);       // ✅ public
// console.log(qa.salary);     // ❌ protected
// console.log(qa.password);   // ❌ private