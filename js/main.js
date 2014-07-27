$(document).ready(function() {

  $('#img-link').hide();

  $("button:button.btn").click(function() {
      //画像ダウンロード
      // $('#stylist-image').attr('href', 'http://www.syuhari.jp/');


      // 処理
      console.log($("#inputURL").val());
      // var html = $(#stylistInfo).load("http://beauvo.net/salon/163787/staff/388");
      var url = $("#inputURL").val();
      $.get(url, function(data){

          var responseHtml = data.responseText;

          var index = $("#index").val();
          console.log("$index", index);

          // DOMに変換
          var doc = new DOMParser().parseFromString(data.responseText, 'application/xhtml+xml');
          // スタイリストの画像URLを取得
          var elm = doc.getElementById("showcase").getElementsByClassName("showcase-slide")[0];
          var stylistImage = elm.getElementsByClassName("showcase-content")[0].getElementsByTagName("img")[0].getAttribute("src");
          console.log("stylistImage", stylistImage);

          // 画像のリンクをつけて表示
          $('#stylist-image').attr('href', stylistImage);
          $('#stylist-image').attr('download', index);
          // var index_val = $('#stylist-image').attr('download');
          $('#thumb-stylist').attr('src', stylistImage);

          // スタイリストの作品画像URLを取得
          var work_tmp = doc.getElementById("staff-work-featured").getElementsByClassName("trans")[0];
          workImage = work_tmp.getElementsByTagName("img")[0].getAttribute("src");
          console.log("workImage", workImage);

          // 画像のリンクをつけて表示
          $('#work-image').attr('href', workImage);
          $('#thumb-work').attr('src', workImage);
          $('#img-link').show();
          
          // サロン名
          var myRe = /(<h1>)(.*)(<\/h1>)/;
          var salonName = myRe.exec(responseHtml);
          console.log(salonName[2]);

          // スタイリスト氏名
          var myRe = /(<h3>)(.*)(<\/h3>)/;
          var stylistName = myRe.exec(responseHtml);
          console.log(stylistName[2]);

          // スタイリスト姓
          var myRe = /^.+[\s]/;
          var stylistLastName = myRe.exec(stylistName[2]);
          console.log(stylistLastName[0]);

          // スタイリストこだわり
          var myRe = /(staff-kodawari">[\s\S]*?<p>)([\s\S]*?)(<\/p>)/;
          // var myRe = /(<h4>)(.*)(<\/h4>)/;
          var stylistFeelings = myRe.exec(responseHtml);
          console.log(stylistFeelings[2]);

          // 作品ページヘのパス
          var myRe = /(<div class="title">[\s\S]*?<a href=")([^"][\w\/].*?)(")/;
          var stylistWork = myRe.exec(responseHtml);
          console.log(stylistWork[2]);   

          // タグ
          var tag = "＃‎beauvo‬ ‪#‎スタイリスト名鑑‬";

          var stylistArticle = 
            "《beauvo厳選 スタイリスト紹介 vol." + index +"》\n" +
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
