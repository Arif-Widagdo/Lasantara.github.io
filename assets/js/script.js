$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });



    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.activeNavbar').addClass("sticky");
        }else{
            $('.activeNavbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

     // slide-up script
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

});



/*------------product filter and popup-------------------*/

(() => {
    const tabsContainer = document.querySelector(".list2"),
    productItems = document.querySelectorAll(".product-item");

    tabsContainer.addEventListener("click", (event) => {
        //    if event target contains 'tab-item' class and not contains 'active'
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
         
            // deactive existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("active");
            // active new 'tab-item'
            event.target.classList.add("active");
            // deactive existing active 'tab-content'
            const target = event.target.getAttribute("data-target");
            productItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || target === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })
})();


const dayNight = document.querySelector(".day-night input");
var element = document.body;
element.classList.toggle("dark-mode");

dayNight.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
})

// FAQs
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeFAQ");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}








