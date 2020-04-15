function hover(element) {
    element = element.getElementsByTagName('img')[0];
    element.setAttribute('src', 'assets/img/icon/'+element.alt+'_hover.png');
  }
  
  function unhover(element) {
    element = element.getElementsByTagName('img')[0];
    element.setAttribute('src', 'assets/img/icon/'+element.alt+'.png');
  }

  function toogle_sidebar() {
    var navbar = document.getElementById("navbar");

      navbar.classList.remove("remove_sidebar");
      navbar.classList.add("show_sidebar");
  }

  function sidebar_close_toogle() {
    var navbar = document.getElementById("navbar");
    
    navbar.classList.remove("show_sidebar");
    navbar.classList.add("remove_sidebar");
  }