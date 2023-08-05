var scrolToTop = document.querySelector('.scroll-up');
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
   
    if((rootElement.scrollTop / scrollTotal ) > 0.20 ){

        scrolToTop.classList.add("showBtn");
       
 
}
else{
    scrolToTop.classList.remove("showBtn");
}

}
function scrollToTopbt() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  scrolToTop.addEventListener("click", scrollToTopbt);
document.addEventListener("scroll", handleScroll);
