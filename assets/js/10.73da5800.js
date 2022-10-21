(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{410:function(t,s,i){"use strict";i.r(s);var m=i(0),p=Object(m.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"线上oom错误分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线上oom错误分析"}},[t._v("#")]),t._v(" 线上OOM错误分析")]),t._v(" "),s("p",[t._v("线上环境出现了机器突然内存溢出，而且飙升速度很快几乎是一瞬间的，下面贴出分析过程。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211232898.png",alt:"image-20221021123233910"}})]),t._v(" "),s("p",[t._v("项目在启动命令中加入了 -XX:HeapDumpPath=gc.dump 指令，所以OOM了之后会自动保存一份dump文件到目录下。\n"),s("img",{attrs:{src:"https://img.llwstu.com/img/202210211236184.png",alt:"image-20221021123609930"}})]),t._v(" "),s("p",[t._v("将dump文件拉下来，丢到JProfiler中分析。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211223093.png",alt:"image-20221021122308297"}})]),t._v(" "),s("p",[t._v("看到占用最多内存的三个对象分别是 "),s("strong",[t._v("ResultSetImpl，DefaultResultHandler和ArrayList")])]),t._v(" "),s("p",[t._v("可以得知oom的原因应该是执行了某些查询，且该查询返回的结果很大。")]),t._v(" "),s("p",[t._v("然后在线程转储里面找到OOM的线程代码。\n"),s("img",{attrs:{src:"https://img.llwstu.com/img/202210211223883.png",alt:"image-20221021122357377"}})]),t._v(" "),s("p",[t._v("可以得知OOM是在该线程下出现的，往下找，找出相关的业务代码。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211224854.png",alt:"image-20221021122419638"}})]),t._v(" "),s("p",[t._v("找到跟这次OOM原因相关的逻辑代码是在RiskStatistcsServiceImpl下的getPublicScreen方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211225532.png",alt:"image-20221021122459383"}})]),t._v(" "),s("p",[t._v("然后当时我写下该业务代码是想把数据弄回本地，在本地进行分组聚合。但是却忽略了线上数据的数据量是很庞大的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211225358.png",alt:"image-20221021122540245"}})]),t._v(" "),s("p",[t._v("这也能解释为什么占用内存最大的是这三个对象了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.llwstu.com/img/202210211223093.png",alt:"image-20221021122308297"}})]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("ol",[s("li",[t._v("将groupBy操作用SQL执行且查询时进行分页，避免一次查询过多数据量")]),t._v(" "),s("li",[t._v("新增统计记录表，使用定时任务将每天的统计结果保存到表中，减少查询量，缺点是查询时间粒度较大。")])])])}),[],!1,null,null,null);s.default=p.exports}}]);