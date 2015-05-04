
/* wrong place --> SIGNUP.JS */
function user(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
} 

var johndoe = new user("John Doe","johndoe","john@doe.com","cat");
var timtequila = new user("Tim Tequila","timtequila","tim@tequila.com","cat");
var userlist = [johndoe,timtequila];

//when you press the submit button
function userlogin() {
    var mail = document.getElementById("inputEmail").value;
    var pswd = document.getElementById("inputPassword").value;
    var check = document.getElementById("inputCheck").checked;
  
    for (i=0;i<userlist.length;i++) {
        if (userlist[i].email === mail && userlist[i].password === pswd) 
            window.open("userhome.html", "_self");
    }
    return false;
}

