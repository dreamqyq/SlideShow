var n = 0
var $dotBtn = $('.dot')
var size = $dotBtn.length
var timer = null

slideStart()


$('.window').on('mouseleave',() => {
	slideStart()
})

$('.window').on('mouseover',() => {
	clearInterval(timer)
})


$dotBtn.on('click',(xx) => {
	index = $(xx.currentTarget).index()
	changePic(index)
	n = index
	console.log(n)
})


// 轮播开始
function slideStart() {
	timer = window.setInterval(() => {
		n ++	
		changePic(n % size)
		console.log(n % size)
	},1500)
}


// 根据参数index改变图片到指定位置
function changePic(index) {
	// 改变图片位置
	var distance = index * -1280
	$('.slideBox').css({
		transform:'translateX('+ distance +'px)'
	})

	// 圆点按钮根据index改变样式
	$dotBtn.eq(index).addClass('active')
			  .siblings('.dot').removeClass('active')
}

