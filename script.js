/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
console.log(document.getElementById('nav-toggle'));

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        console.log(navMenu);
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMassage = document.getElementById('calculate-message');
const calculateBmi = (e) => {
    e.preventDefault();
    // Check if the field have  a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        // Add remove color
        calculateMassage.classList.remove('color-green');
        calculateMassage.classList.add('color-red');
        // Show message
        calculateMassage.textContent = 'Fill in the Weight and Height 🐱‍💻'
        // Remove message three seconds
        setTimeout(() => {
            calculateMassage.textContent = '';
        }, 3000)
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm));
        // Show your heals status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMassage.classList.add('color-green');
            calculateMassage.textContent = `Your BMI is ${bmi} and your are skinny 😒`
        } else if (bmi < 25) {
            calculateMassage.classList.add('color-green');
            calculateMassage.textContent = `Your BMI is ${bmi} and your are healthy 👌`
        } else {
            calculateMassage.classList.add('color-green');
            calculateMassage.textContent = `Your BMI is ${bmi} and your are overweight 😒`
        }
        //  To clear the input field
        calculateCm.value = '';
        calculateKg.value = '';
        //  Remove message four second
        setTimeout(() => {
            calculateMassage.textContent = '';
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)