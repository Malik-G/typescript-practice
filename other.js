"use strict";
exports.__esModule = true;
var name = 'Malik';
var years = 11;
function print(n, y) {
    console.log("- " + n + " played football for " + y + " years.");
}
print(name, years);
//////////////////////////////////////////
//Arrow functions
var printThis = function (phrase) { return console.log(phrase); };
var printThis2 = function (name, like) {
    return console.log("- " + name + " likes to program, that is: " + like);
};
printThis('- Malik');
printThis2('Malik', true);
//////////////////////////////////////////
//Different types
var one = 'Malik';
var two = 26;
var three = 'any';
var four = ['any', 1, 'thing'];
var five = ['any', 'ol', 'thing'];
var six = [];
var seven = {};
var eight = true;
var nine = null;
var ten = undefined;
var eleven = undefined;
var twelve = null;
var user = {
    name: 'Malik',
    age: 26,
    city: 'Saint Paul',
    state: 'MN'
};
var welcome = function (user) {
    console.log("- Welcome " + user.name + ". You are " + user.age + " years old from " + user.city + ", " + user.state + ".");
};
welcome(user);
