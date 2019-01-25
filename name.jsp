<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String name =(String) request.getAttribute("name");
String pw =(String) request.getAttribute("pw");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>入隊ページ</title>
<style type="text/css">
body { background: #9cb8b3; text-align: center;}

h1 {
    font: 600 1.5em/1 'Raleway', sans-serif;
    color: rgba(0,0,0,.5);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .5em;
}

span, span:after {
    font-weight: 900;
    color: #efedce;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    letter-spacing: .1em;
    padding: .2em 0 .25em 0;
}

span {
    font-size: 4em;
    z-index: 100;
    text-shadow: .04em .04em 0 #9cb8b3;
}

span:after {
    content: attr(data-shadow-text);
    color: rgba(0,0,0,.35);
    text-shadow: none;
    position: absolute;
    left: .0875em;
    top: .0875em;
    z-index: -1;
    -webkit-mask-image: url(//f.cl.ly/items/1t1C0W3y040g1J172r3h/mask.png);
}





.preserve-3d {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

@media screen and (max-width: 1260px) {
    .back {
        width: 50%;
    }
}

@media screen and (max-width: 840px) {
    .back {
        width: 100%;
    }
}

.button_base {
    margin-top: 20px;
    border: 0;
    font-size: 18px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: 40px;
    margin-left: -100px;
    width: 200px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    cursor: default;
}

.button_base:hover {
    cursor: pointer;
}

.b03_skewed_slide_in {
    overflow: hidden;
}

.b03_skewed_slide_in div {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 10px;
}

.b03_skewed_slide_in div:nth-child(1) {
    color: #6d6969;
    background-color: #6697af;
}

.b03_skewed_slide_in div:nth-child(2) {
    background-color: #e86a71;
    width: 230px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transform: translate(-250px, 0px) skewX(-30deg);
    -webkit-transform: translate(-250px, 0px) skewX(-30deg);
    -moz-transform: translate(-250px, 0px) skewX(-30deg);
}

.b03_skewed_slide_in div:nth-child(3) {
    color: #6d6969;
    left: -200px;
    transition: left 0.2s ease;
    -webkit-transition: left 0.2s ease;
    -moz-transition: left 0.2s ease;
}

.b03_skewed_slide_in:hover div:nth-child(2) {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transform: translate(-15px, 0px) skewX(-30deg);
    -webkit-transform: translate(-15px, 0px) skewX(-30deg);
    -moz-transform: translate(-15px, 0px) skewX(-30deg);
}

.b03_skewed_slide_in:hover div:nth-child(3) {
    left: 0px;
    transition: left 0.30000000000000004s ease;
    -webkit-transition: left 0.30000000000000004s ease;
    -moz-transition: left 0.30000000000000004s ease;
}

.main{
position:absolute;
top:25%;
width: 100%;
}

a {
text-decoration: none;
}

</style>
</head>
<body>

<div class = "main">
<h1>ようこそ教え隊へ<br><span data-shadow-text="<%=name %>"><%=name %></span><br>気になる所をたくさん見つけよう</h1>

<div class="back">
    <div class="button_base b03_skewed_slide_in">
        <div>ＲＥＡＤＹ？</div>
        <div></div>
        <div><a href="game.html">ＧＯ！！</a></div>
    </div>
</div>

</div>


</body>
</html>