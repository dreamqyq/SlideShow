var n = 0
var $slidePic = $('.slidePic')
var size = $slidePic.length
var timer = null

init(n)
$('.window').on('mouseover',function(){
  clearInterval(startSlide())
  console.log(1)
})

function judgeIndex(index){
  index = index % size
  return index
}
function init(index){
  $slidePic.eq(index).addClass('current')
  $slidePic.eq(index).siblings().addClass('enter')
  startSlide()
}
function startSlide(){
  timer = setInterval(() => {
      $slidePic.eq(judgeIndex(n)).addClass('leave').removeClass('current enter')
               .one('transitionend',function(e){
                  $(e.currentTarget).addClass('enter').removeClass('leave')
               })
      $slidePic.eq(judgeIndex(n+1)).addClass('current').removeClass('enter leave')
      n++
    },3000)
  return timer
}
