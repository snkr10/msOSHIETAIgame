<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ゲーム結果ページ</title>
<link rel="stylesheet" href="./css/style.css">
</head>
<body>

<div class="viewName" id="name">

    </div>

    <div class="viewLank">
      <div class="prop">
      </div>
      <div class="lank"id="rank">
        <p>大佐</p>
      </div>
    </div>

    <div class="viewScore">
      <div class="topView">
        <p>スコア</p>
      </div>
      <div class="score" id="ajax"></div>



    </div>

    <div class="viewUp">
      <div class="topManzoku">
        <p>満足度</p>
      </div>
      <div class="level" id="manzoku">

      </div>

    </div>

    <script type="text/javascript" src="js/minjs/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/minjs/anime.min.js"></script>
    <script type="text/javascript" src="js/result.js"></script>
    <script type="text/javascript" src="js/test.js"></script>
<script type="text/javascript">
  setTimeout(function() {
    window.location.href = 'regist.html';
  }, 15 * 1000);
</script>
</body>
</html>