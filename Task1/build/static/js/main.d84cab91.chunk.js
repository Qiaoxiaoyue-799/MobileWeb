(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),l=a.n(s),r=a(2),c=a(3),u=a(5),h=a(4),d=a(6),o=a(1),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFinished=a.handleFinished.bind(Object(o.a)(a)),a.handleDelete=a.handleDelete.bind(Object(o.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleFinished",value:function(){var e=this.props.item.status;e=0===e?1:0;var t={id:this.props.item.id,name:this.props.item.name,status:e};this.props.finishedChange(t)}},{key:"handleDelete",value:function(){this.props.totalChange(this.props.item)}},{key:"render",value:function(){var e=this.props.item;return i.a.createElement("li",{key:e.id},i.a.createElement("span",{onClick:this.handleFinished,id:e.id,className:"check-btn",style:{backgroundColor:0===e.status?"#fff":"#000"}}),i.a.createElement("span",null,e.name),i.a.createElement("span",{onClick:this.handleDelete,className:"delete-btn"},"\u5220\u9664"))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onkeydown=function(e){13===e.keyCode&&a.handleSend()},a.handleSend=function(){var e=a.props.nums,t=e>0?e:0,n=a.refs.myText.value;if(""!==n){var i={id:t,name:n,status:0};a.refs.myText.value="",a.props.addNewTask(i)}},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){var e=this.props.nums,t=e>0?e:0,a=this.refs.myText.value;if(""!==a){var n={id:t,name:a,status:0};this.refs.myText.value="",this.props.addNewTask(n)}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"dialog"},i.a.createElement("div",null,i.a.createElement("h3",null,"New"),i.a.createElement("input",{type:"text",ref:"myText",placeholder:"\u8bf7\u8f93\u5165\u8981\u6dfb\u52a0\u7684\u4efb\u52a1",onKeyDown:function(t){return e.onkeydown(t)}})))}}]),t}(n.Component),f=(a(14),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={list:[{id:0,name:"react",status:0},{id:1,name:"wechat",status:0},{id:2,name:"node",status:0}],finished:0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"addTask",value:function(e){var t=this.state.list;t.push(e),this.setState({list:t})}},{key:"updateFinished",value:function(e){var t=0;this.state.list.forEach((function(a){a.id===e.id&&(a.status=e.status),1===a.status&&t++})),this.setState({finished:t})}},{key:"updateTotal",value:function(e){var t=[],a=0;this.state.list.forEach((function(n){n.id!==e.id&&(t.push(n),1===n.status&&a++)})),this.setState({list:t,finished:a})}},{key:"render",value:function(){var e=this,t=this.state.list.length-this.state.finished;return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"TodoList"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u6b63\u5728\u8fdb\u884c\uff1a",t),this.state.list.map((function(t,a){return i.a.createElement(m,{item:t,finishedChange:e.updateFinished.bind(e),totalChange:e.updateTotal.bind(e),key:a})})),i.a.createElement("li",null,"\u5df2\u7ecf\u5b8c\u6210\uff1a",this.state.finished)),i.a.createElement(p,{addNewTask:this.addTask.bind(this),nums:this.state.list.length}))}}]),t}(n.Component));l.a.render(i.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d84cab91.chunk.js.map