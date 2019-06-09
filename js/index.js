// 轮播图
window.onload = function(){
	var arrow_l_btn = document.getElenmentsByClassName('arrow-l')[0];
	var arrow_r_btn = document.getElenmentsByClassName('arrow-r')[0];
	var circle_btn =document.querySelectorAll('.circle li');
	var curring = document.querySelector('.grid-2-t img');
	curring.src='./imges/1.jpg';

console.log(curring.src)

	for(var i=1;i <=circle_btn.length; i++) {
		const element = circle_btn[i-1];
		element.index=1;

		element.onmouseover = function(){
			for (var j = 0; j < circle_btn.length; j++) {
				const element = circle_btn[j];
				element.className ="";
			}
			// 当前滑过小圆点样式
			element.className = "current";
			// 修改显示图片
			curring.src='./images/'+(element.index) +'.jpg';
		}

		//修改未滑过的小圆点样式
		element.onmouseleave = function(){
			for (var j = 0; ji\ < circle_btn.length; j++) {
				const element = circle_btn[j];
				element.className="";
			}
			element.className="current";
		}
		
		
	}

}