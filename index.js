console.log( 'Hello');
console.log( 'I like pizza');
console.log('My name is Njery');
 //window.alert();

 document.getElementById("body").textContent= "Hello World";
 document.getElementById("myp").textContent = "Hello Mimi"

 let firstName ="Val";
 let age = "36";
 let employed ="true";

 document.getElementById("p1").textContent = "your name is Val";
 document.getElementById("p2").textContent = "your age is 36";
 document.getElementById("p3").textContent ="you are employed";
 // ignore this//

 function myFunction(a , b){
    console.log( a + b)
    console.log(a * b)
    console.log(b / a)
    console.log(a - b)
    
 }
   myFunction(3,6)
  // console.log (myFunction)
  
  function trueOrFalse(isItTrue)
  {
    if (isItTrue) {
        return "Yes,it is true";
    }
    return "No,it is false";
  }
  console.log(trueOrFalse(false));

  function comparison(value)
  {
    if (value !== 7) {
        return "Yes,it is true";
    }
    return "No,it is false";
  }
  
  console.log(comparison(17));

  function size(number){
    if(number < 5){
        return "tiny"
    }
    else if (number < 10){
        return "small"
    }
    else if(number < 15){
        return "medium"
    }
    else if ( number < 20)
       { return "large"}
    else{
        return "huge"
    }
  }
console.log(size(14))
