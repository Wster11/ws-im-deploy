import{d as e,r as a,x as l,K as r,v as s,y as u,q as t,o,c as i,w as n,b as A,A as d,e as v,t as p,E as c,F as m,G as g,g as f,j as T,$ as E}from"./index-4af1eaa0.js";import{A as w,d as R}from"./defaultAvatar.4a81fd72.js";import{d as F}from"./defaultGroupAvatar.4ee83176.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";const _=V(e({__name:"index",setup(e){const V=a(""),_=l(),U=r(),h=s(),{getUserInfoFromStore:M}=h,{getGroupInfo:y}=_,G=u((()=>_.groupDetailMap.get(V.value))),k=()=>{uni.navigateTo({url:`/pages/InviteList/index?id=${V.value}&type=invite`})},x=()=>{uni.navigateTo({url:`/pages/InviteList/index?id=${V.value}&type=remove`})},B=()=>{uni.navigateTo({url:`/pages/GroupMemberList/index?id=${V.value}`})},I=u((()=>{var e;return(null==(e=G.value)?void 0:e.affiliations.slice(0,E))||[]})),b=u((()=>{var e;return(null==(e=G.value)?void 0:e.owner)===U.getChatConn().user}));return t((async e=>{try{uni.showLoading(),V.value=null==e?void 0:e.id,V.value&&await y(V.value),uni.hideLoading()}catch(a){console.error(a),uni.hideLoading()}})),(e,a)=>{var l;const r=T;return(null==(l=G.value)?void 0:l.id)?(o(),i(r,{key:0,class:"group-detail-wrap"},{default:n((()=>[A(r,{class:"group-base-wrap"},{default:n((()=>[A(w,{class:"group-avatar",src:"",placeholder:d(F)},null,8,["placeholder"]),A(r,null,{default:n((()=>[A(r,{class:"groupname"},{default:n((()=>{var e;return[v(p(null==(e=G.value)?void 0:e.name),1)]})),_:1}),A(r,{class:"group-id"},{default:n((()=>{var a,l;return[v("GroupId: "+p(null==(a=G.value)?void 0:a.id)+"（"+p((null==(l=G.value)?void 0:l.public)?e.$t("publicGroup"):e.$t("privateGroup"))+"）",1)]})),_:1})])),_:1})])),_:1}),A(r,{class:"group-member-wrap"},{default:n((()=>{var a;return[A(r,{class:"group-owner-wrap"},{default:n((()=>[A(r,{class:"label"},{default:n((()=>[v(p(e.$t("owner")),1)])),_:1}),A(r,null,{default:n((()=>{var e;return[v(p(d(M)(null==(e=G.value)?void 0:e.owner).name),1)]})),_:1})])),_:1}),A(r,{class:"member-count-wrap"},{default:n((()=>[A(r,{class:"label"},{default:n((()=>[v(p(e.$t("groupMember")),1)])),_:1}),A(r,{class:"member-count"},{default:n((()=>{var e;return[v(p(null==(e=G.value)?void 0:e.affiliations_count),1)]})),_:1})])),_:1}),A(r,{class:"member-items-wrap"},{default:n((()=>[(o(!0),c(g,null,m(I.value,(e=>(o(),i(r,{class:"member-item",key:e.joined_time},{default:n((()=>[A(w,{src:d(M)(e.owner||e.member).avatar,placeholder:d(R)},null,8,["src","placeholder"]),e.owner?(o(),i(r,{key:0,class:"user-name ellipsis"},{default:n((()=>[v(p(d(M)(e.owner).name),1)])),_:2},1024)):f("",!0),e.member?(o(),i(r,{key:1,class:"user-name ellipsis"},{default:n((()=>[v(p(d(M)(e.member).name),1)])),_:2},1024)):f("",!0)])),_:2},1024)))),128)),b.value?(o(),i(r,{key:0,class:"opt-item",onClick:k},{default:n((()=>[A(w,{src:"",placeholder:d("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAABGUFZETlRETlVFT1RFT1RGUFVGUFZFUFJHUFBET1RETlRET1VFTlVETlRFTlRDTlNETVRETlVETlRdJj28AAAAE3RSTlMAIN+Av59AMGAQ7++vcM+QkFDPd7jWlwAAAQtJREFUSMftlN1uwyAMRjEYSEjSrjvv/66LkrVoKxBSadIuem5iBX/4B4N58xphnph06HUflR0rXf5i4ZTCA1cx4gDtyR9YNismuD3CWqkH8N+mA82mqwg+Idyrh+lYADxsC/KCIDrnFHT9SJfAkvv8NwLJKcWyYDxVtM1tlRytIfiAOZ+hHgsC97UIDK3RyCHw0Yy9w2fGS+d4Z4VnR8V0MsyJpIP5L8TFX+xWss5LPCzYTfzAemm5XylQl4Qtk+SXsLlIWOY9t1hpJisafv1UVoodvgEpFPaxZYVMcJHaUzg9r/j66IwWrqWLExuvoW3e5a7F1Igg+QnMKE388y6JKuV+SCOGinlzji/p1xrQ4pKsewAAAABJRU5ErkJggg==")},null,8,["placeholder"])])),_:1})):f("",!0),b.value?(o(),i(r,{key:1,class:"opt-item",onClick:x},{default:n((()=>[A(w,{src:"",placeholder:d("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAQlBMVEUAAABETlVGUFdETlRFT1RFT1RETlRET1RETlRFT1JGUFVET1RFUVNJUFZQUFBETlRGTVVETVRCUFY8UVBETlVETlQDnGWQAAAAFXRSTlMAgCDfv5/v75BgQK9fMBDPcFAwEM/I1YMnAAAAv0lEQVRIx+3TSw6DMAxFUWM74dd/+/a/1VaqBEQBO0Gq1AFnzNVjENNhj2GMiNpToYviS5hKsABVRcBMyTdg6V40UDfxSoLoB0jxruDRTLgoEEzkNwE3k4cfeAQJcnVY0tqn0ZOvSwd8z2v2vL0i4EuZCvVji1Z7+hfnW7gKPkTH25kclyYiIYGtzzus2E4GwSrZ+LETNp1oxR2oKjjCEDkLAkyddTgz85YdWdDCFLNAYQpZwGsT5imxsaFMh1pvIJUzdmPknuwAAAAASUVORK5CYII=")},null,8,["placeholder"])])),_:1})):f("",!0)])),_:1}),(null==(a=G.value)?void 0:a.affiliations_count)>d(E)?(o(),i(r,{key:0,class:"view-all-member",onClick:B},{default:n((()=>[v(p(e.$t("viewAllGroupMembers"))+" >",1)])),_:1})):f("",!0)]})),_:1}),A(r,{class:"group-desc-wrap"},{default:n((()=>[A(r,{class:"label"},{default:n((()=>[v(p(e.$t("groupDesc")),1)])),_:1}),A(r,{class:"desc"},{default:n((()=>{var e;return[v(p(null==(e=G.value)?void 0:e.description),1)]})),_:1})])),_:1})])),_:1})):f("",!0)}}}),[["__scopeId","data-v-17fc5832"]]);export{_ as default};
