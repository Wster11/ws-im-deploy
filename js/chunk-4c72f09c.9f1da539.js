(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c72f09c"],{"02ab":function(e,t,a){"use strict";a("68ef"),a("cb51"),a("3743"),a("8a0b")},"40ee":function(e,t,a){"use strict";a("47b4")},"47b4":function(e,t,a){},"8a0b":function(e,t,a){},a144:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o=e=>(Object(c["pushScopeId"])("data-v-3957d5bf"),e=e(),Object(c["popScopeId"])(),e),l={class:"contactWrap"},r=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),n=["src"],i=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),s={style:{padding:"0 16px"}},d=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),u=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),b=o(()=>Object(c["createElementVNode"])("br",null,null,-1)),O=o(()=>Object(c["createElementVNode"])("br",null,null,-1));function j(e,t,a,o,j,f){const p=Object(c["resolveComponent"])("NavBar"),m=Object(c["resolveComponent"])("CellGroup"),V=Object(c["resolveComponent"])("Button"),h=Object(c["resolveComponent"])("Field");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createVNode"])(p,{title:"User"}),r,Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("img",{class:"avatar",src:e.user.info.avatarurl},null,8,n),Object(c["createElementVNode"])("p",null,"id: "+Object(c["toDisplayString"])(e.user.userId),1)]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.nickname,"onUpdate:modelValue":t[1]||(t[1]=t=>e.user.info.nickname=t),rows:"1",autosize:"",label:"用户昵称",type:"input",center:"",placeholder:"用户昵称"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[0]||(t[0]=t=>e.user.updateUserInfo("nickname",e.user.info.nickname||""))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.avatarurl,"onUpdate:modelValue":t[3]||(t[3]=t=>e.user.info.avatarurl=t),rows:"1",autosize:"",label:"用户头像",type:"input",center:"",placeholder:"请输入头像的url地址"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[2]||(t[2]=t=>e.user.updateUserInfo("avatarurl",e.user.info.avatarurl||""))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.mail,"onUpdate:modelValue":t[5]||(t[5]=t=>e.user.info.mail=t),rows:"1",autosize:"",label:"邮箱",type:"input",center:"",placeholder:"邮箱"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[4]||(t[4]=t=>e.user.updateUserInfo("mail",e.user.info.mail||""))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.phone,"onUpdate:modelValue":t[7]||(t[7]=t=>e.user.info.phone=t),rows:"1",autosize:"",label:"手机号",type:"input",center:"",placeholder:"手机号"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[6]||(t[6]=t=>e.user.updateUserInfo("phone",e.user.info.phone||""))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.gender,"onUpdate:modelValue":t[9]||(t[9]=t=>e.user.info.gender=t),rows:"1",autosize:"",label:"性别",type:"input",center:"",placeholder:"性别"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[8]||(t[8]=t=>e.user.updateUserInfo("gender",e.user.info.gender))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Object(c["createVNode"])(m,{inset:""},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:e.user.info.birth,"onUpdate:modelValue":t[11]||(t[11]=t=>e.user.info.birth=t),rows:"1",autosize:"",label:"生日",type:"input",center:"",placeholder:"生日"},{button:Object(c["withCtx"])(()=>[Object(c["createVNode"])(V,{type:"primary",size:"small",onClick:t[10]||(t[10]=t=>e.user.updateUserInfo("birth",e.user.info.birth||""))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),i,Object(c["createElementVNode"])("div",s,[d,Object(c["createVNode"])(V,{size:"small",type:"primary",onClick:e.user.setting,block:""},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("设置")]),_:1},8,["onClick"]),u,Object(c["createVNode"])(V,{size:"small",type:"danger",onClick:e.user.deleteAllMessages,block:""},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("清除聊天记录")]),_:1},8,["onClick"]),b,Object(c["createVNode"])(V,{size:"small",type:"primary",onClick:e.user.toLocalCache,block:""},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("localCache")]),_:1},8,["onClick"]),O,Object(c["createVNode"])(V,{size:"small",onClick:e.user.logout,block:""},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("退出登录")]),_:1},8,["onClick"])])])}a("21a7");var f=a("f23a"),p=(a("4d86"),a("a136")),m=(a("22fa"),a("2e1b")),V=(a("02ab"),a("dc94")),h=(a("27f1"),a("1c96")),N=(a("14d9"),a("9ab4")),C=a("ce1f"),x=a("5502"),w=a("afbc");let v=class extends C["b"]{constructor(){super(...arguments),this.user=Object(C["c"])(()=>{const e=Object(x["b"])();let t=Object(c["reactive"])({});const a=e.state.IM.connect,o=()=>{a.contact.fetchUserInfoById(a.user).then(e=>{var c;Object.assign(t,null===(c=e.data)||void 0===c?void 0:c[a.user])})},l=(e,t)=>{a.updateOwnUserInfo(e,t).then(()=>{Object(h["a"])("更新用户信息成功")}).catch(()=>{Object(h["a"])("更新用户信息失败")})},r=()=>{a.close(),window.localStorage.removeItem("token"),window.localStorage.removeItem("uid"),w["a"].push("/login")},n=()=>{w["a"].push("/setting")},i=()=>{w["a"].push("/localCache")},s=()=>{a.contact.deleteAllMessagesAndConversations().then(()=>{console.log("清除聊天记录成功")}).catch(e=>{console.log("清除聊天记录失败",e)})};return Object(c["onMounted"])(()=>{o()}),{userId:a.user,info:t,updateUserInfo:l,deleteAllMessages:s,logout:r,setting:n,toLocalCache:i}})}};v=Object(N["a"])([Object(C["a"])({components:{NavBar:V["a"],Button:m["b"],CellGroup:p["a"],Field:f["a"]}})],v);var g=v,k=(a("40ee"),a("6b0d")),y=a.n(k);const _=y()(g,[["render",j],["__scopeId","data-v-3957d5bf"]]);t["default"]=_},dc94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var c=a("23f9"),o=a("7a23"),l=a("1fba"),r=a("e5f6"),n=a("5aa0"),i=a("d243"),s=a("fa8a"),d=a("9a1c");const[u,b]=Object(l["a"])("nav-bar"),O={title:String,fixed:Boolean,zIndex:r["f"],border:r["g"],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var j=Object(o["defineComponent"])({name:u,props:O,emits:["click-left","click-right"],setup(e,{emit:t,slots:a}){const c=Object(o["ref"])(),l=Object(s["a"])(c,b),r=e=>t("click-left",e),u=e=>t("click-right",e),O=()=>a.left?a.left():[e.leftArrow&&Object(o["createVNode"])(d["a"],{class:b("arrow"),name:"arrow-left"},null),e.leftText&&Object(o["createVNode"])("span",{class:b("text")},[e.leftText])],j=()=>a.right?a.right():Object(o["createVNode"])("span",{class:b("text")},[e.rightText]),f=()=>{const{title:t,fixed:l,border:s,zIndex:d}=e,f=Object(n["f"])(d),p=e.leftArrow||e.leftText||a.left,m=e.rightText||a.right;return Object(o["createVNode"])("div",{ref:c,style:f,class:[b({fixed:l}),{[i["b"]]:s,"van-safe-area-top":e.safeAreaInsetTop}]},[Object(o["createVNode"])("div",{class:b("content")},[p&&Object(o["createVNode"])("div",{class:[b("left"),i["h"]],onClick:r},[O()]),Object(o["createVNode"])("div",{class:[b("title"),"van-ellipsis"]},[a.title?a.title():t]),m&&Object(o["createVNode"])("div",{class:[b("right"),i["h"]],onClick:u},[j()])])])};return()=>e.fixed&&e.placeholder?l(f):f()}});const f=Object(c["a"])(j);var p=f}}]);
//# sourceMappingURL=chunk-4c72f09c.9f1da539.js.map