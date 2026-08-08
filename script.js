let modal = document.getElementById("registerModal");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.querySelector(".close");

if (modal && openBtn && closeBtn) {

    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

}
let button = document.getElementById("checkBtn");

if(button){

button.addEventListener("click", function(){

    let blood = document.getElementById("bloodGroup").value;

    let result = document.getElementById("result");

    if(blood=="A+"){

        result.innerHTML="🩸 <b>Can Donate To:</b> A+, AB+ <br><br> ❤️ <b>Can Receive From:</b> A+, A-, O+, O-";

    }

    else if(blood=="A-"){

        result.innerHTML="🩸 <b>Can Donate To:</b> A+, A-, AB+, AB- <br><br> ❤️ <b>Can Receive From:</b> A-, O-";

    }

    else if(blood=="B+"){

        result.innerHTML="🩸 <b>Can Donate To:</b> B+, AB+ <br><br> ❤️ <b>Can Receive From:</b> B+, B-, O+, O-";

    }

    else if(blood=="B-"){

        result.innerHTML="🩸 <b>Can Donate To:</b> B+, B-, AB+, AB- <br><br> ❤️ <b>Can Receive From:</b> B-, O-";

    }

    else if(blood=="AB+"){

        result.innerHTML="🩸 <b>Can Donate To:</b> AB+ <br><br> ❤️ <b>Can Receive From:</b> Everyone";

    }

    else if(blood=="AB-"){

        result.innerHTML="🩸 <b>Can Donate To:</b> AB+, AB- <br><br> ❤️ <b>Can Receive From:</b> A-, B-, AB-, O-";

    }

    else if(blood=="O+"){

        result.innerHTML="🩸 <b>Can Donate To:</b> A+, B+, AB+, O+ <br><br> ❤️ <b>Can Receive From:</b> O+, O-";

    }

    else if(blood=="O-"){

        result.innerHTML="🩸 <b>Can Donate To:</b> Everyone ❤️ <br><br> ❤️ <b>Can Receive From:</b> O-";

    }

    else{

        result.innerHTML="⚠ Please Select a Blood Group";

    }

});

}
let availabilityButton = document.getElementById("availabilityBtn");

if (availabilityButton) {

    availabilityButton.addEventListener("click", function () {

        let selectedGroup = document.getElementById("stockGroup").value;
        let stockDisplay = document.getElementById("stockOutput");

        switch (selectedGroup) {

            case "A+":
                stockDisplay.innerHTML = "🩸 <b>A+</b><br><br>Available Units : <b>25</b><br>Status : 🟢 Available";
                stockDisplay.style.color = "green";
                break;

            case "A-":
                stockDisplay.innerHTML = "🩸 <b>A-</b><br><br>Available Units : <b>8</b><br>Status : 🟢 Available";
                stockDisplay.style.color = "green";
                break;

            case "B+":
                stockDisplay.innerHTML = "🩸 <b>B+</b><br><br>Available Units : <b>18</b><br>Status : 🟢 Available";
                stockDisplay.style.color = "green";
                break;

            case "B-":
                stockDisplay.innerHTML = "🩸 <b>B-</b><br><br>Available Units : <b>4</b><br>Status : 🟠 Limited Stock";
                stockDisplay.style.color = "orange";
                break;

            case "AB+":
                stockDisplay.innerHTML = "🩸 <b>AB+</b><br><br>Available Units : <b>12</b><br>Status : 🟢 Available";
                stockDisplay.style.color = "green";
                break;

            case "AB-":
                stockDisplay.innerHTML = "🩸 <b>AB-</b><br><br>Available Units : <b>2</b><br>Status : 🔴 Low Stock";
                stockDisplay.style.color = "red";
                break;

            case "O+":
                stockDisplay.innerHTML = "🩸 <b>O+</b><br><br>Available Units : <b>30</b><br>Status : 🟢 Available";
                stockDisplay.style.color = "green";
                break;

            case "O-":
                stockDisplay.innerHTML = "🩸 <b>O-</b><br><br>Available Units : <b>1</b><br>Status : ❌ Critical Stock";
                stockDisplay.style.color = "red";
                break;

            default:
                stockDisplay.innerHTML = "⚠ Please Select a Blood Group";
                stockDisplay.style.color = "black";
        }

    });

}let questions = document.querySelectorAll(".question");

questions.forEach(function(item){

    item.addEventListener("click", function(){

        let answer = this.nextElementSibling;

        answer.classList.toggle("show");

    });

});
let form = document.getElementById("registerForm");

let success = document.getElementById("successPopup");

let okBtn = document.getElementById("closeSuccess");

form.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("registerModal").style.display = "none";

    success.style.display = "flex";

    form.reset();

});

okBtn.addEventListener("click", function(){

    success.style.display = "none";

});
let facts = [

"🩸 One blood donation can save up to 3 lives.",

"❤️ O- is called the Universal Donor.",

"🩸 AB+ can receive blood from all blood groups.",

"❤️ Your body replaces the donated plasma within 24 hours.",

"🩸 Blood cannot be manufactured in any factory."

];

let factButton = document.getElementById("factBtn");

let factDisplay = document.getElementById("factText");

factButton.addEventListener("click",function(){

let random=Math.floor(Math.random()*facts.length);

factDisplay.innerHTML=facts[random];

});
let sendButton=document.getElementById("requestBtn");

sendButton.addEventListener("click",function(){

let patient=document.getElementById("patientName").value;

let blood=document.getElementById("patientBlood").value;

let hospital=document.getElementById("hospitalName").value;

let output=document.getElementById("requestResult");

if(patient=="" || blood=="" || hospital==""){

output.innerHTML="⚠ Please fill all details.";

output.style.color="red";

}

else{

output.innerHTML="✅ Emergency Blood Request Submitted Successfully.";

output.style.color="green";

}

});
function showTime(){

let today=new Date();

document.getElementById("clock").innerHTML=today.toLocaleString();

}

setInterval(showTime,1000);
let count=0;

let stop=setInterval(function(){

count++;

document.getElementById("counter").innerHTML=count;

if(count==1250){

clearInterval(stop);

}

},2);
let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1500);

}