let date = new Date().getDay();

let greeting = "Welcome to my page!";
let greetingMethod = greeting.charAt(9);

let addition = 852 + 940;

let switchExample = "Nintendo";

console.log('Hey y\'all!' + " " + 'Thanks for reading the console!');



if (date = 4){
    console.log("It is Wednesday my dudes!");
    
} else {
        console.log("On the way to another Wednesday!" + " " + "Soon(tm)");
    }

console.log("\"Tell me, what's the 9th character in this phrase: \'Welcome to my page!\'\"");
console.log("The answer is:" + " " + greetingMethod + ".")

console.log("\"Ok you got that correct, but can you tell me what 852 plus 940 is?\"");
console.log("Of course, the answer is" + " " + addition.valueOf() + ".");

switch(switchExample){
    case "Xbox":
        console.log("Nice, but not what we're looking for.");
        break;
    case "Nintendo":
        console.log("This is what we're looking for! Get it, like the Nintendo *Switch*?");
        break;
    case "Playstation":
        console.log("Nice, but not what we're looking for.");
        break;
    default:
        console.log("No value found. :(");
        break;
}
