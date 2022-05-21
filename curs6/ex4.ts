// defining interface for class  
interface Person {  
    firstName: string;  
    lastName: string;  
    age?: number;  //proprietate optionala
    getSalary: (number) => number;// arrow function
    FullName();  
    GetAge();  
}  
// o clasa poate implementa mai multe interfete  
class Employee implements Person {  
    firstName: string;  
    lastName: string;  
    age:number;  
    salary:number; 
    getSalary = (salary:number):number => {
        return this.salary = salary;

    }
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
// using the class that implements interface  
let myEmployee = new Employee('Ion', 'Ion', 25);  
let fullName = myEmployee.FullName();  
let age = myEmployee.GetAge(); 
let salary =  myEmployee.getSalary(1000);
console.log("Name of Person: " +fullName + '\nAge: ' + age +' ' + salary); 