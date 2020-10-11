(()=>{
    let navbar__mobile = document.getElementById('navbar__mobile');
    navbar__mobile.addEventListener('click', function () {
        let navbar__listbox = document.getElementsByClassName('navbar__listbox')[0];
        let navbar__listitem = document.getElementsByClassName('navbar__listitem');
        let time = document.querySelector('.navbar__list > i');
       
            if(navbar__listbox.style.left == '-100%') {
                navbar__listbox.style.left = '0';
                time.className = 'fas fa-times';
                setTimeout(function () {
                    for(let i = 0; i < navbar__listitem.length;i++) {
                        navbar__listitem[i].style.animation = 'toright 0.5s';
                        navbar__listitem[i].style.opacity = '1'
                    }
                }, 500)
            }
            else {
                navbar__listbox.style.left = '-100%';
                time.className = 'fas fa-bars';
                for(let i = 0; i < navbar__listitem.length;i++) {
                    navbar__listitem[i].style.animation = 'none';
                    navbar__listitem[i].style.opacity = '0';
                }
            }
        
    })

})();

(()=> {
    var lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        let menu = document.querySelector('.menu');
        if (st > lastScrollTop){
            menu.style.top = '-70px';
         } else { 
            menu.style.top = '0px';
         }
         lastScrollTop = st <= 0 ? 0 : st;
    });
})();
(()=>{
    let review__btn = document.getElementsByClassName('review__btn')[0];
    review__btn.addEventListener('click', 
        function () {
            let review__btn = document.getElementsByClassName('review__btn')[0];
            let review__listitem = document.getElementsByClassName('review__listitem');
            let load = document.querySelector('.review__btn i');
            load.style.display = 'block';
            setTimeout(function () {
                for(let i = 3; i <= 5;i++) {
                    review__listitem[i].style.position = 'relative';
                    review__listitem[i].style.opacity = '1';
                    review__listitem[i].style.transform = 'scale(1)';
                }
                review__btn.style.display = 'none';
            },1000);
    })
})();
