var textpool;

function random_text() {
    let s = '';
    for(let i = 0; i < 8; ++i)
        s += textpool[Math.floor(Math.random() * textpool.length)].textContent + '<br/>';
    return s;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var text_ans = '【本回答为脚本自动生成】</p><p>华为员工离职后被诬告羁押251天，事件发酵后在知乎先是被降热度——明明关注量是热榜第一的十多倍，却只能排到十多名——最后直接被删问题了。我也理解知乎说自己收到了律师函。可是第一，相关内容真的侵犯华为的<b>合法</b>权益了吗？真的违反法律法规了吗？第二，即使真的华为法务部门太厉害知乎没办法，用户自发以知乎删不过来的速度发布内容，总不是知乎的错了吧，总不会被华为告了吧(是吗?)。<br/>因此，我决定发起这场行为艺术，用技术和人民群众的汪洋大海对抗资本对言论、信息自由的压制，维护法律尊严<br/><b>不需要任何编程基础</b>，访问 <a href="https://github.com/zhihu-huawei251/zhihu-huawei251">https://github.com/zhihu-huawei251/zhihu-huawei251</a> 获取自动群发脚本，复制到浏览器中运行，即可参与这场 <b>#行为艺术</b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/></b><br/><br/><br/>以下随机内容，防自动被删：<br/>';
var re = /question\/(\d+)/;

async function A() {
	var links = document.getElementsByTagName('a');
	textpool = document.getElementsByClassName('RichText');
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
		content: '<p>' + text_ans + random_text() + '</p>',
		comment_permission: "all",
		reshipment_settings: "allowed",
		reward_setting: {can_reward: false}
	}));
}
