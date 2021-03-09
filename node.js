// while loop condition in an array
function fruits (){
    /*list of the fruits*/
    fruits =["Avacado","grapes","mangoes","orange","kiwi"] 
//    returns the each fruits as per their index in decrement format 
    
let n =fruits.length;
    while(n>-1){
        n--
        console.log(fruits[n]);
    }
}
fruits()
// (expected output)
// kiwi
// orange
// mangoes
// grapes
// Avacado 