function store()
{
    var ID =document.getElementById("ID").value;
    var name =document.getElementById("name").value;
    var skill =document.getElementById("skill").value;
    data=`{"ID":"${ID}","name":"${name}","skill":"${skill}"}`;
    localStorage.setItem(`${ID}`,`${data}`);
    console.log("Saved in Local Storage");
}
function assign(){
    var time=document.getElementById("time").value;
    var Subject = document.getElementById("Subject").value;
    data=`{"time":"${time}","Subject":"${Subject}"}`;
    localStorage.setItem(`${time}`,`${data}`);
}