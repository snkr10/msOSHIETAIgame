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

<div class="viewName">
      <p>○○隊員の功績</p>
    </div>

    <div class="viewLank">
      <div class="prop">
        <p class="propCount" data-num="100">0</p>
      </div>
      <div class="lank">
        <p>大佐</p>
      </div>
    </div>

    <div class="viewScore">
      <div class="topView">
        <p>スコア</p>
      </div>
      <div class="score" id="ret1">

      </div>



    </div>

    <div class="viewUp">
      <div class="topManzoku">
        <p>満足度</p>
      </div>
      <div class="level">
        <p class="levelCount" data-num="100">0</p>
      </div>
      <div class="up">
        <p class="upCount" data-num="100">0</p>
      </div>
    </div>

    <script type="text/javascript" src="js/minjs/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/minjs/anime.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>

</body>
</html>