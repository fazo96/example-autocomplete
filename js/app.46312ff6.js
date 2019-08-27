(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("vue-markdown",[e._v(e._s(e.markdownContent))]),n("hr"),n("h1",[e._v("Try it")]),n("v-select",{attrs:{options:e.options,filterable:!1},on:{search:e.fetchOptions},scopedSlots:e._u([{key:"option",fn:function(t){return[n("b",[e._v(">")]),e._v(" "+e._s(t.name)+" "),n("b",[e._v("("+e._s(t.email)+")")]),n("br"),n("span",{staticClass:"option-body"},[e._v(e._s(t.body))])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"github",attrs:{href:"https://github.com/fazo96/example-autocomplete"}},[n("img",{staticClass:"attachment-full size-full",attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"}})])}],i=(n("7f7f"),n("96cf"),n("3b8d")),s=n("4a7a"),c=n.n(s),u=n("9ce6"),l=n.n(u),p=n("2e94"),f=n.n(p),d=(n("6dfc"),"# example-autocomplete\n\nExample autocomplete field made in Vue.js by [Enrico Fasoli](https://github.com/fazo96)\n\n## Development\n\n- `npm install` to install dependencies\n- `npm start` to run a local development server\n- `npm run build` to make a production build\n- `npm test` to run unit tests\n\n## Implementation details\n\nImplemented using Vue and the `vue-select` library. Other libraries have been used\nfor minor things, check `package.json` and the source code for more information.\n\nThe scaffolding has been done using `@vue/cli`."),m=64,h=20,b=3;function v(e){return e.length>m-3?e.slice(0,m-3)+"...":e}var g={name:"app",components:{vSelect:c.a,VueMarkdown:l.a},data:function(){return{markdownContent:d,selected:null,options:[]}},methods:{fetchOptions:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.length>=b)){e.next=13;break}return n(!0),e.next=4,f()("https://jsonplaceholder.typicode.com/comments?q=".concat(encodeURIComponent(t)));case 4:if(r=e.sent,!r.ok){e.next=10;break}return e.next=8,r.json();case 8:o=e.sent,this.options=o.slice(0,h).map(function(e){return{name:e.name,email:e.email,body:v(e.body),id:e.id}});case 10:n(!1),e.next=14;break;case 13:this.options=[];case 14:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()}},y=g,_=(n("034f"),n("2877")),k=Object(_["a"])(y,o,a,!1,null,null,null),w=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.46312ff6.js.map