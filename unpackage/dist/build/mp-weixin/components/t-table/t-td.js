(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/t-table/t-td"],{1537:function(t,e,n){"use strict";n.r(e);var r=n("ca45"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"2ef1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"3aa1":function(t,e,n){"use strict";n.r(e);var r=n("2ef1"),a=n("1537");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("a51a");var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},a51a:function(t,e,n){"use strict";var r=n("c05a"),a=n.n(r);a.a},c05a:function(t,e,n){},ca45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{align:String},data:function(){return{thBorder:"1",borderColor:"#d0dee5",fontSize:"14",color:"#555c60",tdAlign:"center"}},inject:["table","tr"],created:function(){this.thBorder=this.table.border,this.borderColor=this.table.borderColor,this.fontSize=this.tr.fontSize,this.color=this.tr.color,this.align?this.tdAlign=this.align:this.tdAlign=this.tr.align},computed:{tdAlignCpd:function(){var t="";switch(this.tdAlign){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break;default:t="center";break}return t}}};e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/t-table/t-td-create-component',
    {
        'components/t-table/t-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3aa1"))
        })
    },
    [['components/t-table/t-td-create-component']]
]);                
