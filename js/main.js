/* ==========================
   UKPay Website Main JS
========================== */



document.addEventListener(
    "DOMContentLoaded",
    function () {



        /* ==========================
           Banner Carousel
        ========================== */


        const slides =
            document.querySelectorAll(".slide");


        const dots =
            document.querySelectorAll(".dot");


        const banner =
            document.querySelector(".banner");



        let currentSlide = 0;


        let timer = null;






        function showSlide(index) {



            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });



            dots.forEach(function (dot) {

                dot.classList.remove("active");

            });




            if (slides[index]) {


                slides[index]
                    .classList.add("active");


            }




            if (dots[index]) {


                dots[index]
                    .classList.add("active");


            }




            currentSlide = index;



        }







        function nextSlide() {



            currentSlide++;



            if (currentSlide >= slides.length) {


                currentSlide = 0;


            }



            showSlide(currentSlide);



        }







        function startSlider() {



            stopSlider();



            timer = setInterval(function () {



                nextSlide();



            }, 5000);



        }







        function stopSlider() {



            if (timer) {


                clearInterval(timer);


                timer = null;


            }



        }








        // 点击圆点切换


        dots.forEach(function (dot) {



            dot.addEventListener(
                "click",
                function () {



                    let index =
                        Number(this.dataset.index);



                    showSlide(index);



                    startSlider();



                });



        });








        // 鼠标悬停暂停


        if (banner) {



            banner.addEventListener(
                "mouseenter",
                function () {


                    stopSlider();


                });





            banner.addEventListener(
                "mouseleave",
                function () {


                    startSlider();


                });



        }







        // 启动轮播


        if (slides.length > 0) {


            showSlide(0);


            startSlider();


        }










        /* ==========================
           Mobile Navigation
        ========================== */


        const menuBtn =
            document.querySelector(".mobile-menu");


        const nav =
            document.querySelector("nav");




        if (menuBtn) {



            menuBtn.addEventListener(
                "click",
                function () {



                    nav.classList.toggle("show");



                });



        }









        /* ==========================
           Smooth Scroll
        ========================== */


        document.querySelectorAll(
            'a[href^="#"]'
        )
            .forEach(function (anchor) {



                anchor.addEventListener(
                    "click",
                    function (e) {



                        e.preventDefault();



                        const target =
                            document.querySelector(
                                this.getAttribute("href")
                            );




                        if (target) {


                            target.scrollIntoView({

                                behavior: "smooth"

                            });


                        }



                    });



            });









        /* ==========================
         Header Shadow
        ========================== */


        const header =
            document.querySelector(".header");



        window.addEventListener(
            "scroll",
            function () {



                if (!header) return;



                if (window.scrollY > 50) {



                    header.style.boxShadow =
                        "0 5px 20px rgba(0,0,0,.08)";



                } else {


                    header.style.boxShadow = "none";


                }



            });









        /* ==========================
         Card Animation
        ========================== */



        const cards =
            document.querySelectorAll(
                ".card,.adv-box,.service-card,.news-card"
            );




        if (
            "IntersectionObserver"
            in window
        ) {



            const observer =
                new IntersectionObserver(
                    function (entries) {



                        entries.forEach(function (entry) {



                            if (entry.isIntersecting) {



                                entry.target.style.opacity = "1";


                                entry.target.style.transform =
                                    "translateY(0)";



                                observer.unobserve(
                                    entry.target
                                );



                            }



                        });



                    },
                    {
                        threshold: .15
                    });






            cards.forEach(function (card) {



                card.style.opacity = "0";


                card.style.transform =
                    "translateY(40px)";


                card.style.transition =
                    "all .6s ease";



                observer.observe(card);



            });



        }



    });