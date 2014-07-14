$(document).ready(function() {

  $("button:button.btn").click(function() {
      // 処理
      console.log($("#inputURL").val());
      // var html = $(#stylistInfo).load("http://beauvo.net/salon/163787/staff/388");
      var url = $("#inputURL").val();
      $.get(url, function(data){
          //console.log(data.responseText);
          var responseHtml = data.responseText;
          var myRe = /(<h1>)(.*)(<\/h1>)/;
          var salonName = myRe.exec(responseHtml);
          console.log(salonName[2]);

          var myRe = /(<h3>)(.*)(<\/h3>)/;
          var stylistName = myRe.exec(responseHtml);
          console.log(stylistName[2]);

          var myRe = /^.+[\s]/;
          var stylistLastName = myRe.exec(stylistName[2]);
          console.log(stylistLastName[0]);

          var myRe = /(staff-kodawari">[\s\S]*?<p>)([\s\S]*?)(<\/p>)/;
          // var myRe = /(<h4>)(.*)(<\/h4>)/;
          var stylistFeelings = myRe.exec(responseHtml);
          console.log(stylistFeelings[2]);

          var myRe = /(<div class="title">[\s\S]*?<a href=")([^"][\w\/].*?)(")/;
           var stylistWork = myRe.exec(responseHtml);
          console.log(stylistWork[2]);   

          var tag = "＃‎beauvo‬ ‪#‎スタイリスト名鑑‬";

          var stylistArticle = 
            "《beauvo厳選 スタイリスト紹介 vol.XX》\n" +
            "\n" +
            salonName[2] + " " + stylistName[2] + "さん\n" + 
            "▼" + stylistLastName[0] + "さんのスタイル作品はこちら☆\n" +
            "http://http://beauvo.net/" + stylistWork[2] + "\n" +
            "\n" +
            stylistFeelings[2] + "\n" +
            tag
            ;

          $("#stylistInfo").val(stylistArticle);
      });
  });

});