//Using get() and set() methods requires the `tsc --target ES2016` flag in the console when compiling
//private and protected properties do not have to be included in the interface that the class implements
//Utilize protected methods when you want to pass methods down to subclasses

interface BasicInfoInterface {
	ethnicity: string;
	city: string;
	state: string;
}

export class User implements BasicInfoInterface {
	protected name: string;
	private age: number;
	ethnicity: string;
	city: string;
	state: string;

	//? = optional parameter
	constructor(name: string, age: number, ethnicity: string, city?: string, state?: string) {
		this.name = name;
		this.age = age;
		this.ethnicity = ethnicity;
		this.city = city;
		this.state = state
	}

	protected welcome() {
		console.log(`- Welcome ${this.name}`)
	}

	goodbye() {
		console.log(`- Goodbye ${this.name}`)
	}

	set City(value: string) {
		this.city = value
	}

	get City() {
		return this.city
	}
}

export { }