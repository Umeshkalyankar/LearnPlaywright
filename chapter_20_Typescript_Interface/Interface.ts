// Interface sets the rules for properties which object must follow

interface Employee {
    name: string;
    id: number;
    department: String;
}
// Object creation

let employee1: Employee = {
    name: "Umesh",
    id: 101,
    department: "QA"
};
console.log(employee1.name + ": " + employee1.id + ": " + employee1.department);

let employee2: Employee = {
    name: "Tom",
    id: 102,
    department: "Dev",
};
console.log(employee2.name + ": " + employee2.id + ": " + employee2.department);

// let employee3: Employee = {
//     name: "Jim",
//     id: 103,
// }


