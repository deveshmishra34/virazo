const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let distance = 0;
let clicked = false;

let countDown = new Date('Nov 12, 2019 10:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime();
        distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day));
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            clearInterval(x);
            $('.timer-container')[0].style.display = "none";
            confetti.start();
        }

    }, second);

$('#image2').click(function (ele) {
    clicked = true;
    ele.target.classList = '';
    if (distance > 0) {
        ele.target.classList = 'animated hinge';
    }
    confetti.start();
});


function clickMe() {
    setTimeout(function () {
        if (!clicked) {
            $('#image2')[0].classList = 'animated tada';
        }

        if (!clicked) {
            setTimeout(function () {
                $('#image2')[0].classList = '';
                clickMe();
            }, 1000);
        }
    }, 2000);
}


setTimeout(function () {
    if (distance > 0) {
        clickMe();
    }
}, 2000);


