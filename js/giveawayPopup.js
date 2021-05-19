  // Set the date we're counting down to
                        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
                        // Update the count down every 1 second
                        var x = setInterval(function () {
                           // Get today's date and time
                           var now = new Date().getTime();
                           // Find the distance between now and the count down date
                           var distance = countDownDate - now;
                           // Time calculations for days, hours, minutes and seconds
                           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                           var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                           // Display the result in the element with id="demom" 
                           document.getElementById("demom").innerHTML = "Time Left:" + days + "d " + hours +
                              "h " +
                              minutes + "m " + seconds + "s ";
                           // If the count down is finished, write some text
                           if (distance < 0) {
                              clearInterval(x);
                              document.getElementById("demom").innerHTML = "EXPIRED";
                           }
                        }, 1000);


// for  interactive input 
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let giveawayDate = "Apr 30, 2021 00:00:00",
        countDown = new Date(giveawayDate).getTime(),
        x = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;
            if (document.getElementById('countdown-days') != null) { 
            document.getElementById('countdown-days').innerText = Math.floor(distance / (day)),
                document.getElementById('countdown-hours').innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById('countdown-minutes').innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById('countdown-seconds').innerText = Math.floor((distance % (minute)) / (second));
            //do something when date is reached
            if (distance < 0) {
                let timetTitle = document.getElementById("headline"),
                    countDown = document.getElementById("coundown");
                timetTitle.innerText = "End of the Sale!";
                countDown.style.display = "none";

                clearInterval(x);
            }
        }
        }, 0)
}());

String.prototype.has = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != '' && this.indexOf(arguments[i]) != -1) return true;
    }
    return false;
};

String.prototype.is = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (this == arguments[i]) return true;
    }
    return false;
};

String.prototype.toTitleCase = function () {
    return this.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};


var yourname,emailaddress,friendname,confirmemailaddress,stepnumber = 25;

var si = 0;
var sts = [
    /*[0]*/
    'Welcome Dear Friend, We are Contesting Biggest Giveaway From CricGup.^',
    /*[1]*/
    'Give us your Name...>',
    /*[2]*/
    '',
    /*[3]*/
    '',
    /*[4]*/
    '',
    /*[5]*/
    '',
    /*[6]*/
    ''
];
var ii = 0;
var ids = ['pin_0', 'pin_1', 'pin_2', 'pin_3', 'pin_4', 'pin_5'];


_set_cursor = function(s) {
    document.body.className = s;
    console.log(document.body.className)
};
  
_show_name = function() {
    your_name.className = 'wake pulse';
    your_name.focus();
}

_show_email = function() {
	var ename = yourname.replace(/\s/g, '');
	email_address.value = ename + '@';
	email_address.className = 'wake pulse';
    email_address.focus();
    your_name.className = 'hide';
};

_show_friend = function() {
	refer_friend.className = 'wake';
	refer_friend.focus();
};

_show_confirm_email_address = function() {
    confirm_email_address.value = emailaddress;
    confirm_email_address.className = 'wake pulse';
    confirm_email_address.focus();
}
const nextimage= document.querySelector(".img-wraper .img-1");
let current =1;   
_update_step = function () {    
    
    var progressBar = document.getElementById('progessBar');
    progressBar.style.width = stepnumber + '%';

}

var fi = 3;
var funcs = [
    /*[0] - toggle cursor state*/
    _set_cursor,
    function() {
        console.log('f1')
      },
      /*[2]*/
      function() {
        console.log('f2')
      },
      /* Functions to run consectively: fi 3+ */
      /*[3]*/
      _show_name,
      /*[4]*/
	_show_email,
    /*[5]*/
    _show_friend,
    /*[6]*/
    _show_confirm_email_address,
    /*[7]*/
    function() {
        console.log('f7');
    }
]

var textHolder, textTarget, letter, li, typeSpeed = 25,
    shortPause = 250,
    longPause = 500,
    tenseSilence = 2000,
    waiting = false;

_type();

function _type(){
    if(waiting == false) {
        li = 0;
        waiting = true;
        textTarget = document.getElementById('pin_'+ii);
        textTarget.innerHTML = '';
        textTarget.className = '';
        console.log(si);
        textHolder = sts[si].split('');
        console.log(textHolder);
        _get();
        funcs[0]('wait');
    }
}

function _get() {
    if(li < textHolder.length) {
        setTimeout(
            function() {
                letter = document.createTextNode(textHolder[li]);
                _print(textTarget, letter);
            },typeSpeed);
    } else {
        waiting = false;
        funcs[0]('');
    }
}

function _print(textTarget, letter) {
    li++;
    if (letter.nodeValue == ',' || letter.nodeValue == ';' || letter.nodeValue == ':') {
        setTimeout(_get, shortPause);
    } else if (letter.nodeValue == '.' || letter.nodeValue == '!' || letter.nodeValue == '?') {
        setTimeout(_get, longPause);
    } else if (letter.nodeValue == '_') {
        letter.nodeValue = ' ';
        setTimeout(_get, tenseSilence);
    } else if (letter.nodeValue == '^') {
        /* interrupt typing, advance to the next string and the next spot and continue*/
        letter.nodeValue = '';
        waiting = false;
        funcs[0]('');
       // document.getElementById('pin_' + ii).className = 'rest';
        si++;
        ii++;
        if ((sts[si] != 'undefined') && (ids[ii] != 'undefined')) _type();
    } else if (letter.nodeValue == '>') {
        /* run next function */
        fi = Math.min(fi, (funcs.length - 1));
        funcs[fi]();
        console.log('function' + fi + 'called');
        letter.nodeValue = '';
        fi++;
        _get();
    } else if (letter.nodeValue == '<') {
        /* run previous function - do I need this? */
        fi = Math.max(fi, 3);
        funcs[fi]();
        console.log('function' + fi + 'called');
        letter.nodeValue = '';
        fi--;
        _get();
    } else { 
        _get();
    }
    textTarget.appendChild(letter);
};

