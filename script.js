function onSubmit(){
let topBaseLength = document.getElementById("topBaseLength").value;
let bottomBaseLength = document.getElementById("bottomBaseLength").value;
let heightOfTrapezoid = document.getElementById("heightOfTrapezoid").value;
let area = 1/2 * (topBaseLength+bottomBaseLength)*heightOfTrapezoid;

document.getElementById("area").innerHTML=area;
}