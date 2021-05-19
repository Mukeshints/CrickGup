 /*for popup js*/
        $(document).scroll(function () {
            myID = document.getElementById("advertisement");
            myIDfooter = document.getElementById("footer-wraper");
            var myScrollFunc = function () {
                var y = window.scrollY;
                if (y >= 50) {
                    myID.className = "advertisement show";
                } else {
                    myID.className = "advertisement hide"
                }
            };
            var myScrollFunc1 = function openForm() {
                document.getElementById("expandwrap").style.display = "block";
            }
            window.addEventListener("scroll", myScrollFunc);
            window.addEventListener("scroll", myScrollFunc1);
        });
        $('.carousel').carousel({
            interval: 7000
        });
        /*Set the date we're counting down to*/
        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
        /*Update the count down every 1 second*/
        var x = setInterval(function () {
            /*Get today's date and time*/
            var now = new Date().getTime();
            /* Find the distance between now and the count down date*/
            var distance = countDownDate - now;
            /* Time calculations for days, hours, minutes and seconds*/
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *
                60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            /* Display the result in the element with id="demom" */
            document.getElementById("demom").innerHTML = "Time Left:" + days +
                "d " + hours + "h " +
                minutes + "m " + seconds + "s ";
            /* If the count down is finished, write some text*/
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demom").innerHTML = "EXPIRED";
            }
        }, 1000);
        function openForm() {
            document.getElementById("expandwrap").style.display = "block";
        }
        function closeForm() {
            document.getElementById("expandwrap").style.display = "none";
        }  
        /*Clock Timer javascript*/
        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
            function updateClock() {
                var t = getTimeRemaining(endtime);
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }
        var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
        /*script for slider*/
        var slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }