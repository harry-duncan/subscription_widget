var state1 = '<div class="joinup">' +
            '<form action="" method="post" class="join-form" >' +
              '<input type="email" placeholder="Enter your email address" class="emailInput" id="emailInput">' +
              '<button class="emailButton" id="emailButton"><span class="emailSpan">Submit</span></button>' +
            '</form>' +
            '<div class="info">' +
              '<p>To claim your 500 Rewards Points, simply ' +
              '<a href="#">join here.</a><br> Takes less than 2 minutes.</p>' +
            '</div>' +
          '</div>';

var state3 = '<div class="state3">' +
          '<p class="state3">Thanks. Youll see the points in your account within 5 working days.</p>' +
        '</div>'

$(document).ready(function(){

  // add and remove the class of active for the member and non member buttons
  // this adds and removes the decoration and styling for the elements
  // this also changes the states of the "join-main" div to show the users the correct form

  $('#member').click(function(){
    $('.non-member').removeClass("active");
    $('.member').addClass("active");
    $('.join-main').empty();
    // $('.join-main').append(state2);
  });

  $('#non-member').click(function(){
    $('.member').removeClass("active");
    $('.non-member').addClass("active");
    $('.join-main').empty();
    $('.join-main').append(state1);
  });

  // ajax to send the state 1 data to the database

  $('.join-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax("http://response­test.afdevbox.com", {
      type:'POST',
      data: {
        email: $("#emailInput").html()
      }
    }).done(function(){
      console.log("post request successful success");
      $('.join-main').empty();
      $('.join-main').append(state3);
    })
  })
});

