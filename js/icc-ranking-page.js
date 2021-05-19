   $(window).on('load', function () {
            var audio = document.getElementById("my_audio");
            audio.play();
        });
        $('.counter-count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        function counterfn() {
            $('.counter-count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            playaudio ();
        } 
        function playaudio () {           
            var audio = document.getElementById("my_audio");
            audio.play();
        
        } 