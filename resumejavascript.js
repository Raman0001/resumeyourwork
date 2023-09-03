const manu = document.getElementById("manu");
const page = document.getElementById("page");
const show = document.getElementById("show");
const plus = document.getElementById("plus");
const linka = document.getElementById("linka");

active =()=>{
    page.style.display = "none";
    manu.style.display = "block";
    show.style.justifyContent = "center";
    show.style.alignItems = "center";
    show.style.padding = "54px 0px 0px 70px";
    show.style.flexDirection = "column";
    manu.style.height = "21rem";
    manu.style.backgroundColor = "transparent";
    manu.style.color="#fff";


    
}
normal = () =>{

    page.style.display = "block";
    manu.style.display = "none";
}