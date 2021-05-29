
export default function simpleAnimation({
	operation = {},
	from = {},
	to = {},
	duration = 1000,
	onStart = ()=>{},
	onUpdate = ()=>{},
	onComplete = ()=>{},
}){
	if ( operation.isAnimating ) {
		return
	}
	onStart({ operation, from, to })
	operation.isAnimating = true
	var startTime = now$1(),
			endTime = startTime + duration,
			now = {}

	now = clone(to)
	var animationId = requestAnimationFrame(doAnimation)
	function doAnimation(time){
		var percentage = (time <= startTime ? 0 : time >= endTime ? 1 : (time - startTime) / duration)
		updateProperties( from, to, now, percentage )
		onUpdate({ operation, from, to, now })
		if ( percentage === 1 ) {
			cancelAnimationFrame(animationId)
			onComplete({operation, from, to})
			operation.isAnimating = false
		}else{
			animationId = requestAnimationFrame(doAnimation)
		}
	}
	return function(){
		cancelAnimationFrame(animationId)
	}
}

// 获取当前时间
export const now$1 = window.performance.now.bind(window.performance)
// 深拷贝一个对象
export function clone(obj){
	var ret = {}
	for(var key in obj){
		if ( typeof obj[key] === 'object' ) {
			ret[key] = clone(obj[key])
		}else{
			ret[key] = obj[key]
		}
	}
	return ret
}
function updateProperties(from, to, object, percentage){
	for( var key in to ){
		if ( typeof to[key] === 'object' ) {
			updateProperties( from[key], to[key], object[key], percentage )
		}else if ( typeof to[key] === 'number' ) {
			object[key] = (to[key] - from[key]) * percentage + from[key]
		}
	}
}