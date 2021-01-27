(this["webpackJsonpreact-json-schema-builder-example"]=this["webpackJsonpreact-json-schema-builder-example"]||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"$id":"https://example.com/person.schema.json","$schema":"http://json-schema.org/draft-07/schema#","title":"Person","type":"object","properties":{"firstName":{"title":"Name","type":"string"},"lastName":{"type":"string"},"hobbies":{"type":"array","items":{"type":"string"}}}}')},50:function(e,t,n){e.exports=n(86)},51:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);n(51);var a=n(0),l=n.n(a),r=n(17),o=n.n(r),i=n(48),u=n(42),c=n.n(u),m=(n(59),n(2)),s=n.n(m),d=n(28),f=n(88),p=n(27),v=n(19),h=n(20),b=n(43),g=n(44),E=n.n(g),y=(n(79),n(49));function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C={type:"object",properties:{}},w=[{value:"string",label:"schemaTypes.text"},{value:"integer",label:"schemaTypes.integer"},{value:"number",label:"schemaTypes.decimal"},{value:"boolean",label:"schemaTypes.boolean"},{value:"object",label:"schemaTypes.object"},{value:"array",label:"schemaTypes.array"}],O=["description","type","title"],N=[].concat(O,["enum","format","maxLength","minLength","pattern"]),k=[].concat(O,["maximum","minimum","multipleOf"]),j=[].concat(O,["maximum","minimum","multipleOf"]),q=[].concat(O),I=[].concat(O,["maxItems","minItems","uniqueItems","items"]),M=[].concat(O,["required","properties"]),L=[{value:"description",label:"description",type:"text"}],D=[].concat(L,[{value:"minLength",label:"requirement.minLength",type:"number"},{value:"maxLength",label:"requirement.maxLength",type:"number"},{value:"enum",label:"options",type:"multi_creatable"},{value:"pattern",label:"pattern",type:"text"},{value:"format",label:"format",type:"select",optionList:[{value:"date-time",label:"formatOptions.date"},{value:"email",label:"formatOptions.email"},{value:"hostname",label:"formatOptions.hostname"},{value:"ipv4",label:"formatOptions.ipv4"},{value:"ipv6",label:"formatOptions.ipv6"},{value:"uri",label:"formatOptions.uri"}]}]),_=[].concat(L,[{value:"minimum",label:"requirement.minimum",type:"number"},{value:"maximum",label:"requirement.maximum",type:"number"},{value:"multipleOf",label:"requirement.multipleOf",type:"number"}]),F=[].concat(L,[{value:"minimum",label:"requirement.minimum",type:"number"},{value:"maximum",label:"requirement.maximum",type:"number"},{value:"multipleOf",label:"requirement.multipleOf",type:"number"}]),T=[].concat(L),A=[].concat(L,[{value:"required",label:"requirement.required",type:"required"}]),K={string:D,integer:F,number:_,boolean:T,array:[].concat(L,[{value:"minItems",label:"requirement.minItems",type:"number"},{value:"maxItems",label:"requirement.maxItems",type:"number"},{value:"uniqueItems",label:"requirement.uniqueItems",type:"boolean"}]),object:A},P={string:N,integer:j,number:k,boolean:q,object:M,array:I},S=s.a.keys,R=s.a.get,B=s.a.pick,J=R("type"),U=R("title"),z=R("properties"),H=R("items"),$=R("required"),V=s.a.set,G=V("type"),Q=V("title"),W=V("properties"),X=function(e){return V(["properties",e])},Y=V("items"),Z=s.a.unset,ee=function(e){return Z(["properties",e])},te=function(e){return X("__"+s.a.now()+"__")({},e)},ne=function(e,t){return s.a.flow([s.a.entries,s.a.map((function(n){var a,l=n[0];return(a={})[l===e?t:l]=n[1],a})),s.a.reduce(s.a.assign,{})])},ae=function(e,t,n){return s.a.flow([z,ne(e,t),function(e){return W(e,n)}])(n)},le=function(e){return"object"===J(e)},re=function(e){return"array"===J(e)},oe=function(e){return!s.a.isEmpty(z(e))},ie=function(e){return s.a.find(["value",e])},ue=s.a.map("value"),ce=s.a.map((function(e){return{label:e,value:e}})),me=s.a.flow([s.a.entries,s.a.map((function(e){return t=e[0],n=U(e[1]),s.a.isEmpty(n)?{value:t,label:t}:{value:t,label:n};var t,n}))]),se=s.a.flow([z,me]),de=s.a.flow((function(e){var t=$(e),n=z(e);return B(t,n)}),me),fe=s.a.flow([G,function(e){var t,n=(t=J(e),s.a.get(t,P));return B(n,e)}]),pe=function(e,t){return s.a.map((function(t){return x({},t,{label:e(t.label)})}),t)},ve=function(e){return l.a.createElement("div",{className:"w-full border-l border-b border-blue-400 pl-2 pb-2 pt-2 rounded-bl"},e.children)},he=function(e){return l.a.createElement("label",{className:"text-sm text-gray-700"},e.children)},be=function(e){var t=e.onChange,n=e.placeholder,a=e.value,r=void 0===a?"":a,o=e.label,i=e.type,u=void 0===i?"text":i,c=l.a.useState(""),m=c[0],s=c[1];l.a.useEffect((function(){s(r)}),[r]);var d,f,p=function(){m!==r&&t(m)};return l.a.createElement("div",{className:"w-full"},l.a.createElement(he,null,o),l.a.createElement("input",{type:u,value:m,onChange:(d=s,function(e){d(e.target.value)}),onKeyPress:(f=p,function(e){"Enter"===e.key&&f()}),onBlur:p,placeholder:n,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"}))},ge=function(e){var t=e.type,n=e.onChange,a=Object(f.a)().t,r=l.a.useMemo((function(){return pe(a,w)}),[w,a]);return l.a.createElement("div",null,l.a.createElement(he,null,a("type")),l.a.createElement(d.a,{className:" min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300",options:r,value:ie(t)(r),onChange:function(e){return n(e.value)},placeholder:a("type")}))},Ee=function(e){var t=e.onClick,n=e.className;return l.a.createElement("button",{onClick:void 0===t?s.a.noop:t,title:e.title,className:"flex items-center border focus:outline-none focus:shadow-outline-blue \n      focus:border-blue-500 text-sm justify-center shadow w-8 h-8 rounded-full "+(void 0===n?"":n)},e.children)},ye=function(e){var t=e.onClick;return l.a.createElement(Ee,{onClick:void 0===t?s.a.noop:t,title:e.title,className:"text-white bg-blue-500 hover:bg-blue-700"},l.a.createElement(h.a,{icon:v.e}))},xe=function(e){var t=e.onClick;return l.a.createElement(Ee,{onClick:void 0===t?s.a.noop:t,title:e.title,className:"text-white bg-red-500 hover:bg-red-700"},l.a.createElement(h.a,{icon:v.g}))},Ce=function(e){var t=e.isCollapsed,n=e.onClick;return l.a.createElement(Ee,{onClick:void 0===n?s.a.noop:n,title:e.title,className:"text-white bg-gray-500 hover:bg-gray-600"},l.a.createElement(h.a,{icon:void 0!==t&&t?v.c:v.b}))},we=function(e){var t=e.onClick;return l.a.createElement(Ee,{onClick:void 0===t?s.a.noop:t,title:e.title,className:"text-gray-800 bg-white hover:bg-gray-200"},l.a.createElement(h.a,{icon:v.f}))},Oe=function(e){var t=e.onClick;return l.a.createElement(Ee,{onClick:void 0===t?s.a.noop:t,title:e.title,className:"text-gray-800 bg-white hover:bg-gray-200"},l.a.createElement(h.a,{icon:v.d}))},Ne=function(e){var t,n=e.value,a=e.onChange;return l.a.createElement("div",{className:"flex flex-row"},l.a.createElement(he,null,e.label),l.a.createElement(E.a,{onChange:(t=a,function(e){t(e.target.checked)}),defaultChecked:n,className:"ml-2"}))},ke=function(e){return l.a.createElement("div",{className:"flex items-end justify-between"},e.children,l.a.createElement("div",{className:"ml-2"},l.a.createElement(xe,{onClick:e.onDelete})))},je=function(e){var t=e.field,n=e.schema,a=e.onChange,r=Object(f.a)();return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement(be,{label:(0,r.t)(t.label),value:R(t.value,n),onChange:function(e){return a(V(t.value,e,n))}}))},qe=function(e){var t=e.field,n=e.schema,a=e.onChange,r=Object(f.a)();return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement(be,{label:(0,r.t)(t.label),type:"number",value:R(t.value,n),onChange:function(e){return a(V(t.value,parseInt(e,10),n))}}))},Ie=function(e){var t=e.field,n=e.schema,a=e.onChange,r=Object(f.a)();return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement(Ne,{label:(0,r.t)(t.label),value:R(t.value,n),onChange:function(e){return a(V(t.value,e,n))}}))},Me=function(e){var t=e.field,n=e.schema,a=e.onChange,r=Object(f.a)().t,o=R(t.value,n),i=l.a.useMemo((function(){return ce(o)}),[o]);return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement("div",{className:"w-full"},l.a.createElement(he,null,r(t.label)),l.a.createElement(b.a,{isMulti:!0,className:"min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300",options:i,value:i,noOptionsMessage:function(){return r("noOptions")},onChange:function(e){a(V(t.value,ue(e),n))},placeholder:r("options")})))},Le=function(e){var t=e.field,n=e.schema,a=e.onChange,r=Object(f.a)().t,o=l.a.useMemo((function(){return pe(r,t.optionList)}),[t.optionList,r]),i=R(t.value,n),u=l.a.useMemo((function(){return ie(i)(o)}),[o,i]);return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement("div",{className:"w-full"},l.a.createElement(he,null,r(t.label)),l.a.createElement(d.a,{className:"min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300",options:o,noOptionsMessage:function(){return r("noOptions")},value:u,onChange:function(e){a(V(t.value,e.value,n))},placeholder:r("options")})))},De=function(e){var t=e.field,n=e.schema,a=e.onChange;if(!le(n)||!oe(n))return null;var r=Object(f.a)().t,o=se(n),i=de(n);return l.a.createElement(ke,{onDelete:function(){return a(Z(t.value,n))}},l.a.createElement("div",{className:"w-full"},l.a.createElement(he,null,r(t.label)),l.a.createElement(d.a,{isMulti:!0,className:"min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300",options:o,noOptionsMessage:function(){return r("noOptions")},value:i,onChange:function(e){a(V(t.value,ue(e),n))},placeholder:r("options")})))},_e={text:function(e){return l.a.createElement(je,Object.assign({},e))},number:function(e){return l.a.createElement(qe,Object.assign({},e))},boolean:function(e){return l.a.createElement(Ie,Object.assign({},e))},multi_creatable:function(e){return l.a.createElement(Me,Object.assign({},e))},select:function(e){return l.a.createElement(Le,Object.assign({},e))},required:function(e){return l.a.createElement(De,Object.assign({},e))}},Fe=function(e){var t=e.schema,n=e.onChange;return l.a.createElement("ul",{className:"mb-4 grid gap-2"},e.fields.map((function(e){return l.a.createElement("li",{key:e.value,className:""},_e[e.type]({schema:t,onChange:n,field:e}))})))},Te=function(e){var t=e.schema,n=e.onChange,a=Object(f.a)().t,r=J(t),o=l.a.useMemo((function(){return pe(a,(e=r,s.a.get(e,K)));var e}),[r,a]),i=l.a.useMemo((function(){var e=S(t);return s.a.filter((function(t){return s.a.includes(t.value,e)}),o)}),[t,o]);return l.a.createElement("div",{className:"min-w-md"},l.a.createElement(Fe,{fields:i,schema:t,onChange:n}),l.a.createElement(d.a,{className:"min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300",options:s.a.difference(o,i),value:null,onChange:function(e){return n(V(e.value,void 0,t))},placeholder:a("addFields")}))},Ae=function(e){var t=e.onClose,n=e.children;return l.a.createElement("div",null,l.a.createElement("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"},l.a.createElement("div",{className:"relative w-auto my-6 mx-auto max-w-3xl"},l.a.createElement("div",{className:"p-2 rounded shadow relative flex flex-col w-full bg-white outline-none focus:outline-none"},l.a.createElement("div",{className:"flex items-end justify-between"},l.a.createElement("h3",{className:"font-semibold text-xl"},e.title),l.a.createElement(we,{onClick:t})),l.a.createElement("div",{className:"mt-2"},n)))),l.a.createElement("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"}))},Ke=function(e){var t=e.schema,n=e.schemakey,a=e.isCollapsed,r=e.onDelete,o=e.onChange,i=e.onChangeKey,u=e.onAdd,c=e.onCollapse,m=l.a.useState(!1),d=m[0],p=m[1],v=Object(f.a)().t;return l.a.createElement("div",{className:"flex flex-row items-end"},l.a.createElement("div",{className:"grid grid-flow-col gap-2 mr-2"},l.a.createElement(be,{value:U(t),onChange:function(e){return o(Q(e,t))},placeholder:v("title"),label:v("title")}),l.a.createElement(ge,{type:J(t),onChange:function(e){return o(fe(e,t))}}),s.a.isFunction(i)?l.a.createElement(be,{value:n,onChange:i,placeholder:v("key"),label:v("key")}):null),l.a.createElement("div",{className:"grid grid-flow-col items-center gap-1"},s.a.isFunction(c)?l.a.createElement(Ce,{onClick:c,isCollapsed:a,title:v("collapse")}):null,l.a.createElement(Oe,{onClick:function(){return p((function(e){return!e}))},title:v("extraOptions")}),s.a.isFunction(r)?l.a.createElement(xe,{onClick:r,title:v("delete")}):null,s.a.isFunction(u)?l.a.createElement(ye,{onClick:u,title:v("add")}):null),d?l.a.createElement(Ae,{onClose:function(){return p(!1)},title:v("extraFields")},l.a.createElement(Te,{schema:t,onChange:o})):null)},Pe=function(e){var t=e.schema,n=e.onChange,a=e.onAdd,r=l.a.useState(!1),o=r[0],i=r[1],u=Object(f.a)().t;return l.a.createElement("div",{className:"flex items-end"},l.a.createElement(ge,{type:J(t),onChange:function(e){return n(fe(e,t))}}),l.a.createElement("div",{className:"ml-2 grid grid-flow-col gap-1"},l.a.createElement(Oe,{onClick:function(){return i((function(e){return!e}))},title:u("extraOptions")}),s.a.isFunction(a)?l.a.createElement(ye,{onClick:a,title:u("add")}):null),o?l.a.createElement(Ae,{onClose:function(){return i(!1)},title:u("extraFields")},l.a.createElement(Te,{schema:t,onChange:n})):null)},Se=function(e){var t=e.schema,n=e.onChangeKey,a=void 0===n?s.a.noop:n,r=e.onChange,o=void 0===r?s.a.noop:r,i=e.onDelete,u=void 0===i?s.a.noop:i,c=e.schemakey,m=void 0===c?"__root__":c,d=e.isRequired,f=l.a.useState(!1),p=f[0],b=f[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-end"},d&&l.a.createElement(h.a,{icon:v.a,className:"mr-2 mb-3 text-xs",title:"Required"}),l.a.createElement(Ke,{schema:t,schemakey:m,isCollapsed:p,onChangeKey:"__root__"!==m?a:void 0,onAdd:le(t)?function(){return o(te(t))}:void 0,onCollapse:le(t)||re(t)?function(){return b((function(e){return!e}))}:void 0,onDelete:"__root__"!==m?function(){return u(m)}:void 0,onChange:o})),l.a.createElement("div",{className:p?"hidden":"block"},le(t)&&oe(t)&&l.a.createElement(ve,null,l.a.createElement(Be,{onChangeKey:function(e,n){return o(ae(e,n,t))},onDelete:function(e){return o(ee(e)(t))},onChange:function(e,n){return o(X(e)(n,t))},schema:t})),re(t)&&l.a.createElement(ve,null,l.a.createElement(Re,{schema:H(t),onChange:function(e){return o(Y(e,t))}}))))},Re=function e(t){var n=t.schema,a=t.onChange;return l.a.createElement("div",null,l.a.createElement(Pe,{schema:n,onChange:a,onAdd:le(n)?function(){return a(te(n))}:void 0}),le(n)&&oe(n)&&l.a.createElement("div",{className:"mt-2"},l.a.createElement(Be,{onChangeKey:function(e,t){return a(ae(e,t,n))},onDelete:function(e){return a(ee(e)(n))},onChange:function(e,t){return a(X(e)(t,n))},schema:n})),re(n)&&l.a.createElement(ve,null,l.a.createElement(e,{schema:H(n),onChange:function(e){return a(Y(e,n))}})))},Be=function(e){var t=e.schema,n=e.onChangeKey,a=e.onDelete,r=e.onChange;return l.a.createElement("ul",{className:"grid gap-2 "},s.a.entries(z(t)).map((function(e){var o,i=e[0];return l.a.createElement("li",{key:i},l.a.createElement(Se,{schema:e[1],schemakey:i,isRequired:(o=i,s.a.flow([$,s.a.contains(o)]))(t),onDelete:a,onChangeKey:function(e){return n(i,e)},onChange:function(e){return r(i,e)}}))})))};y.a.use(p.e).init({resources:{en:{translation:{type:"Type",schemaTypes:{text:"Text",integer:"Integer",decimal:"Decimal",boolean:"Boolean",object:"Object",array:"Array"},formatOptions:{date:"Date",email:"Email",hostname:"Hostname",ipv4:"IPv4",ipv6:"IPv6",uri:"URI"},requirement:{minLength:"Min Length",maxLength:"Max Length",minimum:"Minimum",maximum:"Maximum",multipleOf:"Multiple of",required:"Required fields",minItems:"Min Items",maxItems:"Max Items",uniqueItems:"Unique Items"},description:"Description",options:"Options",noOptions:"No options",pattern:"Pattern",format:"Format",title:"Title",key:"Key",collapse:"Collapse schema",extraOptions:"Open extra options menu",delete:"Delete schema",add:"Add schema",extraFields:"Extra fields",addFields:"Add fields"}},es:{translation:{type:"Tipo",schemaTypes:{text:"Texto",integer:"N\xba entero",decimal:"N\xba decimal",boolean:"Booleano",object:"Objeto",array:"Lista"},formatOptions:{date:"Fecha",email:"Email",hostname:"Hostname",ipv4:"IPv4",ipv6:"IPv6",uri:"URI"},requirement:{minLength:"Longitud Min",maxLength:"Longitud Max",minimum:"M\xednimo",maximum:"M\xe1ximo",multipleOf:"Multiple de",required:"Campos requeridos",minItems:"Min elementos",maxItems:"Max elementos",uniqueItems:"Elementos \xfanicos"},description:"Descripci\xf3n",options:"Opciones",noOptions:"Sin opciones",pattern:"Patr\xf3n",format:"Formato",title:"T\xedtulo",key:"Clave",collapse:"Contraer esquema",extraOptions:"Abrir opciones extra",delete:"Eliminar esquema",add:"A\xf1adir esquema",extraFields:"Campos extra",addFields:"A\xf1adir campos"}}},fallbackLng:"en",interpolation:{escapeValue:!1}});var Je=function(e){var t=e.locale,n=void 0===t?"en":t,a=e.schema,r=e.onChange,o=Object(f.a)("null",{useSuspense:!1}),i=o.i18n,u=o.ready;return l.a.useEffect((function(){i.changeLanguage(n)}),[n]),u?l.a.createElement("div",null,l.a.createElement(Se,{schema:s.a.isEmpty(a)?C:a,onChange:r})):null},Ue=(n(85),n(47)),ze=function(){var e=l.a.useState(Ue),t=Object(i.a)(e,2),n=t[0],a=t[1];return l.a.createElement("div",{className:"mx-auto grid gap-4 grid-flow-col p-8"},l.a.createElement(Je,{locale:"es",schema:n,onChange:a}),l.a.createElement(c.a,{data:n}))};o.a.render(l.a.createElement(ze,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b7999657.chunk.js.map