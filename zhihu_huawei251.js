function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var text_ans = '<p>抱歉打扰了</p><p>华为离职员工被诬告敲诈勒索罪，羁押251天</p><p>知乎先是降热度，然后又疯狂删问题、删帖</p><p>我尝试用这种方式对抗资乎的言论压制</p><p>不需要任何编程基础，访问 <a href="https://github.com/zhihu-huawei251/zhihu-huawei251">https://github.com/zhihu-huawei251/zhihu-huawei251</a> 获取自动群发脚本，即可参与这场 #行为艺术</p>';
var re = /question\/(\d+)/;

async function A() {
	var links = document.getElementsByTagName('a');
	for(let l of links) {
	    var h = l.href;
	    var r = re.exec(h);
	    if(r && r[1]) {
	        console.log(r[1]);
	        Ans(r[1]);
	        await sleep(3000);
	    }
	}
}

function Ans(id) {
/*
	var xhr_an = new XMLHttpRequest();
	var url_an = 'https://www.zhihu.com/api/v4/questions/'+id+'/anonyms';
	xhr_an.open("POST", url_an, true);
	xhr_an.send();
*/
	var xhr = new XMLHttpRequest();
	var url    = 'https://www.zhihu.com/api/v4/questions/'+id+'/answers';

	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
		content: text_ans,
		comment_permission: "all",
		reshipment_settings: "allowed",
		reward_setting: {can_reward: false}
	}));
}
