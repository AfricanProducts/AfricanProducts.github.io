(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226194"],{e6e2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[t._m(0),t._m(1),n("div",[t._v("African headquarters of a global trading company, dealing in various types of products")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Product ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.sku)+" ")]}}])}),n("el-table-column",{attrs:{label:"Description Of Goods"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{height:"200px"},domProps:{innerHTML:t._s(e.row.title)}})]}}])}),n("el-table-column",{attrs:{label:"EXW Price(SH/PCS）",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.price))])]}}])}),n("el-table-column",{attrs:{label:"MOQ",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.moq))])]}}])}),n("el-table-column",{attrs:{label:"Picture",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.img,"min-width":"70",height:"220"}})]}}])}),n("el-table-column",{attrs:{label:"Packaging",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.packaging,"min-width":"70",height:"220"}})]}}])})],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("ADD:")]),t._v(" Dar Es Salaam Ilala Kariakoo ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b",[t._v("Tel:")]),t._v(" +255 0742 120259 "),n("div"),t._v(" "),n("b",[t._v("WhatsApp:")]),t._v(" +255 742 120 259")])}],l=n("b775");function r(t){return Object(l["a"])({url:"https://www.bk41.cn/api/cmsproduct/page",method:"get",params:t})}var s={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,type:null}},mounted:function(){},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e={type:this.$route.params.id};r(e).then((function(e){t.list=e.data.list,t.listLoading=!1}))}}},o=s,c=n("2877"),u=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=u.exports}}]);