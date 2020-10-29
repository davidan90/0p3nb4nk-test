(this["webpackJsonp0p3nb4nk-test"]=this["webpackJsonp0p3nb4nk-test"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),s=t(61),i=t.n(s),c=(t(78),t(79),t(72)),o=t(15),u={es:t(66)},d=(c.a.use(o.a).init({resources:u,lng:"es"}),t(12)),m=t(40);t(90);!function(e){e.primary="primary",e.secondary="secondary"}(n||(n={}));var p,f=function(e){var a=e.display,t=void 0===a?n.primary:a,r=e.children,s=Object(m.a)(e,["display","children"]);return l.a.createElement("button",Object.assign({className:"button button__".concat(t)},s),r)};t(91);!function(e){e.primary="primary",e.secondary="secondary"}(p||(p={}));var h=function(e){var a=e.display,t=void 0===a?p.primary:a,n=(e.href,e.children),r=Object(m.a)(e,["display","href","children"]);return l.a.createElement("a",Object.assign({className:"link link__".concat(t)},r),n)},v=(t(92),function(e){var a=e.counter,t=e.active,n=Object(r.useMemo)((function(){for(var e=[],t=1;t<=a;t++)e.push(t);return e}),[a]),s=t<=1?1:t++;return l.a.createElement("ul",{className:"step-counter"},n.map((function(e){return l.a.createElement("li",{key:e,className:e===s?"active":void 0},e<s?l.a.createElement("i",{className:"material-icons"},"check"):e)})))}),E=(t(93),function(e){return e<=1?1:e}),b=function(e){var a,t=e.initialStep,n=void 0===t?1:t,s=e.children,i=Object(r.useState)(E(n)),c=Object(d.a)(i,2),o=c[0],u=c[1],m=Object(r.useState)({}),p=Object(d.a)(m,2),f=p[0],h=p[1],b=l.a.Children.count(s),g=function(e){u(E(e))},y=function(e,a){e&&(u(o+1),a&&h(a))};return l.a.createElement("div",{className:"wizard"},l.a.createElement("header",{className:"header"},l.a.createElement(v,{counter:b,active:o})),null===(a=l.a.Children.map(s,(function(e){var a={goTo:g,next:y,wizardData:f},t=e;return l.a.isValidElement(e)&&(t=l.a.cloneElement(e,a)),l.a.createElement("div",{className:"content"},t)})))||void 0===a?void 0:a[o-1])},g=(t(94),function(){return l.a.createElement("span",{className:"dash"})}),y=(t(95),function(){return l.a.createElement("svg",{viewBox:"0 0 50 50",className:"spinner"},l.a.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))}),w=(t(96),function(e){var a=e.label,t=e.error,n=e.type,s=Object(m.a)(e,["label","error","type"]),i=Object(r.useState)(!1),c=Object(d.a)(i,2),o=c[0],u=c[1],p="password"===n;return l.a.createElement("div",{className:"field"},a?l.a.createElement("label",{className:"field-label"},a):null,l.a.createElement("div",{className:"field-input"},l.a.createElement("input",Object.assign({},s,{type:p&&o?"text":n})),p?l.a.createElement("i",{className:"material-icons eye",onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},"remove_red_eye"):null),l.a.createElement("span",{className:"error"},t))}),x=t(53),N=t(19),C=t(70),O=t.n(C),j=t(71),k=t.n(j),q=(t(101),function(e){var a=e.children;return l.a.createElement("footer",{className:"footer"},a)}),S=(t(102),function(e){var a=e.cancel,t=e.next,r=Object(o.b)().t,s=N.b().shape({check:N.a().oneOf([!0],r("step1-field1-validation-required"))}),i=Object(x.a)({initialValues:{check:!1},onSubmit:function(){t(i.isValid)},validationSchema:s,validateOnMount:!0});return l.a.createElement("form",{className:"information",onSubmit:i.handleSubmit},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,r("step1-title")),l.a.createElement(g,null)),l.a.createElement("div",{className:"images"},l.a.createElement("figure",null,l.a.createElement("img",{src:k.a,alt:r("step1-figure1-alt")}),l.a.createElement("p",null,r("step1-figure1-info"))),l.a.createElement("figure",null,l.a.createElement("img",{src:O.a,alt:r("step1-figure2-alt")}),l.a.createElement("p",null,r("step1-figure2-info")))),l.a.createElement("h4",null,r("step1-article1-title")),l.a.createElement("p",null,r("step1-article1-text")),l.a.createElement("h4",null,r("step1-article2-title")),l.a.createElement("p",null,r("step1-article2-text")),l.a.createElement("div",{className:"conditions"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"check",onChange:i.handleChange,checked:i.values.check}),r("step1-field1-text1")),i.touched.check&&i.errors.check?l.a.createElement("span",{className:"error"},i.errors.check):null),l.a.createElement(q,null,l.a.createElement(h,{display:p.secondary,onClick:a},r("cancel")),l.a.createElement(f,{display:n.secondary,type:"submit"},r("next"))))}),M=(t(103),function(e){var a=e.cancel,t=e.next,r=Object(o.b)().t,s=N.b().shape({password:N.d().min(8,r("step2-field1-validation-min-8")).max(24,r("step2-field1-validation-max-24")).matches(/[A-Z]/,r("step2-field1-validation-capital")).matches(/[0-9]/,r("step2-field1-validation-number")).required(r("step2-field1-validation-required")),passwordRepeated:N.d().oneOf([N.c("password")],r("step2-field2-validation-match")).required(r("step2-field2-validation-required")),passwordClue:N.d().max(255,r("step2-field3-validation-max-255")).notRequired()}),i=Object(x.a)({initialValues:{password:"",passwordRepeated:"",passwordClue:""},onSubmit:function(e){t(i.isValid,e)},validationSchema:s,validateOnMount:!0});return l.a.createElement("form",{className:"form",onSubmit:i.handleSubmit},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,r("step2-title")),l.a.createElement(g,null)),l.a.createElement("div",{className:"fields"},l.a.createElement("p",null,l.a.createElement("span",null,r("step2-fields1-text1")),l.a.createElement("span",null,r("step2-fields1-text2"))),l.a.createElement("div",null,l.a.createElement(w,{name:"password",type:"password",label:r("step2-field1-label"),placeholder:r("step2-field1-placeholder"),onChange:i.handleChange,value:i.values.password,error:i.touched.password&&i.errors.password?i.errors.password:void 0}),l.a.createElement(w,{name:"passwordRepeated",type:"password",label:r("step2-field2-label"),placeholder:r("step2-field2-placeholder"),onChange:i.handleChange,value:i.values.passwordRepeated,error:i.touched.passwordRepeated&&i.errors.passwordRepeated?i.errors.passwordRepeated:void 0})),l.a.createElement("div",null,l.a.createElement("p",null,r("step2-fields2-text1")),l.a.createElement(w,{name:"passwordClue",type:"text",label:r("step2-field3-label"),placeholder:r("step2-field3-placeholder"),onChange:i.handleChange,value:i.values.passwordClue,error:i.touched.passwordClue&&i.errors.passwordClue?i.errors.passwordClue:void 0}))),l.a.createElement(q,null,l.a.createElement(h,{display:p.secondary,onClick:a},r("cancel")),l.a.createElement(f,{display:n.secondary,type:"submit"},r("next"))))}),R={status:200},_={status:401};function P(e){var a=Object(r.useState)(!1),t=Object(d.a)(a,2),n=t[0],l=t[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),c=i[0],o=i[1],u=Object(r.useState)(null),m=Object(d.a)(u,2),p=m[0],f=m[1];return Object(r.useEffect)((function(){var a;l(!0),(a=e,new Promise((function(e,t){return setTimeout((function(){return"pruebaKO123"!==a?e(R):t(_)}),3e3)}))).then((function(e){o(e)})).catch((function(e){f(e)})).finally((function(){l(!1)}))}),[e]),{loading:n,data:c,error:p}}t(104);var V=function(e){var a=e.done,t=e.goTo,n=e.wizardData,r=Object(o.b)().t,s=P(null===n||void 0===n?void 0:n.password),i=s.loading,c=s.data,u=s.error,d=!!c&&!u&&!i;return l.a.createElement("div",{className:"feedback"},i?l.a.createElement(y,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,l.a.createElement("i",{className:"material-icons"},d?"check_circle_outline":"warning"),l.a.createElement("span",null,r(d?"step3-success-title":"step3-fail-title")))),l.a.createElement("span",null,r(d?"lorem":"step3-fail-text")),l.a.createElement(q,null,l.a.createElement("div",{className:"links"},l.a.createElement(h,{onClick:d?a:function(){return t(1)}},l.a.createElement("span",{className:"finish"},r(d?"step3-success-button":"step3-fail-button"),l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))))))},I=(t(105),function(){var e=Object(o.b)().t,a=Object(r.useState)(!1),t=Object(d.a)(a,2),n=t[0],s=t[1],i=function(){s(!n)};return l.a.createElement("section",{className:"home"},n?l.a.createElement(b,null,l.a.createElement(S,{cancel:i}),l.a.createElement(M,{cancel:i}),l.a.createElement(V,{done:i})):l.a.createElement(f,{onClick:i},e("start")))}),T=function(){return l.a.createElement("main",null,l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e){e.exports=JSON.parse('{"translation":{"lorem":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","start":"Comenzar","cancel":"Cancelar","next":"Siguiente","step1-title":"Crea tu password manager","step1-figure1-info":"Guarda aqu\xed todas tus contrase\xf1as, datos o cualquier informaci\xf3n, olvida las notas de papel y las aplicaciones no protegidas.","step1-figure1-alt":"Figura 1","step1-figure2-info":"Crea tu clave maestra: solo t\xfa podr\xe1s acceder a tus secretos.","step1-figure2-alt":"Figura 2","step1-article1-title":"C\xf3mo funciona","step1-article1-text":"En primer lugar, debes crear una contrase\xf1a diferente para sus pertenencias electr\xf3nicas. No podr\xe1s recuperar tu contrase\xf1a, as\xed que recu\xe9rdela bien.","step1-article2-title":"Qu\xe9 datos puedes guardar","step1-article2-text":"Por ejemplo, el n\xfamero de tu tarjeta, el PIN y el PUK de tu tel\xe9fono m\xf3vil, el n\xfamero de serie de alguno de tus dispositivos o cualquier informaci\xf3n que necesiteis tener en lugar seguro.","step1-field1-text1":"Soy mayor de edad y acepto que traten mis datos seg\xfan la politica de protecci\xf3n de datos.","step1-field1-validation-required":"Debe aceptar pol\xedticas.","step2-title":"Crea tu password manager","step2-fields1-text1":"En primer lugar, debes crear una contrase\xf1a diferente para sus pertenencias electr\xf3nicas.","step2-fields1-text2":"No podr\xe1s recuperar tu contrase\xf1a, as\xed que recu\xe9rdela bien.","step2-fields2-text1":"Tambi\xe9n puedes crear una pista que te ayude a recordar tu contrase\xf1a maestra.","step2-field1-validation-required":"Campo requerido","step2-field1-validation-min-8":"8 caracteres m\xednimo","step2-field1-validation-max-24":"24 caracteres m\xe1ximo","step2-field1-validation-capital":"Al menos una may\xfascula","step2-field1-validation-number":"Al menos un n\xfamero","step2-field1-label":"Crea tu Contrase\xf1a Maestra","step2-field1-placeholder":"Introduce contrase\xf1a","step2-field2-validation-required":"Campo requerido","step2-field2-validation-match":"Contrase\xf1as deben coincidir","step2-field2-label":"Repite tu Contrase\xf1a Maestra","step2-field2-placeholder":"Repite tu contrase\xf1a","step2-field3-validation-max-255":"255 caracteres m\xe1ximo","step2-field3-label":"Crea tu pista para recordar tu contrase\xf1a (opcional)","step2-field3-placeholder":"Introduce tu pista","step3-success-title":"\xa1Tu Password Manager ya esta creado!","step3-success-button":"Acceder","step3-fail-title":"Ha habido un error","step3-fail-text":"No hemos podido modificar tu Contrase\xf1a Maestra. Int\xe9ntalo m\xe1s tarde.","step3-fail-button":"Volver a Password Manager"}}')},70:function(e,a,t){e.exports=t.p+"static/media/secure-1.828e06a5.svg"},71:function(e,a,t){e.exports=t.p+"static/media/secure-2.31499ccb.svg"},73:function(e,a,t){e.exports=t(106)},78:function(e,a,t){},79:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.12b16c8b.chunk.js.map