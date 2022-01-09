<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>复杂一些的JSON对象。</title>
	</head>
	<body>
		<script>
			// 正则表达式练习
			window.eval("var i = 100");
			// alert(i);
			// var reg = /(?=(\d{3})+$)/g;
			// var reg1 = /(?=(\B)(\d{3})+$)/g;
			var reg = /(?=(\B)(\d{3})+$)/g;
            // /(?=(\B)(\d{3})+$)/
			var str = "100000000000";
			var str1 = str.replace(reg, ".");
			console.log(str1);
		</script>
	</body>
</html>
