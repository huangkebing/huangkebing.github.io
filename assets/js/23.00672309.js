(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{432:function(v,a,t){"use strict";t.r(a);var _=t(2),e=Object(_.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("Boxx"),v._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#i、前言"}},[v._v("Ⅰ、前言")])]),a("li",[a("a",{attrs:{href:"#第1条、用静态工厂方法代替构造器"}},[v._v("第1条、用静态工厂方法代替构造器")]),a("ul",[a("li",[a("a",{attrs:{href:"#问题1、java-new对象为什么耗性能"}},[v._v("问题1、Java new对象为什么耗性能")])])])]),a("li",[a("a",{attrs:{href:"#第2条、遇到多个构造器参数时要考虑使用构建器"}},[v._v("第2条、遇到多个构造器参数时要考虑使用构建器")])]),a("li",[a("a",{attrs:{href:"#第3条、用私有构造器或者枚举类型强化singleton属性"}},[v._v("第3条、用私有构造器或者枚举类型强化Singleton属性")])])])]),a("p"),v._v(" "),a("h2",{attrs:{id:"i、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i、前言"}},[v._v("#")]),v._v(" Ⅰ、前言")]),v._v(" "),a("p",[v._v("读Joshua Bloch的《Effective Java（第3版）》读书笔记")]),v._v(" "),a("p",[v._v("针对书中提及的一些规则以及优缺点的解释，如果是能理解的场景那么就写上自己的理解，如果暂时不理解那么先不做解释，后续回顾再做补充")]),v._v(" "),a("h2",{attrs:{id:"第1条、用静态工厂方法代替构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第1条、用静态工厂方法代替构造器"}},[v._v("#")]),v._v(" 第1条、用静态工厂方法代替构造器")]),v._v(" "),a("p",[v._v("静态工厂方法是指在一个类中定义一个静态方法，用于创建该类的实例对象，并返回该实例对象。静态工厂方法通常被用于隐藏对象的创建细节，提供更简洁的对象创建方式。静态工厂方法还可以控制对象的创建（例如缓存对象、限制数量等），并且可以返回该类的子类的实例对象，使用静态方法名称和参数组合可以创建多种不同的实例对象。常见的静态工厂方法是"),a("code",[v._v("valueOf()")]),v._v("方法，例如"),a("code",[v._v("Integer.valueOf()")]),v._v("、"),a("code",[v._v("Boolean.valueOf()")]),v._v("等。")]),v._v(" "),a("p",[v._v("静态工厂方法相比构造器，有以下优点：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("静态工厂方法与构造器不同的第一大优势在于，它们有名称")]),v._v(" "),a("p",[v._v("可以跟据方法名来表明创建对象的作用或者含义，无需通过分析入参来明确。例如，可能会使用构造器"),a("code",[v._v("BigInteger(int,int,Random)")]),v._v("来创建素数，但如果使用静态方法"),a("code",[v._v("BigInteger.probablePrime()")]),v._v(" 的来表示，调用方代码会更明确")])]),v._v(" "),a("li",[a("p",[v._v("静态工厂方法与构造器不同的第二大优势在于，不必在每次调用它们的时候都创建一个新对象")]),v._v(" "),a("p",[v._v("Java new对象是一个比较耗性能的操作，能复用就复用。例如，"),a("code",[v._v("Integer.valueOf()")]),v._v("当值在[-128,127]区间内时，会直接返回缓存池中的实例，而这在构造器中是无法实现的")]),v._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("h3",{attrs:{id:"问题1、java-new对象为什么耗性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题1、java-new对象为什么耗性能"}},[v._v("#")]),v._v(" 问题1、Java new对象为什么耗性能")]),v._v(" "),a("blockquote",[a("p",[v._v("Q：为什么Java中，new对象比较耗性能？")])]),v._v(" "),a("p",[v._v("具体涉及到JVM，先写一个笼统的答案")]),v._v(" "),a("p",[v._v("创建对象的过程需要调用构造函数，这个过程包括分配内存和初始化对象，会消耗一定的时间和内存")]),v._v(" "),a("p",[v._v("另外，Java的垃圾回收机制也会影响创建对象的性能。当创建大量对象时，垃圾回收器需要花费更多的时间来回收不再被使用的对象")])])]),v._v(" "),a("li",[a("p",[v._v("静态工厂方法与构造器不同的第三大优势在子，它们可以返回原返回类型的任何子类型的对象")])]),v._v(" "),a("li",[a("p",[v._v("静态工厂的第四大优势在于，所返回的对象的类可以随着每次调用而发生变化，这取决于静态工厂方法的参数值")])]),v._v(" "),a("li",[a("p",[v._v("静态工厂的第五大优势在于，方法返回的对象所属的类，在编写包含该静态工厂方法的类时可以不存在")])])]),v._v(" "),a("p",[v._v("缺点：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("静态工厂方法的主要缺点在子类如果不含公有的或者受保护的构造器，就不能被子类化")])]),v._v(" "),a("li",[a("p",[v._v("静态工厂方法的第二个缺点在于，程序员很难发现它们")]),v._v(" "),a("p",[v._v("因为构造器和其他方法是属于两类方法，而静态工厂方法很难和其他方法区分开来。如在idea中调构造器只需要XXX.new，但静态工厂方法则需要在一堆方法中找")]),v._v(" "),a("p",[v._v("因此必须有明显的方法名以及注释来标明，其中明显的方法名，如："),a("code",[v._v("of")]),v._v("，"),a("code",[v._v("valueOf")]),v._v("，"),a("code",[v._v("newInstance")]),v._v("，"),a("code",[v._v("createInstance")]),v._v("等等")])])]),v._v(" "),a("h2",{attrs:{id:"第2条、遇到多个构造器参数时要考虑使用构建器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第2条、遇到多个构造器参数时要考虑使用构建器"}},[v._v("#")]),v._v(" 第2条、遇到多个构造器参数时要考虑使用构建器")]),v._v(" "),a("p",[v._v("静态工厂和构造器有个共同的局限性：它们都不能很好扩展到大量的可选参数，这时构建器就可以很好的适应这类情况。")]),v._v(" "),a("p",[v._v("因为构建器非常常见，且自己也经常用到，就不列举书中的内容了。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[v._v("如ChatGPT的Java包，需要构建一个"),a("code",[v._v("ChatCompletionRequest")]),v._v("，提供了非常多的参数，但通常不会全部用到")]),v._v(" "),a("p",[v._v("这时候如果要使用构造器来覆盖所有情况，是不现实的")]),v._v(" "),a("p",[v._v("这时候，使用构建器就可以完美解决，使用者只需要跟据自己的需要提供部分参数即可(和构造器使用类似)，但实现起来构建器则轻松得多")])]),a("p",[a("font",{attrs:{color:"#16b777"}},[v._v("注意Builder手动实现非常麻烦，代码量很大且逻辑很简单，通常使用idea插件或者Lombok的@Builder来实现")])],1),v._v(" "),a("h2",{attrs:{id:"第3条、用私有构造器或者枚举类型强化singleton属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第3条、用私有构造器或者枚举类型强化singleton属性"}},[v._v("#")]),v._v(" 第3条、用私有构造器或者枚举类型强化Singleton属性")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);