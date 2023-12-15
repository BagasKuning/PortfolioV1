const nav = document.getElementById('navbar')
const desc = this.document.getElementById('desc')
const nav2 = document.getElementsByClassName('nav')[0]

const descBefore = this.document.getElementsByClassName('desc-before')[0]
const descAfter = this.document.getElementsByClassName('desc-after')[0]

const descHeight = desc.offsetHeight / 4;

nav2.style.height = nav.offsetHeight + 'px';
nav2.style.width = '100%';
nav2.style.position = 'fixed';

desc.addEventListener('mouseenter', function(){
    descBefore.style.animation = 'descBeforeAnim 1.1s ease-out forwards';
    descAfter.style.animation = 'descAfterAnim 1.1s ease-out forwards';
})

window.addEventListener('scroll', function(){
    let x = window.scrollY
    
    if(x > nav.offsetHeight){
        nav.style.position = "fixed";
        nav.style.top = "0px";
        nav.style.animation = "navAnim .6s";
        nav.style.borderBottom = '3px solid whitesmoke';
        nav2.style.position = 'relative';
    } else {  
        nav.style.position = "static";
        nav.removeAttribute('style');
        nav2.style.position = 'fixed';
        // desc.removeAttribute('style');
    }
})



    const observer = new IntersectionObserver((enteries) => {
        enteries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('black-to-gray');
                descBefore.style.animation = 'descBeforeAnim 1.1s ease-out forwards';
                descAfter.style.animation = 'descAfterAnim 1.1s ease-out forwards';
            } else {
                entry.target.classList.remove('black-to-gray');
                descBefore.removeAttribute('style')
                descAfter.removeAttribute('style')
            };
        })
    });

    const descSpan = desc.querySelectorAll("span");
    descSpan.forEach((el) => observer.observe(el));
    
    