var textpool;
var ano = true;

function random_text() {
    let s = '<p>';
    for(let i = 0; i < 8; ++i)
        s += textpool[Math.floor(Math.random() * textpool.length)].textContent + '<br/>';
    s += '</p>';
    return s;
}

var text_ans =
    '<h1>#行为艺术</h1>' + 
    '<p>[苯回答ゐ腳本鉎荿]</p>' +
    '<p>华为员工离职后被诬告羁押251天，事件发酵后在资乎先是被降热度——明明关注量是热榜第一的十多倍，却只能排到十多名——最后直接被删问题了。我也理解资乎说自己收到了律师函。可是第一，相关内容真的侵犯华为的<b>合法</b>权益了吗？真的违反法律法规了吗？第二，即使真的华为法务部门太厉害资乎没办法，用户自发以资乎删不过来的速度发布内容，总不是资乎的错了吧，总不会被华为告了吧(是吗?)。<br/>' +
    '因此，我决定发起这场行为艺术，用技术和人民群众的汪洋大海对抗资本对言论、信息自由的压制，维护法律尊严</p>' +
    '<p>同时，我建议大家应该不仅仅关注华为，还应考虑向纪委检举当地公检法</p>' + 
    '<h2>部分暂时还没被删的资乎相关问题：</h2><p><br></p><p><a href="https://www.zhihu.com/question/358504564">如何看待网传华为员工李某元离职后被公司起诉敲诈勒索，羁押 251 天后因证据不足重获自由？</a></p><p><a href="https://www.zhihu.com/question/358523452">如何看待网传华为员工李某元离职后被公司起诉敲诈勒索，羁押 近一年后因证据不足重获自由？</a></p><p><a href="https://www.zhihu.com/question/358498828">资乎删除华为离职员工被以敲诈勒索罪羁押的理由是什么？</a></p><p><a href="https://www.zhihu.com/question/358572396">华为离职员工被诉敲诈，关押251天，是真的吗？</a> </p><p><br></p><h2>被删问题的网页快照备份：</h2><p><a href="https://github.com/zhihu-huawei251/zhihu-huawei251/blob/master/2019.11.29%2007:30:07%20GMT%E7%BD%91%E9%A1%B5%E5%BF%AB%E7%85%A7.nojs.html">2019.11.29_2007:30:07_20GMT_网页快照.nojs.html</a></p><br/><br/>' +
    '<p><b>不需要任何编程基础</b>，访问 <a href="https://github.com/zhihu-huawei251/zhihu-huawei251/blob/master/zhihu_huawei251.js">此Github地址</a> 获取自动群发脚本，复制到浏览器中运行，即可参与这场 <b>#行为艺术</b></p>' +
    '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>' + 
    '<p>以下随机内容，防自动被删：</p>';


