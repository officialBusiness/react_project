import React from 'react';
import ReactDOM from 'react-dom';
// import dva from 'dva';
import './index.css';

import D3Start from './test/d3/d3_start.js';
// import TextbusStart from './test/textbus/start.js'
// import KnowledgeManagement from './my_tools/knowledge_management/knowledge_management.js'

ReactDOM.render(
	<D3Start />,
  document.getElementById('root')
);


// // 创建应用
// const app = dva();
// // 注册视图
// app.router(() => <D3Start />);
// // 启动应用
// app.start('#root');