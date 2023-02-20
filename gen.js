

function Newskill(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.setAttribute("row",3);
    newNode.classList.add("mt-3");
   
    let skillExpob = document.getElementById("skillexp");
    let skillBtnob = document.getElementById("skillbtn");
    

    skillExpob.insertBefore(newNode,skillBtnob);
}

function hobskill(){
    let hobnode = document.createElement("textarea");
    hobnode.classList.add("hobfield");
    hobnode.classList.add("form-control");
    hobnode.setAttribute("row",3);
    hobnode.classList.add("mt-3");



    let hob1 = document.getElementById("hobexp");
    let hob2 = document.getElementById("hobbtn");


    hob1.insertBefore(hobnode,hob2);


   
}


function eduskill(){
    let edunode = document.createElement("textarea");
    edunode.classList.add("edufield");
    edunode.classList.add("form-control");
    edunode.setAttribute("row",3);
    edunode.classList.add("mt-3");



    let edu1 = document.getElementById("eduexp");
    let edu2 = document.getElementById("edubtn");


    edu1.insertBefore(edunode,edu2);


   
}


function proskill(){
    let pronode = document.createElement("textarea");
    pronode.classList.add("profield");
    pronode.classList.add("form-control");
    pronode.setAttribute("row",5);
    pronode.classList.add("mt-3");



    let pro1 = document.getElementById("proexp");
    let pro2 = document.getElementById("probtn");


    pro1.insertBefore(pronode,pro2);


   
}


function sumskill(){
    let sumnode = document.createElement("textarea");
    sumnode.classList.add("sumfield");
    sumnode.classList.add("form-control");
    sumnode.setAttribute("row",5);
    sumnode.classList.add("mt-3");



    let sum1 = document.getElementById("sumexp");
    let sum2 = document.getElementById("sumbtn");


    sum1.insertBefore(sumnode,sum2);


   
}


function certskill(){
    let certnode = document.createElement("textarea");
    certnode.classList.add("certfield");
    certnode.classList.add("form-control");
    certnode.setAttribute("row",5);
    certnode.classList.add("mt-3");



    let cert1 = document.getElementById("certexp");
    let cert2 = document.getElementById("certbtn");


    cert1.insertBefore(certnode,cert2);


   
}
function gencv(){
 //name//
document.getElementById("nametemp").innerHTML = document.getElementById("name").value;

//jobtitle//
document.getElementById("jobtemp").innerHTML = document.getElementById("title").value;

//address//
document.getElementById("addtemp").innerHTML = document.getElementById("add").value;

//pin code//
document.getElementById("pintemp").innerHTML = document.getElementById("pin").value;

//contact//
document.getElementById("conttemp").innerHTML = document.getElementById("mob").value;

//email//
document.getElementById("emailtemp").innerHTML = document.getElementById("email").value;


//nationality//
document.getElementById("ind").innerHTML = document.getElementById("nati").value;

//birthdate//
document.getElementById("date").innerHTML = document.getElementById("birth").value;

//birthplace//
document.getElementById("place").innerHTML = document.getElementById("birthplace").value;

//skill//
let skill = document.getElementsByClassName("sumfield");
let strin ="";
for (let e of skill){
    strin = strin+ ` <li>${e.value}</li>`
}
document.getElementById("skilltemp").innerHTML = strin;


//hobby//
let hobby = document.getElementsByClassName("hobfield");
let dat ="";
for (let e of hobby){
    dat = dat+ ` <li>${e.value}</li>`
}
document.getElementById("hobtemp").innerHTML = dat;


//education//
let education = document.getElementsByClassName("edufield");
let str ="";
for (let e of education){
    str = str+ ` <li>${e.value}</li>`
}
document.getElementById("edutemp").innerHTML = str;
//project//

let project = document.getElementsByClassName("profield");
let st ="";
for (let e of project){
    st = st+ ` <li>${e.value}</li>`
}
document.getElementById("protemp").innerHTML = st;




//certificate//

let certification = document.getElementsByClassName("certfield");
let stre ="";
for (let e of certification){
    stre = stre+ ` <li>${e.value}</li>`
}
document.getElementById("certtemp").innerHTML = stre;


//setting img//

let file = document.getElementById("imgfeild").files[0];
console.log(file);

let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend = function(){
document.getElementById("imgtemplate").src = reader.result;
}

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";

const inputs = document.querySelectorAll('.field');

for (const input of inputs) {
  input.setAttribute('required', '');
}
}


function printcv(){
    window.print();
}



    