async function A(a=true) {
    ano = a;
	var links = document.getElementsByTagName('a');
	textpool = document.getElementsByClassName('RichText');
	var re = /question\/(\d+)/;
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

async function Ans(id) {

    if(ano) {
	    var xhr_an = new XMLHttpRequest();
	    var url_an = 'https://www.zhihu.com/api/v4/questions/'+id+'/anonyms';
	    xhr_an.open("POST", url_an, true);
	    xhr_an.send();
	    await sleep(500);
	}

	var xhr = new XMLHttpRequest();
	var url = 'https://www.zhihu.com/api/v4/questions/'+id+'/answers';

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




// ============================只发评论的话以上不用复制===================================


var text_comment = 'a_eqg7U0gLLxgR398Lk_24_92LPfxhYhDqYhxJOhtg2tSLLhWhLhbT9h6LetuhLhfTLhe4OhtU2trXLhfLLh279hwq2tnqe0zRF0gAN_g0eXgLY9zHYygQN_g72mgLXyz7F_g699gTFXg8XyzLY9gQO_g8HXgLY9z0F_g6xygL2mg0Xyz0H_gQO9g0HXgXY_z7Y9gi9yg8X1g7Y9z_L_gTU_g_2mg7Y_zHYyg499g7FXgMY_z7Y9gQxygLt1g8Y9zRF_gTuygL2mg8F_z7tyg499g_HXg_Y_zLY9gHxyg0X1g8L9z0L_gHOyg82mgXLyz_tygT99gX2Xg8XyzLY9g69_gLX1gMY9z7Y_gAxygL2mgXL_zMtygT99g82Xg8XyzLY9geU_gLHXg7Y9zRF0g4S0gXxmkLk_BLP064R9bLkpwCP0iCk_b4_qwCPfcUXGtGXquvR9uCPpwCf9BLn0k4Q_cLfOabf0sTY1gcC8cUOGcUO1PD39k47Mg9VOUcN98Ln8-BH8xh2trLF0tCSGUvw1JL3_DUNKAhYhr4U0DCOVUCp1pLp1DhHKxh2tJvS8XTOGibC13BXxg8H0zXe0gHwMe93_kTYhDCYhXg9hNCxOiuF0zXS_24R0kLnxkLf9WCkqb4_ywCPmPCf9WCPywvQ_6Lf1PCn9-CP064_0uCfpwCf_iCn9b4_qwCP16LPyWCkqwv7qbLf1PCkq-Cfqb4R9PCnpwCn_iCn_PvRqwCkx6LnqWCPywvR06Lf1bLfy-CP964RyPCnpwCf9BLn9k47MnqLxgLe0zRo_24_92LnOxhYhDqYhwg9hUBXxg0e0zMY_g4uygM2mgTL_z8H_g499gLt1gXY_zHY9gA9yg_X1gMY9zLe0g7U0g0epgQOmKUNZ2uemEbfpuCF0zLtyc79hoLepkLn_WCF0gQN_cT2tcLLq8LfqPvU0gX21cTYhYLLqk4_0bLtxg_H_sTYho4OqkLnsqGX08LF0geu0uq2tQ0Y_BLkqQiU0cT2tbTFZmXFZbAu0k8XxgTVBKqV8JrN0gTO9AhN98Lf0c791gGofcUOZsUO1iug9kLkxcTY1zGV8chLZcUS_iD398Lfm-gHZnC3_egSBAhYhxU9huq2t2upGKUN0k4Q_cLnm2LnBzhp1Q79hUqLxgLe0z8H0g7g8tq2tugYhDhLhxvOhwq2tnBH0z0e0g6N_gTX1g_Y9zMtyg69_gL2mgMY_zLtyge99gTe1g8H_zLY9g4U_gX21gHY9zXYyg6N_gM2mg_tyzXLyge99g72XgTY_zHY9g4O_gM2XgHY9zRY_gTuygL2mgTL_zTY_gT99gLLxgTS_BLf924RMtq2twqYh1BH0gHS0gLLxgT38DqYhwg9hQqLxgLe0zR39k4Q_2Lkm2Lf8AhYhtg9hxg2tthLhACLho09hQH2tcLLhK7Yhuq9hoLetxgYhDgYho4Ohxwet6HYhMLLhth9hthetxCLhYXLheAOhcLetrLF0DhLhuh9hSLet2TLhs7Yhc4OhtU2tthLhACLh6T9hxwet6LLh8TLhc09hSLetb7YhAwLh64OhPwetkXLhfLLhcAOhoTetcLLhfHYhr09hcLettUYhm7Yh64OhPhetSXLhGLLhuUOhk72toLLhsHYhwUOhSLetwqYh8TYhtv9hSHYxkMYqfL20xU9hEvS_eqVBsw39k4_m-qxucUO1PD3ZoccGxh2txhYhWqYh2DwGeUxxkLk_sLP9247Bgh3_QTYhZqe0g4S0gRV12Lf9BLPMxU9htq2twqYhZBH0gHS0g8eXg0H_z8L9gTuygHt1g_Y9zRtyg7N_g_2mg8L_z7YygQ99gXt1g_YyzMY9gQuygR2XgMY9z_tygAOygM2mg0H_zXXygQ99gXFXgLH_zMY9gAO_g_X1gMY9zTY_g6U_gM2mgTYyzTXyg499g7FXg8L_z7Y9g7U_gL2Xg8Y9zLY_g7N_g_2mgTL_zTY_gT99gL21gMF_zLY9gT9ygX2XgLY9z0XygAuyg72mgTH_z8Y_ge99gXX1gTtyzMY9g49ygLX1g8Y9z_Y_g09ygH2mgRY_z7tyg499g72Xg0F_z8Y9g6uygLt1g7Y9zLe0g7U0g0epg7F0f7YyeT9q28Xxg6Smt9oMgvCMxh2tJvS8XLp1DhHKEMVVoBH0z8H0gAS0g03Oe9p18TYhtv9hXq2tNCNMPuF0gAe_2Lkm2LPMDqYhwg9hQBXxg0e0zLe0gAH9kLf12Ln9YLk_Pv79wCkxPCPqYLkqwv__uCfp6LPy-CkqPv_96LnXwCP9fLkq64_ywCfxPCnqiCPywvR96LnXPCPq-Cf9uvR96LPpwCf0fLn9uvRywCnxuCn_YLfqwv_96LnxbLfq-CPqPv_yPCkpwCP0fLPyPvRqwCkxbLn9iCPywvR0kLf1PCf_fLnqwv_06LkmPCkq-Ck_64Q_PCPmwCn0WCPqPvQqwCPxbLn_fLfqwvRy6LPmuCPy-Cn0Pv_qbLPpwCfyfLn9uvRywCfpPCfqiCPywvRyPCPm6Lfq-Ck_uv_q6LkpwCn_WCn0uvRywCkm6LP0YLfqwvQ_6Lkx6LPy-Cn_Pv7quCfpwCk0fLfq64_qwCnxbLn9YLnqwv_96LnmbLnq-CfquvQqPCkpwCPyYLf0b4_qwCk1PCn0fLkqwv_qbLkmPCnq-CP0uvQ_PCnpwCf0YLP9PvQqwCkp6Lf9iCfqwv7_6Lf1bLkq-Cfqb4R9PCnpwCn0fLnquv_qwCkm2Ln08Lk_c470c_YxkLtys0F9k47m-gNV2COGmBH0gMemFbkVigx1_bkGocg9kLPmkLf_BLkMQbwGihtxg0Lqz_e0gQLBkUNxkLf8DqYhwg9hQqLxgLe0zR39k4Q_2Lkm2Lf8AhYhtg9hxg2tthLhACLhr7OheH2toLLhWwLhoT9h6LetoTLh-UYh64OhXU2to7YhYLLh27OhSTet6LLhEUYh67OheLetwwLhEUYhS4Ohr72txwLhfLLhQAOhPg2tcLLh-UYhQ09hcLetbXLhKXLhc4OhQT2trLF01TYhtUOhuU2tSLLhm7YhwUOhoLettUYhDhLhxvOhkXeteTLhGLLhk09hPU2tcLLhf7YhxJOh6LetkTLhsHYhS4Ohb72txwLhfLLho7OhcTet6LLhfTLhxh9hcLettwLhs7Yhc4OhPwetkXLhfLLhwh9hQH2tcLLhDUYhrT9h6LetPhLhMXLho4Oh272tc7YhsLLhQ09hxg2tSLLh-UYhXq9hSLetcXLhGTLhc4Oh6H2trHYhsLLhuUOhk72toLLhsHYhwUOhSLetQXLhDhLhe4OhrH2tXhLhGLLhcT9hwhetcLLhiUYhtq9hoLetcHYhEhLhe4Ohk72tSXLhsLLhwg9hkT2ttCYhK8Yqei9q6LYxxhYhXvO1egCBcwpmkLfmwqNZchL1iDpuoGoGAhYhxU9huq2t2upGKUN0k4Q_cLnm2LnBzhp1Q79hUqLxgLe0z8H0g7g8tq2tugYhDhLhxvOhwq2tnBH0z0e0gT9ygT21gHY9zLL_ge9ygH2mg0F_zLtyg499g7t1gTLyzMY9giU_g82Xg8Y9z7YygHU_g82mg_tyzLF_gT99g_FXgXLyzMY9gi9_g7FXgLY9zTL_g79_g72mgXY_zTF_gQ99g72Xg8H_z7Y9gQU_gM2Xg8Y9zTtygAOyg82mgLe0zTS_24_92LPmkLnMTqe0g4S0gRV12Lf9BLPMxU9htq2tk7Yh17Yh24Oh6XetoHYhYLLh6AOh272tbLLhsHYh27OhSLetQ7YhBXLhS4Ohtwetc7YhsLLhQ7Ohtg2tcLLhBHYhXUOhcLetwhLhfTLhe4OhQ72t2XLhMLLhe09hoXetcLLhWwLhuUOhoLetrHYh1HYhc4OhrH2tbHYhfLLh2T9hQ72t6LLhKHYhuUOhcLet6HYhAhLh64OhtU2tthLhACLhuUOhk72toLLhsHYhwUOhSLet6XLhBTLhS4Oh2Tetc7YhsLLhcT9hPheteLLhs7YhPUOheLetXUYhfTLhe4OhcXetxwLhfLLhe09huhetcLLhMTLhwJOhcLetoXLhKXLhc4OhwwetwwLhfLLhuUOhPhetcLLhmHYh6T9hSLettUYhDhLhxvOhSTetoHYhMLLhth9hQH2tcLLh-qYhxU9hkhO12Ln0fLP064Q0wCkpuCPyiCPqwv__6LnxPCfq-Cn_64_9PCkpwCfqYLk0Pv7qwCnpuCf_fLnqwvRqPCP1PCkq-Ck_64Q_PCPmwCnqiCPy64_qwCP16Lf9fLfqwvRq6Lk1bLkq-Cf0PvRqbLfpwCf_WCkq64RywCPmuCf0fLnqwv_0uCPmPCPq-Cf064R06LfxwCf_iCf9uvRywCnx6LPyWCPywv_yPCPmuCfq-Ck_uvQ_bLPpwCPqfLfqPvRywCfpbLf_fLnqwv_yPCPmuCfq-CkqPv_qPCPpwCkqWCPquv_qwCP16LPqiCnqwv__uCkxPCnq-CPq64__bLfpwCkqYLk_PvRqwCnpuCf9iCkqwv_0bLnxPCnq-Cf_Pv__PCnpwCk_fLn0b4_qwCPmuCk_YLnqwvR06Lk16Lnq-CPyuvRqbLfpwCk_fLk_Pv79wCPmuCk_YLnqwv__PCkX6LPy-Cf_PvRyPCnpwCk_fLf0uvRywCk1PCk_YLfqwv_ybLPmPCPy-CkqPv_qPCnXwCf0YLn964_qwCk1bLf9WCfqwvQ0PCPp6Lfq-Cf0b4Ry6LPpwCk_fLk_Pv79wCnpuCP9WCnqwvR0uCP1bLfq-Cf92479kLPOnqe0zTtygiuyg02mg8tyzXH_g699g72XgTY_zHY9g4O_gM2XgHY9zRY_gTuygL2mgTL_zTY_gT99gL21gLXyz8Y9g6U_gTeXgMY9zLXygi9ygL2mgRtyz0LygQ99g_2XgRtyzTY9g69ygRFXgTY9z_Xygi9ygL2mgXLyz_Y_g499gXFXg_XyzLY9giU_g7FXgLY9zTYyg4xyg82mg_H_z0tygT99gXe1g8XyzLY9g6U_g_HXgLY9z0XygHN_g8emg_XyzRtyg499gXeXg_Y_zLY9gAuyg_HXgLY9z_tygAOygM2mgRtyz7F_g699g0e1g0L_zMY9gHOyg821g8Y9z_L_gHuygM2mg8L_z7YygQ99g8HXgMtyzHY9gT9_g0t1g8Y9z0F_g4uygL2mgLXyz7YygQ99gLHXg7Yyz8Y9g69ygRFXgTY9z_YygiuygT2mg8Y_zXH_g499g_e1g0tyzMY9g6xygH2XgHY9zTL_g79_g72mg8L_z7YygQ99g7FXgLtyzLY9gT9yg0t1g8Y9z_tyg4U_g72mg7Y_z0Lyg499gLHXgRYyzLY9g4U_gLFXgHY9zXYygQxygL2mg8F_zTH_g699gTHXgXH_z_Y9gHxyg0X1g8L9zHY_g69_gL2mgXYq80H_gAxyg82mgXtyzLH_ge99gTe1gTY_z7Y9g4xygR2XgLY9z0XygAuyg72mgTH_z8Y_ge99gL21gMF_zLY9gT9ygX2XgLY9zXH_g7uygM2mgLYyzLH_gQ99gLLxg8H0zT38tg9hwq2txhYh8hS_24_0bLnx6Lk0-CP0b4Ry6LPpwCf_YLk_b4QqwCkpbLn_fLfqwv__uCfp6LPy-Cn9uv7_6LnXwCf_YLPq64RywCP16Ln0fLk0wvRqbLnmuCkq-Cn_647q6LkpwCn9WCn_64RywCnxbLP0fLk0wv_92LPmkLnMTqe0g4S0gTxmkLk_BLf0c7rCTqtxgLe0zTS_24R0kLkm2Ln8AhYhtg9hxwettgYhMLLhuUOhb72t6LLhWhLh67OheLettUYhmXLh64Oh2T2twqYhTqe0g4S0gRV12Ln08Lf_2470kLnVECxGXvS8k79hPG2t';

function Comm(id) {
    var url = 'https://www.zhihu.com/api/v4/answers/' + id + '/comments'; 
    console.log(url);
    fetch(url, {method: 'POST',headers: {'content-type': 'application/json','x-requested-with': 'fetch', 'X-Zse-83': '3_2.0'}, body:text_comment})
}

async function C() {
    var links = document.getElementsByTagName('a');
    var re = /answer\/(\d+)/;
	for(let l of links) {
	    var h = l.href;
	    var r = re.exec(h);
	    if(r && r[1]) {
	        console.log(r[1]);
	        Comm(r[1]);
	        await sleep(30000);
	    }
	}
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




C();
























