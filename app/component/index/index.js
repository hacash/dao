

var $screen = $id('screen')
, $bgcv = $class($screen, 'bgcv')[0]
;
var scrmvr = function(){
    $bgcv.classList.toggle('big')
}
setTimeout(scrmvr,100)
setInterval(scrmvr,40000)



var $progress = $class('progress')
function showProgress($b) {
    $b.style.width = $b.innerText
}
setTimeout(function(){
    for(var i=0;i<$progress.length;i++){
        showProgress($progress[i].getElementsByTagName('b')[0])
    }
},100)

var bdw = document.body.clientWidth
if(bdw > 640){
    setTimeout(ToggleSideBar, 9000);
}




