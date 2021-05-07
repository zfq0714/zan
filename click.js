"auto";

//点赞
var i = 0;
while(true){
	i++;
	if(i % 25 == 0) {
		//刷评论
		comment();
		sleep(Math.random() * 100 + 3000)
	} else {
		click(Math.random() * 100 + 400, Math.random() * 100 + 800)
		sleep(Math.random() * 100 + 150)
	}
}

function comment() {
	id("cdq").click();
	sleep(800);
	var num = Math.floor(Math.random() * 10 + 1);
//	var str = num + "" + num + "" + num + "" + num;
	var str = ["1111","6666","要要要","要","11","1"];
	setText(str[Math.floor(Math.random() * str.length)]);
	var c = className("ImageView").desc("发送").untilFind();
	c.click();
}