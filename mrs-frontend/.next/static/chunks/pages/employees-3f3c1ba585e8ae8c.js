(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{4736:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/employees",function(){return t(3943)}])},7002:function(e,n,t){"use strict";t.d(n,{ZZ:function(){return s},fC:function(){return i},fg:function(){return r},s9:function(){return o}});let a="".concat("https://team-manager-backend.up.railway.app","/api/teams");async function s(e){let n=await fetch(a),t=await n.json();e(t)}async function r(e,n,t,r){let i={name:e.currentTarget.teamname.value};if(!i.name){r("Please choose a name.");return}if(1!=i.name.split(" ").length){r("Names cannot contain a space.");return}let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},l=await fetch(a,o);l.ok?(await s(n),t(!1),r("")):r("Team name already taken.")}async function i(e,n){await fetch("".concat(a,"/").concat(e),{method:"DELETE"}),await s(n)}async function o(e,n,t){let a={empId:e,teamToId:n};if(!a.teamToId){alert("Please choose a teamid.");return}let r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};await fetch("".concat("https://team-manager-backend.up.railway.app","/api/employees"),r),await s(t)}},3943:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(5893),s=t(1664),r=t.n(s),i=t(3299),o=t(7294),l=t(2256),c=t(7257),d=t(967),m=t(3625);let p="".concat("https://team-manager-backend.up.railway.app","/api/employees");async function h(e){let n=await fetch(p),t=await n.json();return e(t),t}async function u(e,n,t,a,s){let r={firstName:e.currentTarget.firstName.value,lastName:e.currentTarget.lastName.value,type:e.currentTarget.type.value,months:e.currentTarget.months.value,teamId:n};if(!r.firstName||!r.lastName||!r.type||!r.months||!r.teamId){s("Please fill the form.");return}let i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};await fetch(p,i),await h(t),a(!1),s("")}async function f(e,n){await fetch("".concat(p,"/").concat(e),{method:"DELETE"}),await h(n)}function y(e){let[n,t]=(0,o.useState)(!1),{employee:s,setEmployees:i}=e;return(0,a.jsx)("main",{className:"employeecard-main",children:(0,a.jsxs)(l.Z,{className:"employeecard-card",children:[(0,a.jsx)(c.Z,{src:"",wrapped:!0,ui:!1}),(0,a.jsxs)(l.Z.Content,{children:[(0,a.jsx)(l.Z.Header,{children:(0,a.jsxs)(r(),{className:"employeecard-employeeLink",href:"/employees/"+s.id,children:[s.firstName," ",s.lastName]})}),(0,a.jsxs)(l.Z.Meta,{children:[(0,a.jsxs)("span",{children:[s.type," |"]}),(0,a.jsxs)("span",{children:["Months worked: ",s.months," |"]}),(0,a.jsxs)("span",{children:["Team: ",s.teamName," "]})]})]}),(0,a.jsx)(l.Z.Content,{extra:!0,children:(0,a.jsxs)("div",{className:"ui two buttons",children:[(0,a.jsx)(d.Z,{basic:!0,color:"green",href:"/employees/"+s.id,children:"Employee Details"}),(0,a.jsx)(d.Z,{basic:!0,color:"red",onClick:()=>t(!0),children:"Delete Employee"}),(0,a.jsx)(m.Z,{open:n,onCancel:()=>t(!1),onConfirm:()=>{f(s.id,i),t(!1)}})]})})]})})}var x=t(7002),j=t(9795),Z=t(8239),N=t(5142),v=t(416),C=t(8156),g=t(5150);function w(){let{data:e,status:n}=(0,i.useSession)(),[t,s]=(0,o.useState)([]),[r,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{h(s),(0,x.ZZ)(l)},[]);let[c,m]=(0,o.useState)(!1),[p,f]=(0,o.useState)(""),[w,b]=(0,o.useState)("");return"authenticated"===n?(0,a.jsxs)("div",{className:"employees-content-wrap",children:[(0,a.jsxs)("div",{className:"employees-add-info",children:[(0,a.jsxs)(j.Z,{animation:!1,onClose:()=>m(!1),onOpen:()=>m(!0),open:c,trigger:(0,a.jsx)(d.Z,{className:"employees-modal-btn",inverted:!0,color:"orange",children:"Add Employee +"}),children:[(0,a.jsx)(j.Z.Header,{children:"Add Employee Info."}),(0,a.jsxs)(j.Z.Content,{children:[(0,a.jsxs)(Z.Z,{onSubmit:e=>{e.preventDefault(),u(e,p,s,m,b)},children:[(0,a.jsxs)(Z.Z.Field,{children:[(0,a.jsx)(N.Z,{children:"First Name"}),(0,a.jsx)(v.Z,{placeholder:"first name",type:"text",name:"firstName"}),(0,a.jsx)(N.Z,{children:"Last Name"}),(0,a.jsx)(v.Z,{placeholder:"last name",type:"text",name:"lastName"}),(0,a.jsx)(N.Z,{children:"Specialisation"}),(0,a.jsx)(v.Z,{placeholder:"spec.",type:"text",name:"type"}),(0,a.jsx)(N.Z,{children:"Months Worked"}),(0,a.jsx)(v.Z,{placeholder:"months",type:"number",name:"months"})]}),(0,a.jsx)(N.Z,{children:"Team"}),(0,a.jsx)(Z.Z.Select,{type:"text",placeholder:"team name",fluid:!0,selection:!0,options:r.map(e=>({key:e.id,text:e.name,value:e.id})),onChange:(e,n)=>{f(String(n.value))}}),(0,a.jsx)(d.Z,{type:"submit",children:"Add Employee +"})]}),w.length>0?(0,a.jsx)(C.Z,{warning:!0,children:(0,a.jsx)("p",{children:w})}):null]})]}),(0,a.jsx)(d.Z,{className:"employees-signout-btn",size:"tiny",onClick:()=>(0,i.signOut)(),children:"Sign out"})]}),(0,a.jsx)("div",{className:"employees-person-box",children:t.map(e=>(0,a.jsx)(y,{employee:e,setEmployees:s},e.id))})]}):(0,a.jsx)("div",{className:"employees-content-wrap",children:(0,a.jsx)("div",{className:"signin-container",children:(0,a.jsxs)("div",{className:"signin-box",children:[(0,a.jsx)("p",{className:"signin-text",children:"Authenticated users only"}),(0,a.jsxs)(d.Z,{basic:!0,color:"blue",className:"signin-btn",onClick:()=>(0,i.signIn)(),children:["Sign in",(0,a.jsx)(g.Z,{name:"chevron right"})]})]})})})}var b=t(7027);function k(){return(0,a.jsxs)("main",{className:"employees-main",children:[(0,a.jsxs)("nav",{className:"employees-navbar",children:[(0,a.jsx)(r(),{className:"employees-navlink",href:"/",children:"Home"}),(0,a.jsx)(r(),{className:"employees-navlink",href:"/teams",children:"Teams"}),(0,a.jsx)(r(),{className:"employees-navlink",href:"/employees",children:"People"})]}),(0,a.jsxs)("div",{className:"employees-body-container",children:[(0,a.jsx)(w,{}),(0,a.jsx)("footer",{className:"employees-footer",children:(0,a.jsxs)(b.Z,{horizontal:!0,relaxed:"very",inverted:!0,children:[(0,a.jsx)(b.Z.Item,{children:(0,a.jsx)(b.Z.Content,{children:(0,a.jsx)(b.Z.Header,{children:"Simon.H"})})}),(0,a.jsx)(b.Z.Item,{children:(0,a.jsx)(b.Z.Content,{children:(0,a.jsx)(b.Z.Header,{children:"Rasmus.R"})})}),(0,a.jsx)(b.Z.Item,{children:(0,a.jsx)(b.Z.Content,{children:(0,a.jsx)(b.Z.Header,{children:"Mona.T"})})})]})})]})]})}},3625:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(7462),s=t(5068),r=Object.prototype.hasOwnProperty,i=function(e,n){return null!=e&&r.call(e,n)},o=t(6174),l=t(8232),c=t(7294),d=t(8935),m=t(967),p=t(9795),h=function(e){function n(){for(var n,t=arguments.length,a=Array(t),s=0;s<t;s++)a[s]=arguments[s];return(n=e.call.apply(e,[this].concat(a))||this).handleCancel=function(e){(0,l.Z)(n.props,"onCancel",e,n.props)},n.handleCancelOverrides=function(e){return{onClick:function(t,a){(0,l.Z)(e,"onClick",t,a),n.handleCancel(t)}}},n.handleConfirmOverrides=function(e){return{onClick:function(t,a){(0,l.Z)(e,"onClick",t,a),(0,l.Z)(n.props,"onConfirm",t,n.props)}}},n}return(0,s.Z)(n,e),n.prototype.render=function(){var e,t=this.props,s=t.cancelButton,r=t.confirmButton,l=t.content,h=t.header,u=t.open,f=t.size,y=(0,d.Z)(n,this.props),x={};return null!=(e=this.props)&&(0,o.Z)(e,"open",i)&&(x.open=u),c.createElement(p.Z,(0,a.Z)({},y,x,{size:f,onClose:this.handleCancel}),p.Z.Header.create(h,{autoGenerateKey:!1}),p.Z.Content.create(l,{autoGenerateKey:!1}),c.createElement(p.Z.Actions,null,m.Z.create(s,{autoGenerateKey:!1,overrideProps:this.handleCancelOverrides}),m.Z.create(r,{autoGenerateKey:!1,defaultProps:{primary:!0},overrideProps:this.handleConfirmOverrides})))},n}(c.Component);h.handledProps=["cancelButton","confirmButton","content","header","onCancel","onConfirm","open","size"],h.propTypes={},h.defaultProps={cancelButton:"Cancel",confirmButton:"OK",content:"Are you sure?",size:"small"};var u=h}},function(e){e.O(0,[267,550,774,888,179],function(){return e(e.s=4736)}),_N_E=e.O()}]);