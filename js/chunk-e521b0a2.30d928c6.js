(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e521b0a2"],{"31e4":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a={class:"loginWrap"},l={style:{margin:"16px"}};function r(e,t,o,r,s,i){const c=Object(n["resolveComponent"])("Field"),d=Object(n["resolveComponent"])("CellGroup"),u=Object(n["resolveComponent"])("Button"),b=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",{class:"wel",onClick:t[0]||(t[0]=(...t)=>e.login.toConfig&&e.login.toConfig(...t))},"VolcanO"),Object(n["createVNode"])(b,{onSubmit:e.login.onSubmit},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{inset:""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{modelValue:e.login.username,"onUpdate:modelValue":t[1]||(t[1]=t=>e.login.username=t),name:"user",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(n["createVNode"])(c,{modelValue:e.login.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.login.password=t),type:"password",name:"pwd",label:e.login.isTokenLogin?"Token":"密码",placeholder:e.login.isTokenLogin?"Token":"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue","label","placeholder"])]),_:1}),Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(u,{loading:e.login.loading,round:"",block:"",type:"primary","native-type":"submit"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" 登录 ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"]),Object(n["createElementVNode"])("div",{class:"toRegister",onClick:t[3]||(t[3]=(...t)=>e.login.toRegister&&e.login.toRegister(...t))},"没有账号？去注册")])}o("22fa");var s=o("2e1b"),i=(o("4d86"),o("a136")),c=(o("21a7"),o("f23a")),d=(o("3b21"),o("4b9e")),u=(o("27f1"),o("1c96")),b=(o("14d9"),o("9ab4")),m=o("ce1f"),g=o("5502"),p=o("6605"),f=o("2eac"),O=o("3fff");let j=class extends m["b"]{constructor(){super(...arguments),this.login=Object(m["c"])(()=>{const e=Object(g["b"])(),t=Object(n["ref"])(""),o=Object(n["ref"])(""),a=Object(n["ref"])(O["l"]),l=Object(p["e"])();let r=Object(n["ref"])(!1);const s=o=>{r.value=!0;const n=O["l"]?{username:o.user,accessToken:o.pwd}:{username:o.user,password:o.pwd};e.state.IM.connect.open(n).then(e=>{window.localStorage.setItem("uid",t.value),window.localStorage.setItem("token",e.accessToken),l.push("/chat")}).catch(e=>{console.log(e,"eee");let t={};e.data.data&&(t=JSON.parse(e.data.data)),t.error_description===f["a"].invalidPassword?Object(u["a"])("用户名或密码错误"):t.error_description===f["a"].userNotFound?Object(u["a"])("用户不存在"):Object(u["a"])("登录失败")}).finally(()=>{r.value=!1})},i=e=>{s(e)},c=()=>{l.push("/register")},d=()=>{l.push("/config")};return{username:t,password:o,isTokenLogin:a,loading:r,toRegister:c,toConfig:d,onSubmit:i}})}};j=Object(b["a"])([Object(m["a"])({components:{Form:d["a"],Field:c["a"],CellGroup:i["a"],Button:s["b"]}})],j);var h=j,v=(o("c744"),o("6b0d")),w=o.n(v);const V=w()(h,[["render",r],["__scopeId","data-v-4a5d5d0a"]]);t["default"]=V},"3b21":function(e,t,o){"use strict";o("68ef")},"4b9e":function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var n=o("23f9"),a=o("7a23"),l=o("1fba"),r=o("e5f6"),s=o("d243"),i=o("8db7"),c=o("450f"),d=o("efd9");const[u,b]=Object(l["a"])("form"),m={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:r["f"],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:r["g"],showErrorMessage:r["g"],errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var g=Object(a["defineComponent"])({name:u,props:m,emits:["submit","failed"],setup(e,{emit:t,slots:o}){const{children:n,linkChildren:l}=Object(c["useChildren"])(s["g"]),r=e=>e?n.filter(t=>e.includes(t.name)):n,u=e=>new Promise((t,o)=>{const n=[],a=r(e);a.reduce((e,t)=>e.then(()=>{if(!n.length)return t.validate().then(e=>{e&&n.push(e)})}),Promise.resolve()).then(()=>{n.length?o(n):t()})}),m=e=>new Promise((t,o)=>{const n=r(e);Promise.all(n.map(e=>e.validate())).then(e=>{e=e.filter(Boolean),e.length?o(e):t()})}),g=e=>{const t=n.find(t=>t.name===e);return t?new Promise((e,o)=>{t.validate().then(t=>{t?o(t):e()})}):Promise.reject()},p=t=>"string"===typeof t?g(t):e.validateFirst?u(t):m(t),f=e=>{"string"===typeof e&&(e=[e]);const t=r(e);t.forEach(e=>{e.resetValidation()})},O=()=>n.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),j=(e,t)=>{n.some(o=>o.name===e&&(o.$el.scrollIntoView(t),!0))},h=()=>n.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),v=()=>{const o=h();p().then(()=>t("submit",o)).catch(n=>{t("failed",{values:o,errors:n}),e.scrollToError&&n[0].name&&j(n[0].name)})},w=e=>{Object(i["c"])(e),v()};return l({props:e}),Object(d["a"])({submit:v,validate:p,getValues:h,scrollToField:j,resetValidation:f,getValidationStatus:O}),()=>{var e;return Object(a["createVNode"])("form",{class:b(),onSubmit:w},[null==(e=o.default)?void 0:e.call(o)])}}});const p=Object(n["a"])(g);var f=p},"98e9":function(e,t,o){},c744:function(e,t,o){"use strict";o("98e9")}}]);
//# sourceMappingURL=chunk-e521b0a2.30d928c6.js.map