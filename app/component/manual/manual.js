
var bdw = document.body.clientWidth
if(bdw > 640){
    setTimeout(ToggleSideBar, 100);
}


var $mpage = document.getElementsByClassName('mpage')[0]
  , $ctnr = $mpage.getElementsByClassName('container')[0]
  ;

// a href target
var as = $mpage.getElementsByTagName("a")
for(var i in as){
    var a = as[i]
    a.target = "_blank"
    if(!a.innerText){
        a.innerText = a.href
    }
}


var ctnflg = document.createElement('div')
ctnflg.className = 'mlgset'
ctnflg.innerHTML = '<div></div><div class="lang"><a href="?lang=en">🇺🇸English</a> / <a href="?lang=zh">🇨🇳中文</a></div>'
$ctnr.appendChild(ctnflg)
