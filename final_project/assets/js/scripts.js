window.onload = function () {
    localStorage.clear();
    localStorage.setItem('state', 0);
    localStorage.setItem('frame_3_expanded', 0);
    $('#frame_3_expanded').hide();
    $('.frame_3_project').hide();

    $('#frame_2').hide();
    $('#frame_3').hide();
    $('#frame_4').hide();
    $('#final_frame').hide();
}

/* js function for laptop devices */
if (document.documentElement.clientWidth > 1024) {
    /* functions for the circle */
    function goNext() {
        var state = parseInt(localStorage.getItem('state'));
        if (state == 0) {
            goNextOne();
        } else if (state == 1) {
            goNextTwo();
        } else if (state == 2) {
            goNextThree();
        } else {
            goNextFour();
        }
        state = state + 1;
        state = state % 4;
        localStorage.setItem('state', state);
    }

    function goNextOne() {
        $('#frame_1').delay(100).animate({ 'opacity': '0' }, 500);
        $('#frame_2').delay(200).animate({ 'opacity': '1' }, 500);
        $('#frame_1').hide();
        $('#frame_2').show();
        var elem = document.getElementById("circle");
        var time = 0;
        var maxTime = 400;
        var halfTime = maxTime / 2;
        var id = setInterval(frame, 5);

        var curTop = "60%";
        var curLeft = "calc(50% - 2500px)";
        var middleTop = "calc(50% - 500px)";
        var middleLeft = "calc(50% - 500px)";
        var topInterval1 = "calc((" + middleTop + " - " + curTop + ")/" + halfTime + ")";
        var leftInterval1 = "calc((" + middleLeft + " - " + curLeft + ")/" + halfTime + ")";

        var finalTop = "calc(50% - 2500px)";
        var finalLeft = "calc(70% - 5000px)";
        var topInterval2 = "calc((" + finalTop + " - " + middleTop + ")/" + halfTime + ")";
        var leftInterval2 = "calc((" + finalLeft + " - " + middleLeft + ")/" + halfTime + ")";

        function frame() {
            if (time == maxTime) {
                clearInterval(id);
            } else {
                if (time < maxTime / 2) {
                    time++;
                    time++;
                    elem.style.width = "calc(5000px - " + time * 20 + "px)";
                    elem.style.height = "calc(5000px - " + time * 20 + "px)";
                    elem.style.top = "calc(" + curTop + " + " + "calc(" + topInterval1 + "*" + time + "))";
                    elem.style.left = "calc(" + curLeft + " + " + "calc(" + leftInterval1 + "*" + time + "))";
                } else {
                    time++;
                    elem.style.width = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.height = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.top = "calc(" + middleTop + " + " + "calc(" + topInterval2 + "*" + (time - maxTime / 2) + "))";
                    elem.style.left = "calc(" + middleLeft + " + " + "calc(" + leftInterval2 + "*" + (time - maxTime / 2) + "))";
                }
            }
        }
    }

    function goNextTwo() {
        $('#frame_2').delay(100).animate({ 'opacity': '0' }, 500);
        $('#frame_3').delay(200).animate({ 'opacity': '1' }, 500);
        $('#frame_2').hide();
        $('#frame_3').show();
        var elem = document.getElementById("circle");
        var time = 0;
        var maxTime = 400;
        var halfTime = maxTime / 2;
        var id = setInterval(frame, 5);

        var curTop = "calc(50% - 2500px)";
        var curLeft = "calc(70% - 5000px)";
        var middleTop = "calc(50% - 500px)";
        var middleLeft = "calc(50% - 500px)";
        var topInterval1 = "calc((" + middleTop + " - " + curTop + ")/" + halfTime + ")";
        var leftInterval1 = "calc((" + middleLeft + " - " + curLeft + ")/" + halfTime + ")";

        var finalTop = "calc(25% - 5000px)";
        var finalLeft = "calc(50% - 2500px)";
        var topInterval2 = "calc((" + finalTop + " - " + middleTop + ")/" + halfTime + ")";
        var leftInterval2 = "calc((" + finalLeft + " - " + middleLeft + ")/" + halfTime + ")";

        function frame() {
            if (time == maxTime) {
                clearInterval(id);
            } else {
                if (time < maxTime / 2) {
                    time++;
                    time++;
                    elem.style.width = "calc(5000px - " + time * 20 + "px)";
                    elem.style.height = "calc(5000px - " + time * 20 + "px)";
                    elem.style.top = "calc(" + curTop + " + " + "calc(" + topInterval1 + "*" + time + "))";
                    elem.style.left = "calc(" + curLeft + " + " + "calc(" + leftInterval1 + "*" + time + "))";
                } else {
                    time++;
                    elem.style.width = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.height = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.top = "calc(" + middleTop + " + " + "calc(" + topInterval2 + "*" + (time - maxTime / 2) + "))";
                    elem.style.left = "calc(" + middleLeft + " + " + "calc(" + leftInterval2 + "*" + (time - maxTime / 2) + "))";
                }
            }
        }
    }

    function goNextThree() {
        $('#frame_3').delay(100).animate({ 'opacity': '0' }, 500);
        $('#frame_4').delay(200).animate({ 'opacity': '1' }, 500);
        $('#frame_3').hide();
        $('#frame_4').show();
        var elem = document.getElementById("circle");
        var time = 0;
        var maxTime = 400;
        var halfTime = maxTime / 2;
        var id = setInterval(frame, 5);

        var curTop = "calc(40% - 5000px)";
        var curLeft = "calc(50% - 2500px)";
        var middleTop = "calc(50% - 500px)";
        var middleLeft = "calc(50% - 500px)";
        var topInterval1 = "calc((" + middleTop + " - " + curTop + ")/" + halfTime + ")";
        var leftInterval1 = "calc((" + middleLeft + " - " + curLeft + ")/" + halfTime + ")";

        var finalTop = "calc(50% - 2500px)";
        var finalLeft = "calc(30%)";
        var topInterval2 = "calc((" + finalTop + " - " + middleTop + ")/" + halfTime + ")";
        var leftInterval2 = "calc((" + finalLeft + " - " + middleLeft + ")/" + halfTime + ")";

        function frame() {
            if (time == maxTime) {
                clearInterval(id);
            } else {
                if (time < maxTime / 2) {
                    time++;
                    time++;
                    elem.style.width = "calc(5000px - " + time * 20 + "px)";
                    elem.style.height = "calc(5000px - " + time * 20 + "px)";
                    elem.style.top = "calc(" + curTop + " + " + "calc(" + topInterval1 + "*" + time + "))";
                    elem.style.left = "calc(" + curLeft + " + " + "calc(" + leftInterval1 + "*" + time + "))";
                } else {
                    time++;
                    elem.style.width = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.height = "calc(5000px - " + (maxTime - time) * 20 + "px)";
                    elem.style.top = "calc(" + middleTop + " + " + "calc(" + topInterval2 + "*" + (time - maxTime / 2) + "))";
                    elem.style.left = "calc(" + middleLeft + " + " + "calc(" + leftInterval2 + "*" + (time - maxTime / 2) + "))";
                }
            }
        }
    }

    function goNextFour() {
        $('#next_button').hide();
        $('#frame_4').delay(100).animate({ 'opacity': '0' }, 500);
        $('#final_frame').delay(200).animate({ 'opacity': '1' }, 500);
        $('#frame_4').hide();
        $('#final_frame').show();
        var elem = document.getElementById("circle");
        var time = 0;
        var maxTime = 400;
        var id = setInterval(frame, 5);

        var curTop = "calc(50% - 2500px)";
        var curLeft = "calc(30%)";
        var finalTop = "calc(50% - 300px)";
        var finalLeft = "calc(50% - 300px)";
        var topInterval1 = "calc((" + finalTop + " - " + curTop + ")/" + maxTime + ")";
        var leftInterval1 = "calc((" + finalLeft + " - " + curLeft + ")/" + maxTime + ")";

        function frame() {
            if (time == maxTime) {
                clearInterval(id);
            } else {
                time++;
                time++;
                elem.style.width = "calc(5000px - " + time * 11 + "px)";
                elem.style.height = "calc(5000px - " + time * 11 + "px)";
                elem.style.top = "calc(" + curTop + " + " + "calc(" + topInterval1 + "*" + time + "))";
                elem.style.left = "calc(" + curLeft + " + " + "calc(" + leftInterval1 + "*" + time + "))";
            }
        }
    }

    /* frame 3 function */
    function expandFrameThree() {
        var frame_3_expanded = parseInt(localStorage.getItem('frame_3_expanded'))
        if (frame_3_expanded == 0) {
            $('#frame_3_expanded').show();
            $('#frame_3_expanded').delay(200).animate({ 'opacity': '1' }, 500);
            $('#next_button').hide();
            $('#frame_3_expand_button').text("Collapse");
            $('#circle').css('z-index', '2');
            frame_3_expanded = 1
        } else {
            $('#frame_3_expanded').hide(0);
            $('#frame_3_expanded').animate({ 'opacity': '0' }, 500);
            $('#next_button').show();
            $('#frame_3_expand_button').text("Expand");
            $('#circle').css('z-index', '-1');
            frame_3_expanded = 0
        }

        localStorage.setItem('frame_3_expanded', frame_3_expanded);
    }

    function KSTProject() {
        $('.frame_3_project').show();
        $('#frame_3_normal').hide();
        $('#frame_3_title').hide();
        $('#next_button').hide();
        $('#circle').css('z-index', '2');
    }

    function goBack() {
        $('.frame_3_project').hide();
        $('#frame_3_normal').show();
        $('#frame_3_title').show();
        $('#next_button').show();
        $('#circle').css('z-index', '-1');
    }

    function startOver() {
        $('#next_button').show();
        $('#final_frame').delay(100).animate({ 'opacity': '0' }, 500);
        $('#frame_1').delay(200).animate({ 'opacity': '1' }, 500);
        $('#final_frame').hide();
        $('#frame_1').show();
        var elem = document.getElementById("circle");
        var time = 0;
        var maxTime = 400;
        var id = setInterval(frame, 5);

        var curTop = "calc(50% - 300px)";
        var curLeft = "calc(50% - 300px)";
        var finalTop = "75%";
        var finalLeft = "calc(50% - 2500px)";
        var topInterval1 = "calc((" + finalTop + " - " + curTop + ")/" + maxTime + ")";
        var leftInterval1 = "calc((" + finalLeft + " - " + curLeft + ")/" + maxTime + ")";

        function frame() {
            if (time == maxTime) {
                clearInterval(id);
            } else {
                time++;
                time++;
                elem.style.width = "calc(600px + " + time * 11 + "px)";
                elem.style.height = "calc(600px + " + time * 11 + "px)";
                elem.style.top = "calc(" + curTop + " + " + "calc(" + topInterval1 + "*" + time + "))";
                elem.style.left = "calc(" + curLeft + " + " + "calc(" + leftInterval1 + "*" + time + "))";
            }
        }
    }
} else {
/* disable the circle moving in mobile devices */
    function goNext() {
        var state = parseInt(localStorage.getItem('state'));

        if (state <= 2){
            var hideFrame = "#frame_" + (state + 1);
            var showFrame = "#frame_" + (state + 2);

            $(hideFrame).hide();
            $(showFrame).show();

            $(hideFrame).delay(100).animate({ 'opacity': '0' }, 500);
            $(showFrame).delay(200).animate({ 'opacity': '1' }, 500);
        } else {
            $('#frame_4').hide();
            $('#final_frame').show();
            $('#next_button').hide();

            $('#frame_4').delay(100).animate({ 'opacity': '0' }, 500);
            $('#final_frame').delay(200).animate({ 'opacity': '1' }, 500);
        }

        state = state + 1;
        state = state % 4;
        localStorage.setItem('state', state);
    }

    /* frame 3 function */
    function expandFrameThree() {
        var frame_3_expanded = parseInt(localStorage.getItem('frame_3_expanded'))
        if (frame_3_expanded == 0) {
            $('#frame_3_expanded').show();
            $('#frame_3_expanded').delay(200).animate({ 'opacity': '1' }, 500);
            $('#frame_3_expand_button').text("Collapse");
            frame_3_expanded = 1
        } else {
            $('#frame_3_expanded').hide(0);
            $('#frame_3_expanded').animate({ 'opacity': '0' }, 500);
            $('#frame_3_expand_button').text("Expand");
            frame_3_expanded = 0
        }

        localStorage.setItem('frame_3_expanded', frame_3_expanded);
    }

    function startOver() {
        $('#next_button').show();
        $('#final_frame').delay(100).animate({ 'opacity': '0' }, 500);
        $('#frame_1').delay(200).animate({ 'opacity': '1' }, 500);
        $('#final_frame').hide();
        $('#frame_1').show();
    }
}