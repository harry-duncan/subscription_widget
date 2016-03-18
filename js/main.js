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

var state2 = '<div class="signin">' +
                '<form action="" method="post" class="signinForm">' +
                  '<input type="email" placeholder="Enter your email address" class="emailInput2" id="emailInput2">' +
                  '<input type="text" class="username" placeholder="Enter your username" id="username">' +
                  '<button class="signinButton" id="signinButton"><span class="signinSpan">Claim your points</span></button>' +
                '</form>' +
                '<div class="signinInfo">' +
                  "<p>Enter the email address and username of your account and we'll credit you <br>with 500 points.</p>" +
                '</div>' +
              '</div>';

var state3 =  '<div class="state3">' +
                '<p class="state3">Thanks. Youll see the points in your account within 5 working days.</p>' +
              '</div>'

$(document).ready(function(){

  // add and remove the class of active for the member and non member buttons
  // this adds and removes the decoration and styling for the elements
  // this also changes the states of the "join-main" div to show the users the correct form

  $('#member').click(function(){
    $('.non-member').removeClass("active");
    $('.member').addClass("active");
    $('.join-main').html(state2);
  });

  $('#non-member').click(function(){
    $('.member').removeClass("active");
    $('.non-member').addClass("active");
    $('.join-main').html(state1);
  });

  // ajax to send the state 1 data to the database and to update on state 3

  $('.widget').on('submit', '.join-form', function (e) {
    e.preventDefault();
    $.ajax("http://response­-test.afdevbox.com", {
      type:'POST',
      data: {
        email: $("#emailInput").html()
      }
    }).done(function(){
      console.log("post request successful success");
      $('.join-main').html(state3);
    })
  });

  // ajax to send state 2 data to the database and to update to state 3

  $('.widget').on('submit', '.signinForm', function (e) {
    e.preventDefault();
    $.ajax("http://response­-test.afdevbox.com", {
      type:'POST',
      data: {
        email: $("#emailInput2").html(),
        username: $("#username").html()
      }
    }).done(function(){
      console.log("post request successful success");
      $('.join-main').empty();
      $('.join-main').append(state3);
    })
  });

});