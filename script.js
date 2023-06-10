// for nav underline
// JavaScript code
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section'); // Assuming sections are using <section> tag
  var navLinks = document.querySelectorAll('.navbar .menu li a');

  var currentSection = '';

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.textDecoration = 'none'; // Remove underline from all links
    if (link.getAttribute('href') === '#' + currentSection) {
      link.style.borderBottom = '3.5px solid #2E2BC3'; // Customize the underline style with a bottom border
      link.style.paddingBottom = '2px'; // Adjust the distance between the text and underline
    } else {
      link.style.borderBottom = 'none'; // Reset to no underline for inactive links
      link.style.paddingBottom = '0'; // Reset the padding
    }
  });
});


// for menu in mobile
// Get the necessary elements
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu li a');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'active' class on the menu
  menu.classList.toggle('active');
});

// Add click event listeners to menu links
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Scroll to the target section
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
    });

    // Hide the menu after clicking a link (optional)
    menu.classList.remove('active');
  });
});

// disble right click
document.addEventListener('DOMContentLoaded', function() {
  var rightSideImages = document.querySelectorAll('.right-side img');
  var miscImages = document.querySelectorAll('.misc img');

  // Function to disable right-click
  function disableRightClick(e) {
    e.preventDefault();
  }

  // Disable right-click for images in the right-side section
  for (var i = 0; i < rightSideImages.length; i++) {
    rightSideImages[i].addEventListener('contextmenu', disableRightClick);
  }

  // Disable right-click for images in the misc section
  for (var i = 0; i < miscImages.length; i++) {
    miscImages[i].addEventListener('contextmenu', disableRightClick);
  }

  // Function to disable touch-and-hold on mobile devices
  function disableTouchHold(e) {
    e.preventDefault();
  }

  // Disable touch-and-hold for images in the right-side section
  for (var i = 0; i < rightSideImages.length; i++) {
    rightSideImages[i].addEventListener('touchstart', disableTouchHold);
  }

  // Disable touch-and-hold for images in the misc section
  for (var i = 0; i < miscImages.length; i++) {
    miscImages[i].addEventListener('touchstart', disableTouchHold);
  }
});





