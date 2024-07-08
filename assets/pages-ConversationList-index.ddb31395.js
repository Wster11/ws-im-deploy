import{d as e,a,v as t,x as s,y as n,z as o,o as l,c as i,w as r,b as c,e as u,t as d,g as v,A as p,j as f,B as m,D as A,r as g,E as h,F as _,G as w,H as y,q as C,k,J as I}from"./index-4af1eaa0.js";import{A as M,d as x}from"./defaultAvatar.4a81fd72.js";import{d as R}from"./defaultGroupAvatar.4ee83176.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";const W=b(e({__name:"index",props:{conversation:{}},setup(e){const{t:m}=a(),A=e,g=t(),h=s(),_=n((()=>{const e=A.conversation.conversationId;if("groupChat"===A.conversation.conversationType){const a=h.joinedGroupList.find((a=>a.groupId===e));return{name:null==a?void 0:a.groupName,avatar:""}}return g.getUserInfoFromStore(e)})),{getConversationTime:w}=o(),y=()=>{uni.navigateTo({url:`../../pages/Chat/index?type=${A.conversation.conversationType}&id=${A.conversation.conversationId}`})},C=e=>{var a,t,s,n;let o="";switch(null==(a=e.lastMessage)?void 0:a.type){case"txt":o="the combine message"==(null==(t=e.lastMessage)?void 0:t.msg)?`/${m("chatHistory")}/`:null==(s=e.lastMessage)?void 0:s.msg;break;case"img":o=`/${m("image")}/`;break;case"audio":o=`/${m("audio")}/`;break;case"file":o=`/${m("file")}/`;break;case"video":o=`/${m("video")}/`;break;case"custom":o="userCard"==e.lastMessage.customEvent?`/${m("contact")}/`:`/${m("custom")}/`;break;case"combine":o=`/${m("chatHistory")}/`;break;default:console.warn("unexpected message type:",null==(n=e.lastMessage)?void 0:n.type)}return o};return(e,a)=>{const t=f;return l(),i(t,{class:"conversation-item-wrap",onClick:y},{default:r((()=>[c(t,{class:"avatar-wrap"},{default:r((()=>[c(M,{src:_.value.avatar,placeholder:"groupChat"===A.conversation.conversationType?R:x},null,8,["src","placeholder"]),e.conversation.unReadCount>0?(l(),i(t,{key:0,class:"unread-count"},{default:r((()=>[u(d(e.conversation.unReadCount>99?"99+":e.conversation.unReadCount),1)])),_:1})):v("",!0)])),_:1}),c(t,{class:"content-wrap"},{default:r((()=>[c(t,{class:"user-info-wrap"},{default:r((()=>[c(t,{class:"user-nick-name ellipsis"},{default:r((()=>[u(d(_.value.name),1)])),_:1}),c(t,{class:"msg-wrap"},{default:r((()=>[c(t,{class:"last-msg ellipsis"},{default:r((()=>[u(d(C(e.conversation)),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"time"},{default:r((()=>[u(d(p(w)(e.conversation.lastMessage)),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-9cbd6d52"]]),E=b(e({__name:"index",setup(e){const a=s(),t=m(),{contactsNoticeInfo:o}=t,{groupNoticeInfo:g}=a,h=n((()=>{var e,a;const t=(null==(e=o.list[0])?void 0:e.time)||0,s=(null==(a=g.list[0])?void 0:a.time)||0,n=Math.max(t,s);return{unReadCount:o.unReadCount+g.unReadCount,time:A(n)}})),_=()=>{uni.switchTab({url:"../../pages/User/index"})};return(e,a)=>{const t=f;return l(),i(t,{class:"conversation-item-wrap",onClick:_},{default:r((()=>[c(t,{class:"avatar-wrap"},{default:r((()=>[c(M,{src:p("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAaVBMVEUAAAAAWf8AWv8AWf8AWf8AWf8AWv8AWv8AUv8AWf8AWv8AWf8AWf8AWf8AXP8AWf/5+vpwqv+20v8AZP8Abv+kyP9doP9Llv/X5v3o8PyTvv9Jlv/H3f6Bs//n8PuBtP9vq/8dgv/X5f2YyNTWAAAAD3RSTlMA3yCf75BwQBDPv7+vgDBLvpgJAAABQUlEQVRIx+3XyW6EMAyA4YSwhGXGDmEfZrq8/0MW0UNZYgiueut//2SQUGLETzqJVZFKCY6kzHMVJ8JREIVwWqiCDdMReHZbj5PgnVwMvROOkPf1PMZMytFSz+4Gl4vmBwVGwQQVAG9kyIGhFgmwSkTMg/HBK1ZdVwGVEjlQGUQDVAUXptRnY5u6R+zLlnhaScBmUt+9DAHB1YCLSguOnPCJq0pf+MBNjSfstvBlveAH7mq9oNnDwQvWe1h6wfIf/gEc93D0gRU6sh5wcMH6FNonOnuzJ7BDotEewgeStYfQ0NBsoIRllSGrdqccKylScFeT38xcJgqYok+sloQKiN4/EfsGiBT7muNfrJp3lQshIg5U/HWFGOm1QurrKxl7CeSunb9ddK+tkJEW6wLls8xHgXCUxCrLqN+HtFBxspj2BYZKrGbyYG3XAAAAAElFTkSuQmCC")},null,8,["src"]),h.value.unReadCount>0?(l(),i(t,{key:0,class:"unread-count"},{default:r((()=>[u(d(h.value.unReadCount>99?"99+":h.value.unReadCount),1)])),_:1})):v("",!0)])),_:1}),c(t,{class:"content-wrap"},{default:r((()=>[c(t,{class:"user-info-wrap"},{default:r((()=>[c(t,{class:"user-nick-name ellipsis"},{default:r((()=>[u(d(e.$t("systemNotice")),1)])),_:1}),c(t,{class:"msg-wrap"},{default:r((()=>[c(t,{class:"last-msg ellipsis"},{default:r((()=>[u(d(e.$t("newNoticeTip")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"time"},{default:r((()=>[u(d(h.value.time),1)])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f086ad15"]]),B=b(e({__name:"index",props:{conversation:{},popStyle:{}},emits:["onMenuClose"],setup(e,{emit:t}){const{deleteConversation:s,markConversationRead:n}=o(),{t:v}=a(),p="DELETE",m="PIN",A="MUTE",C="MARK_READ",k=t,I=e,M=g([{name:v("markRead"),type:C},{name:v("deleteConv"),type:p}]);return(e,a)=>{const t=f;return l(),i(t,{class:"shade",onClick:a[0]||(a[0]=e=>k("onMenuClose"))},{default:r((()=>[c(t,{class:"pop show",style:y(e.popStyle)},{default:r((()=>[(l(!0),h(w,null,_(M.value,((e,a)=>(l(),i(t,{key:e.type,onClick:a=>(e=>{switch(e.type){case C:n(I.conversation);break;case p:s(I.conversation);break;case m:console.log("置顶会话");break;case A:console.log("静音会话")}k("onMenuClose")})({type:e.type}),"data-index":a},{default:r((()=>[u(d(e.name),1)])),_:2},1032,["onClick","data-index"])))),128))])),_:1},8,["style"])])),_:1})}}}),[["__scopeId","data-v-ff544b5c"]]),S=b(e({__name:"index",setup(e){const a=g(""),p=g(""),A=g({}),y=g(!1),M=s(),x=m(),R=g({width:0,height:0}),b=o(),S=t(),{getUserInfoFromStore:T}=S,G=n((()=>b.conversationList.filter((e=>T(e.conversationId).name.includes(a.value))))),N=n((()=>x.contactsNoticeInfo.list.length||M.groupNoticeInfo.list.length)),U=e=>{let[a,t,s]=[e.touches[0],"",e.currentTarget.dataset.id];A.value=b.conversationList.find((e=>e.conversationId===s)),t=a.clientY>R.value.height/2?`bottom:${R.value.height-a.clientY}px;`:`top:${a.clientY}px;`,a.clientX>R.value.width/2?t+=`right:${R.value.width-a.clientX}px`:t+=`left:${a.clientX+20}px`,p.value=t,y.value=!0},$=()=>{y.value=!1,A.value={}};return C((()=>{uni.getSystemInfo({success:e=>{R.value.width=e.windowWidth,R.value.height=e.windowHeight}})})),(e,t)=>{const s=k,n=f;return l(),i(n,{class:"conversation-list-wrap"},{default:r((()=>[c(n,{class:"input-wrap"},{default:r((()=>[c(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),placeholder:e.$t("conversationSearchPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),N.value?(l(),i(E,{key:0})):v("",!0),y.value?(l(),i(B,{key:1,"pop-style":p.value,conversation:A.value,onOnMenuClose:$},null,8,["pop-style","conversation"])):v("",!0),G.value.length?(l(),i(n,{key:2},{default:r((()=>[(l(!0),h(w,null,_(G.value,(e=>(l(),i(n,{key:e.conversationId,"data-id":e.conversationId,onLongpress:U,class:I(["conversation-item-wrap",{"conversation-item-wrap-selected":e.conversationId===A.value.conversationId}])},{default:r((()=>[c(W,{conversation:e},null,8,["conversation"])])),_:2},1032,["data-id","class"])))),128))])),_:1})):(l(),i(n,{key:3,class:"conversation-empty"},{default:r((()=>[u(d(e.$t("conversationEmptyTip")),1)])),_:1}))])),_:1})}}}),[["__scopeId","data-v-e0a00ff9"]]);export{S as default};
