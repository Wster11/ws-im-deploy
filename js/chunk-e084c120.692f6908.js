(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e084c120"],{"22fa":function(e,t,c){"use strict";c("68ef"),c("cb51"),c("3743"),c("e3b3"),c("bc1b")},"2b14":function(e,t,c){},"3d0b":function(e,t,c){"use strict";c("2b14")},"72cf":function(e,t,c){},"75e6":function(e,t,c){"use strict";c("68ef"),c("72cf")},"807c":function(e,t,c){"use strict";c("f608")},"885a":function(e,t,c){"use strict";var a=c("7a23");const o={key:0},n={key:0,class:"lastMsg"},r={key:1,class:"lastMsg"};function l(e,t,c,l,s,i){var d,b;const u=Object(a["resolveComponent"])("Badge");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"userWrap",onClick:t[0]||(t[0]=t=>e.user.toContact(e.name,e.chatType))},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(e.chatType!==e.user.CHAT_TYPE.singleChat?"avatar defaultGroupAvatar":"avatar defaultAvatar"),style:Object(a["normalizeStyle"])(null!==(d=e.user.info)&&void 0!==d&&d.avatarurl?`background: url(${e.user.info.avatarurl});background-size: 100%`:"")},[e.unReadCount?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,content:e.unReadCount},null,8,["content"])):Object(a["createCommentVNode"])("",!0)],6),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.chatType===e.user.CHAT_TYPE.groupChat?""+((null===(b=e.user.info)||void 0===b?void 0:b.name)||e.name):e.user.info.nickname||e.name),1),e.lastMessage?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,["txt"===e.lastMessage.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,Object(a["toDisplayString"])(e.lastMessage.msg),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,Object(a["toDisplayString"])(`[${e.lastMessage.type}]`),1))])):Object(a["createCommentVNode"])("",!0)])])}c("68ef"),c("cb51");var s=c("8be7"),i=(c("14d9"),c("cb9e"),c("9ab4")),d=c("ce1f"),b=c("6605"),u=c("3fff"),j=c("5502");class O{}let v=class extends(d["b"].with(O)){constructor(){super(...arguments),this.user=Object(d["c"])(()=>{const e=Object(j["b"])(),t=Object(b["e"])(),c=Object(a["getCurrentInstance"])(),o=Object(a["reactive"])({}),n=e.state.IM.connect,r=(e,c)=>{t.push(`/chat/to/${c}/${encodeURIComponent(e)}`)},l=()=>{(null===c||void 0===c?void 0:c.props.chatType)===u["a"].singleChat?n.contact.fetchUserInfoById(null===c||void 0===c?void 0:c.props.name).then(e=>{var t;Object.assign(o,null===(t=e.data)||void 0===t?void 0:t[null===c||void 0===c?void 0:c.props.name],{success:!0})}):(null===c||void 0===c?void 0:c.props.chatType)===u["a"].groupChat?(n.group.getGroupInfo({groupId:null===c||void 0===c?void 0:c.props.name}).then(e=>{var t;Object.assign(o,null===(t=e.data)||void 0===t?void 0:t[0],{success:!0})}),Object.assign(o,{success:!0})):Object.assign(o,{success:!0})};return Object(a["onMounted"])(()=>{l()}),{toContact:r,CHAT_TYPE:u["a"],info:o}})}};v=Object(i["a"])([Object(d["a"])({props:{name:"",chatType:u["a"],lastMessage:null,unReadCount:0},components:{Badge:s["b"]}})],v);var h=v,p=(c("807c"),c("6b0d")),f=c.n(p);const V=f()(h,[["render",l],["__scopeId","data-v-12e665f1"]]);t["a"]=V},"8ced":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const o=e=>(Object(a["pushScopeId"])("data-v-827ba028"),e=e(),Object(a["popScopeId"])(),e),n={class:"chatWrap"},r={class:"userListWrap"},l=o(()=>Object(a["createElementVNode"])("br",null,null,-1));function s(e,t,c,o,s,i){const d=Object(a["resolveComponent"])("User"),b=Object(a["resolveComponent"])("Empty"),u=Object(a["resolveComponent"])("Button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",r,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.chat.store.conversationList,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:e.conversationId},[Object(a["createVNode"])(d,{name:e.conversationId,chatType:e.conversationType,unReadCount:e.unReadCount,lastMessage:e.lastMessage,customField:e.customField},null,8,["name","chatType","unReadCount","lastMessage","customField"])]))),128)),e.chat.store.conversationList.length?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,description:"会话列表为空"})),l,Object(a["createVNode"])(u,{onClick:e.chat.getLocalConversations},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("获取本地会话列表")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.chat.getLocalConversation},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("获取本地会话")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.chat.setLocalConversationCustomField},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("设置会话自定义字段")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.chat.removeLocalConversation},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("删除本地会话")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.chat.clearConversationUnreadCount},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("清空会话未读数")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{onClick:e.chat.syncServerConversationListToLocal},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("同步服务端会话列表")]),_:1},8,["onClick"])])])}c("75e6");var i=c("badc"),d=(c("b613"),c("b4d6")),b=(c("89a0"),c("9a1c")),u=(c("22fa"),c("2e1b")),j=(c("02ab"),c("dc94")),O=c("9ab4"),v=c("ce1f"),h=c("5502"),p=c("885a"),f=c("f695");let V=class extends v["b"]{constructor(){super(...arguments),this.chat=Object(v["c"])(()=>{const e=Object(h["b"])(),t=Object(a["ref"])(!1),c=()=>{e.state.IM.connect.localCache.getLocalConversation({conversationId:"yjj",conversationType:"singleChat"}).then(e=>{console.log(e,"ressss")})},o=()=>{let t={conversationId:"yjj",conversationType:"singleChat",customField:"自定义字段"};e.commit("IM/setConversationCustomField",t)},n=()=>{let t={conversationId:"yjj",conversationType:"singleChat"};e.commit("IM/removeLocalConversation",t)},r=()=>{let t={conversationId:"yjj",conversationType:"singleChat"};e.commit("IM/clearConversationUnreadCount",t)},l=()=>{e.state.IM.connect.contact.getServerConversations({pageSize:200,cursor:""}).then(t=>{console.log(t,"resssssss"),setTimeout(()=>{e.state.IM.connect.localCache.getLocalConversations().then(e=>{console.log("local conversations",e)})},100)}).catch(e=>{console.log(e)})},s=()=>{e.state.IM.connect.localCache.getLocalConversations().then(t=>{console.log("local conversations",t),e.commit("IM/setConversationList",{list:t.data})})};return{store:e.state.IM,showPopover:t,formatSessionListTo:f["d"],getLocalConversation:c,setLocalConversationCustomField:o,removeLocalConversation:n,clearConversationUnreadCount:r,getLocalConversations:s,syncServerConversationListToLocal:l}})}};V=Object(O["a"])([Object(v["a"])({components:{User:p["a"],NavBar:j["a"],Button:u["b"],Icon:b["b"],Popover:d["a"],Empty:i["a"]}})],V);var N=V,g=(c("3d0b"),c("6b0d")),m=c.n(g);const C=m()(N,[["render",s],["__scopeId","data-v-827ba028"]]);t["default"]=C},badc:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var a=c("23f9"),o=c("7a23"),n=c("05df"),r=c("1fba"),l=c("e5f6"),s=c("5aa0");const[i,d]=Object(r["a"])("empty"),b={image:Object(l["e"])("default"),imageSize:[Number,String,Array],description:String};var u=Object(o["defineComponent"])({name:i,props:b,setup(e,{slots:t}){const c=()=>{const c=t.description?t.description():e.description;if(c)return Object(o["createVNode"])("p",{class:d("description")},[c])},a=()=>{if(t.default)return Object(o["createVNode"])("div",{class:d("bottom")},[t.default()])},r=Object(n["a"])(),l=e=>`${r}-${e}`,i=e=>`url(#${l(e)})`,b=(e,t,c)=>Object(o["createVNode"])("stop",{"stop-color":e,offset:t+"%","stop-opacity":c},null),u=(e,t)=>[b(e,0),b(t,100)],j=e=>[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("radialGradient",{id:l(e),cx:"50%",cy:"54%",fx:"50%",fy:"54%",r:"297%",gradientTransform:"matrix(-.16 0 0 -.33 .58 .72)"},[b("#EBEDF0",0),b("#F2F3F5",100,.3)])]),Object(o["createVNode"])("ellipse",{fill:i(e),opacity:".8",cx:"80",cy:"140",rx:"46",ry:"8"},null)],O=()=>[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{id:l("a"),x1:"64%",y1:"100%",x2:"64%"},[b("#FFF",0,.5),b("#F2F3F5",100)])]),Object(o["createVNode"])("g",{opacity:".8"},[Object(o["createVNode"])("path",{d:"M36 131V53H16v20H2v58h34z",fill:i("a")},null),Object(o["createVNode"])("path",{d:"M123 15h22v14h9v77h-31V15z",fill:i("a")},null)])],v=()=>[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{id:l("b"),x1:"64%",y1:"97%",x2:"64%",y2:"0%"},[b("#F2F3F5",0,.3),b("#F2F3F5",100)])]),Object(o["createVNode"])("g",{opacity:".8"},[Object(o["createVNode"])("path",{d:"M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",fill:i("b")},null),Object(o["createVNode"])("path",{d:"M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",fill:i("b")},null)])],h=()=>Object(o["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{id:l(1),x1:"64%",y1:"100%",x2:"64%"},[b("#FFF",0,.5),b("#F2F3F5",100)]),Object(o["createVNode"])("linearGradient",{id:l(2),x1:"50%",x2:"50%",y2:"84%"},[b("#EBEDF0",0),b("#DCDEE0",100,0)]),Object(o["createVNode"])("linearGradient",{id:l(3),x1:"100%",x2:"100%",y2:"100%"},[u("#EAEDF0","#DCDEE0")]),Object(o["createVNode"])("radialGradient",{id:l(4),cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[b("#EBEDF0",0),b("#FFF",100,0)])]),Object(o["createVNode"])("g",{fill:"none"},[O(),Object(o["createVNode"])("path",{fill:i(4),d:"M0 139h160v21H0z"},null),Object(o["createVNode"])("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:i(2)},null),Object(o["createVNode"])("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[Object(o["createVNode"])("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:i(3)},null),Object(o["createVNode"])("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:i(3)},null),Object(o["createVNode"])("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:i(3)},null),Object(o["createVNode"])("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:i(3)},null)]),Object(o["createVNode"])("g",{transform:"translate(31 105)"},[Object(o["createVNode"])("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),Object(o["createVNode"])("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),Object(o["createVNode"])("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])]),p=()=>Object(o["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(5)},[u("#F2F3F5","#DCDEE0")]),Object(o["createVNode"])("linearGradient",{x1:"95%",y1:"48%",x2:"5.5%",y2:"51%",id:l(6)},[u("#EAEDF1","#DCDEE0")]),Object(o["createVNode"])("linearGradient",{y1:"45%",x2:"100%",y2:"54%",id:l(7)},[u("#EAEDF1","#DCDEE0")])]),O(),v(),Object(o["createVNode"])("g",{transform:"translate(36 50)",fill:"none"},[Object(o["createVNode"])("g",{transform:"translate(8)"},[Object(o["createVNode"])("rect",{fill:"#EBEDF0",opacity:".6",x:"38",y:"13",width:"36",height:"53",rx:"2"},null),Object(o["createVNode"])("rect",{fill:i(5),width:"64",height:"66",rx:"2"},null),Object(o["createVNode"])("rect",{fill:"#FFF",x:"6",y:"6",width:"52",height:"55",rx:"1"},null),Object(o["createVNode"])("g",{transform:"translate(15 17)",fill:i(6)},[Object(o["createVNode"])("rect",{width:"34",height:"6",rx:"1"},null),Object(o["createVNode"])("path",{d:"M0 14h34v6H0z"},null),Object(o["createVNode"])("rect",{y:"28",width:"34",height:"6",rx:"1"},null)])]),Object(o["createVNode"])("rect",{fill:i(7),y:"61",width:"88",height:"28",rx:"1"},null),Object(o["createVNode"])("rect",{fill:"#F7F8FA",x:"29",y:"72",width:"30",height:"6",rx:"1"},null)])]),f=()=>Object(o["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(8)},[u("#EAEDF1","#DCDEE0")])]),O(),v(),j("c"),Object(o["createVNode"])("path",{d:"m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",fill:i(8)},null)]),V=()=>Object(o["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(o["createVNode"])("defs",null,[Object(o["createVNode"])("linearGradient",{x1:"50%",y1:"100%",x2:"50%",id:l(9)},[u("#EEE","#D8D8D8")]),Object(o["createVNode"])("linearGradient",{x1:"100%",y1:"50%",y2:"50%",id:l(10)},[u("#F2F3F5","#DCDEE0")]),Object(o["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(11)},[u("#F2F3F5","#DCDEE0")]),Object(o["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:l(12)},[u("#FFF","#F7F8FA")])]),O(),v(),j("d"),Object(o["createVNode"])("g",{transform:"rotate(-45 113 -4)",fill:"none"},[Object(o["createVNode"])("rect",{fill:i(9),x:"24",y:"52.8",width:"5.8",height:"19",rx:"1"},null),Object(o["createVNode"])("rect",{fill:i(10),x:"22.1",y:"67.3",width:"9.9",height:"28",rx:"1"},null),Object(o["createVNode"])("circle",{stroke:i(11),"stroke-width":"8",cx:"27",cy:"27",r:"27"},null),Object(o["createVNode"])("circle",{fill:i(12),cx:"27",cy:"27",r:"16"},null),Object(o["createVNode"])("path",{d:"M37 7c-8 0-15 5-16 12",stroke:i(11),"stroke-width":"3",opacity:".5","stroke-linecap":"round",transform:"rotate(45 29 13)"},null)])]),N=()=>{var c;if(t.image)return t.image();const a={error:f,search:V,network:h,default:p};return(null==(c=a[e.image])?void 0:c.call(a))||Object(o["createVNode"])("img",{src:e.image},null)};return()=>Object(o["createVNode"])("div",{class:d()},[Object(o["createVNode"])("div",{class:d("image"),style:Object(s["e"])(e.imageSize)},[N()]),c(),a()])}});const j=Object(a["a"])(u);var O=j},f608:function(e,t,c){}}]);
//# sourceMappingURL=chunk-e084c120.692f6908.js.map