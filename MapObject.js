var input = {
  first_name: "James",
  last_name: "Hu",
  gender: "Male",
  biography: "Oh hey, I'm just a guy"
}

//establish mapobject function variable and function parameters
var mapObject = function(object, transform) {
  // establish new objected to be "mapped"/"tranformed" - outcome object
  var mappedobj = {};
  // for in loop to cycle through keys in object
  for (var key in object) {
  	// mappedobj continuously updated with each manipulation output from transform 
  	// transform cycles through each key value in the object and produces results
  	mappedobj[key] = transform(key, object[key]);
  	// return mappedobj
    }
  return mappedobj;
}

function sanitize(key, value){
// return (key == "biography") ? value.toLowerCase() : value.toUpperCase();
 if (key === 'biography'){
 	value = value.toLowerCase();
 	return value;
 }
 else {
 	value = value.toUpperCase();
 	return value;
 }
}

console.log(mapObject(input, sanitize));

