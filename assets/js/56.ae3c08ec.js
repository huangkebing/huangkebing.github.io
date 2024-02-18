(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{341:function(t,e,a){"use strict";a.r(e);var _=a(4),v=function(t){t.options.__data__block__={mermaid_382ee220:"flowchart LR\n    Start --\x3e Stop\n",mermaid_64a568de:"flowchart LR\n\tA>text] --\x3e B{text}--\x3eC[/text\\]\n",mermaid_64a568aa:'flowchart LR\n    id1["This is the (text) in the box"]--\x3eA["A double quote:#quot;"] --\x3e B["A dec char:#9829;"]\n',mermaid_64a56770:"flowchart LR\n\tA---B-.-C===D\n",mermaid_64a5602c:"flowchart LR\n\tA--\x3eB---C--oD(text)x--xE\n",mermaid_64a55862:"flowchart LR\n\tA---B===>C<-...->D\n",mermaid_64a5529a:"flowchart LR\n\tA-.text.->B-.->|text|C\n",mermaid_64a5525a:"flowchart LR\n    subgraph A [one]\n    a1--\x3ea2\n    end\n    subgraph B [two]\n    b1--\x3eb2\n    end\n   \ta2--\x3eb1\n",mermaid_64a551e4:'pie title Pets adopted by volunteers\n    "Dogs" : 386\n    "Cats" : 85\n    "Rats" : 15\n'}},r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mermaid语法浅尝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mermaid语法浅尝"}},[t._v("#")]),t._v(" mermaid语法浅尝")]),t._v(" "),e("p",[t._v("官方文档："),e("a",{attrs:{href:"https://mermaid.js.org/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("About Mermaid | Mermaid"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("mermaid中提供了10+种图形，但一些图形用的比较少。另外奇怪的是，为什么没有提供柱状图和折线图")]),t._v(" "),e("p",[t._v("使用过程中typora经常会报错，但是在idea中又能正常渲染，感觉是版本兼容问题，解决方案："),e("a",{attrs:{href:"https://www.cnblogs.com/learn-gz/p/17566881.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("typora不支持mermaid 问题记录 - 是秃子总会发光- 博客园 (cnblogs.com)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"一、流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、流程图"}},[t._v("#")]),t._v(" 一、流程图")]),t._v(" "),e("p",[t._v("流程图使用非常多，当一些逻辑比较复杂时，用一堆文字去描述的效果往往不如一张流程图")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("flowchart")]),t._v("来定义流程图")]),t._v(" "),e("h3",{attrs:{id:"_1-1-绘图方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-绘图方向"}},[t._v("#")]),t._v(" 1.1 绘图方向")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("方向代码")]),t._v(" "),e("th",[t._v("方向")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("TB")]),t._v(" "),e("td",[t._v("从上到下")])]),t._v(" "),e("tr",[e("td",[t._v("TD")]),t._v(" "),e("td",[t._v("自上而下/与上到下相同")])]),t._v(" "),e("tr",[e("td",[t._v("BT")]),t._v(" "),e("td",[t._v("从下到上")])]),t._v(" "),e("tr",[e("td",[t._v("RL")]),t._v(" "),e("td",[t._v("从右到左")])]),t._v(" "),e("tr",[e("td",[t._v("LR")]),t._v(" "),e("td",[t._v("从左到右")])])])]),t._v(" "),e("p",[t._v("示例：LR即从左到右")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n    Start --\x3e Stop\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_382ee220",graph:t.$dataBlock.mermaid_382ee220}}),e("h3",{attrs:{id:"_1-2-结点形状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-结点形状"}},[t._v("#")]),t._v(" 1.2 结点形状")]),t._v(" "),e("p",[t._v("在方向示例中可以看到，结点的默认形状是一个矩形，而例如流程图中形状也有不同含义")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("形状代码")]),t._v(" "),e("th",[t._v("形状")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("node")])]),t._v(" "),e("td",[t._v("默认矩形，但图形内的文字就是node")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[text]")])]),t._v(" "),e("td",[t._v("矩形，图形内文字为括号[]中的文字")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node(text)")])]),t._v(" "),e("td",[t._v("圆角矩形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node([text])")])]),t._v(" "),e("td",[t._v("半圆矩阵，即常用的流程图中的开始/结束结点")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[[text]]")])]),t._v(" "),e("td",[t._v("子程序形状")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[(text)]")])]),t._v(" "),e("td",[t._v("圆柱形状，通常是数据库会使用该形状")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node((text))")])]),t._v(" "),e("td",[t._v("圆形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node>text]")])]),t._v(" "),e("td",[t._v("不对称形状")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node{text}")])]),t._v(" "),e("td",[t._v("菱形，通常用作流程图中的判断")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node"+t._s(t.text))])]),t._v(" "),e("td",[t._v("菱边矩形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[/text/]")])]),t._v(" "),e("td",[t._v("平行四边形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[\\text\\]")])]),t._v(" "),e("td",[t._v("反平行四边形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[/text\\]")])]),t._v(" "),e("td",[t._v("梯形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node[\\text/]")])]),t._v(" "),e("td",[t._v("倒梯形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("node(((text)))")])]),t._v(" "),e("td",[t._v("双圆")])])])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n\tA>text] --\x3e B{text}--\x3eC[/text\\]\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a568de",graph:t.$dataBlock.mermaid_64a568de}}),e("p",[t._v("而当文字可能会破坏mermaid语法时，还需要使用兼容语法，即使用引号将文本圈起来：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('flowchart LR\n    id1["This is the (text) in the box"]--\x3eA["A double quote:#quot;"] --\x3e B["A dec char:#9829;"]\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a568aa",graph:t.$dataBlock.mermaid_64a568aa}}),e("h3",{attrs:{id:"_1-3-连接样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-连接样式"}},[t._v("#")]),t._v(" 1.3 连接样式")]),t._v(" "),e("h4",{attrs:{id:"_1-3-1-线条样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-线条样式"}},[t._v("#")]),t._v(" 1.3.1 线条样式")]),t._v(" "),e("p",[t._v("线条样式分为3种：实线、虚线和粗实线：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("线条代码")]),t._v(" "),e("th",[t._v("样式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("A---B")])]),t._v(" "),e("td",[t._v("实线")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A-.-B")])]),t._v(" "),e("td",[t._v("虚线")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A===B")])]),t._v(" "),e("td",[t._v("粗实线")])])])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n\tA---B-.-C===D\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a56770",graph:t.$dataBlock.mermaid_64a56770}}),e("h4",{attrs:{id:"_1-3-2-箭头样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-箭头样式"}},[t._v("#")]),t._v(" 1.3.2 箭头样式")]),t._v(" "),e("p",[t._v("箭头样式有4种：箭头、无箭头、圆形和x形")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("箭头代码")]),t._v(" "),e("th",[t._v("样式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("A--\x3eB")])]),t._v(" "),e("td",[t._v("箭头")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A---B")])]),t._v(" "),e("td",[t._v("无箭头")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A--oB")])]),t._v(" "),e("td",[t._v("圆形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A--xB")])]),t._v(" "),e("td",[t._v("x形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("A<--\x3eB")])]),t._v(" "),e("td",[t._v("双箭头")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Ao--oB")])]),t._v(" "),e("td",[t._v("双圆形")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Ax--xB")])]),t._v(" "),e("td",[t._v("双x形")])])])]),t._v(" "),e("p",[t._v("{% note red %}")]),t._v(" "),e("p",[t._v("使用中发现，如Dx--xE，并不会解析为双x形，而是会认为Dx是一个结点")]),t._v(" "),e("p",[t._v("{% endnote %}")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n\tA--\x3eB---C--oD(text)x--xE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a5602c",graph:t.$dataBlock.mermaid_64a5602c}}),e("h4",{attrs:{id:"_1-3-3-线条长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-线条长度"}},[t._v("#")]),t._v(" 1.3.3 线条长度")]),t._v(" "),e("p",[t._v("添加符号数量来增加连接线长度，实线增加"),e("code",[t._v("-")]),t._v("，虚线增加"),e("code",[t._v(".")]),t._v("，粗实线增加"),e("code",[t._v("=")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("长度")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("3")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("实线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("---")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("----")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-----")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("带箭头的实线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--\x3e")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("---\x3e")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("----\x3e")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("粗实线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("===")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("====")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("=====")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("带箭头的粗实线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("==>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("===>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("====>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("虚线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-.-")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-..-")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-...-")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("带箭头的虚线")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-.->")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-..->")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("-...->")])])])])]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n\tA---B===>C<-...->D\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a55862",graph:t.$dataBlock.mermaid_64a55862}}),e("h4",{attrs:{id:"_1-3-4-线条文字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-线条文字"}},[t._v("#")]),t._v(" 1.3.4 线条文字")]),t._v(" "),e("p",[t._v("通常连接线上，还需要添加说明文字，按官方文档中有两种写法：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("A--\x3e|text|B")])]),t._v(" "),e("li",[e("code",[t._v("A--text--\x3eB")])])]),t._v(" "),e("p",[t._v("这里我个人感觉使用第一种更清晰一些，因为使用"),e("code",[t._v("|")]),t._v("符号来表示文字，而线条的代码照旧。但第二种却需要变化线条的代码，增加了记忆上的难度。")]),t._v(" "),e("p",[t._v("如示例中，展示了带文字的虚线箭头，相比较下第一种写法更简单一些：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n\tA-.text.->B-.->|text|C\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a5529a",graph:t.$dataBlock.mermaid_64a5529a}}),e("h3",{attrs:{id:"_1-4-子图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-子图"}},[t._v("#")]),t._v(" 1.4 子图")]),t._v(" "),e("p",[t._v("当流程图复杂到一定程度后，我们往往会用模块化的思想，将一些结点放在一个大结点中，使得流程图结构更清晰一些。这就是子图，使用"),e("code",[t._v("subgraph")]),t._v("来定义子图：")]),t._v(" "),e("p",[t._v("子图之间、各个结点之间乃至子图和结点之间都可以用连接线连接")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("flowchart LR\n    subgraph A [one]\n    a1--\x3ea2\n    end\n    subgraph B [two]\n    b1--\x3eb2\n    end\n   \ta2--\x3eb1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a5525a",graph:t.$dataBlock.mermaid_64a5525a}}),e("h3",{attrs:{id:"_1-5-较冷门用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-较冷门用法"}},[t._v("#")]),t._v(" 1.5 较冷门用法")]),t._v(" "),e("p",[t._v("除了上面这些最基本的绘图语法外，流程图还支持markdown中的粗体、斜体语法，js回调方法以及css样式")]),t._v(" "),e("p",[t._v("日常中应该很少会用到，就不一一记录了，如果以后真的使用到了再行补充")]),t._v(" "),e("h2",{attrs:{id:"二、饼图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、饼图"}},[t._v("#")]),t._v(" 二、饼图")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("pie")]),t._v("定义")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('pie title Pets adopted by volunteers\n    "Dogs" : 386\n    "Cats" : 85\n    "Rats" : 15\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("Mermaid",{attrs:{id:"mermaid_64a551e4",graph:t.$dataBlock.mermaid_64a551e4}})],1)}),[],!1,null,null,null);"function"==typeof v&&v(r);e.default=r.exports}}]);