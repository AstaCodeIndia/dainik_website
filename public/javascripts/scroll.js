// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  // console.log(e);
});

// let count = 0;
const showMenu = () => {
  let UL = document.getElementById('links')
  let count = 1;
  document.querySelector('#menu-btn').addEventListener('click', () => {
    if (count == 1) {
      UL.style.display = "block";
      document.querySelector('#menu-btn').innerHTML = "Close"
      count=0;
    } else {
      UL.style.display = "none";
      document.querySelector('#menu-btn').innerHTML = "Menu"
      count=1;
    }
  })
  // console.log(UL)
}

showMenu()

gsap.registerPlugin(ScrollTrigger);
