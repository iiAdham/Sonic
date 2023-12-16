let image = document.querySelector("main .sec1 .container .hero-img img");
let button = document.querySelector("main .mode-btn i");

function changeTheme(){
    if(button.classList.contains("fa-sun")){
        // change to light
        image.src = "./assests/images/white-sonice.png";
        button.classList.replace("fa-sun" , "fa-moon");
        let link = document.createElement("link");
        link.setAttribute('rel' , 'stylesheet');
        link.setAttribute('href', './assests/light.css');
        link.setAttribute('id','lightCss');
        document.head.appendChild(link);
    }
    else{
        // change to dark
        button.classList.replace("fa-moon", "fa-sun");
        image.src = "./assests/images/red-sonice.png";
        let links=document.getElementsByTagName("link");
        links[4].parentNode.removeChild(links[4]);
    }
}
button.addEventListener("click",changeTheme);