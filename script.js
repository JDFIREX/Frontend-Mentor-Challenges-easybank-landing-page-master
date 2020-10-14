let hamb = document.querySelector('.nav_hamb');
let hambOpen = false;
hamb.addEventListener('click', () => showNav());

function showNav(){
    hambOpen  == false ? hambOpen = true : hambOpen = false;
    let nav = document.querySelector('.nav');
    let nav_list = document.querySelector('.nav_list');
    let nav_item = document.querySelectorAll('.nav_item');

    if(hambOpen){
        nav_list.style.transition = ".3s ease";
        setTimeout(() => {
            nav.style.boxShadow = `0px -100px 97px 200px rgba(45,49,77,0.46)`;
        }, 300);
        nav_list.style.top = "7rem";
        setTimeout(() => {
            nav_list.style.boxShadow = `0px 200px 59px 200px rgba(45,49,77,0.46)`;
            nav_item.forEach( i => i.style.top = "0vw")
            setTimeout(() => {
                nav_item.forEach( i => i.style.opacity = "1")
            }, 0);
        }, 300);
    }else{
        setTimeout(() => {
            nav_item.forEach( i => i.style.top = "-100vw")
            nav_item.forEach( i => i.style.opacity = "0")
            nav.style.boxShadow = `none`;
            nav_list.style.boxShadow = `none`;
        }, 50);
        setTimeout(() => {
            nav_list.style.left = "-100vw";
            setTimeout(() => {
                nav_list.style.transition = "0s ease";
                nav_list.style.top = "-100vw";
                nav_list.style.left = "10vw";
            }, 200);
        }, 200);
    }

}