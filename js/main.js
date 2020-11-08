(()=>{
    let navbar__mobile = document.getElementById('navbar__mobile');
    navbar__mobile.onclick =  function () {
        let navbar__listbox = document.getElementsByClassName('navbar__listbox')[0];
        let navbar__listitem = document.getElementsByClassName('navbar__listitem');
        let time = document.querySelector('.navbar__list > i');
       
            if(navbar__listbox.style.left == '0%') {
                navbar__listbox.style.left = '-100%';
                time.className = 'fas fa-bars';
                for(let i = 0; i < navbar__listitem.length;i++) {
                   
                    navbar__listitem[i].style.opacity = '0';
                }
                
            }
            else {
                navbar__listbox.style.left = '0%';
                time.className = 'fas fa-times';
                setTimeout(function () {
                    for(let i = 0; i < navbar__listitem.length;i++) {
                       
                        navbar__listitem[i].style.opacity = '1'
                    }
                }, 500)
            }
        
    }

})();

(()=> {
    let navbar__listitem = document.getElementsByClassName('navbar__listitem');
    let search_input = document.getElementById('search-input');
    window.onresize = function () {
        if(window.innerWidth > 768) {
           for(let i = 0; i < navbar__listitem.length;i++) {
               navbar__listitem[i].style.opacity = '1';
           }
           search_input.style.display = "block";
        } 
        else {
            search_input.style.display = "none";
        }
    }
    
})();

(()=>{
    let navbar__icon = document.getElementsByClassName('navbar__icon')[0];
    let search_input = document.getElementById('search-input');
    navbar__icon.onclick = function () {
        if(search_input.style.display == "block") {
            search_input.style.display = "none";
        } 
        else {
            search_input.style.display = "block";
        }
    }
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
            },2000);
    })
})();

(()=>{
    let product__heart = document.getElementsByClassName('product__heart');
    for(let i = 0; i < product__heart.length;i++)  {
        product__heart[i].childNodes[0].addEventListener('click', 
        function (event) {
            let mount = document.getElementById('navbar__heart').innerHTML;
            if(event.currentTarget.className == 'fas fa-heart') {
                event.currentTarget.className = 'far fa-heart';
                document.getElementById('navbar__heart').innerHTML = parseInt(mount)-1;
            }
            else {
                event.currentTarget.className = 'fas fa-heart';
                document.getElementById('navbar__heart').innerHTML = parseInt(mount)+1;
            }
        }
    )}
})();

