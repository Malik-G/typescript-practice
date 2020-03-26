import { User } from './User';

export class Admin extends User {
	constructor(name, age, ethnicity, state, city) {
		super(name, age, ethnicity, state, city);
	}

	welcomeAdmin() {
		this.welcome()
	}
}

export { }