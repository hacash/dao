

var $screen = $id('screen')
, $bgcv = $class($screen, 'bgcv')[0]
;

$bgcv.classList.toggle('big')
setInterval(function(){
    $bgcv.classList.toggle('big')
},40000)



