// function to grab the class name of elements
const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// grabbing specific class names
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

//attaching an event listener on the class for navBtn to add another class on the nav-links
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// selecting date element
const date = getElement('#date')
// function for getting the current year
const currentYear = new Date().getFullYear()
// adding the year into the footer
date.textContent = currentYear
