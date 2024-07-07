$('.menueopen').click(function () {
    $('.left-menue').animate({ left: '0px' }, 1000)
    $(this).css('marginLeft', -50);
})
$('.close').click(function () {
    $('.left-menue').animate({ left: '-30%' }, 1000)
    $('.menueopen').css('marginLeft', -250);
})
$('.toggle').click(function (e) {
    let content = $(e.target).next('.content-accor')
    $('.content-accor').not(content).slideUp(1000);
    content.slideToggle(1000)
});
// Count Down
let countDownDate = new Date('Jun 6, 2030 15:37:25').getTime();
let x = setInterval(() => {
    let dataNow = new Date().getTime();
    let distance = countDownDate - dataNow;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    days = days < 10 ? `0${days}` : days;
    $('.cont-day').html(`${days} D`);
    $('.cont-hours').html(`${hours} H`);
    $('.cont-minits').html(`${minutes} M`);
    $('.cont-seconde ').html(`${seconds} S`);
    if (distance == 0) {
        clearInterval(x);
    }
}, 1000);
// Low Number From Write In Text Area
let num = document.querySelector('.character span');
let convert = Number(num.textContent);
$('textarea').keydown((e) => {
    const textLength = $('textarea').val().length;
    console.log(textLength);
    if (textLength >= 0) {
        if (e.key === 'Backspace') {
            convert++
        } else if (convert > 0) {
            convert--;
        }
    }
    if (convert == 0) {
        num.innerHTML = `your available character finished`;
    } else {
        num.innerHTML = convert;
    }

})
// 
$('.left-menue ul li a').click((e) => {
    let x = $(e.target).attr('href');
    let y = $(x).offset().top;
    $('html, body').animate({
        scrollTop: y
    }, 2000)
})