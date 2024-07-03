let defaultMode = "dark";
let heroCaption = document.querySelectorAll('.hero-text');
let color = document.querySelector(':root');
let orderBtn = document.querySelector('.order-btn');
function changeTextColor(tag, color){
    tag.style.color = color;
}
function toggleMode(){
    let btn = document.querySelector('#toggle-mode');
    if(defaultMode == "dark"){
        btn.innerHTML = "<i class=\"fa-solid fa-moon\"></i>";
        defaultMode="light";
        color.style.setProperty('--dark','#f7f7f7');
        color.style.setProperty('--light','#e5bf4a');
        color.style.setProperty('--golden','#070707');
        heroCaption[0].style.color = "white";
        orderBtn.style.border = "1px solid var(--dark)";
    }
    else{
        btn.innerHTML = "<i class=\"fa-solid fa-sun\"></i>";
        defaultMode = "dark";
        color.style.setProperty('--dark','#070707');
        color.style.setProperty('--light','#f7f7f7');
        color.style.setProperty('--golden','#e5bf4a');
        orderBtn.style.border = "1px solid var(--golden)";
    }
}
/*  white->gold
    gold->black
    black->white
} */
