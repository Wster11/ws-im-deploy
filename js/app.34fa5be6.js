(function(e){function n(n){for(var o,c,s=n[0],i=n[1],u=n[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(o=!1)}o&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},c={app:0},a={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-19a29c80":"af6607d9","chunk-18e92e9f":"a4457c2f","chunk-3c0f7369":"9f4e2c63","chunk-465fa484":"fb76c061","chunk-46e84683":"734ce7da","chunk-4c72f09c":"9f1da539","chunk-9a0276b0":"846cfef9","chunk-a7e6578a":"b004b377","chunk-f1fd5e76":"78af5378","chunk-56cb9d96":"659bd1bc","chunk-626807b4":"3017c75c","chunk-e084c120":"692f6908"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-19a29c80":1,"chunk-18e92e9f":1,"chunk-3c0f7369":1,"chunk-465fa484":1,"chunk-46e84683":1,"chunk-4c72f09c":1,"chunk-9a0276b0":1,"chunk-a7e6578a":1,"chunk-f1fd5e76":1,"chunk-56cb9d96":1,"chunk-626807b4":1,"chunk-e084c120":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-19a29c80":"dc01abef","chunk-18e92e9f":"9f913e1c","chunk-3c0f7369":"aa1c16db","chunk-465fa484":"68e3002c","chunk-46e84683":"08dfd38f","chunk-4c72f09c":"5f943eb7","chunk-9a0276b0":"1f3af82b","chunk-a7e6578a":"b153e957","chunk-f1fd5e76":"b8e96edf","chunk-56cb9d96":"af9252b1","chunk-626807b4":"95224e57","chunk-e084c120":"0106e061"}[e]+".css",a=i.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],f.parentNode.removeChild(f),t(r)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"028f":function(e,n,t){},"2eac":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));const o={noAuth:"token not assign error",loginFailed:"login failed",notLogin:"not login",recallTimeout:"exceed recall time limit",userNotFound:"user not found",invalidPassword:"invalid password",registerUnique:"duplicate_unique_property_exists",sendMsgBlock:"blocked"}},"3fff":function(e,n,t){"use strict";t.d(n,"f",(function(){return c})),t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return o})),t.d(n,"g",(function(){return d})),t.d(n,"m",(function(){return a})),t.d(n,"h",(function(){return r})),t.d(n,"l",(function(){return s})),t.d(n,"k",(function(){return u})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return i})),t.d(n,"e",(function(){return h})),t.d(n,"a",(function(){return m})),t.d(n,"d",(function(){return p}));const o="easemob#easeim",c=localStorage.getItem("appkey")||o,a="true"===localStorage.getItem("useReplacedMessageContents"),r="true"===localStorage.getItem("isHttpDNS"),s="true"===localStorage.getItem("useCustomConfig"),i="true"===localStorage.getItem("isTokenLogin"),u=localStorage.getItem("url"),l=localStorage.getItem("restUrl"),d=c.split("#")[1],f="conference";var h,m,p;(function(e){e["read"]="read",e["delivery"]="delivery",e["channel"]="channel",e["txt"]="txt",e["cmd"]="cmd",e["custom"]="custom",e["loc"]="loc",e["img"]="img",e["audio"]="audio",e["file"]="file",e["video"]="video",e["combine"]="combine"})(h||(h={})),function(e){e["singleChat"]="singleChat",e["groupChat"]="groupChat",e["chatRoom"]="chatRoom"}(m||(m={})),function(e){e["recall"]="撤回",e["modify"]="编辑"}(p||(p={}))},"6c89":function(e,n,t){"use strict";var o=t("c53d"),c=t("62ee"),a=t("5bec"),r=t("ce59"),s=t("c28a"),i=t("658b"),u=t("3fff");const l={appKey:u["f"],url:u["k"]||"wss://im-api-new-hsb.easemob.com/websocket",apiUrl:u["i"]||window.location.protocol+"//a1-hsb.easemob.com",useReplacedMessageContents:u["m"],isHttpDNS:u["h"]},d={appKey:u["b"]},f=new o["a"](u["l"]?l:d);f.usePlugin(c,"contact"),f.usePlugin(a,"chatroom"),f.usePlugin(r,"group"),f.usePlugin(s,"presence"),f.usePlugin(i,"localCache"),window.conn=f,n["a"]=f},afbc:function(e,n,t){"use strict";var o=t("6605");const c=[{path:"/",component:()=>t.e("chunk-a7e6578a").then(t.bind(null,"2a0a")),children:[{path:"/chat",name:"chat",component:()=>Promise.all([t.e("chunk-f1fd5e76"),t.e("chunk-626807b4")]).then(t.bind(null,"2467"))},{path:"/contact",name:"contact",component:()=>t.e("chunk-9a0276b0").then(t.bind(null,"54fa"))},{path:"/user",name:"user",component:()=>Promise.all([t.e("chunk-19a29c80"),t.e("chunk-4c72f09c")]).then(t.bind(null,"a144"))},{path:"/setting",name:"setting",component:()=>Promise.all([t.e("chunk-19a29c80"),t.e("chunk-3c0f7369")]).then(t.bind(null,"82d4"))},{path:"/localCache",name:"localCache",component:()=>Promise.all([t.e("chunk-f1fd5e76"),t.e("chunk-e084c120")]).then(t.bind(null,"8ced"))}]},{path:"/chat/to/:chatType/:fromId",name:"chatDetail",component:()=>Promise.all([t.e("chunk-f1fd5e76"),t.e("chunk-56cb9d96")]).then(t.bind(null,"8d07"))},{path:"/login",component:()=>Promise.all([t.e("chunk-19a29c80"),t.e("chunk-46e84683")]).then(t.bind(null,"31e4"))},{path:"/register",component:()=>Promise.all([t.e("chunk-19a29c80"),t.e("chunk-18e92e9f")]).then(t.bind(null,"0511"))},{path:"/config",name:"config",component:()=>Promise.all([t.e("chunk-19a29c80"),t.e("chunk-465fa484")]).then(t.bind(null,"ef83"))}],a=Object(o["b"])({history:Object(o["c"])(),routes:c});n["a"]=a},b560:function(e,n,t){"use strict";t("028f")},cd49:function(e,n,t){"use strict";t.r(n);t("27f1");var o=t("1c96"),c=t("7a23"),a=t("afbc"),r=t("5502");t("14d9");const s={namespaced:!0,state:{connect:{},chat:{},conversationList:[]},mutations:{setConnect(e,n){e.connect=n},pushMessage(e,{fromId:n,message:t}){Object.prototype.hasOwnProperty.call(e.chat,n)?e.chat[n].messageList.push(t):e.chat[n]={messageList:[t]}},deleteMessage(e,{fromId:n,id:t}){if(e.chat[n]){const o=e.chat[n].messageList.findIndex(e=>e.id===t);o>-1&&e.chat[n].messageList.splice(o,1)}},updateMessage(e,{fromId:n,modifiedMsg:t}){if(e.chat[n]){const o=e.chat[n].messageList.findIndex(e=>e.id===t.id);o>-1&&(e.chat[n].messageList[o].msg=t.msg,e.chat[n].messageList[o].modifiedInfo=t.modifiedInfo)}},setConversationList(e,{list:n}){e.conversationList=n},clearConversationUnreadCount(e,{conversationId:n,conversationType:t}){const{connect:o,conversationList:c}=e;o.localCache.clearConversationUnreadCount({conversationId:n,conversationType:t}).then(()=>{const o=c.findIndex(e=>e.conversationId===n&&e.conversationType===t);c[o].unReadCount=0,e.conversationList=c})},setConversationCustomField(e,{conversationId:n,conversationType:t,customField:o}){const{conversationList:c,connect:a}=e,r={conversationId:n,conversationType:t,customField:{customkey:o}};a.localCache.setLocalConversationCustomField(r).then(a=>{const r=c.findIndex(e=>e.conversationId===n&&e.conversationType===t);c[r].customField=o,e.conversationList=c})},removeLocalConversation(e,{conversationId:n,conversationType:t}){const{conversationList:o,connect:c}=e;c.localCache.removeLocalConversation({conversationId:n,conversationType:t}).then(()=>{const c=o.findIndex(e=>e.conversationId===n&&e.conversationType===t);-1!==c&&(o.splice(c,1),e.conversationList=o)})}}};var i=s,u=Object(r["a"])({modules:{IM:i}});function l(e,n,t,o,a,r){const s=Object(c["resolveComponent"])("RouterView");return e.app.isShowApp?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0})):Object(c["createCommentVNode"])("",!0)}t("ec5d");var d=t("2e9e"),f=t("9ab4"),h=t("ce1f"),m=t("6605"),p=t("6c89"),g=t("2eac"),b=t("f695"),v=t("3fff");let k=class extends h["b"]{constructor(){super(...arguments),this.app=Object(h["c"])(()=>{const e=Object(m["e"])(),n=Object(c["ref"])(!1),t=localStorage.getItem("token"),a=localStorage.getItem("uid"),s=()=>{t&&a?p["a"].open({accessToken:t,username:a}).then(()=>{e.push("/chat")}).catch(()=>{e.push("/login")}).finally(()=>{n.value=!0}):(n.value=!0,e.push("/login"))};return Object(c["onMounted"])(()=>{s(),document.oncontextmenu=function(e){e.preventDefault()};const n=Object(r["b"])();n.commit("IM/setConnect",p["a"]),p["a"].addEventHandler("Connected",{onConnected:()=>{Object(o["a"])("连接成功")},onDisconnected:()=>{Object(o["a"])("连接断开")}}),p["a"].addEventHandler("MESSAGE",{onCmdMessage:e=>{n.commit("IM/pushMessage",{fromId:Object(b["e"])(p["a"].user,e),message:e}),console.log("收到命令消息了",e)},onMessage:e=>{e.forEach(e=>{n.commit("IM/pushMessage",{fromId:Object(b["e"])(p["a"].user,e),message:e})})},onModifiedMessage:e=>{n.commit("IM/updateMessage",{fromId:Object(b["e"])(p["a"].user,e),modifiedMsg:e})},onRecallMessage:e=>{n.commit("IM/deleteMessage",{fromId:`${v["a"].singleChat}${e.from}`,id:e.mid}),n.commit("IM/deleteMessage",{fromId:`${v["a"].groupChat}${e.to}`,id:e.mid}),console.log("收到撤回消息了",e)},onDeliveredMessage:e=>{console.log("收到送达回执消息了",e)},onChannelMessage:e=>{console.log("收到会话已读回执消息了",e)},onReceivedMessage:e=>{console.log("收到消息送达服务器消息了",e)},onReadMessage:e=>{console.log("收到消息已读回执消息了",e)},onStatisticMessage:e=>{console.log("离线消息已读回执消息了",e)},onContactAgreed:e=>{Object(o["a"])(e.from+"已经同意您的好友申请")},onContactRefuse:e=>{Object(o["a"])(e.from+"拒绝了您的好友申请")},onContactDeleted:e=>{Object(o["a"])(e.from+"解除了与您的好友关系")},onContactInvited:e=>{d["a"].confirm({title:e.from+"请求添加您为好友",message:e.status}).then(()=>{p["a"].acceptContactInvite(e.from).then(()=>{Object(o["a"])("接受好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("接收好友申请失败")})}).catch(()=>{p["a"].declineContactInvite(e.from).then(()=>{Object(o["a"])("拒绝好友申请成功")}).catch(e=>{console.log("接收好友申请失败",e),Object(o["a"])("拒绝好友申请失败")})})}}),p["a"].addEventHandler("ERROR",{onError:n=>{switch(n.message){case g["a"].noAuth:e.push("/login");break;default:break}}})}),{isShowApp:n}})}};k=Object(f["a"])([Object(h["a"])({components:{RouterView:m["a"]}})],k);var y=k,C=(t("b560"),t("6b0d")),I=t.n(C);const O=I()(y,[["render",l]]);var j=O;Object(c["createApp"])(j).use(a["a"]).use(u).use(o["a"]).mount("#app")},f695:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return l})),t.d(n,"f",(function(){return u})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return h}));t("27f1");var o=t("1c96"),c=t("2eac"),a=t("8ca0"),r=t("6c89"),s=t("3fff");const i=e=>r["a"].send(e).then(n=>(e.id=n.serverMsgId,n)).catch(e=>{throw e.message===c["a"].notLogin?console.log("未登录"):e.message===c["a"].sendMsgBlock&&Object(o["a"])("您已被拉入黑名单"),console.log(e,"发送消息失败"),e}),u=e=>new Promise((n,t)=>{r["a"].contact.recallMessage(e).then(e=>{n(e)}).catch(e=>{e.message===c["a"].notLogin?console.log("未登录"):e.message===c["a"].recallTimeout&&Object(o["a"])("已超过可撤回时间"),t(e),console.log(e,"撤回消息失败")})}),l=e=>a["a"].message.create(e),d=e=>({filename:e.name,filetype:e.type.split("/")[1],data:e}),f=e=>{var n,t,o;const c=new RegExp(`${s["g"]}_(\\S*)@|${s["g"]}_(\\S*)`);return null===(n=(null===(t=e.match(c))||void 0===t?void 0:t[1])||(null===(o=e.match(c))||void 0===o?void 0:o[2]))||void 0===n?void 0:n.replace(c,"")},h=(e,n)=>{const{to:t,from:o,chatType:c}=n;return e===n.from||c===s["a"].groupChat||c===s["a"].chatRoom?`${c}${t}`:`${c}${o}`}}});
//# sourceMappingURL=app.34fa5be6.js.map