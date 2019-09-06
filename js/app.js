$("nav ul").click(function(){
  
  if(window.innerWidth < 1050){
  $("nav ul").slideToggle();
  document.getElementById("nav-toggle").classList.remove("active");
  }
})




$("#nav-toggle").click(function() {
  $("nav ul").slideToggle();
});

// Hamburger to X toggle
$("#nav-toggle").on("click", function() {
  this.classList.toggle("active");
});

// click anywhere will close menu
$("#main").click(function() {
  $("nav ul").slideUp();
  let nav = document.getElementById("nav-toggle");
  nav.classList.remove("active");
});



// scroll will add navigation-scroll class
$(document).scroll(function() {
  if ($(window).scrollTop() > 550) {
    let toggle = document.getElementById("nav-toggle");
    toggle.classList.add("nav-toggle-scroll");
  } else {
    navigation.classList.remove("navigation-scroll");
    let toggle = document.getElementById("nav-toggle");
    toggle.classList.remove("nav-toggle-scroll");
  }
});

$("#navigation a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

var navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {
  let waypoint = [];
  waypoint[i] = new Waypoint({
    element: document.getElementById(navItems[i].id.replace("nav-", "")),
    handler: function(direction) {
      for (const item of navItems) {
        item.classList.remove("active");

        if (direction === "up") {
          if (i === 0) {
          }
          if (i !== 0) {
            document.getElementById(navItems[i - 1].classList.add("active"));
          }
        } else {
          document.getElementById(navItems[i].id).classList.add("active");
        }
      }
    },
    offset: 120
  });
}
