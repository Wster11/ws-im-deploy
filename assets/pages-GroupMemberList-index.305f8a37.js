import{d as a,z as e,r as s,y as l,U as r,s as t,o,c as n,w as u,b as c,F as d,G as m,H as p,e as f,t as i,h as _,a1 as v,k as g,g as h,p as w}from"./index-e50f0474.js";import{A as b,d as y}from"./defaultAvatar.bdafaa76.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const x=k(a({__name:"index",setup(a){const k=e(),x=s(""),I=s([]),U=l();let j=1;const{getUserInfoFromStore:M,getUsersInfo:A,appUserInfo:F}=U,{getGroupMembers:G}=k,z=s(!0),C=async()=>{const a=(await G(x.value,j)).data||[];I.value.push(...a),a.length<v&&(z.value=!1)},H=()=>{j++,C()};return r((()=>{C()})),t((async a=>{x.value=null==a?void 0:a.id})),(a,e)=>{const s=g,l=w;return o(),n(s,{class:"group-members-wrap"},{default:u((()=>[c(s,{class:"content"},{default:u((()=>[(o(!0),d(p,null,m(I.value,(a=>(o(),n(l,{class:"uni-list-cell uni-list-cell-pd",key:a.owner||a.member},{default:u((()=>[c(s,{class:"user-item-wrap"},{default:u((()=>[c(b,{src:h(M)(a.owner||a.member).avatar,placeholder:h(y)},null,8,["src","placeholder"]),c(s,{class:"user-name"},{default:u((()=>[f(i(h(M)(a.owner||a.member).name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),z.value?(o(),n(s,{key:0,class:"loadMore",onClick:H},{default:u((()=>[f(i(a.$t("loadMore")),1)])),_:1})):_("",!0)])),_:1})}}}),[["__scopeId","data-v-f1fe5f7e"]]);export{x as default};
