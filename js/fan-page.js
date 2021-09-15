/*===|For Timeline|==*/

// let mainNavLinks = document.querySelectorAll("#navwraper nav ul li a");
let mainSections = document.querySelectorAll("#navwraper main section");
let mainNavLinks = document.querySelectorAll(".rcb-history ul li a");

let header = document.querySelector(".rcb-history ");
window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    var imgeurl;
    switch (section.id) {
      case "section-1":
        imgeurl = "../image/banner.jpg";
        break;
      case "section-2":
        imgeurl = "../image/cricket-b-1.jpg";
        break;
      case "section-3":
        imgeurl = "../image/cricket-b-1.jpg";
        break;
      case "section-4":
        imgeurl = "../image/cricket-banner-1.jpg";
        break;
      case "section-5":
        imgeurl = "image/fan-banner.jpg";
        break;
      case "section-6":
        imgeurl = "../image/cricket1.jfif";
        break;
      case "section-7":
        imgeurl = "../image/cricket2.jpg";
        break;
      case "section-8":
        imgeurl = "../image/banner.jpg";
        break;
      case "section-9":
        imgeurl = "../image/cricket-banner-1.jpg";
        break;
    }
    if (
      section.offsetTop <= fromTop + 120 &&
      section.offsetTop + section.offsetHeight > fromTop + 120
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
    $(section).css({
      backgroundImage: "url(" + imgeurl + ")",
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
    });

    // function myFunction(media_small) {
    //     if (media_small.matches) { // If media query matches
    //         header.className = 'rcb-history fixed-top';
    //     } else {
    //         header.className = 'rcb-history';
    //     }
    // }

    // var media_small = window.matchMedia("(max-width: 600px)")
    // myFunction(media_small) // Call listener function at run time
    // media_small.addListener(myFunction) // Attach listener function on state changes

  });
  // if (window.matchMedia("(max-width: 680px)")) {
  //     if (window.scrollY > 1080) {
  //         document.getElementById("downarrow").style.display = "block";
  //     } else {
  //         document.getElementById("downarrow").style.display = "none";
  //     }
  // }  

});

$("#jumptosection").on("click", function () {
  var ancherid = $(mainNavLinks).attr("id");
  var ancherclass = $(mainNavLinks).attr("class");
  window.scrollBy(0, 200);
});
/*---------Script For fixed RCB HIstory top--------*/
document.addEventListener("scroll", function () {
  var header = document.getElementById("rcb-header");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-top");
  } else {
    header.classList.remove("fixed-top");
  }
});


});