// *******
// Toggler
// *******

// function Toggler(el) {
//   const target = document.getElementById(el.getAttribute('aria-controls'));
//   const fixed = el.dataset.toggleFixed;
//   el.addEventListener("click", function(e) {
//     el.classList.toggle("is-active");
//     target.classList.toggle("is-active");


//     if (fixed !== undefined) {
//       window.scrollTo(0, 0);
//       document.querySelector("body").classList.toggle("overflow-hidden");
//     }
//   });
// }


// *********
// Blur Load
// *********

// function updateImage(el, img, srcset) {
//     // Check if source elements already exist
//     let sources = el.querySelectorAll("source");

//     if (typeof(srcset) != "undefined" && sources.length < 1) {


//       const webpSrcSet = srcset.replaceAll('?w=', '?fm=webp&w=');

//       // Create source element for JPG
//       const jpgSource = document.createElement("source");
//       jpgSource.setAttribute("srcset", srcset);
//       jpgSource.setAttribute("type", "image/jpeg");

//       // Create source element for WEBP
//       const webpSource = document.createElement("source");
//       webpSource.setAttribute("srcset", webpSrcSet);
//       webpSource.setAttribute("type", "image/webp");

//       // Add source elements
//       el.prepend(jpgSource);
//       el.prepend(webpSource);
//     }
// }

// function isInView(el) {
//   const box = el.getBoundingClientRect();
//   return box.top < window.innerHeight && box.bottom >= 0;
// }

// function BlurLoad(el) {
//   const img = el.querySelector("img");
//   const srcset = img.dataset.srcset;

//   // if in viewport and not large image
//   if (isInView(el)) {
//     updateImage(el, img, srcset);
//   }

//   // check on scroll/resize if in viewport
//   document.addEventListener('scroll', function(e) {
//     if (isInView(el)) {
//       updateImage(el, img, srcset);
//     }
//   });
//   document.addEventListener('resize', function(e) {
//     if (isInView(el)) {
//       updateImage(el, img, srcset);
//     }
//   });
// }

function RSVP(el) {
  const urlParams = new URLSearchParams(window.location.search);
  const rsvp = urlParams.get('rsvp');
  const openEl = el.querySelector("[data-rsvp-open]");
  const closedEl = el.querySelector("[data-rsvp-closed]");

  if (rsvp !== undefined && rsvp == 1) {
    openEl.classList.add('hidden');
    closedEl.classList.remove('hidden');
    location.href = "#";
    location.href = "#rsvp";
  } else {
    openEl.classList.remove('hidden');
    closedEl.classList.add('hidden');
  }
}



window.addEventListener('DOMContentLoaded', (event) => {
  // [...document.querySelectorAll("[data-toggle]")].map((el) => Toggler(el));
  [...document.querySelectorAll("[data-rsvp]")].map((el) => RSVP(el));
  // [...document.querySelectorAll("[data-blur-load]")].map((el) => BlurLoad(el));
  // [...document.querySelectorAll("[data-scroll-int]")].map((el) => BindScroll(el));
  // [...document.querySelectorAll("[data-tabs]")].map((el) => BindTabs(el));
});