webpackJsonp([17],{533:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=t(2),a=Object(e.a)({data:function(){return{modal1:!1}},methods:{ok:function(){},cancel:function(){},openMessage:function(){this.$Message.info({content:"hello world",duration:2})},handleSpinShow:function(){this.$Spin.show()}}},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[t("u-button",{attrs:{type:"primary"},on:{"on-click":function(o){n.modal1=!0}}},[n._v("Display dialog box")]),n._v(" "),t("u-modal",{attrs:{closable:!0,draggable:!0,title:"asdfasdfasdfasdfasdf","drag-rect":"30px 0px 100px 60px"},on:{"on-ok":n.ok,"on-cancel":n.cancel},model:{value:n.modal1,callback:function(o){n.modal1=o},expression:"modal1"}},[t("p",[n._v("Content of dialog")]),n._v(" "),t("p",[n._v("Content of dialog")]),n._v(" "),t("p",[n._v("Content of dialog")]),n._v(" "),t("u-button",{on:{"on-click":n.openMessage}},[n._v("Message")]),n._v(" "),t("u-button",{attrs:{type:"primary"},on:{"on-click":n.handleSpinShow}},[n._v("整页显示，3秒后关闭")])],1)],1)},[],!1,null,null,null);o.default=a.exports}});
//# sourceMappingURL=17.chunk.js.map