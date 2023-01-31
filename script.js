const nav = document.getElementsByTagName('nav')[0]
const desc = this.document.getElementById('desc')

const descBefore = this.document.getElementsByClassName('desc-before')[0]
const descAfter = this.document.getElementsByClassName('desc-after')[0]


const descHeight = desc.offsetHeight / 4;

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
    } else {  
        nav.style.position = "static";
        nav.removeAttribute('style');
        // desc.removeAttribute('style');
    }
    
    if(x < desc.offsetHeight - nav.offsetHeight){
        descBefore.style.animation = 'descBeforeAnim 1.1s ease-out forwards';
        descAfter.style.animation = 'descAfterAnim 1.1s ease-out forwards';
    } else {
        descBefore.removeAttribute('style')
        descAfter.removeAttribute('style')
    }


    })

    