(this.webpackJsonpchart_room=this.webpackJsonpchart_room||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"chatSlice",(function(){return h})),n.d(a,"setStateData",(function(){return m})),n.d(a,"default",(function(){return O}));var r={};n.r(r),n.d(r,"selectUser",(function(){return p})),n.d(r,"db",(function(){return g}));var c={};n.r(c),n.d(c,"isEmpty",(function(){return B})),n.d(c,"isNotEmpty",(function(){return A}));var s={};n.r(s),n.d(s,"getFireBaseDb",(function(){return I}));var o=n(3),u=n.n(o),i=n(21),b=n.n(i),d=(n(47),n(48),n(11)),l=n(14),j=n(19),f=n(30),h=Object(f.b)({name:"chatRoom",initialState:{selectUser:{value:"Joanne",label:"Joanne"},db:null},reducers:{setStateData:function(e,t){e[t.payload.state]=t.payload.data}}}),m=h.actions.setStateData,O=h.reducer,p=function(e){return e.chatRoom.selectUser},g=function(e){return e.chatRoom.db},v=n(41),x=n(10),y=[{value:"Joanne",label:"Joanne"},{value:"Henry",label:"Henry"}];var S=function(){var e=Object(j.b)(),t=Object(j.c)(r.selectUser);return Object(x.jsx)(v.a,{className:"name-select",options:y,onChange:function(t){e(a.setStateData({data:t,state:"selectUser"}))},value:t})},E=n(0),D=n.n(E),F=n(4),B=function(e){return""===e||0===e.length},A=function(e){return""!==e||0!==e.length},C=n(40),I=function(){return Object(C.a)({apiKey:"### FIREBASE API KEY ###",authDomain:"### FIREBASE AUTH DOMAIN ###",projectId:"chatroom-1f890"}),Object(l.e)()};var U=function(){var e=s.getFireBaseDb(),t=Object(o.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(l.f)(Object(l.c)(e,"message","message"),(function(e){var t=e.metadata.hasPendingWrites?"Local":"Server";console.log(t," data: ",e.data())})),Object(o.useEffect)((function(){function t(){return(t=Object(F.a)(D.a.mark((function t(){var n,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)(Object(l.b)(e,"message"));case 2:if(n=t.sent,a=[],!c.isEmpty(n))try{n.forEach((function(e){a.push({id:e.id,user:e.data().user,message:e.data().message})}))}catch(s){console.log("Error : ",s)}r(a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:"Chat Box"}),a.map((function(e){return Object(x.jsxs)("div",{children:[e.user," : ",e.message]},e.id)}))]})};var J=function(){var e=s.getFireBaseDb(),t=Object(j.c)(r.selectUser),n=Object(o.useState)(""),a=Object(d.a)(n,2),c=a[0],u=a[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{}),Object(x.jsx)(U,{}),Object(x.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:c}),Object(x.jsx)("button",{type:"submit",onClick:function(){try{Object(l.a)(Object(l.b)(e,"message"),{user:t.value,message:c,timeStamp:new Date})}catch(n){console.error("Error adding document: ",n)}u("")},children:"Submit"})]})};var R=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)(J,{})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},N=Object(f.a)({reducer:{chatRoom:O}});b.a.render(Object(x.jsx)(u.a.StrictMode,{children:Object(x.jsx)(j.a,{store:N,children:Object(x.jsx)(R,{})})}),document.getElementById("root")),w()}},[[65,1,2]]]);
//# sourceMappingURL=main.97a36f40.chunk.js.map