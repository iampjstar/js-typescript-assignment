// 1. Basic types
let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Fix the type mismatch
// Originally, courseName was declared as a number but given a string.
let courseName: string = "Frontend Development";

console.log(studentName, studentAge, isEnrolled, courseName);

// 2. Typed functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

function isAdult(age: number): boolean {
    return age >= 18;
}

function getArea(width: number, height: number): number {
    return width * height;
}

console.log("Sum:", addNumbers(10, 5));
console.log("Is adult:", isAdult(21));
console.log("Area:", getArea(8, 5));

// 3. Interfaces

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    isActive: boolean;
}

const studentOne: Student = {
    id: 1,
    name: "Amaka",
    age: 22,
    course: "Frontend Development",
    isActive: true
};

const studentTwo: Student = {
    id: 2,
    name: "Tunde",
    age: 21,
    course: "Frontend Development",
    isActive: false
};

console.log("Students:", studentOne, studentTwo);

interface Instructor {
    name: string;
    cohort: number;
    subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
    return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor: Instructor = {
    name: "Stanley",
    cohort: 8,
    subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor));

// 4. Typed arrays
let names: string[] = ["Ada", "Bola", "Chidi"];
let scores: number[] = [78, 90, 55, 88];

console.log("Names:", names);
console.log("Scores:", scores);

// Union types
function formatId(id: string | number): string {
    return String(id);
}

console.log("Numeric ID:", formatId(42));
console.log("Text ID:", formatId("abc"));
