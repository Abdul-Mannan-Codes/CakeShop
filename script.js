let defaultMode = "dark";
let h1 = querySelectorAll('h1');
let h2 = querySelectorAll('h2');
let h3 = querySelectorAll('h3');
let h4 = querySelectorAll('h4');
let h5 = querySelectorAll('h5');
let h6 = querySelectorAll('h6');
let p = querySelectorAll('p');
function changeTextColor(tag, color){
    tag.style.color = color;
}
function toggleMode(){
    let btn = document.querySelector('#toggle-mode');
    if(defaultMode == "dark"){
        btn.innerHTML = "<i class=\"fa-solid fa-moon\"></i>";
        defaultMode="light";
        document.body.style.backgroundColor = "#f7f7f7";
        for(h of h1){
            changeTextColor(h,"#070707");
        }
        for(h of h2){
            changeTextColor(h,"#070707");
        }
        for(h of h3){
            changeTextColor(h,"#070707");
        }
        for(h of h4){
            changeTextColor(h,"#070707");
        }
        for(h of h5){
            changeTextColor(h,"#070707");
        }
        for(h of h6){
            changeTextColor(h,"#070707");
        }
        for(para of p){
            changeTextColor(para,"#AA6B39");
        }
    }
    else{
        btn.innerHTML = "<i class=\"fa-solid fa-sun\"></i>";
        defaultMode = "dark";
        document.body.style.backgroundColor = "#070707";
    }
}