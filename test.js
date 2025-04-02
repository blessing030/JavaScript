//function animalType(val) {
//var result = "";

var myDog = {

    "name": "Bosco",
    "legs" : "4",
    "teeth": "32",
    "eyes" : "2",
    "nose": "1",
    "mouth" : "1",
    "tail": "1",
    "bark" : "woof",
    };
    function checkDog(checkProp){
        if (myDog.hasOwnProperty(checkProp)){
            return myDog[checkProp];
        } 
        
        else{ return " Not There"}
    }
    console.log(checkDog("bark"));
   // result = myDog(val);
   // return result;

   // console.log (myDog.name)
    //console.log(myDog.eyes)
    //console.log(myDog)
    //delete myDog.mouth
    //console.log(animal("nose"));


   //  console.log (animalType("bark"));

