
var menuItem = document.getElementById("menuItem")

menuItem.style.maxHeight = "0px";

function menutoggle() {
    if (menuItem.style.maxHeight == "0px") 
        {
        menuItem.style.maxHeight = "200px"

        
    }
    else
    {
        menuItem.style.maxHeight = "0px"
    }
}


var menuItem = document.getElementById("menuItem")

menuItem.style.maxHeight = "0px";

function menutoggle() {
    if (menuItem.style.maxHeight == "0px") 
        {
        menuItem.style.maxHeight = "200px"

        
    }
    else
    {
        menuItem.style.maxHeight = "0px"
    }
}


var btn = document.getElementById("btn")



  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('nav ul');

  menuIcon.addEventListener('click', () => {
    if(navMenu.style.maxHeight){
      navMenu.style.maxHeight = null;
    } else {
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
  });


  let menu = document.getElementById("menuItem");

function menutoggle() {
    menu.classList.toggle("active");
}



