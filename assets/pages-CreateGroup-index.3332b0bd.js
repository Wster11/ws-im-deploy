import{d as e,a,B as l,v as s,x as u,r as t,o,c as r,w as c,b as d,e as n,t as p,E as i,F as v,A as m,G as f,j as _,k as h,M as g,p as b,l as w,m as $,n as k}from"./index-4af1eaa0.js";import{A as x,d as I}from"./defaultAvatar.4a81fd72.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";const j=V(e({__name:"index",setup(e){const{t:V}=a(),j=l(),G=s(),{getUserInfoFromStore:C}=G,{createGroup:A}=u(),N=t([]),U=t(""),B=t(""),D=t(!0),F=e=>{N.value=e.detail.value},M=e=>{D.value=e.detail.value},P=()=>{""===U.value&&(U.value=N.value.join(",")),""===B.value&&(B.value="group desc"),A({data:{groupname:U.value,members:N.value,desc:B.value,public:D.value,allowinvites:!0,inviteNeedConfirm:!1,approval:!1,maxusers:500}}).then((()=>{uni.showToast({icon:"none",title:V("createGroupSuccess")}),uni.navigateBack()})).catch((e=>{uni.showToast({icon:"none",title:e.message})}))};return(e,a)=>{const l=_,s=h,u=g,t=$,V=k,G=b,A=w;return o(),r(l,{class:"create-group-wrap"},{default:c((()=>[d(l,{class:"content"},{default:c((()=>[d(l,{class:"input-wrap"},{default:c((()=>[d(l,{class:"label"},{default:c((()=>[n(p(e.$t("groupName")),1)])),_:1}),d(s,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),placeholder:e.$t("groupNamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(l,{class:"input-wrap"},{default:c((()=>[d(l,{class:"label"},{default:c((()=>[n(p(e.$t("groupDesc")),1)])),_:1}),d(s,{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=e=>B.value=e),placeholder:e.$t("groupDescPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(l,{class:"label"},{default:c((()=>[n(p(e.$t("publicGroup")),1)])),_:1}),d(u,{class:"switch",checked:D.value,onChange:M},null,8,["checked"]),d(l,{class:"label"},{default:c((()=>[n(p(e.$t("groupMember")),1)])),_:1}),d(G,{class:"uni-list",onChange:F},{default:c((()=>[(o(!0),i(f,null,v(m(j).contacts,(e=>(o(),r(V,{class:"uni-list-cell uni-list-cell-pd",key:e.userId},{default:c((()=>[d(l,null,{default:c((()=>[d(t,{value:e.userId},null,8,["value"])])),_:2},1024),d(l,{class:"user-item-wrap"},{default:c((()=>[d(x,{src:m(C)(e.userId).avatar,placeholder:m(I)},null,8,["src","placeholder"]),d(l,{class:"user-name ellipsis"},{default:c((()=>[n(p(m(C)(e.userId).name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),d(A,{class:"create-btn",onClick:P,disabled:0===N.value.length},{default:c((()=>[n(p(e.$t("createGroup")),1)])),_:1},8,["disabled"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-788264f7"]]);export{j as default};
