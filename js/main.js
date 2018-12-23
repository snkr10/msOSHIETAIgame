// フェードイン男
$(function() {
  $('.man').hide().fadeIn(700);
});

// フェードインふきだし
$(function() {
  $('.fade').hide().fadeIn(3000);
});

// フェードインPCさわる男
$(function() {
  $('.pcman').hide().fadeIn(700);
});

// タイマー
$(function() {
  $('.timer').startTimer();
});

// イベント用ボタン
$('.trigger2').css('cursor', 'default');
$('.trigger1').css('cursor', 'default');
$('.trigger3').css('cursor', 'default');
$('.trigger4').css('cursor', 'default');
$('.trigger5').css('cursor', 'default');
$('.trigger6').css('cursor', 'default');
$('.trigger7').css('cursor', 'default');
$('.trigger8').css('cursor', 'default');
$('.trigger9').css('cursor', 'default');
$('.trigger10').css('cursor', 'default');
$('.trigger11').css('cursor', 'default');
$('.trigger12').css('cursor', 'default');
$('.trigger13').css('cursor', 'default');

$(document).ready(function() {

  var flg2 = 0;

  $('.trigger2').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops1', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg2 == 0) {
      $('input').addClass('show');
      flg2++;
      $('input.1').css({'opacity': '1','pointer-events':'all'});
      $('div.box1').css({'opacity': '1','pointer-events':'all'});
      $('div.popcircle ul').css({'pointer-events':''});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg2--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('input.1').css({'pointer-events':'none'});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg1 = 0;
  $('.trigger1').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops2', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg1 == 0) {
      $('input').addClass('show');
      flg1++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('input.2').css({'opacity': '1','pointer-events':'all'});
      $('div.box2').css({'opacity': '1','pointer-events':'all'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg1--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('input.2').css({'pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg3 = 0;
  $('.trigger3').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops3', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg3 == 0) {
      $('input').addClass('show');
      flg3++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('input.3').css({'opacity': '1','pointer-events':'all'});
      $('div.box3').css({'opacity': '1','pointer-events':'all'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg3--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('input.3').css({'pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg4 = 0;
  $('.trigger4').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops4', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg4 == 0) {
      $('input').addClass('show');
      flg4++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('input.4').css({'opacity': '1','pointer-events':'all'});
      $('div.box4').css({'opacity': '1','pointer-events':'all'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg4--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('input.4').css({'pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg5 = 0;
  $('.trigger5').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops5', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg5 == 0) {
      $('input').addClass('show');
      flg5++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('input.5').css({'opacity': '1','pointer-events':'all'});
      $('div.box5').css({'opacity': '1','pointer-events':'all'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg5--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('input.5').css({'pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg6 = 0;
  $('.trigger6').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops6', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg6 == 0) {
      $('input').addClass('show');
      flg6++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('input.6').css({'opacity': '1','pointer-events':'all'});
      $('div.box6').css({'opacity': '1','pointer-events':'all'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg6--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('input.6').css({'pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg7 = 0;
  $('.trigger7').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops7', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg7 == 0) {
      $('input').addClass('show');
      flg7++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('input.7').css({'opacity': '1','pointer-events':'all'});
      $('div.box7').css({'opacity': '1','pointer-events':'all'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg7--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('input.7').css({'pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg8 = 0;
  $('.trigger8').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops8', {
    	spacing: '80px', //選択肢の間隔
        type: 'half', // full, half, quad
        offset: 1.95, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease: 'easeOutQuad',
        time: 'fast' // slow, fast, 1000
    });
    if (flg8 == 0) {
      $('input').addClass('show');
      flg8++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('input.8').css({'opacity': '1','pointer-events':'all'});
      $('div.box8').css({'opacity': '1','pointer-events':'all'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg8--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('input.8').css({'pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg9 = 0;
  $('.trigger9').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops9', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg9 == 0) {
      $('input').addClass('show');
      flg9++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('input.9').css({'opacity': '1','pointer-events':'all'});
      $('div.box9').css({'opacity': '1','pointer-events':'all'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg9--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('input.9').css({'pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg10 = 0;
  $('.trigger10').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops10', {
      spacing: '130px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg10 == 0) {
      $('input').addClass('show');
      flg10++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('input.10').css({'opacity': '1','pointer-events':'all'});
      $('div.box10').css({'opacity': '1','pointer-events':'all'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg10--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('input.10').css({'pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg11 = 0;
  $('.trigger11').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops11', {
      spacing: '300px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 3.8, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg11 == 0) {
      $('input').addClass('show');
      flg11++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('input.11').css({'opacity': '1','pointer-events':'all'});
      $('div.box11').css({'opacity': '1','pointer-events':'all'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg11--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('input.11').css({'pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg12 = 0;
  $('.trigger12').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops12', {
      spacing: '280px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 3.8, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg12 == 0) {
      $('input').addClass('show');
      flg12++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('input.12').css({'opacity': '1','pointer-events':'all'});
      $('div.box12').css({'opacity': '1','pointer-events':'all'});
      $('div.box13').css({'opacity': '0','pointer-events':'none'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg12--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('input.12').css({'pointer-events':'none'});
      $('div.box13').css({'opacity': '0','pointer-events':''});
    }
  });

  var flg13 = 0;
  $('.trigger13').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops13', {
      spacing: '210px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 3.6, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    if (flg13 == 0) {
      $('input').addClass('show');
      flg13++;
      $('div.box1').css({'opacity': '0','pointer-events':'none'});
      $('div.box2').css({'opacity': '0','pointer-events':'none'});
      $('div.box3').css({'opacity': '0','pointer-events':'none'});
      $('div.box4').css({'opacity': '0','pointer-events':'none'});
      $('div.box5').css({'opacity': '0','pointer-events':'none'});
      $('div.box6').css({'opacity': '0','pointer-events':'none'});
      $('div.box7').css({'opacity': '0','pointer-events':'none'});
      $('div.box8').css({'opacity': '0','pointer-events':'none'});
      $('div.box9').css({'opacity': '0','pointer-events':'none'});
      $('div.box10').css({'opacity': '0','pointer-events':'none'});
      $('div.box11').css({'opacity': '0','pointer-events':'none'});
      $('div.box12').css({'opacity': '0','pointer-events':'none'});
      $('input.13').css({'opacity': '1','pointer-events':'all'});
      $('div.box13').css({'opacity': '1','pointer-events':'all'});
      $('.popcircle').css('z-index', '12');
    } else {
      $('input').removeClass('show');
      flg13--;
      $('div.box1').css({'opacity': '0','pointer-events':''});
      $('.popcircle').css('z-index', '9');
      $('div.box2').css({'opacity': '0','pointer-events':''});
      $('div.box3').css({'opacity': '0','pointer-events':''});
      $('div.box4').css({'opacity': '0','pointer-events':''});
      $('div.box5').css({'opacity': '0','pointer-events':''});
      $('div.box6').css({'opacity': '0','pointer-events':''});
      $('div.box7').css({'opacity': '0','pointer-events':''});
      $('div.box8').css({'opacity': '0','pointer-events':''});
      $('div.box9').css({'opacity': '0','pointer-events':''});
      $('div.box10').css({'opacity': '0','pointer-events':''});
      $('div.box11').css({'opacity': '0','pointer-events':''});
      $('div.box12').css({'opacity': '0','pointer-events':''});
      $('div.box13').css({'opacity': '0','pointer-events':''});
      $('input.13').css({'pointer-events':'none'});
    }
  });
});

$('input.1').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops1', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });

    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('input.1').css({'pointer-events':'none'});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});
  });

$('input.2').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops2', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('input.2').css({'pointer-events':'none'});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.3').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops3', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('input.3').css({'pointer-events':'none'});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.4').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops4', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('input.4').css({'pointer-events':'none'});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.5').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops5', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('input.5').css({'pointer-events':'none'});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.6').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops6', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('input.6').css({'pointer-events':'none'});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.7').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops7', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('input.7').css({'pointer-events':'none'});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.8').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops8', {
    	spacing: '80px', //選択肢の間隔
        type: 'half', // full, half, quad
        offset: 5, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease: 'easeOutQuad',
        time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('input.8').css({'pointer-events':'none'});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.9').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops9', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('input.9').css({'pointer-events':'none'});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.10').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops10', {
    	spacing: '130px', //選択肢の間隔
        type: 'half', // full, half, quad
        offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease: 'easeOutQuad',
        time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('input.10').css({'pointer-events':'none'});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.11').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops11', {
    	spacing: '300px', //選択肢の間隔
        type: 'half', // full, half, quad
        offset: 3.8, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease: 'easeOutQuad',
        time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('input.11').css({'pointer-events':'none'});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.12').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops12', {
    	spacing: '280px', //選択肢の間隔
        type: 'half', // full, half, quad
        offset: 3.8, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease: 'easeOutQuad',
        time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('input.12').css({'pointer-events':'none'});
    $('div.box13').css({'opacity': '0','pointer-events':''});

  });

$('input.13').one('click',function(e) {
    e.preventDefault();
    $.popcircle('#pops13', {
      spacing: '160px', //選択肢の間隔
      type: 'half', // full, half, quad
      offset: 5.1, // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
      ease: 'easeOutQuad',
      time: 'fast' // slow, fast, 1000
    });
    $('input').removeClass('show');
    $('div.box1').css({'opacity': '0','pointer-events':''});
    $('.popcircle').css('z-index', '9');
    $('div.box2').css({'opacity': '0','pointer-events':''});
    $('div.box3').css({'opacity': '0','pointer-events':''});
    $('div.box4').css({'opacity': '0','pointer-events':''});
    $('div.box5').css({'opacity': '0','pointer-events':''});
    $('div.box6').css({'opacity': '0','pointer-events':''});
    $('div.box7').css({'opacity': '0','pointer-events':''});
    $('div.box8').css({'opacity': '0','pointer-events':''});
    $('div.box9').css({'opacity': '0','pointer-events':''});
    $('div.box10').css({'opacity': '0','pointer-events':''});
    $('div.box11').css({'opacity': '0','pointer-events':''});
    $('div.box12').css({'opacity': '0','pointer-events':''});
    $('div.box13').css({'opacity': '0','pointer-events':''});
    $('input.13').css({'pointer-events':'none'});

  });

var list = new Array();
var score = 0;

$(function() {
	$(document).ready(function() {

	 setTimeout(a, 5000);

	})
	var a= function() {
			var param = {
				score : score,
				judge :"true"

			};
			$.ajax({
				contentType : "Content-Type: application/json; charset=UTF-8",
				url : "./Production",
				type : "POST",
				data : JSON.stringify(param)
			})
		}



	$("#txt1").click(function() {
		score +=7;

		var param = {
			str1 : $("#txt1").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
			console.log(a);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt2").click(function() {

		var param = {
			str1 : $("#txt2").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt3").click(function() {

		var param = {
			str1 : $("#txt3").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt4").click(function() {

		var param = {
			str1 : $("#txt4").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});


	$("#txt5").click(function() {
		score += 2;

		var param = {
			str1 : $("#txt5").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt6").click(function() {
		score += 6;

		var param = {
			str1 : $("#txt6").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt7").click(function() {
		score += 8;

		var param = {
			str1 : $("#txt7").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt8").click(function() {
		score += 4;

		var param = {
			str1 : $("#txt8").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt9").click(function() {

		var param = {
			str1 : $("#txt9").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt10").click(function() {

		var param = {
			str1 : $("#txt10").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});


	$("#txt11").click(function() {

		var param = {
			str1 : $("#txt11").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt12").click(function() {

		var param = {
			str1 : $("#txt12").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt13").click(function() {

		var param = {
			str1 : $("#txt13").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt14").click(function() {

		var param = {
			str1 : $("#txt14").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt15").click(function() {

		var param = {
			str1 : $("#txt15").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt16").click(function() {

		var param = {
			str1 : $("#txt16").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt17").click(function() {

		var param = {
			str1 : $("#txt17").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt18").click(function() {

		var param = {
			str1 : $("#txt18").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt19").click(function() {

		var param = {
			str1 : $("#txt19").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt20").click(function() {

		var param = {
			str1 : $("#txt20").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt21").click(function() {

		var param = {
			str1 : $("#txt21").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt22").click(function() {

		var param = {
			str1 : $("#txt22").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt23").click(function() {

		var param = {
			str1 : $("#txt23").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt24").click(function() {

		var param = {
			str1 : $("#txt24").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt25").click(function() {

		var param = {
			str1 : $("#txt25").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt26").click(function() {

		var param = {
			str1 : $("#txt26").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt27").click(function() {

		var param = {
			str1 : $("#txt27").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt28").click(function() {

		var param = {
			str1 : $("#txt28").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt29").click(function() {

		var param = {
			str1 : $("#txt29").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt30").click(function() {

		var param = {
			str1 : $("#txt30").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt31").click(function() {

		var param = {
			str1 : $("#txt31").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt32").click(function() {

		var param = {
			str1 : $("#txt32").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt33").click(function() {
		score += 2;

		var param = {
			str1 : $("#txt33").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt34").click(function() {
		score += 1;

		var param = {
			str1 : $("#txt34").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt35").click(function() {
		score += 6;

		var param = {
			str1 : $("#txt35").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt36").click(function() {
		score += 10;

		var param = {
			str1 : $("#txt36").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt37").click(function() {
		score += 3;

		var param = {
			str1 : $("#txt37").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt38").click(function() {
		score += 10;

		var param = {
			str1 : $("#txt38").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt39").click(function() {
		score += 5;

		var param = {
			str1 : $("#txt39").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt40").click(function() {
		score += 2;

		var param = {
			str1 : $("#txt40").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt41").click(function() {
		score += 5;

		var param = {
			str1 : $("#txt41").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt42").click(function() {
		score += 6;

		var param = {
			str1 : $("#txt42").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt43").click(function() {
		score += 7;

		var param = {
			str1 : $("#txt43").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt44").click(function() {

		var param = {
			str1 : $("#txt44").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt45").click(function() {
		score += 5;

		var param = {
			str1 : $("#txt45").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt46").click(function() {
		score += 3;

		var param = {
			str1 : $("#txt46").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt47").click(function() {
		score += 1;

		var param = {
			str1 : $("#txt47").val(),
			judge : "false"
		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt48").click(function() {

		var param = {
			str1 : $("#txt48").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt49").click(function() {

		var param = {
			str1 : $("#txt49").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt50").click(function() {

		var param = {
			str1 : $("#txt50").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt51").click(function() {

		var param = {
			str1 : $("#txt51").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	$("#txt52").click(function() {

		var param = {
			str1 : $("#txt52").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./Production",
			type : "POST",
			data : JSON.stringify(param)
		}).done(function(data, status, xhr) {
			// 正常
			show(data);
		}).fail(function(xhr, status, error) {
			// 異常
			$("#msg").append(xhr);
			$("#msg").append(":" + status);
			$("#msg").append(":" + error);
		}).always(function(data, status, xhr) {
			// 常に
		});
	});

	function show(data) {
		// var obj = JSON.parse(data);
		var obj = data;

		// ここに結果
		$("#msg").html(obj.str);

		// ここにリスト
		if (obj.ret == "true") {
			var str1 = "<ul class='mitsuketa'>";
			$.each(obj.ary, function(i, val) {

				list.push(val);

				for (var i = 0; i < list.length; i++) {
					str1 += "<li class='item'>" + list[i] + "</li>";
				}
				console.log(i + ': ' + val);
			});
			str1 += "</ul>";
			$("#ret1").html(str1);
		} else {
			$("#ret1").empty();
		}

	}
});

//新入隊員割合表示アニメーション
$(function(){
    var countElm = $('.propCount'),
    countSpeed = 10;

    countElm.each(function(){
        var self = $(this),
        countMax = self.attr('data-num'),
        thisCount = self.text(),
        countTimer;

        function timer(){
            countTimer = setInterval(function(){
                var countNext = thisCount++;
                self.text('新入隊員の'+countNext+'％');

                if(countNext == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });

});

// スコア表示アニメーション
$(function(){
    var countElm = $('.scoreCount'),
    countSpeed = 10;

    countElm.each(function(){
        var self = $(this),
        countMax = self.attr('data-num'),
        thisCount = self.text(),
        countTimer;

        function timer(){
            countTimer = setInterval(function(){
                var countNext = thisCount++;
                self.text(countNext+'点');

                if(countNext == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });

});

// 満足度表示アニメーション
$(function(){
    var countElm = $('.levelCount'),
    countSpeed = 10;

    countElm.each(function(){
        var self = $(this),
        countMax = self.attr('data-num'),
        thisCount = self.text(),
        countTimer;

        function timer(){
            countTimer = setInterval(function(){
                var countNext = thisCount++;
                self.text(countNext+'％');

                if(countNext == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });

});

// 満足度UP表示アニメーション
$(function(){
    var countElm = $('.upCount'),
    countSpeed = 10;

    countElm.each(function(){
        var self = $(this),
        countMax = self.attr('data-num'),
        thisCount = self.text(),
        countTimer;

        function timer(){
            countTimer = setInterval(function(){
                var countNext = thisCount++;
                self.text(countNext+'％ＵＰ');

                if(countNext == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });

});
