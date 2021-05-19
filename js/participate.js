  /*Set the date we're counting down to*/
        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

        /*Update the count down every 1 second*/
        var x = setInterval(function () {

            /*Get today's date and time*/
            var now = new Date().getTime();

            /*Find the distance between now and the count down date*/
            var distance = countDownDate - now;

            /*Time calculations for days, hours, minutes and seconds*/
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 *
                60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 *
                60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            /*Display the result in the element with id="demo"*/
            document.getElementById("demo").innerHTML = "Time Left:" + days +
                "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            /*If the count down is finished, write some text*/
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

        /*Carousel Auto Start*/
        $('.carousel').carousel({
            interval: 7000
        });


        var username = "";
        var useremail = "";

        function validateForm() {
            const re =
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


            if (name1 == "") {
                alert("Please Enter Name first.");
                return false;
            } else if (email1 == "") {
                alert("Please Enter Email first.");
                return false;
            } else if (re.test(email1)) {
                alert("Invalid Email ID.");
                return false;
            }
            return true;
        }
        // Code for stepwise form 
        const steps = Array.from(document.querySelectorAll("form .step"));
        const nextBtn = document.querySelectorAll("form .next-btn");
        const prevBtn = document.querySelectorAll("form .previous-btn");
        const form = document.querySelector("form");
        const progressText = document.querySelectorAll(".step1 p");
        const progressCheck = document.querySelectorAll(".step1 .check");
        const bullet = document.querySelectorAll(".step1 .bullet");
        nextBtn.forEach((button) => {
            button.addEventListener("click", () => {
                changeStep("next");

            });
        });
        prevBtn.forEach((button) => {
            button.addEventListener("click", () => {
                changeStep("prev");
            });
        });
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = [];
            form.querySelectorAll("input").forEach((input) => {
                const {
                    name,
                    value
                } = input;
                inputs.push({
                    name,
                    value
                });
            });
            console.log(inputs);
            form.reset();
        });

        function changeStep(btn) {
            let current = 1;
            let index = 0;
            const active = document.querySelector(".active2");
            const active1 = document.querySelector(".active2");
            current = steps.indexOf(active1);
            index = steps.indexOf(active);
            steps[index].classList.remove("active2");
            if (btn === "next") {
                index++;
                bullet[current].classList.add("active1");
                progressCheck[current].classList.add("active1");
                progressText[current].classList.add("active1");
                current += 1;

            } else if (btn === "prev") {
                index--;
                bullet[current - 1].classList.remove("active1");
                progressCheck[current - 2].classList.remove("active1");
                progressText[current - 2].classList.remove("active1");
                current -= 1;
            }
            steps[index].classList.add("active2");
           /*if(index==0)
            {
               username=document.getElementById("name").value;
               document.getElementById("name1").innerHTML=username;
               document.getElementById("name2").innerHTML=username;
            }else if(index==2)
            {
               username=document.getElementById("email").value;
               document.getElementById("email1").innerHTML=useremail;
               document.getElementById("email2").innerHTML=useremail;
               document.getElementById("email3").innerHTML=useremail;
            }
            */

        }


        function gotoStep2() {
            steps[1].classList.add("active2");
            steps[0].classList.remove("active2");
            steps[2].classList.remove("active2");
            steps[3].classList.remove("active2");

        }