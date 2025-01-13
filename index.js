const name = document.getElementById("firstname"); 
const surname = document.getElementById("lastname"); 
const address = document.getElementById("address"); 
const email = document.getElementById("email"); 
const number = document.getElementById("mobile_number"); 
const area = document.getElementById("local_city"); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////
function blankcheck(){ 
/* regular expressions */
const nameregex = /(?=[A-Za-z]{2,20})/; 
const Adressregex = /^[a-zA-Z0-9\s,.'-]{3,}$/; 
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
const numberregex = /^(\+27|27|0)[0-9]{2}( |-)?[0-9]{3}( |-)?[0-9]{4}( |-)?(x[0-9]+)?(ext[0-9]+)?/
const arearegex = /Select location/ig; 
/* regular expression tester by user input Id value */
let name_vali = nameregex.test(name.value); 
let surname_val = nameregex.test(surname.value); 
let Address_vali = Adressregex.test(address.value); 
let email_vali = emailregex.test(email.value); 
let number_vali = numberregex.test(number.value); 
let area_vali = arearegex.test(area.value); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////
/* switch statements validate the form also the try catch*/
try{ 
switch(name_vali){ 
 case false : window.alert("A Valid Name is Required ! \n Please enter a valid Name (Your Name should'nt include special charactors and should be more than 2 Letters and less than 20"); 
 return false
 if (name_vali === "") throw ("Please enter a your Name") 
} 
}catch(error){ 
} 
try{ 
switch(surname_val){ 
 case false : window.alert(" A Valid LastName is Required ! \n Please enter a valid LastName (Your LastName should'nt include special charactors and should be more than 2 Letters and less than 20"); 
 return false
 if (surname_val === " ") throw "Please enter your Lastame"
} 
}catch(error){ 
 
} 
try{ 
switch(Address_vali){ 
 case false : window.alert("Please enter a Valid Home/Street \n An Address Is Required"); 
 return false
 if (Address_vali === " ") throw "Please enter your home/street address"
} 
}catch(error){ 
 
} 
if ( document.getElementById("male").checked == false && document.getElementById("female").checked == false){ 
 window.alert("Please Select in your Gender"); 
 return false
} 
try{ 
switch(email_vali ){ 
 case false : window.alert(" Please Enter a valid Email Address. \n {example123@gmail.com OR example@yahoo.com etc.}"); 
 return false
 if (email_vali === " ") throw "Please enter your E-mail address"
} 
}catch(error){ 
 
} 
try{ 
switch(number_vali){ 
 case false : window.alert("Cellphone Number is Required \n e.g {+271-111-0000 or {071-111-0000}}"); 
 return false
 if (number_vali === " ") throw "Please a standard south african cellphone number"
} 
}catch(error){ 
 
} 
try{ 
switch(area_vali){ 
 case true : window.alert("Please Select your Town/City from the list Provided below"); 
 return false
 if (area_vali === " ") throw "pleas Make a selection form the list provided"
} 
}catch(error){ 
 
} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////
} 
/*reset button code*/
function Clear(){ 
document.getElementById("form1").Clear() 
} 
function cookieFunction(){ 
const name = document.getElementById("firstname"); 
const email = document.getElementById("email"); 
const area = document.getElementById("local_city"); 
const number = document.getElementById("mobile_number"); 
const date = new Date() 
month_ = date.getMonth() + 1
document.cookie("Details",name,email,area,number,month_) 
console.log(document.cookie) 
} 
