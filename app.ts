
//Classes w/ nheritance and Interfaces
//Classes are split into modules in /classes folder
import { Admin } from './classes/Admin';
import { Manager } from './classes/Manager';

let newAdmin = new Admin('Malik', 30, 'American', 'Miami', 'FL');
let newManager = new Manager('Malik Jr.', 22, 'American', 'Fargo', 'ND');
newAdmin.welcomeAdmin()
newManager.welcomeManager()

export { };
