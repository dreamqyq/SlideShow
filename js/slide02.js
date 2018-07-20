var n = 0
var $slideBox = $('.slideBox')
var $slidePic = $('.slidePic')
var $dotsBtn = $('.dot')
var size = $slidePic.length
var timer = null

init()
startSlide()

$(document).on('visibilitychange',() => {
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    startSlide()
  }
})

$('.window').on('mouseover',() => {
  window.clearInterval(timer)
})
$('.window').on('mouseleave',() => {
  startSlide()
})

$dotsBtn.on('click',function(e){
  let index = $(e.currentTarget).index()
  changePic(index)
})
$('.nextBtn').on('click',function(){
  changePic(n+1)
})
$('.previousBtn').on('click',function(){
  changePic(n-1)
})

function init(){
  let $picFirst = $slidePic.eq(0).clone(true)
  let $picLast = $slidePic.eq(size-1).clone(true)
  $slideBox.append($picFirst)
  $slideBox.prepend($picLast)
  $slideBox.css('transform','translateX(-1280px)')
}
function startSlide(){
  timer = setInterval(() => {
    changePic(n+1)
  },2000)
  return timer
}
function changePic(index){
  if(index >= size){
    index = 0
  }else if(index < 0){
    index = size-1
  }
  let previousIndex = n % size
  if(previousIndex === 0 && index === size-1){
    console.log('0_7')
    $slideBox.css('transform','translateX(0px)')
             .one('transitionend',() => {
               $slideBox.hide().offset()
               $slideBox.css('transform',`translateX(-${size*1280}px)`)
                        .show()
             })
  }else if(previousIndex === size -1 && index === 0){
    console.log('7_0')
    $slideBox.css('transform',`translateX(-${(size+1)*1280}px)`)
             .one('transitionend',() => {
               $slideBox.hide().offset()
               $slideBox.css('transform',`translateX(-1280px)`)
                        .show()
             })
  }else{
    $slideBox.css('transform',`translatex(${-1280*(index+1)}px)`)
  } 
  $dotsBtn.eq(index).addClass('active').siblings().removeClass('active')
  n = index
  console.log(n)
}
