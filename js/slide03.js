let $slideBox = $('.slideBox')
let $slidePic = $('.slidePic')
let size = $slidePic.length
let $iconBtn = $('.iconBtn')
let timer = null
let n = 0

$(document).on('visibilitychange',function(){
  if(document.hidden){
    clearInterval(timer)
  }else{
    startSlide()
  }
})

timer = setInterval(() => {
  changePic(n+1)
  n++
},2000)
$('main').on('mouseover',() => {
  clearInterval(timer)
})
$('main').on('mouseleave',() => {
  startSlide()
})
$iconBtn.on('click',function(e){
  let index = $(e.currentTarget).index()
  changePic(index)
  n = index
})

function changePic(index){
  index = index % size
  $slideBox.css('transform',`translateX(${-920*index}px)`)
  $iconBtn.eq(index).addClass('active').siblings().removeClass('active')
}
function startSlide(){
  timer = setInterval(() => {
    changePic(n+1)
    n++
  },2000)
  return timer;
}
