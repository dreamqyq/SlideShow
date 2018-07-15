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
  console.log(index)
  changePic(judgeIndex(index-1))
  n = index
})
$('.nextBtn').on('click',function(event) {
  changePic(judgeIndex(n))
  n = n+1
});
$('.previousBtn').on('click',function(event) {
  changePic(judgeIndex(n-1))
  n = n-1
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
    n++
    },2000)
  return timer
}
function changePic(index){
  // 当前的图片：从current状态变为leave然后变为enter
  $slidePic.eq(index)
           .addClass('leave')
           .removeClass('current enter')
           // .one('transitionend',function(e){
           //   $(e.currentTarget).addClass('enter')
           //                     .removeClass('leave')
           //   })
  // 后一张图片：从enter状态变为current状态
  $slidePic.eq(judgeIndex(index+1))
           .addClass('current')
           .removeClass('enter leave')
           // .siblings()
           // .removeClass('current')
  // 前一张图片：从enter状态变为leave状态
 $slidePic.eq(judgeIndex(index-1))
           .addClass('enter')
           .removeClass('current leave')
           // .siblings()
           // .removeClass('current')
            
  $dotsBtn.eq(judgeIndex(index+1)).addClass('active')
          .siblings().removeClass('active')
}
