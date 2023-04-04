let dbUsers = [
{
    username: "hasmini",
    password: "H@s230798",
    name: "Hasmini",
    email: "hasmininanthan023@gmail.com"

},
{
    username: "john",
    password: "password",
    name: "John",
    email: "john@utem.edu.my"

},
{
    username: "ali",
    password: "230798",
    name: "Ali",
    email: "ali@utem.edu.my"

}
]

function login(reqUsername, reqPassword) {
    let matchUser = dbUsers.find(user => user.username == reqUsername)

    //console.log(matchUser)

if(!matchUser) return "User not found!"

if(matchUser.password == reqPassword){
    return matchUser
}else{
    return "Invalid password"
}
}

function register (reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail

    })


}

//try to login
console.log(login("hasmini","123"))
console.log(login("utem","password"))
console.log(login("john","password"))
console.log(login("ali","password"))

register("UTEM", "password", "fkekk","fkekk@m.com" )
//try to login
console.log(login("UTEM","password"))