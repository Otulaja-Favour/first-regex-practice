function submitbtn(){
    let emailAddress = document.getElementById('exampleFormControlInput1').value
let passWord =  document.getElementById('inputPassword').value

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

console.log(emailAddress);
console.log(mailRegex.test(emailAddress));
console.log(emailAddress.length);  //checkimg for the length
console.log(emailAddress.indexOf('@'));  //checking for its position
console.log(emailAddress.lastIndexOf('.')); //looking for the .com

console.log(passWord);
console.log(pswdRegex);





if(!(mailRegex.test(emailAddress))){
    alert('pls input a valid mail')
return
}
if(!passWord){
    alert('input a password')
    return
}
if(!(passWord.match(pswdRegex))){
    if(passWord.length < 8){
        alert('Password must be at least 8 characters long')
        return
    }
    if(!passWord.match(/[a-z]/)){
        alert('Password must contain at least one lowercase letter')
        return

    }
    if(!passWord.match(/[A-Z]/)){
        alert('Password must contain at least one uppercase letter')
        return

    }
    if(!passWord.match(/\d/)){
       alert('Password must contain at least one number')
       return
    
    }
    if(!passWord.match(/[@$!%*?&]/)){
        alert('Password must contain at least one special character')
        return

    }
}

else{
    alert('Login successful')
}    

}
