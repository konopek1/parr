window.onload = () => {
  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000,
    once:true,
    mirror:false
  });
}

function extendConsulting() {
  const consultingExtendContainer =  document.querySelector("#consultingExtendContainer");
  consultingExtendContainer.classList.toggle("hide");
  window.scroll(0,pageYOffset + 200);
}

function scrollToSection(targetClass) {
    let element = document.querySelector(`.${targetClass}`);

  const y = element.getBoundingClientRect().top + window.pageYOffset - 50;

  window.scrollTo({top: y, behavior: 'smooth'});
}
