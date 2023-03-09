function home() {

}


function service() {
    var img =`https://thumbs.dreamstime.com/b/group-business-people-presentation-concept-42283205.jpg`
    var heading = "Images"
    document.getElementById('flex-box').innerHTML = `<div id ="flex-box"><img width="200px" src="${img}" alt="logo" style="padding-top:10px;padding-left:20px;"><h2 style="padding-left:25px;">${heading}</h2></div>`
}


function login(){
    document.getElementById('flex-box').innerHTML=`<div id="flex-box" style="padding-left:25px;padding-top:25px;"><input id='inp' placeholder="Email" style="padding:5px"><br><br><input id='inp1' placeholder="Password" style="padding:5px"><br><br><button onclick="check()" style="border-radius:5px; color:blue; background-color:yellow; border:none;">check</button></div>`
}
    function check(){
        var email ="admin@gmail.com"
        var password = "1234567"
        var nemail = document.getElementById('inp').value;
        var npassword = document.getElementById('inp1').value;

        if(email==nemail && password==npassword){
            alert('successfully login')
        }
        else{
            alert('login failed')
        }
    }

