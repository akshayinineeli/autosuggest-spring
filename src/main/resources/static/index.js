// alert("yo guyss heluu")
console.log("hellooo from js")
var users= [
    {
        "name": "JOHN DOE",
        "gender": "Male",
        "img": "john.png"

    },
    {
        "name": "JANE DOE",
        "gender": "Female",
        "img": "jane.png"
    }
]

var id=0;
function toggleuser(){
    id= (id+1)%2
    //1
    var userimage=document.getElementById("user-image");
    userimage.src= users[id].img;
    var username=document.getElementById("user-name");
    username.innerHTML=users[id].name;
    var usergender=document.getElementById("user-gender");
    usergender.innerHTML=users[id].gender;

}
function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var userdata= data.results[0];
        var user = data.results[0];
        var userimage=document.getElementById("user-image");
        userimage.src= userdata.picture.large;
        var username=document.getElementById("user-name");
        username.innerHTML= userdata.name.first + " " + userdata.name.last;
        var usergender=document.getElementById("user-gender");
        usergender.innerHTML= userdata.gender;
    })
    .catch(function(error){
        console.log(error);
    })
}