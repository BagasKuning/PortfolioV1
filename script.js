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

// Penanda apakah animasi sudah dijalankan
let animationRan = false;

// Fungsi untuk menangani scroll
function handleScroll() {
    let x = window.scrollY;

    if (x > nav.offsetHeight) {
        // Ketika scroll Y melebihi tinggi nav, atur opacity ke 0
        nav.style.opacity = 0;
    } else if(x === 0 && !animationRan){
        // Ketika scroll Y kurang dari atau sama dengan tinggi nav, atur opacity ke 1
        nav.style.opacity = 1;
    }

    if (x === 0 && !animationRan) {
        // Animasi hanya dijalankan ketika scroll Y mencapai 0 dan animasi belum dijalankan
        nav.style.animation = "navAnimBack .5s";
        navMid.style.animation = "navAnimMid .5s";
        nav.style.zIndex = 1;

        // Menandai bahwa animasi sudah dijalankan
        animationRan = true;

        // Menambahkan event listener untuk menangkap akhir animasi
        nav.addEventListener('animationend', handleAnimationEnd, { once: true });
        navMid.addEventListener('animationend', handleAnimationEnd, { once: true });
    } else if (x > 0 && x <= nav.offsetHeight) {
        // Reset penanda jika scroll Y bukan 0 dan kurang dari atau sama dengan tinggi nav
        animationRan = false;
    }
}

// Fungsi untuk menangani akhir animasi
function handleAnimationEnd() {
    // Menghapus animasi setelah selesai
    nav.style.animation = '';
    navMid.style.animation = '';
    // Mengembalikan elemen ke keadaan awal jika diperlukan
    nav.style.zIndex = ''; // Contoh: Mengembalikan zIndex ke nilai default
}

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', handleScroll);




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