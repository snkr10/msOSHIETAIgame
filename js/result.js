/**
 *
 */
$(document).ready(function() {
	var param = {
			str1 : $("#txt43").val(),
			judge : "false"

		};
	$.ajax({
		contentType : "Content-Type: application/json; charset=UTF-8",
		url : "./result",
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

	function show(data) {
		// var obj = JSON.parse(data);
		var obj = data;



		if (obj.ret == "true") {
			console.log("true通過");

			var str1 = "<p class=\"scoreCount\" data-num=\""+Number(obj.score)*63+"\">0</p>";
			console.log(str1);
			var str2="<p>"+obj.rankName+"</p>";
			var str3 = "<p>"+obj.memberName+"隊員の功績</p>";
			var str4;
			if(obj.rankName ==="新兵"){
				str4=30;
			}else if(obj.rankName === "曹長"){
				str4=50;
			}else if(obj.rankName === "准尉"){
				str4=70;
			}else if(obj.rankName === "大尉"){
				str4=85;
			}else if(obj.rankName === "大佐"){
				str4=90;
			}else if(obj.rankName === "大将"){
				str4=98;
			}
			var str5 =" <p class=levelCount data-num=\""+str4+"\">0</p>";
			console.log(str2);

			$("#ajax").html(str1);
			$("#rank").html(str2);
			$("#name").html(str3);
			$("#manzoku").html(str5);
			anime();
			manzoku();
		} else {
			$("#ajax").empty();
		}

	}
	//スコア表示アニメーション
	function anime() {
	 var countElm = $('.scoreCount'),
	 countSpeed = 0.5;
	 console.log("スコア表示アニメーション");

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

	}



	//満足度表示アニメーション
	function manzoku(){
		console.log("anime");
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

	}

	//満足度UP表示アニメーション
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
});



