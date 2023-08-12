

var bdw = document.body.clientWidth
if(bdw > 640){
    setTimeout(ToggleSideBar, 100);
}


var $mpage = document.getElementsByClassName('mpage')[0]
  , $ctnr = $mpage.getElementsByClassName('container')[0]
  ;

var ctnflg = document.createElement('div')
ctnflg.className = 'mlgset'
ctnflg.innerHTML = '<a href="?lang=en-US">English</a> / <a href="?lang=zh-CN">中文</a>'
$ctnr.appendChild(ctnflg)