(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226194"],{e6e2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),t._m(1),a("div",[t._v("African headquarters of a global trading company, dealing in various types of products")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"Product ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.sku)+" ")]}}])}),a("el-table-column",{attrs:{label:"Description Of Goods"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{height:"200px"},domProps:{innerHTML:t._s(e.row.title)}})]}}])}),a("el-table-column",{attrs:{label:"EXW Price(SH/PCS）",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.price))])]}}])}),a("el-table-column",{attrs:{label:"Picture",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.img,"min-width":"70",height:"220"}})]}}])}),a("el-table-column",{attrs:{label:"Packaging",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.packaging,"min-width":"70",height:"220"}})]}}])})],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b",[t._v("ADD:")]),t._v(" Dar Es Salaam Ilala Kariakoo ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b",[t._v("Tel:")]),t._v(" +255 0742 120259 "),a("div"),t._v(" "),a("b",[t._v("WhatsApp:")]),t._v(" +255 742 120 259")])}],r=a("b775");function l(t){return Object(r["a"])({url:"https://www.bk41.cn/api/cmsproduct/page",method:"get",params:t})}var s={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,type:null}},mounted:function(){},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e={type:this.$route.params.id};l(e).then((function(e){t.list=e.data.list,t.listLoading=!1}))}}},o=s,c=a("2877"),u=Object(c["a"])(o,n,i,!1,null,null,null);e["default"]=u.exports}}]);