//making this a module by using export is a way to resuse variable names, usually goes at the bottom
export { };
const name = 'Malik';
let years = 11;

function print(n: string, y: number) {
	console.log(`- ${n} played football for ${y} years.`)
}

print(name, years)

//////////////////////////////////////////

//Arrow functions
let printThis = phrase => console.log(phrase)
let printThis2 = (name: string, like: boolean) => {
	return console.log(`- ${name} likes to program, that is: ${like}`);
}

printThis('- Malik')
printThis2('Malik', true)

//////////////////////////////////////////

//Different types
let one: string = 'Malik';
let two: number = 26;
let three: any = 'any';
let four: any[] = ['any', 1, 'thing'];
let five: Array<string> = ['any', 'ol', 'thing'];
let six: Array<number> = [];
let seven: object = {};
let eight: boolean = true;
let nine: null = null;
let ten: undefined = undefined;
let eleven: void = undefined;
let twelve: void = null;

//////////////////////////////////////////

//Interfaces
//These are a good way to template and validate inputs
interface UserData {
	name: string,
	age: number,
	city: string,
	state: string
}

let user = {
	name: 'Malik',
	age: 26,
	city: 'Saint Paul',
	state: 'MN'
}

let welcome = (user: UserData) => {
	console.log(`- Welcome ${user.name}. You are ${user.age} years old from ${user.city}, ${user.state}.`)
}

welcome(user)