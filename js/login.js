/**
 *
 */
$(function() {
	$("#submit").click(function() {

		var param = {
			str1 : $("#num").val(),
			judge : "false"

		};
		$.ajax({
			contentType : "Content-Type: application/json; charset=UTF-8",
			url : "./login_2",
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

			$("#ret1").html(data);
		} else {
			$("#ret1").empty();
		}

	}
});