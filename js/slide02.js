var n = 0
var $slidePic = $('.slidePic')
var $dotsBtn = $('.dot')
var size = $slidePic.length
var timer = null

$(document).on('visibilitychange',() => {
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer = setInterval(() => {
      changePic(n+1)
    },2000)
  }
})
timer = setInterval(() => {
  changePic(n+1)
},2000)

$('.window').on('mouseover',() => {
  window.clearInterval(timer)
})
$('.window').on('mouseleave',() => {
  timer = setInterval(() => {
    changePic(n+1)
  },2000)
})

$dotsBtn.on('click',function(e){
  let index = $(e.currentTarget).index()
  changePic(index)
})
$('.nextBtn').on('click',function(){
  changePic(n+1)
  // n ++
})
$('.previousBtn').on('click',function(){
  changePic(n-1)
  // n --
})

function changePic(index){
  if(index >= size){
    index = 0
  }else if(index < 0){
    index = size-1
  }
  console.log(`current-index:${index}`)
  $slidePic.css('transform',`translateX(${-1280*index}px)`)
  $dotsBtn.eq(index).addClass('active').siblings().removeClass('active')
  n = index
  // n ++
  console.log(`than-index:${n%size}`)
}
