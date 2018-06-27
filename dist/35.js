/*! NutUI v1.2.8 Wed Jun 27 2018 19:40:50 GMT+0800 (CST) */
webpackJsonpnutui([35],{1052:function(t,v,_){(t.exports=_(1)()).push([t.i,"",""])},1214:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"刮刮卡。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("h6",[t._v("默认用法")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/luckycard1.png"}}),t._v(" "),_("h6",[t._v("刮开层和背景层都支持自定义颜色，奖品信息支持HTML")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo2,imgUrl:"../asset/img/demo/luckycard2.png"}}),t._v(" "),_("h6",[t._v("刮开层支持图片")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo3,imgUrl:"../asset/img/demo/luckycard3.png"}}),t._v(" "),_("h6",[t._v("刮开面积超过设定比值（ratio）触发事件，可调用clearCover方法清除刮开层")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo4,imgUrl:"../asset/img/demo/luckycard4.png"}}),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("content")]),t._v(" "),_("td",[t._v("奖品信息(必传)")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("''")]),t._v(" "),_("td",[t._v("支持HTML")])]),t._v(" "),_("tr",[_("td",[t._v("coverColor")]),t._v(" "),_("td",[t._v("刮开层颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'#C5C5C5'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("coverImg")]),t._v(" "),_("td",[t._v("把图片设为刮开层")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("''")]),t._v(" "),_("td",[t._v("不支持跨域。设置此项后coverColor失效。")])]),t._v(" "),_("tr",[_("td",[t._v("backgroundColor")]),t._v(" "),_("td",[t._v("内容层背景颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'#FFFFFF'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("ratio")]),t._v(" "),_("td",[t._v("触发事件的刮开比。")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0.5")]),t._v(" "),_("td",[t._v("刮开面积超过此比例时触发事件。值介于0-1之间。")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("卡片高度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("单位rem")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("卡片宽度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("单位rem")])]),t._v(" "),_("tr",[_("td",[t._v("fontSize")]),t._v(" "),_("td",[t._v("中奖信息字号")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0.4")]),t._v(" "),_("td",[t._v("单位rem")])])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("open")]),t._v(" "),_("td",[t._v("刮开面积达到指定比例（ratio）时触发的事件")]),t._v(" "),_("td",[t._v("唯一参数是卡片对象，调用其clearCover方法可以清除刮开层所有可见像素")])])])])])}]}},1261:function(t,v,_){var e=_(1052);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("1e9cb72c",e,!0,{})},886:function(t,v,_){var e=_(2)(_(987),_(1214),function(t){_(1261)},null,null);t.exports=e.exports},987:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo1:'<nut-luckycard \ncontent="1000万"\n></nut-luckycard>',demo2:'<nut-luckycard \ncoverColor="#F9CC9D" \nbackgroundColor="#C3D08B" \ncontent="<em>1000<em><strong>元</strong>"\n></nut-luckycard>',demo3:'<nut-luckycard \ncontent="1000万" \n:coverImg="coverImage"\n></nut-luckycard>',demo4:'<nut-luckycard \ncontent="再来一瓶" \n:ratio="0.3" \n@open= "cardOpen"\n></nut-luckycard>'}},methods:{}}}});