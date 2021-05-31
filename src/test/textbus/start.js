import React from 'react';
import { createEditor } from './create';
import '@textbus/textbus/bundles/textbus.min.css';

export default class TextbusStart extends React.Component{
	componentDidMount(){
		// console.log('createEditor:', createEditor)
		const editor = createEditor(this.container, {
		  // theme: 'dark',// 可选 'dark' | 'mac-os' | 'mac-os-dark'，不传即为默认样式
		  // uploader(uploadType, prevValue) {
		  //   switch (uploadType) {
		  //     case 'video':
		  //       console.log('上传视频');
		  //       break;
		  //     case 'image':
		  //       console.log('上传视频');
		  //       break;
		  //     case 'audio':
		  //       console.log('上传音频');
		  //       break;
		  //   }
		  //   return Promise.resolve().then(() => {
		  //     return '/test'
		  //   })
		  // },
		  historyStackSize: 5,
		  contents: `<p>欢迎你使用 <strong>TextBus</strong> 富文本编辑器...<br></p>`
		});
		// editor.onChange.subscribe(() => {
		//   console.log(editor.getContents())
		// })
		editor.readonly = false
		// console.log('editor:', editor)
	}
	render(){
		return (
			<div
				ref={(dom)=>{
					this.container = dom
				}} 
				style={{
					width: '100%',
					height: '100%'
				}}>

			</div>
		)
	}
}