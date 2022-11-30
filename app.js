
//  Elements for the navbar
const navbar = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.nav-link')
const logo = document.querySelector('.logo')

let position;



//Navbar animation effect
window.addEventListener('scroll', () => {
  let position = window.pageYOffset;
  if(position >= 200){
    navbar.classList.add('sticky');
    logo.classList.add('color-change--logo');
    for (let i = 0 ; i < navigationItems.length ; i++) {
      navigationItems[i].classList.add('color-change');
    }
  } else if(position < 200) {
    navbar.classList.remove('sticky');
    logo.classList.remove('color-change--logo');
    for (let i = 0 ; i < navigationItems.length ; i++) {
      navigationItems[i].classList.remove('color-change');
    }
  }
});


// console.log(position);
// console.log(navbar.classList)
// console.log(navigationItems);



//Parallax effect on the main title
//subtitle disappears to the left...
const parallax = document.getElementById('parallax')
const subtitle = document.querySelector('.subtitle')

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  let rate = offset * 0.43;
  parallax.style.transform = 'translate3d(0px,'+rate+'px, 0px)';
  subtitle.style.transform = 'translate3d(-'+rate+'px, 0px, 0px)';
  // console.log(offset)
});

console.log(parallax);

console.log(parallax.style);

//Parallax effect on the info section
//title apears from the left...

// const parallaxInfoSection = document.querySelector('.info-title');
// window.addEventListener('scroll', () => {
//   let offset = window.pageYOffset;
//   let rate = -800 + offset * 0.9;
//   if(rate < 200){
//   // parallaxInfoSection.style.transform = 'translate('+rate+'px, 0px)';
//   parallaxInfoSection.style.marginLeft = `${rate + "px"}`;
//   console.log(rate);
//   }
//   // console.log(offset)
// });

//animation for content on page
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); 
    }
  })
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Countdown clock



const countdown = () => {
  const countDate = new Date(`May 01, 2024 00:00:00`).getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  // console.log(gap);

  //generating time segments
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //countdwond calculation

  // const dayText = Math.floor(gap / day);
  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap%day) / hour);
  const minuteText = Math.floor((gap%hour) / minute);
  const secondText = Math.floor((gap%minute) / second);

  //add time to the DOM element

  document.querySelector(`.day`).textContent = dayText;
  document.querySelector(`.hour`).textContent = hourText;
  document.querySelector(`.minute`).textContent = minuteText;
  document.querySelector(`.second`).textContent = secondText;

  //Gramatical plurality and singularity

  const textDays = document.querySelector(`.text-days`).textContent;
  const textHours = document.querySelector(`.text-hours`).textContent;
  const textMinutes = document.querySelector(`.text-minutes`).textContent;
  const textSeconds = document.querySelector(`.text-seconds`).textContent;



  if(dayText === 1){
    document.querySelector(`.text-days`).textContent = `Day`;
  } else {
    document.querySelector(`.text-days`).textContent = `Days`;
  };

  if(hourText === 1){
    document.querySelector(`.text-hours`).textContent = `Hour`;
  } else {
    document.querySelector(`.text-hours`).textContent = `Hours`;
  };

  if(minuteText === 1){
    document.querySelector(`.text-minutes`).textContent = `Minute`;
  } else {
    document.querySelector(`.text-minutes`).textContent = `Minutes`;
  };

  if(secondText === 1){
    document.querySelector(`.text-seconds`).textContent = `Second`
  } else {
    document.querySelector(`.text-seconds`).textContent = `Seconds`
  };

  // console.log(dayText);
  // console.log(hourText);
  // console.log(minuteText);
  // console.log(secondText);
}
setInterval(countdown, 1000)


//Contact form function

