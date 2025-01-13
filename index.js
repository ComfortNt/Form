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

const validate = () => {
    

    if(!nameregex.test(user_name.value)) {
        console.error("Invalid username");
        window.alert("Input a correct username");
        return false;

    }else if (!nameregex.test(surname.value)) {
        console.error("Invalid surname");
        window.alert("Input a correct surname");
        return false;

    }else if (!Adressregex.test(address.value)) {
        console.error("Invalid address");
        window.alert("Input a correct address");
        return false;

    } else if (!emailregex.test(email.value)) {
        console.error("Invalid email");
        window.alert("Input a correct email");
        return false;

    }else if (!numberregex.test(number.value)) {
        console.error("Invalid mobile number");
        window.alert("Input a correct mobile number");
        return false;

    } else if(arearegex.test(area.value)) {
        console.error("Invalid area selection");
        window.alert("Please select a valid location");
        return false;
    };

}