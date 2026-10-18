import formatCurrency, {
    add,
    capitalize,
    APP_VERSION
} from "./utils.js";

console.log("Addition:", add(10, 5));
console.log("Capitalized:", capitalize("javascript"));
console.log("App version:", APP_VERSION);
console.log("Formatted currency:", formatCurrency(45000));


// 1. Arrow functions
const square = (n) => n * n;
const greet = (name) => `Hello, ${name}!`;
const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) =>
    `${firstName} ${lastName}`;

console.log(square(4));
console.log(greet("PJ Star"));
console.log(multiply(3, 5));
console.log(getFullName("Raymond", "Ehi"));

// 2. Destructuring
const student = {
    name: "Amaka",
    age: 22,
    course: "Frontend Development",
    city: "Abuja"
};

const scores = [88, 72, 95, 60, 45];

const { name, course, age: studentAge } = student;
const [firstScore, secondScore] = scores;

console.log(name);
console.log(course);
console.log(studentAge);
console.log(firstScore);
console.log(secondScore);

// 3. Spread syntax
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const fullStack = [...frontend, ...backend];

console.log("Full stack:", fullStack);

const userProfile = {
    username: "coder_ade",
    email: "ade@example.com"
};

const updatedProfile = {
    ...userProfile,
    email: "newemail@example.com"
};

console.log("Original profile:", userProfile);
console.log("Updated profile:", updatedProfile);

// 4. Template literals
const personName = "Fatima";
const age = 24;

const intro = `My name is ${personName} and I am ${age} years old.`;

console.log(intro);

const width = 8;
const height = 5;
const area = width * height;

console.log(`The area of the rectangle is ${area}`);

// 5. Array methods: map() and filter()
const products = [
    { name: "Laptop", price: 450000, inStock: true },
    { name: "Mouse", price: 8000, inStock: true },
    { name: "Monitor", price: 120000, inStock: false },
    { name: "Keyboard", price: 15000, inStock: true },
];

// Get product names
const productNames = products.map((product) => product.name);
console.log("Product names:", productNames);

// Get products currently in stock
const availableProducts = products.filter((product) => product.inStock);
console.log("Available products:", availableProducts);

// Get uppercase names of products in stock
const availableProductNames = products
    .filter((product) => product.inStock)
    .map((product) => product.name.toUpperCase());

console.log("Available product names:", availableProductNames);

// 6. Ternary and logical operators
const role = "editor";
const cartItems = 0;

const access =
    role === "admin" ? "Full Access" :
    role === "editor" ? "Edit Access" :
    role === "viewer" ? "Read Only" :
    "No Access";

console.log("Access:", access);

// Logical AND short-circuits and returns the first falsy value.
// Since cartItems is 0, this expression returns 0, not false.
console.log("Original cart check:", cartItems && "View Cart");

// Only show "View Cart" when there are items.
console.log("Fixed cart check:", cartItems > 0 && "View Cart");
