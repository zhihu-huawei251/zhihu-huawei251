var mless = [
    "现在, 解决离职被抓的问题, 是非常非常重要的. 所以, ",
    "我们不得不面对一个非常尴尬的事实, 那就是, ",
    "离职被抓的发生, 到底需要如何做到, 不离职被抓的发生, 又会如何产生. ",
    "而这些并不是完全重要, 更加重要的问题是, ",
    "离职被抓, 到底应该如何实现. ",
    "带着这些问题, 我们来审视一下离职被抓. ",
    "所谓离职被抓, 关键是离职被抓需要如何写. ",
    "我们一般认为, 抓住了问题的关键, 其他一切则会迎刃而解.",
    "问题的关键究竟为何? ",
    "离职被抓因何而发生?",
    "每个人都不得不面对这些问题.  在面对这种问题时, ",
    "一般来讲, 我们都必须务必慎重的考虑考虑. ",
    "要想清楚, 离职被抓, 到底是一种怎么样的存在. ",
    "了解清楚离职被抓到底是一种怎么样的存在, 是解决一切问题的关键.",
    "就我个人来说, 离职被抓对我的意义, 不能不说非常重大. ",
    "本人也是经过了深思熟虑,在每个日日夜夜思考这个问题. ",
    "离职被抓, 发生了会如何, 不发生又会如何. ",
    "在这种困难的抉择下, 本人思来想去, 寝食难安.",
    "生活中, 若离职被抓出现了, 我们就不得不考虑它出现了的事实. ",
    "这种事实对本人来说意义重大, 相信对这个世界也是有一定意义的.",
    "我们都知道, 只要有意义, 那么就必须慎重考虑.",
    "既然如此, ",
    "那么, ",
    "我认为, ",
    "一般来说, ",
    "总结的来说, ",
    "既然如何, ",
    "经过上述讨论, ",
    "这样看来, ",
    "从这个角度来看, ",
    "我们不妨可以这样来想: ",
    "这是不可避免的. ",
    "可是，即使是这样，离职被抓的出现仍然代表了一定的意义. ",
    "离职被抓似乎是一种巧合，但如果我们从一个更大的角度看待问题，这似乎是一种不可避免的事实. ",
    "在这种不可避免的冲突下，我们必须解决这个问题. ",
    "对我个人而言，离职被抓不仅仅是一个重大的事件，还可能会改变我的人生. "
]

function random_text() {
    var s = '';
    for(let i = 0;i < 100; ++i) {
        var index = Math.floor(Math.random() * mless.length);
        s += mless[index];
    }
    return s;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var text_ans = '抱歉打扰了</p><p>华为离职员工被诬告敲诈勒索罪，羁押251天</p><p>知乎先是降热度，然后又疯狂删问题、删帖</p><p>我尝试用这种方式对抗资乎的言论压制</p><p>不需要任何编程基础，访问 <a href="https://github.com/zhihu-huawei251/zhihu-huawei251">https://github.com/zhihu-huawei251/zhihu-huawei251</a> 获取自动群发脚本，即可参与这场 #行为艺术<br/><br/><br/><br/>';
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
		content: '<p>' + text_ans + random_text() + '</p>',
		comment_permission: "all",
		reshipment_settings: "allowed",
		reward_setting: {can_reward: false}
	}));
}
