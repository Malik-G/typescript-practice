import { User } from './User';

export class Manager extends User {
	constructor(name, age, ethnicity, state, city) {
		super(name, age, ethnicity, state, city);
	}

	welcomeManager() {
		this.welcome()
	}
}

export { }