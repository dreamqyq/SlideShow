var n = 0
var $slidePic = $('.slidePic')
var $dotsBtn = $('.dot')
var size = $slidePic.length
var timer = null

init(n)
startSlide()
  
$('.window').on('mouseover',function(){
  clearInterval(timer)
})
$('.window').on('mouseleave',function(){
  startSlide()
})

$dotsBtn.on('click',function(e){
  let index = $(e.currentTarget).index()
  console.log(index)
  changePic(index-1)
  n = index
})
$('.nextBtn').on('click',function(event) {
  changePic(n)
  n = n+1
});
$('.previousBtn').on('click',function(event) {
  changePic(n-1)
  n = n-1
})

function judgeIndex(index){
  index = index % size
  return index
}
function init(index){
  $slidePic.eq(index).addClass('current')
  $slidePic.eq(index).siblings().addClass('enter')
}
function startSlide(){
  timer = setInterval(() => {
    changePic(judgeIndex(n))
    // console.log(judgeIndex(n))
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
  $slidePic.eq(judgeIndex(index+1))
           .addClass('current')
           .removeClass('enter leave')
           .siblings()
           .removeClass('current')
  $dotsBtn.eq(judgeIndex(index+1)).addClass('active')
          .siblings().removeClass('active')
}
