"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//task 2
let personalName = "Eric";
console.log(`Hello ${personalName} would you like to learn python today?`);
//task 3
let NamEs = 'Ammad Qureshi';
//in lowercase
console.log("lowercase:", NamEs.toLowerCase());
//in uppercase
console.log("uppercase:", NamEs.toUpperCase());
//title case
console.log("titlecase:", NamEs.replace(/\b\=/g, c => c.toUpperCase()));
//task 4
//Albert Eninstein once said who never made a mistake never tried anything new.
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Eninstein once said,";
console.log(author, quote);
// //Task 5
let famous_person = "Albert Einstein once said";
let mess_age = (famous_person);
console.log(mess_age, quote);
//task 6
let PersonName = "\t \n Ammad Qureshi \t \n";
console.log("Original:", PersonName);
console.log("stipped:", PersonName.trim());
//Task 7
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//Task 9
let favoriteNumber = 4;
console.log(`My Favorite Numbeer is ${favoriteNumber}.`);
// Task 10
Author: [`Ammad Qureshi`];
date: ["16 feb 2024"];
//Assigment solution
//Task11
let naMes = ["Ammad", "Humza", "Noman", "Talib"];
console.log(naMes[0]);
console.log(naMes[1]);
console.log(naMes[2]);
console.log(naMes[3]);
//Assigment Solution
//Task 12
let names = ["Ammad", "Humza", "Noman", "Talib"];
let message = "Do You like to play Cricket";
console.log(names[0], message);
console.log(names[1], message);
console.log(names[2], message);
console.log(names[3], message);
//Assigment Solution
//Task 13
let transpotation = ["HondaMotocycle.", "Audi.", "Carolla."];
transpotation.map((items) => console.log(`I would like to own a ${items}`));
//Assigment solution
//Task 14
let guest_Arr = ["Noman", "Ali", "Humza"];
guest_Arr.map((items) => console.log(`Dear ${items} , You are invited to the dinner`));
// //Assigment Solution
// //Task 15
let gues_Arr = ["Ammad", "Noman", "Ali"];
let cannot_Attend = "Ammad";
console.log((cannot_Attend), 'can not attend the dinner');
let new_Guest = "sania";
gues_Arr[gues_Arr.indexOf(cannot_Attend)] = new_Guest;
console.log(gues_Arr);
//Task 16
let guesArr = ["Ali", "Humza", "Rehan"];
let cannotAttend = "Humza";
let new_guest = "wajaht";
guesArr[guesArr.indexOf(cannotAttend)] = new_guest;
console.log(guesArr);
// part 1
guest_Arr.map((items) => console.log("Dear ${items}, i found a bigger dinner table so i am invited more peoples."));
//part 2
let guest_Beg = "khan";
guest_Arr.unshift(guest_Beg);
console.log(guest_Arr);
//part 3
let middle_Guest = "kamyab";
let middle_index = guest_Arr.length / 3;
guest_Arr.splice(middle_index, 0, middle_Guest);
console.log(guest_Arr);
//Part 4 append
guest_Arr.push("zeeshan");
console.log(guest_Arr);
//part 5
guest_Arr.map((item) => console.log(`Dear ${item}, you are invited in the more people list in dinner.`));
//Task 17
//Initiallist of guests
let guest = ["Ali", "Ammad", "Moiz", "Asif", "carry"];
//Informating that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.");
//Removing guests until only two names remail
while (guest.length > 2) {
    const removedGuest = guest.pop(); //remove the last guestfrom the list
    console.log(`sorry, ${removedGuest},you are no longer invited to dinner.`);
}
//printing invitation to the remaining two guests
guest.forEach((guests) => {
    console.log(`Dear ${guests}, You are still invited to dinner.`);
});
//Removing the list two name from the list
guest.pop();
guest.pop();
//printing the final list to conform it's empty
console.log("Final guest list:", (guest));
//Task 18
let placesTo_Visit = ["Tokyo", "pakistan", "America", "china", "japan", "Afghanistan"];
console.log("originalorder:", placesTo_Visit);
//Aphabetical order
console.log("Alphabeticalorder:", [...placesTo_Visit].sort());
//original order after sorting
console.log("original order after sorting:", [placesTo_Visit]);
//reverse alphabetical order
console.log("reverse alphabatical order:", [placesTo_Visit].sort().reverse());
//original order after reverse sorting
console.log("original order after reverse sorting:", [placesTo_Visit]);
//reversed order
placesTo_Visit.reverse();
console.log("reversed order:", [placesTo_Visit]);
//reversed order back to original order 
placesTo_Visit.reverse();
console.log("Back to original order:", [placesTo_Visit]);
//sorted in alphabetcal order
placesTo_Visit.sort();
console.log("sorted in Alphabetical order:", [placesTo_Visit]);
//sort the arry in alphabetical order
placesTo_Visit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reversed alphabetical oredr;", [placesTo_Visit]);
//Task 19 
let invitation = ["Ali", "Ammad"];
let beg_You = " people come  to  dinner";
let count_invitation = invitation.length;
console.log(count_invitation + beg_You);
let mountain = ["K2", "Nannga Parbat", "Broad Peak"];
let rivers = ["Indus River", "Chenab River", "Satlj River"];
let countries_Name = ["Pakiistan", "Iran", "China", "Afghanistan"];
let cities_Names = ["Islamabad", "Laahore", "Karachi", "Multan"];
let mother_Toungsnames = ["Sindhi", "Punjabi", "Balochi"];
console.log("List of mountain");
console.log(mountain);
console.log("List of Rivers");
console.log(rivers);
console.log("List of Countries Name");
console.log(countries_Name);
console.log("List of Cities Name");
console.log(cities_Names);
console.log("list OF Languages");
console.log(mother_Toungsnames);
// Task 21
let persons = { name: "Ammad", Gender: "male", age: 21 };
console.log(persons);
//Task 16
let guestArr = ["Alishba", "Haseeb", "Ali", "Humza"];
let canNotAttend = "Alishba";
let newguest = "Ammad";
guestArr[guestArr.indexOf(canNotAttend)] = newguest;
console.log(guestArr);
// part 1
guestArr.map((items) => console.log(`Dear ${items}, i found a bigger dinner table so i am invited more peoples.`));
//part 2
let guestBeg = "khan";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3
let middleGuest = "kamyab";
let middleindex = guestArr.length / 4;
guestArr.splice(middleindex, 0, middleGuest);
console.log(guestArr);
//Part 4 append
guestArr.push("zeeshan");
console.log(guestArr);
//part 5
guestArr.map((item) => console.log(`Dear ${item}, would you like to join me for dinner?`));
//Task 17
//Initiallist of guests
let guests = ["Ali", "Ammad", "Moiz", "Asif", "carry"];
//Informating that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.");
//Removing guests until only two names remail
while (guests.length > 2) {
    const removedGuest = guests.pop(); //remove the last guestfrom the list
    console.log(`sorry, ${removedGuest},you are no longer invited to dinner.`);
}
//printing invitation to the remaining two guests
guests.forEach((guests) => {
    console.log(`Dear ${guests}, You are still invited to dinner.`);
});
//Removing the list two name from the list
guests.pop();
guests.pop();
//printing the final list to conform it's empty
console.log("Final guest list:", guests);
// //Task 18
let placesToVisit = ["pakistan", "America", "china", "japan", "Afghanistan"];
console.log("originalorder:", placesToVisit);
//Aphabetical order
console.log("Alphabeticalorder:", [...placesToVisit].sort());
//original order after sorting
console.log("original order after sorting:", placesToVisit);
//reversed alphabetical order
console.log("reverse alphabatical order:", [...placesToVisit].sort().reverse());
//original order after reverse sorting
console.log("original order:", placesToVisit);
//reversed order
placesToVisit.reverse();
console.log("reversed order:", placesToVisit);
//reversed order back to original order 
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//sorted in alphabetcal order
placesToVisit.sort();
console.log("sorted in Alphabetical order:", placesToVisit);
//sort the arry in alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in alphabetical oredr;", placesToVisit);
//Task 19 
let invitations = ["Ali", "Ammad"];
let cont_Invitations = invitations.length;
console.log(`${cont_Invitations} people will come in to the dinner`);
//Task 20
let person = { name: "Ammad", gender: "Male", age: 21 };
console.log(person);
//Task 21
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let myArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(myArray[0]);
console.log(myArray[6]);
//Task 22
let car = "Subaru";
console.log("Is car == 'Subaru'? I predict True");
console.log(car == 'Subaru');
console.log("Is car != 'hondacity'? I predict True");
console.log(car != 'hondacity');
console.log("Is car == 'Subaru'? I predict true");
console.log(car == 'Subaru');
console.log("Is car != 'carolla'? I predict True");
console.log(car != 'carolla');
console.log("Is car != 'Audi'? I predict True");
console.log(car != 'Audi');
console.log("Is car !='Mercadise'? I predict True");
console.log(car != 'Mercadise');
//False Statment
console.log("Is 10 > 45 ?I predict false");
console.log(10 > 45);
console.log("Is 31 <= 21 ? I predict false");
console.log(31 <= 21);
console.log("Is 90 < 80 ? I predict false");
console.log(90 < 80);
console.log("Is 72 >= 83 ? I predict false");
console.log(72 >= 83);
console.log("is car.length == 3? predict false");
console.log(car.length == 3);
//24 assigment space
let Name_1 = "Ammad";
let Name_2 = "Ammad Qureshi";
let Name_3 = "Muhammad Ammad Qureshi";
//Equality 
if (Name_1 == Name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
//Inequality
if (Name_1 != Name_2) {
    console.log("Names are not equal");
}
//lower case function 
if (Name_1 != Name_3) {
    console.log("Names are not equal");
}
//Numerical test involving equality
let age_1 = 18;
let age_2 = 24;
if (age_1 == 18) {
    console.log("Eligable for vote");
}
//Numerical test involving inequality
if (age_1 != 22) {
    console.log("Eligable for vote in older catagery");
}
if (age_1 <= age_2) {
    //18   <= 21
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 24) {
    console.log("Person is Eligable for vote");
}
if (age_1 == 18 || age_2 == 24) {
    console.log("Person is Eligable  not for vote");
}
let weather = ["summer", "winter", "Autom", "Spring"];
if (weather.includes("winter")) {
    console.log("winter in a weather list");
}
if (!weather.includes("rainy")) {
    console.log("Rainy is not present in an array");
}
//Task 25
let alien_colour1 = "green";
if (alien_colour1 == "green")
    console.log("you earned 5 point");
let alien_Colour2 = "red";
if (alien_Colour2 == "green")
    console.log("no output");
let Alien_colour = "red";
if (alien_colour1 == "green")
    console.log("no output");
//Task 26
let alien_colour3 = "green";
if (alien_colour3 == "green") {
    console.log("players just earned 5 points for shooting aline");
}
else {
    console.log("players just earned 10 points");
}
let alien_Colour4 = "red";
if (alien_colour1 == "green") {
    console.log("players just earned 10 points for shooting aline");
}
else {
    console.log("players just earned 10 points");
}
//Task 27
let alien_colour5 = "green";
if (alien_colour5 == "green") {
    console.log("players just earned 5 points for shooting aline");
}
else {
    console.log("players just earned 10 points");
}
let alien_colour6 = "yellow";
if (alien_colour6 == "yellow") {
    console.log("players just earned 10 points for shooting aline");
}
else {
    console.log("players just earned 10 points");
}
let alien_colour7 = "red";
if (alien_colour7 == "red") {
    console.log("players just earned 10 points for shooting aline");
}
else {
    console.log("players just earned 10 points");
}
//Task 28
let age = 80;
if (age == 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a tolder");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a elder");
}
//Task 29
//Make a array............
let favorite_fruits = ["Mango", "Apple", "Orange", "barry", "peach"];
if (favorite_fruits.includes("Mango")) {
    console.log("Mango");
}
if (favorite_fruits.includes("peach")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("Apple")) {
    console.log("Apple");
}
if (favorite_fruits.includes("barry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Orange");
}
//Task 30
let users = ['Ammad', 'wahaj', 'sania', 'moiz', 'hashir'];
for (let user of users) {
    if (user === 'Ammad') {
        console.log("Hello Ammad, would you like to a status report?");
    }
    else {
        console.log(`Hello ${users} Thank you for loging again.`);
    }
}
//Tassk 31
let user_s = ['Ammad', 'wahaj', 'sania', 'moiz', 'hashir'];
for (let user of users) {
    if (user === 'Ammad') {
        console.log("Hello Ammad, would you like to a status report?");
    }
    else {
        console.log(`Hello ${users} Thank you for loging again.`);
    }
}
user_s = [];
if (user_s.length === 0) {
    console.log("We need to find some users.");
}
// Task 32
let existingUsers = ["Ali", "Talib", "Hahir", "Humza", "Moiz"];
let newUsers = ["Arsal", "Amir", "Ali", "Talib", "Areeb"];
for (let newUser of newUsers) {
    if (existingUsers.includes(newUser)) {
        console.log(`sorry "${newUser}" has already been used. Please enter a new username.`);
    }
    else {
        console.log(`The username "${newUser}" is available.`);
    }
}
//Task 33
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of counting) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}th`);
    }
    else if (number === 4) {
        console.log(`${number}th`);
    }
    else if (number === 5) {
        console.log(`${number}th`);
    }
    else if (number === 6) {
        console.log(`${number}th`);
    }
    else if (number === 7) {
        console.log(`${number}th`);
    }
    else if (number === 8) {
        console.log(`${number}th`);
    }
    else
        (number === 9);
    console.log(`${number}th`);
}
// Task 34 
let pizza = ["chicken", "veg", "pepperoni"];
for (let favorite_pizza of pizza) {
    console.log(favorite_pizza);
}
for (let favorite_pizza of pizza) {
    console.log(`I really like ${favorite_pizza} pizza`);
}
console.log("I really love pizza");
//Task 35 
let animal = ["Cat", "Dog", "Loin"];
for (let animals of animal) {
    console.log(`A ${animals} would make a great pet`);
}
//Task 36
function makeshirt(siza, text) {
    console.log(`you order a ${siza} shirt that say ${text}`);
}
makeshirt('large', '"i love typescript"');
makeshirt('medium', '"i need a big shirt"');
//Task 37 
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`You order a ${size} shirt that say ${text}`);
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'I need a big shirt to wear');
//Task 38
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country} `);
}
describe_city('karachi');
describe_city('delhi', 'india');
describe_city('Makkah', 'saudia arabia');
//Task 39
function city_country(city, country) {
    return `${city} ${country}`;
}
let s1 = city_country('lahore', 'pakistan');
let s2 = city_country('tokyo', 'japan');
let s3 = city_country('delhi', 'india');
console.log(s1);
console.log(s2);
console.log(s3);
// Task 40
function make_album(artist, title) {
    const main = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return main;
}
let album = make_album("Ali", "light");
console.log(album);
album = make_album("bilal", "Red wave");
console.log(album);
album = make_album("ammad", "seenbrez");
console.log(album);
// Task 41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Noman", "Humza", "Ali"];
show_magicians(magician);
// Task 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["Bilal", "Humza", "Ammad"];
make_great(magicians2);
show_magicians(magicians2);
// Task 43
let magicians = ["Talha", "Areeab", "Talib"];
function makegreat(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magician.slice()); // creat a new modified array
console.log("original magicians:");
show_magicians(magicians); // show original names
console.log("greatMagicians:");
show_magicians(greatMagicians); //shows modified name
