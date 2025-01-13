const user_name = document.getElementById("firstname"); 
const surname = document.getElementById("lastname"); 
const address = document.getElementById("address"); 
const email = document.getElementById("email"); 
const number = document.getElementById("mobile_number"); 
const area = document.getElementById("local_city"); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////
/* regular expressions */
const nameregex = /(?=[A-Za-z]{2,20})/; 
const Adressregex = /^[a-zA-Z0-9\s,.'-]{3,}$/; 
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
const numberregex = /^(\+27|27|0)[0-9]{2}( |-)?[0-9]{3}( |-)?[0-9]{4}( |-)?(x[0-9]+)?(ext[0-9]+)?/
const arearegex = /Select location/ig;

const validate=()=>{

    if(nameregex !== user_name){
        console.error("invalid");
        throw new Error(window.alert("input a correct usename"));
    }
    
}
