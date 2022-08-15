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

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose_img, .calculate__content`, { origin: 'left' });
sr.reveal(`.choose_content, calculate__img`, { origin: 'right' });

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

/*=============== EMAIL JS ==================*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field  has  a value
    if (contactUser.value === '') {
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        contactMessage.textContent = 'Your must enter your email 🤔';
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templateID -#form - publicKey
        emailjs.sendForm('service_8ii265v', 'template_guf0dsp', '#contact-form', 'VQaq6RG_bXgUd7BNm')
            .then(() => {
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'You registered successfully 👍';
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                alert('OOPS! SOMETHINGS HAS FAILED...', error)
            })
        contactUser.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail)
