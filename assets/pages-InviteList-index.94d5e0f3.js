import{d as e,D as a,z as s,a as l,r as t,y as u,A as r,s as n,o as i,c as o,w as d,b as v,F as c,G as p,H as m,e as f,t as _,h as g,k as h,q as y,m as I,g as b,n as k,p as w}from"./index-e50f0474.js";import{A as x,d as U}from"./defaultAvatar.bdafaa76.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const q=j(e({__name:"index",setup(e){const j=a(),q=s(),{t:A}=l(),{inviteJoinGroup:C,removeUserFromGroup:D}=q,F=t(""),G=t("invite"),S=t([]),B=u(),{getUserInfoFromStore:M}=B,T=r((()=>{var e;return null==(e=q.groupDetailMap.get(F.value))?void 0:e.affiliations.map((e=>({userId:(null==e?void 0:e.owner)||(null==e?void 0:e.member)})))})),$=e=>{S.value=e.detail.value},z=r((()=>{var e;return"remove"===G.value?null==(e=T.value)?void 0:e.filter((e=>{var a;return e.userId!==(null==(a=q.groupDetailMap.get(F.value))?void 0:a.owner)})):j.contacts})),H=e=>{var a;return"remove"!==G.value&&!!(null==(a=T.value)?void 0:a.find((a=>a.userId===e)))},J=async()=>{try{await C(F.value,S.value),uni.navigateBack(),uni.showToast({title:A("requestSended"),icon:"success"})}catch(e){console.error(e)}},E=async()=>{try{await D(F.value,S.value),uni.navigateBack(),uni.showToast({title:A("requestSended"),icon:"success"})}catch(e){console.error(e)}};return n((async e=>{F.value=null==e?void 0:e.id,G.value=null==e?void 0:e.type})),(e,a)=>{const s=k,l=h,t=w,u=y,r=I;return i(),o(l,{class:"invite-group-wrap"},{default:d((()=>[v(l,{class:"content"},{default:d((()=>[v(u,{class:"uni-list",onChange:$},{default:d((()=>[(i(!0),c(m,null,p(z.value,(e=>(i(),o(t,{class:"uni-list-cell uni-list-cell-pd",key:e.userId},{default:d((()=>[v(l,null,{default:d((()=>[v(s,{checked:H(e.userId),value:e.userId,disabled:H(e.userId)},null,8,["checked","value","disabled"])])),_:2},1024),v(l,{class:"user-item-wrap"},{default:d((()=>[v(x,{src:b(M)(e.userId).avatar,placeholder:b(U)},null,8,["src","placeholder"]),v(l,{class:"user-name"},{default:d((()=>[f(_(b(M)(e.userId).name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),"invite"===G.value?(i(),o(r,{key:0,class:"opt-btn",onClick:J,type:"primary",disabled:0===S.value.length},{default:d((()=>[f(_(e.$t("inviteUser")),1)])),_:1},8,["disabled"])):g("",!0),"remove"===G.value?(i(),o(r,{key:1,class:"opt-btn",type:"warn",onClick:E,disabled:0===S.value.length},{default:d((()=>[f(_(e.$t("removeUser")),1)])),_:1},8,["disabled"])):g("",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-34a1e5d5"]]);export{q as default};
