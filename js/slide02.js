var n = 0
var $slidePic = $('.slidePic')
var $dotsBtn = $('.dot')
var size = $slidePic.length
var timer = null

init(n)

$('.window').on('mouseover',function(){
  clearInterval(timer)
})
$('.window').on('mouseleave',function(){
  startSlide()
})

$dotsBtn.on('click',function(e){
  let index = $(e.currentTarget).index()
  changePic(index)
  n = index
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
    changePic(judgeIndex(n))
    console.log(n)
    n++
    },1500)
  return timer
}
function changePic(index){
  $slidePic.eq(index)
           .addClass('leave')
           .removeClass('current enter')
           .one('transitionend',function(e){
             $(e.currentTarget).addClass('enter')
                               .removeClass('leave')
             })
  $slidePic.eq(index+1)
           .addClass('current')
           .removeClass('enter leave')
  $dotsBtn.eq(index+1).addClass('active')
         .siblings().removeClass('active')
}
