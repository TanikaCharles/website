$(document).ready(function(){
    $darkPurp = '#21121d';
    $medPurp = '#392033';
    $lightPurp = '#562937';
    $lightPink = '#ff8967';
    $darkPink = '#fd6051';
    $lightYellow = '#ffe577';
    $darkYellow = '#fec051';
    $clicks = 0;
    function summary(){
      $("#connect").fadeOut();
      $("#education").fadeOut();
      $("#projects").fadeOut();
      $("#pic").css("display", "none");
      $("#moon").css("background-color", $lightPurp);
      $("#moon").css("box-shadow","10px 10px #ff8967");
      $("body").css("background","linear-gradient(#21121d, #562937)");
      $("#nav").css("background-color", "#562937");
      $("#tagline").css("display", "none");
      $("#pic").fadeIn(2000);
      $("#summary").fadeIn(3000);
      $clicks = 1;
    }
    function education(){
      $("#connect").fadeOut();
      $("#tagline").css("display", "none");
      $("#projects").fadeOut();
      $("#summary").fadeOut();
      $("#pic").fadeOut();
      $("#moon").css("background-color", $darkPink);
      $("#moon").css("box-shadow","10px 10px #fec051");
      $("body").css("background","linear-gradient(#562937, #fd6051)");
      $("#nav").css("background-color", "#fd6051");
      $("#education").fadeIn(3000);
      $("#pic").fadeIn(3000);
      $clicks = 2;
    }
    function projects(){
      $("#connect").fadeOut();
      $("#tagline").css("display", "none");
      $("#summary").fadeOut();
      $("#education").fadeOut();
      $("#pic").fadeOut();
      $("a").css("display","block");
      $("#moon").css("background-color", $darkYellow);
      $("#moon").css("box-shadow","10px 10px #ff8967");
      $("body").css("background","linear-gradient(#fd6051, #fec051)");
      $("#nav").css("background-color", "#fec051");
      $("#projects").fadeIn(3000);
      $("#pic").fadeIn(3000);
      $clicks = 3;
    }
    function connect(){
      $("#tagline").css("display", "none");
      $("#summary").fadeOut();
      $("#education").fadeOut();
      $("#projects").fadeOut();
      $("#pic").fadeOut();
      $("a").css("display","inline-block");
      $("#connect").css("text-align","center");
      $("#moon").css("background-color", $darkYellow);
      $("#moon").css("box-shadow","10px 10px #ff8967");
      $("body").css("background","linear-gradient(#fd6051, #fec051)");
      $("#nav").css("background-color", "#fec051");
      $("#connect").fadeIn(3000);
      $("#pic").fadeIn(3000);
      $clicks = 0;
    }
    $("#pic").click(function(){
      if ($clicks == 0){
        summary();
      } else if ($clicks == 1){
        education();
      } else if ($clicks == 2){
        projects();
      } else if ($clicks == 3){
        connect();
      }
  });
  $("#menu").hover(
    function(){
      $("#menu").attr("src", "images/menu.png");
    },
    function(){
      $("#menu").attr("src", "images/menu2.png");
    });
  $("#pic").hover(
    function(){
      $("#who").attr("src", "images/right-arrow2.png");
    },
    function(){
      $("#who").attr("src", "images/right-arrow.png");
    }
  );
  /*  $menuClick = 1;
  $("#menu").click(function(){
      if ($menuClick == 1){
        $("#nav").css("display", "block");
        $menuClick = 2;
      } else {
        $("#nav").css("display", "none");
        $menuClick = 1;
      }
  });*/
  $("#goSummary").click(function(){
        summary();
  });
  $("#goEducation").click(function(){
        education();
  });
  $("#goProjects").click(function(){
        projects();
  });
  $("#goConnect").click(function(){
    connect();
});
});