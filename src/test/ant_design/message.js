import { message } from 'antd';

export default function Message( container ){
	return(
		<div
			style={{
				userSelect: 'none',
				cursor: 'pointer'
			}}
			onMouseDown={showMessage}>
			点击显示全局信息
		</div>
	)
}

function showMessage(){
	console.log('message:', message)
	// message.info('antd-design 组件');
}