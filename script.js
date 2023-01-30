const nav = document.getElementsByTagName('nav')[0]
const desc = this.document.getElementById('desc')

const descHeight = desc.offsetHeight / 4;

window.addEventListener('scroll', function(){
    let x = window.scrollY
    
    if(x > nav.offsetHeight){
        nav.style.position = "fixed";
        nav.style.top = "0px";
        nav.style.animation = "navAnim .6s";
        nav.style.borderBottom = '3px solid whitesmoke';
        // desc.style.marginTop = descHeight + 'px';
    } else {
        nav.style.position = "static";
        nav.removeAttribute('style');
        // desc.removeAttribute('style');
    }
    })