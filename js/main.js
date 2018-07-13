var n = 0
var dotBtn = $('.dot')
var size = dotBtn.length
var timer = null

slideStart()

function slideStart() {
	timer = window.setInterval(() => {
		n = n % size	
		changePic(n)
		console.log(n)
		n ++

	},1500)
}

function changePic(index) {
	dotBtn.eq(index).addClass('active')
			  .siblings('.dot').removeClass('active')
	var distance = index * -1280
	$('.slideBox').css({
		transform:'translateX('+ distance +'px)'
	})
}


$('.window').on('mouseover',() => {
	clearInterval(timer)
})
$('.window').on('mouseleave',() => {
	slideStart()
})


dotBtn.on('click',(x) => {
	var index = $(x.currentTarget).index()
	changePic(index)
})

// 第一张图用了6秒才变
// 点击按钮后，后续轮播从点击处开始