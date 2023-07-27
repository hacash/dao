var $ufnvbx = $id('ufnvbx')
, ufnvbx_open = false
, $header = $id('header')
, $center = $class($header, 'center')[0]
;
$ufnvbx.onclick = function(){
    $center.classList.toggle('show')
    $ufnvbx.classList.toggle('active')
    $ufnvbx.innerHTML = '<b class="ic">&#xe'+(ufnvbx_open?'681':'72a')+';</b>'
    ufnvbx_open = !ufnvbx_open

}

/////////////////

var $bdwp = $id('bdwp')
, $sdbtn = $id('sdbtn')
, sdisopen = false
;
function ToggleSideBar() {
    var tgf = sdisopen ? 'remove' : 'add'
    $bdwp.classList[tgf]('open')
    sdisopen = !sdisopen
}
$sdbtn.onclick = ToggleSideBar