_your_name_react = function() {
    if (your_name.value != '' && si == 1) {
        
        document.getElementById('pin_'+(ii-1)).className = 'rest';
        document.getElementById('pin_'+ii).className = 'rest';
        yourname = your_name.value.toTitleCase();
        sts[2] = 'All right, ' + yourname + '. let\'s think what else we need... oh, how about your email address?>'
        si = 2;
        ii = 2;
        your_name.removeEventListener('blur', _your_name_react, false);
        your_name.className = 'sleep';
        your_name.parentNode.className = 'collapsed';      
        _update_step();
        _type();
        // code for image change on entry of name
        document.getElementById('image1').className = 'hide';
        document.getElementById('image2').className = 'show';
    }
}

_email_address_react = function() {
    if (email_address.value != '' && si == 2) {
        document.getElementById('pin_' + ii).className = 'rest';
        emailaddress = email_address.value;
        sts[3] = 'Thank you, ' + yourname + '. If you share one of our most trending contents then you increase your winning chance by 120% >'
        si = 3;
        ii = 3;
        email_address.removeEventListener('blur', _your_name_react, false);
        email_address.className = 'sleep';
        email_address.parentNode.className = 'collapsed';
        stepnumber = stepnumber + 25;
       
        _update_step();
        _type();

         //code for image chage after entry of email
         document.getElementById('image1').className = 'hide';
         document.getElementById('image2').className = 'hide';
        document.getElementById('image3').className = 'show';
        document.getElementById('namewraper').className = 'no-height';
         setTimeout(function()
                                            {
                                                document.getElementById('divfacebook').classList.remove('hide');
                                                      document.getElementById('divfacebook').classList.add('show');                                       
                                            }, 30000);
    }
    
}

_refer_friends_react = function() {
    if(refer_friend.value != '' && si == 3) {
        //document.getElementById('pin_' + ii).className = 'rest';
        friendname = refer_friend.value.toTitleCase();
        sts[4] = 'Thank you, ' + yourname + ''
        si = 4;
        ii = 4;
        refer_friend.removeEventListener('blur', _your_name_react, false);
        refer_friend.className = 'sleep';
        refer_friend.parentNode.className = 'collapsed';
        stepnumber=stepnumber+25;
        console.log(stepnumber);
        _update_step();
        _type();
        document.getElementById('image1').className = 'hide';
        document.getElementById('image2').className = 'hide';
        document.getElementById('image3').className = 'hide';
        document.getElementById('image4').className = 'show';
        document.getElementById('namewraper').className = 'no-height';
        document.getElementById('emailwraper').className = 'no-height';
    }
    
}

_confirm_email_address_react = function() {
    if(confirm_email_address.value != '' && si == 4) {
        document.getElementById('pin_'+ii).className = 'rest';
        confirmemailaddress = confirm_email_address.value;
        sts[5] = 'Thank you, ' + yourname + '. >'
         si = 5;
        ii = 5;
        confirm_email_address.removeEventListener('blur',_your_name_react,false);
        confirm_email_address.className='sleep';
        confirm_email_address.parentNode.className = 'collapsed';
        stepnumber+=stepnumber;
        _update_step();
        _type();
        document.getElementById('image1').className = 'hide';
        document.getElementById('image2').className = 'hide';
        document.getElementById('image3').className = 'hide';
        document.getElementById('image4').className = 'hide';
        document.getElementById('image5').className = 'show';
        document.getElementById('namewraper').className = 'no-height';
        document.getElementById('emailwraper').className = 'no-height';
        document.getElementById('friendwraper').className = 'no-height';
    }
}
_check_form = function(e) {

    var key = e.charCode || e.keyCode || 0;
    if(key == 13) {
        if(si < 5) e.preventDefault();
        _your_name_react();
        _email_address_react();
        _refer_friends_react();
        _confirm_email_address_react();
    }
   
}
  function nextstep() {
	_confirm_email_address_react();
};
_stretch_field = function() {
	this.style.width = Math.max(3, this.value.length * .75) + 'em';
};

form_area.addEventListener('keypress', _check_form, false);
your_name.addEventListener('keyup', _stretch_field, false);
your_name.addEventListener('blur', _your_name_react, false);
email_address.addEventListener('focus', _stretch_field, false);
email_address.addEventListener('keyup', _stretch_field, false);
email_address.addEventListener('blur', _email_address_react, false);
//refer_friend.addEventListener('keyup', _stretch_field, false);
refer_friend.addEventListener('blur', _refer_friends_react, false);

confirm_email_address.addEventListener('focus',_stretch_field,false);
confirm_email_address.addEventListener('keyup',_stretch_field,false);
confirm_email_address.addEventListener('blur',_confirm_email_address_react,false);
