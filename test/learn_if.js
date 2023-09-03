
// let log = false

// if(log){
//     console.log("User has log");
// }else{
//     console.log("User has not log");
// }



// let x = 10;
// let y = 20;

// y > x ? console.log("y is big"): console.log("x is big");

console.log(process.argv);

let marks = process.argv[2];
if(marks > 50){
    console.log("Pass");
}else{
    console.log("Fail");
}