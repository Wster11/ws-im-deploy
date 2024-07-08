import{d as e,a,E as t,F as s,G as n,H as o,o as l,c as r,w as i,b as c,e as u,t as d,g as v,J as p,n as f,k as m,K as A,z as g,L as _,r as h,M as w,N as y,O as C,P as k,B as M,Q as I,l as x,R}from"./index-570604c4.js";import{A as W,d as b}from"./defaultAvatar.b2cfb2fc.js";import{d as E}from"./defaultGroupAvatar.4ee83176.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";const N=B(e({__name:"index",props:{conversation:{}},setup(e){const{t:A}=a(),g=e,_=t(),h=s(),w=n((()=>{const e=g.conversation.conversationId;if("groupChat"===g.conversation.conversationType){const a=h.joinedGroupList.find((a=>a.groupId===e));return{name:null==a?void 0:a.groupName,avatar:""}}return _.getUserInfoFromStore(e)})),{getConversationTime:y}=o(),C=()=>{f({url:`../../pages/Chat/index?type=${g.conversation.conversationType}&id=${g.conversation.conversationId}`})},k=e=>{var a,t,s,n;let o="";switch(null==(a=e.lastMessage)?void 0:a.type){case"txt":o="the combine message"==(null==(t=e.lastMessage)?void 0:t.msg)?`/${A("chatHistory")}/`:null==(s=e.lastMessage)?void 0:s.msg;break;case"img":o=`/${A("image")}/`;break;case"audio":o=`/${A("audio")}/`;break;case"file":o=`/${A("file")}/`;break;case"video":o=`/${A("video")}/`;break;case"custom":o="userCard"==e.lastMessage.customEvent?`/${A("contact")}/`:`/${A("custom")}/`;break;case"combine":o=`/${A("chatHistory")}/`;break;default:console.warn("unexpected message type:",null==(n=e.lastMessage)?void 0:n.type)}return o};return(e,a)=>{const t=m;return l(),r(t,{class:"conversation-item-wrap",onClick:C},{default:i((()=>[c(t,{class:"avatar-wrap"},{default:i((()=>[c(W,{src:w.value.avatar,placeholder:"groupChat"===g.conversation.conversationType?E:b},null,8,["src","placeholder"]),e.conversation.unReadCount>0?(l(),r(t,{key:0,class:"unread-count"},{default:i((()=>[u(d(e.conversation.unReadCount>99?"99+":e.conversation.unReadCount),1)])),_:1})):v("",!0)])),_:1}),c(t,{class:"content-wrap"},{default:i((()=>[c(t,{class:"user-info-wrap"},{default:i((()=>[c(t,{class:"user-nick-name ellipsis"},{default:i((()=>[u(d(w.value.name),1)])),_:1}),c(t,{class:"msg-wrap"},{default:i((()=>[c(t,{class:"last-msg ellipsis"},{default:i((()=>[u(d(k(e.conversation)),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"time"},{default:i((()=>[u(d(p(y)(e.conversation.lastMessage)),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-9cbd6d52"]]),S=B(e({__name:"index",setup(e){const a=s(),t=A(),{contactsNoticeInfo:o}=t,{groupNoticeInfo:f}=a,h=n((()=>{var e,a;const t=(null==(e=o.list[0])?void 0:e.time)||0,s=(null==(a=f.list[0])?void 0:a.time)||0,n=Math.max(t,s);return{unReadCount:o.unReadCount+f.unReadCount,time:_(n)}})),w=()=>{g({url:"../../pages/User/index"})};return(e,a)=>{const t=m;return l(),r(t,{class:"conversation-item-wrap",onClick:w},{default:i((()=>[c(t,{class:"avatar-wrap"},{default:i((()=>[c(W,{src:p("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAaVBMVEUAAAAAWf8AWv8AWf8AWf8AWf8AWv8AWv8AUv8AWf8AWv8AWf8AWf8AWf8AXP8AWf/5+vpwqv+20v8AZP8Abv+kyP9doP9Llv/X5v3o8PyTvv9Jlv/H3f6Bs//n8PuBtP9vq/8dgv/X5f2YyNTWAAAAD3RSTlMA3yCf75BwQBDPv7+vgDBLvpgJAAABQUlEQVRIx+3XyW6EMAyA4YSwhGXGDmEfZrq8/0MW0UNZYgiueut//2SQUGLETzqJVZFKCY6kzHMVJ8JREIVwWqiCDdMReHZbj5PgnVwMvROOkPf1PMZMytFSz+4Gl4vmBwVGwQQVAG9kyIGhFgmwSkTMg/HBK1ZdVwGVEjlQGUQDVAUXptRnY5u6R+zLlnhaScBmUt+9DAHB1YCLSguOnPCJq0pf+MBNjSfstvBlveAH7mq9oNnDwQvWe1h6wfIf/gEc93D0gRU6sh5wcMH6FNonOnuzJ7BDotEewgeStYfQ0NBsoIRllSGrdqccKylScFeT38xcJgqYok+sloQKiN4/EfsGiBT7muNfrJp3lQshIg5U/HWFGOm1QurrKxl7CeSunb9ddK+tkJEW6wLls8xHgXCUxCrLqN+HtFBxspj2BYZKrGbyYG3XAAAAAElFTkSuQmCC")},null,8,["src"]),h.value.unReadCount>0?(l(),r(t,{key:0,class:"unread-count"},{default:i((()=>[u(d(h.value.unReadCount>99?"99+":h.value.unReadCount),1)])),_:1})):v("",!0)])),_:1}),c(t,{class:"content-wrap"},{default:i((()=>[c(t,{class:"user-info-wrap"},{default:i((()=>[c(t,{class:"user-nick-name ellipsis"},{default:i((()=>[u(d(e.$t("systemNotice")),1)])),_:1}),c(t,{class:"msg-wrap"},{default:i((()=>[c(t,{class:"last-msg ellipsis"},{default:i((()=>[u(d(e.$t("newNoticeTip")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"time"},{default:i((()=>[u(d(h.value.time),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f086ad15"]]),G=B(e({__name:"index",props:{conversation:{},popStyle:{}},emits:["onMenuClose"],setup(e,{emit:t}){const{deleteConversation:s,markConversationRead:n}=o(),{t:v}=a(),p="DELETE",f="PIN",A="MUTE",g="MARK_READ",_=t,M=e,I=h([{name:v("markRead"),type:g},{name:v("deleteConv"),type:p}]);return(e,a)=>{const t=m;return l(),r(t,{class:"shade",onClick:a[0]||(a[0]=e=>_("onMenuClose"))},{default:i((()=>[c(t,{class:"pop show",style:k(e.popStyle)},{default:i((()=>[(l(!0),w(C,null,y(I.value,((e,a)=>(l(),r(t,{key:e.type,onClick:a=>(e=>{switch(e.type){case g:n(M.conversation);break;case p:s(M.conversation);break;case f:console.log("置顶会话");break;case A:console.log("静音会话")}_("onMenuClose")})({type:e.type}),"data-index":a},{default:i((()=>[u(d(e.name),1)])),_:2},1032,["onClick","data-index"])))),128))])),_:1},8,["style"])])),_:1})}}}),[["__scopeId","data-v-ff544b5c"]]),U=B(e({__name:"index",setup(e){const a=h(""),p=h(""),f=h({}),g=h(!1),_=s(),k=A(),W=h({width:0,height:0}),b=o(),E=t(),{getUserInfoFromStore:B}=E,U=n((()=>b.conversationList.filter((e=>B(e.conversationId).name.includes(a.value))))),$=n((()=>k.contactsNoticeInfo.list.length||_.groupNoticeInfo.list.length)),T=e=>{let[a,t,s]=[e.touches[0],"",e.currentTarget.dataset.id];f.value=b.conversationList.find((e=>e.conversationId===s)),t=a.clientY>W.value.height/2?`bottom:${W.value.height-a.clientY}px;`:`top:${a.clientY}px;`,a.clientX>W.value.width/2?t+=`right:${W.value.width-a.clientX}px`:t+=`left:${a.clientX+20}px`,p.value=t,g.value=!0},V=()=>{g.value=!1,f.value={}};return M((()=>{I({success:e=>{W.value.width=e.windowWidth,W.value.height=e.windowHeight}})})),(e,t)=>{const s=x,n=m;return l(),r(n,{class:"conversation-list-wrap"},{default:i((()=>[c(n,{class:"input-wrap"},{default:i((()=>[c(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:e.$t("conversationSearchPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),$.value?(l(),r(S,{key:0})):v("",!0),g.value?(l(),r(G,{key:1,"pop-style":p.value,conversation:f.value,onOnMenuClose:V},null,8,["pop-style","conversation"])):v("",!0),U.value.length?(l(),r(n,{key:2},{default:i((()=>[(l(!0),w(C,null,y(U.value,(e=>(l(),r(n,{key:e.conversationId,"data-id":e.conversationId,onLongpress:T,class:R(["conversation-item-wrap",{"conversation-item-wrap-selected":e.conversationId===f.value.conversationId}])},{default:i((()=>[c(N,{conversation:e},null,8,["conversation"])])),_:2},1032,["data-id","class"])))),128))])),_:1})):(l(),r(n,{key:3,class:"conversation-empty"},{default:i((()=>[u(d(e.$t("conversationEmptyTip")),1)])),_:1}))])),_:1})}}}),[["__scopeId","data-v-e0a00ff9"]]);export{U as default};
