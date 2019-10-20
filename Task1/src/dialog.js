import React, { Component } from 'react';

class dialog extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	onkeydown = (e)=>{
		if (e.keyCode === 13) {
			this.handleSend()
		}
	}

	handleSend = ()=>{ 
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	render () {
		return (
			
			<div className="dialog">
				<div>
					<h3>New</h3>
					<input type="text" ref="myText" placeholder="请输入要添加的任务" onKeyDown={(e)=>this.onkeydown(e)}/>
				</div>
			</div>
			
		);
	}
}

export default dialog;