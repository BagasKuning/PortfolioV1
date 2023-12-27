const nav = document.getElementsByTagName('nav')[0]
const desc = this.document.getElementById('desc')
const nav2 = document.getElementsByClassName('nav')[0]

const descBefore = this.document.getElementsByClassName('desc-before')[0]
const descAfter = this.document.getElementsByClassName('desc-after')[0]

const descHeight = desc.offsetHeight / 4;

nav2.style.height = nav.offsetHeight + 'px';
nav2.style.width = '100%';

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 530) {
        nav2.style.height = nav.offsetHeight + 'px';
    } else {
        nav2.style.height = nav.offsetHeight + 'px';
    }

})

desc.addEventListener('mouseenter', function () {
    descBefore.style.animation = 'descBeforeAnim 1.1s ease-out forwards';
    descAfter.style.animation = 'descAfterAnim 1.1s ease-out forwards';
})

const navLeft = document.getElementsByClassName("nav-left")[0]
const navMid = nav.childNodes[3]
const navRight = document.getElementsByClassName("nav-right")[0]

window.addEventListener('scroll', function () {
    let x = window.scrollY

    if (x > nav.offsetHeight) {
        nav.removeAttribute('style');
        navMid.removeAttribute('style');
    } else {
        nav.style.animation = "navAnimBack 1.1s";
        navMid.style.animation = "navAnimMid 1.1s";
        nav.style.zIndex = 1
    }
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('black-to-gray');
            descBefore.style.animation = 'descBeforeAnim 1.1s ease-out forwards';
            descAfter.style.animation = 'descAfterAnim 1.1s ease-out forwards';
        } else {
            entry.target.classList.remove('black-to-gray');
            descBefore.removeAttribute('style');
            descAfter.removeAttribute('style');
        }
    });
}, { rootMargin: '180px 0px' }); // Adjust the rootMargin as needed

const descSpan = desc.querySelectorAll("span");
descSpan.forEach((el) => observer.observe(el));