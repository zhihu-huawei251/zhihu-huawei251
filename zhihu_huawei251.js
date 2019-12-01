var textpool;
var ano = true;

function random_text() {
    let s = '<p>';
    for(let i = 0; i < 8; ++i)
        s += textpool[Math.floor(Math.random() * textpool.length)].textContent + '<br/>';
    s += '</p>';
    return s;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var text_ans =
    '<h1>#行为艺术</h1>' + 
    '<p>【本回答为脚本自动生成】</p>' +
    '<p>澕為员工离职后被诬告羁押251天，事件发酵后在资泘先是被降热度——明明关注量是热榜第一的十多倍，却只能排到十多名——最后直接被删问题了。我也理解资泘说自己收到了律师函。可是第一，相关内容真的侵犯澕為的<b>合法</b>权益了吗？真的违反法律法规了吗？第二，即使真的澕為法务部门太厉害资泘没办法，用户自发以资泘删不过来的速度发布内容，总不是资泘的错了吧，总不会被澕為告了吧(是吗?)。<br/>' +
    '因此，我决定发起这场行为艺术，用技术和人民群众的汪洋大海对抗资本对言论、信息自由的压制，维护法律尊严</p>' +
    '<p>同时，我建议大家应该不仅仅关注澕為，还应考虑向纪委检举当地公检法</p>' + 
    '<h2>部分暂时还没被删的资泘相关问题：</h2><p><br></p><p><a href="https://www.zhihu.com/question/358504564">如何看待网传澕為员工李某元离职后被公司起诉敲诈勒索，羁押 251 天后因证据不足重获自由？</a></p><p><a href="https://www.zhihu.com/question/358523452">如何看待网传澕為员工李某元离职后被公司起诉敲诈勒索，羁押 近一年后因证据不足重获自由？</a></p><p><a href="https://www.zhihu.com/question/358498828">资泘删除澕為离职员工被以敲诈勒索罪羁押的理由是什么？</a></p><p><a href="https://www.zhihu.com/question/358572396">澕為离职员工被诉敲诈，关押251天，是真的吗？</a> </p><p><br></p><h2>被删问题的网页快照备份：</h2><p><a href="https://github.com/zhihu-huawei251/zhihu-huawei251/blob/master/2019.11.29%2007:30:07%20GMT%E7%BD%91%E9%A1%B5%E5%BF%AB%E7%85%A7.nojs.html">2019.11.29_2007:30:07_20GMT_网页快照.nojs.html</a></p><br/><br/>' +
    '<p><b>不需要任何编程基础</b>，访问 <a href="https://github.com/zhihu-huawei251/zhihu-huawei251/blob/master/zhihu_huawei251.js">此Github地址</a> 获取自动群发脚本，复制到浏览器中运行，即可参与这场 <b>#行为艺术</b></p>' +
    '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>' + 
    '<p>以下随机内容，防自动被删：</p>';
var re = /question\/(\d+)/;
var re = /question\/(\d+)/;

async function A(a=true) {
    ano = a;
	var links = document.getElementsByTagName('a');
	textpool = document.getElementsByClassName('RichText');
	for(let l of links) {
	    var h = l.href;
	    var r = re.exec(h);
	    if(r && r[1]) {
	        console.log(r[1]);
	        Ans(r[1]);
	        await sleep(5000);
	    }
	}
}

function Ans(id) {

    if(ano) {
	    var xhr_an = new XMLHttpRequest();
	    var url_an = 'https://www.zhihu.com/api/v4/questions/'+id+'/anonyms';
	    xhr_an.open("POST", url_an, true);
	    xhr_an.send();
	}

	var xhr = new XMLHttpRequest();
	var url = 'https://www.zhihu.com/api/v4/questions/'+id+'/answers?include=paid_info%2Cpaid_info_content%2Cadmin_closed_comment%2Creward_info%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_normal%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cvoting%2Cis_thanked%2Cis_author%2Cis_nothelp%2Cis_recognized%2Cis_labeled%3Bmark_infos%5B*%5D.url%3Bauthor.badge%5B*%5D.topics';

	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
	xhr.onreadystatechange = () => {
	    if(xhr.readyState === xhr.DONE && xhr.status === 200){
	        var xhr_uf = new XMLHttpRequest();
	        var url_uf = 'https://www.zhihu.com/api/v4/questions/' + id + '/followers';
	        xhr_uf.open("DELETE", url_uf, true);
	        xhr_uf.send();
	    }
	}
	
	xhr.send(JSON.stringify({
		content: text_ans + random_text(),
		comment_permission: "all",
		reshipment_settings: "allowed",
		reward_setting: {can_reward: false}
	}));
}

A();
