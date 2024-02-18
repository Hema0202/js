class Employee {
    #fname = 'Rakesh';
    lname = 'Pandey';
    age = 30;

    // constructor() {
    //     console.log('Employee is created');
    // }

    printFname() {
        console.log(this.#fname);
    }

    getFname() {
        return this.#fname;
    }

    setFname(newName) {
        this.#fname = newName;
    }

    // getFullName(){
    //     console.log(`${this.fname} ${this.lname}`);
    // }

}


// let emp1 = new Employee();

// console.log(emp1.#fname);
// console.log(emp1.lname);
// console.log(emp1.age);
// emp1.getFullName();
// emp1.printFname();

// let emp1Name = emp1.getFname();

// emp1.lname = 'lohana';

// console.log(emp1.lname);

// console.log(emp1Name);

// class -> methods + properties

// emp1.constructor(); // Class constructor Employee cannot be invoked without 'new'

// emp1.setFname('Hema');

// emp1.printFname();

// class CreateEmployee extends Employee {
//     setFname() {
//         return;
//     }
// }

// let emp2 = new CreateEmployee();

// emp2.printFname();

// emp2.setFname('Hema');

// emp2.printFname();

// function Person() {
//     this.gender = "Male";
//     this.name = 'rahul';
// }

// let p1 = new Person();
// console.log(p1.name);