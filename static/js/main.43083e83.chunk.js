(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=n(3),l=n(4),s=n(6),u=n(5),m=n(7),h=(n(14),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{alt:"",src:"https://www.robohash.org/".concat(t,"?400x400")})),r.a.createElement("div",{className:"details"},r.a.createElement("div",null),r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=(n(15),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"box"},r.a.createElement("input",{className:"type-field",type:"search",placeholder:"Enter Search Details",onChange:t}))}),v=(n(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"ROBOFAMILY"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:a})):r.a.createElement("h1",{className:"tc"},"Loading")}}]),t}(a.Component));n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.43083e83.chunk.js.map