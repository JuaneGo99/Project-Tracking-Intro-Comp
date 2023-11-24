const menu = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
const iconOpen = document.querySelector("[data-menu-open]");
const iconclose = document.querySelector("[data-menu-close]");  

menu.addEventListener("click", () => {

    if(nav.style.display === "none"){
        nav.style.display = "block";
        iconOpen.style.display = "none";
        iconclose.style.display = "block"; 
    }else{
        nav.style.display = "none";
        iconOpen.style.display = "block";
        iconclose.style.display = "none";  
    }
});