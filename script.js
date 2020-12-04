let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome");
let contact1 = document.getElementById("contact1");
let contact2 = document.getElementById("contact2");
let contact3 = document.getElementById("contact3");


arabic.onclick = () =>{
    setlanguage("arabic");
    localStorage.setItem("lang" , "arabic");
};
english.onclick = () =>{
    setlanguage("english");
    localStorage.setItem("lang" , "english");
};
onload =()=>{
    setlanguage(localStorage.getItem("lang"));
};
function setlanguage(getlanguage){
    if (getlanguage === "arabic"){
        title.innerHTML = "المبرمج رضوان" ;
        welcome.innerHTML = "اهلا بموقعنا";
        contact1.innerHTML = "حولنا" ;
        contact2.innerHTML = "انا اتعلم حافا سكريبت و اتش تي ام ال و سي اس اس في اكادمية شيار" ;
        contact3.innerHTML = "اتصل بنا" ;
    }
    else if (getlanguage === "english"){
        title.innerHTML = "Coder Radwan";
        welcome.innerHTML = "welcome to our website";
        contact1.innerHTML = "About us" ;
        contact2.innerHTML = "I am learning JavaScript and Css and Html at Shyiar academy" ;
        contact3.innerHTML = "Contact us" ;
    }

}

