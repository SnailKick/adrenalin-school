function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



window.addEventListener("scroll", reveal);
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

$(document).ready(function() {
  let position = 0;
  const slidesToShow = 3; /*сколько слайдов показывать*/
  const slidesToScroll = 2; /*сколько слайдов листать*/
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  const itemWidth = container.width() / slidesToShow; /*ширина клаждоко элемента*/
  const movePosition = slidesToScroll * itemWidth;

  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });/*ширина жлемента*/
  });

    btnNext.click(function(){
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;/*считаем сколько слайдов осталось*/
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
    });

    btnPrev.click(function(){
      const itemsLeft = Math.abs(position) / itemWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth; 
      setPosition();
      checkBtns();
    });/*кнопка вперед*/

    const setPosition = () => {
      track.css({
        transform: `translateX(${position}px)`
      });
    };

    const checkBtns = () => {
      btnPrev.prop('disabled', position === 0);
      btnNext.prop(
        'disabled',
        position <= -(itemsCount - slidesToShow) * itemWidth
      );
    };
    checkBtns();
  
});

$('.button1').click(function(){
  var buttonId = $(this).attr('id');
  $('#container-'+buttonId).removeClass('out').addClass('modal-effect');
  $('body').addClass('modal-active');
})

$('.modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});