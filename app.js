const name = 'Malik';
let years = 11;
function print(n, y) {
    console.log(`- ${n} played football for ${y} years.`);
}
print(name, years);
//////////////////////////////////////////
//Arrow functions
let printThis = phrase => console.log(phrase);
let printThis2 = (name, like) => {
    return console.log(`- ${name} likes to program, that is: ${like}`);
};
printThis('- Malik');
printThis2('Malik', true);
//////////////////////////////////////////
//Different types
let one = 'Malik';
let two = 26;
let three = 'any';
let four = ['any', 1, 'thing'];
let five = ['any', 'ol', 'thing'];
let six = [];
let seven = {};
let eight = true;
let nine = null;
let ten = undefined;
let eleven = undefined;
let twelve = null;
let user = {
    name: 'Malik',
    age: 26,
    city: 'Saint Paul',
    state: 'MN'
};
let welcome = (user) => {
    console.log(`- Welcome ${user.name}. You are ${user.age} years old from ${user.city}, ${user.state}.`);
};
welcome(user);
class User {
    //? = optional parameter
    constructor(name, age, ethnicity, city, state) {
        this.name = name;
        this.age = age;
        this.ethnicity = ethnicity;
        this.city = city;
        this.state = state;
    }
    welcome() {
        console.log(`- Welcome ${this.name}`);
    }
    goodbye() {
        console.log(`- Goodbye ${this.name}`);
    }
    set City(value) {
        this.city = value;
    }
    get City() {
        return this.city;
    }
}
class Admin extends User {
    constructor(name, age, ethnicity, state, city) {
        super(name, age, ethnicity, state, city);
    }
    welcomeAdmin() {
        this.welcome();
    }
}
class Manager extends User {
    constructor(name, age, ethnicity, state, city) {
        super(name, age, ethnicity, state, city);
    }
    welcomeManager() {
        this.welcome();
    }
}
let newUser = new User('Glass', 26, 'American', 'Saint Paul', 'MN');
console.log(`- ${newUser.city}`);
//optional parameters missing
let newUser2 = new User('Glass', 26, 'American');
let newAdmin = new Admin('Malik', 30, 'American', 'Miami', 'FL');
let newManager = new Manager('Malik Jr.', 22, 'American', 'Fargo', 'ND');
newAdmin.welcomeAdmin();
newManager.welcomeManager();
