

var $screen = $id('screen')
, $bgcv = $class($screen, 'bgcv')[0]
;
var scrmvr = function(){
    $bgcv.classList.toggle('big')
}
setTimeout(scrmvr,100)
setInterval(scrmvr,40000)



