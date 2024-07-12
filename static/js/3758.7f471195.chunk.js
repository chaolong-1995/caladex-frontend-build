"use strict";(self.webpackChunktradio=self.webpackChunktradio||[]).push([[3758],{13758:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var n=a(9950),t=a(16673),o=a(93047),l=a(81543),i=a(96011),r=a.n(i),d=a(84894),c=a(24266),u=a(35887),v=a(29714),m=a(44414);const h=function(){const[e,s]=(0,n.useState)(""),[i,h]=(0,n.useState)(""),[p,g]=(0,n.useState)(!1),x=(0,t.useHistory)(),{currentUser:f,setAuthProcessing:j,setAuthenticated:N,setCurrentUser:b,setAuthToken:y}=(0,n.useContext)(l.c);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"authincation section-padding",children:(0,m.jsx)("div",{className:"container h-100",children:(0,m.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,m.jsxs)("div",{className:"col-xl-5 col-md-6",children:[(0,m.jsx)("div",{className:"mini-logo text-center my-5",children:(0,m.jsx)(o.N_,{to:"./",children:(0,m.jsx)("img",{src:a(20678),alt:"",width:"300px",style:{}})})}),(0,m.jsx)("div",{className:"auth-form card",children:(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsxs)(o.N_,{className:"page-back text-muted",to:"/otp-1",children:[(0,m.jsx)("span",{children:(0,m.jsx)("i",{className:"fa fa-angle-left"})})," ","Back"]}),(0,m.jsx)("h3",{className:"text-center",children:"OTP Verification"}),(0,m.jsx)("p",{className:"text-center mb-5",children:"We will send one time code on this number"}),(0,m.jsxs)("form",{children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{children:"Your OTP Code"}),(0,m.jsx)("input",{type:"text",className:"form-control text-center font-weight-bold",placeholder:"11 22 33",value:e,onChange:e=>{s(e.target.value)}})]}),i&&(0,m.jsx)("p",{className:"text-danger my-3 text-center",children:i}),(0,m.jsx)("div",{className:"text-center",children:p?(0,m.jsx)("i",{className:"fa fa-spinner text-primary fa-spin fa-2x fa-fw"}):(0,m.jsx)(o.N_,{to:"#",className:"btn btn-success btn-block",onClick:()=>{(async()=>{if(g(!0),6!==e.length)return h("Invalid OTP code detected! Please try again."),g(!1),!1;try{var s;null!==f&&void 0!==f&&f.id||(j(0),N(!1),x.push("signin"));let a=await r().post("".concat(d.Sb,"/auth/verify-otp"),{...(0,c.uI)({id:f.id,otp:e})});if((null===a||void 0===a?void 0:a.status)!==d.I7)throw new Error(null===a||void 0===a?void 0:a.data.message);j(0);const{user:n,token:t,refreshToken:o}=null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s.data;b({...n}),y(t),(0,c.fE)(o),N(!0),x.push("/exchange/ethereum/cax_dai")}catch(u){var a,n,t,o,l,i;null!==u&&void 0!==u&&null!==(a=u.response)&&void 0!==a&&null!==(n=a.data)&&void 0!==n&&n.message?(console.log("Otp-2-Page@verify-otp-error:",null===u||void 0===u||null===(t=u.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message),h(null===u||void 0===u||null===(l=u.response)||void 0===l||null===(i=l.data)||void 0===i?void 0:i.message)):(console.error("Otp-2-Page@verify-otp-error:",u.message),h(u.message))}g(!1)})()},children:"Verify"})})]}),(0,m.jsx)("div",{className:"info mt-3",children:(0,m.jsx)("p",{className:"text-muted",children:"You dont recommended to save password to browsers!"})}),(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsx)(o.N_,{to:"#",className:"text-primary",onClick:async e=>{if(e.preventDefault(),null===f||void 0===f||!f.id||null!==f&&void 0!==f&&f.phone_verified_at)return u.oR.error("Please login to your account."),j(0),N(!1),x.push("signin"),!1;const s=v.Ik().shape({id:v.Yj().min(10).max(255).required()});let a="";if(await s.validate({id:null===f||void 0===f?void 0:f.id}).catch((e=>(a=e.message,!1))),a)return console.log(a),u.oR.error("Invalid parameter detected."),!1;const n=u.oR.loading("Changing Phone Number...");try{let e=await r().post("".concat(d.Sb,"/user/change-phone"),{id:null===f||void 0===f?void 0:f.id});var t;if((null===e||void 0===e?void 0:e.status)!==d.I7)u.oR.error(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message);else u.oR.error("Phone number successfully removed."),x.push("otp-1")}catch(e){var o,l,i,c,m,h;if(null!==e&&void 0!==e&&null!==(o=e.response)&&void 0!==o&&null!==(l=o.data)&&void 0!==l&&l.message)console.log("Otp-2-Page@change-phone-number:",null===e||void 0===e||null===(i=e.response)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.message),u.oR.error(null===e||void 0===e||null===(m=e.response)||void 0===m||null===(h=m.data)||void 0===h?void 0:h.message);else u.oR.error(e.message),console.log("Otp-2-Page@change-phone-number:",null===e||void 0===e?void 0:e.message)}finally{u.oR.dismiss(n)}return!1},children:"Change Phone Number"})})]})})]})})})})})}},20678:(e,s,a)=>{e.exports=a.p+"static/media/logo.3a5217131dbf810cca8a.png"}}]);