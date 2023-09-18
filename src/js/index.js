const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

const navBarAnchorsSections = document.querySelectorAll(
  "#sellers, #marketers, #contactus"
);

const getTopRectanglesForNavbar = () => {
  return Array.from(navBarAnchorsSections).map((section) => {
    const sectionId = section.id;
    const sectionRect = section.getBoundingClientRect();
    return { id: sectionId, top: sectionRect.top, bottom: sectionRect.bottom };
  });
};

const handleStickyNavbar = () => {
  navbar.classList.toggle("bg-light", window.scrollY > sticky);
  navbar.classList.toggle("bg-transparent", window.scrollY <= sticky);
};

const handleActiveAnchorsNavbar = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;

  const topRectangles = getTopRectanglesForNavbar();
  let activeAnchorFound = false;

  for (const sectionData of topRectangles) {
    const { id, top, bottom } = sectionData;
    const anchor = document.querySelector(`a[href="#${id}"]`);
    
    // Adjust the condition to check if the section is in the viewport with a buffer
    if (scrollY >= top - windowHeight * 0.2 && scrollY < bottom - windowHeight * 0.2) {
      anchor.classList.add("active");
      activeAnchorFound = true;
    } else {
      anchor.classList.remove("active");
    }
  }

  // Handle the "contactus" anchor separately
  const contactUsAnchor = document.querySelector('a[href="#contactus"]');
  contactUsAnchor.classList.toggle(
    "active",
    scrollY + windowHeight >= documentHeight
  );


};

const handleScroll = () => {
  handleStickyNavbar();
  handleActiveAnchorsNavbar();
};

window.onload = () => {
  getTopRectanglesForNavbar();
  window.onscroll = handleScroll;
};
