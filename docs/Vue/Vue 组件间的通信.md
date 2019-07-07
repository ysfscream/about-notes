# Vue 组件间的通信

常见使用场景可以分为三类：

- 父子通信： 父向子传递数据是通过 props，子向父是通过 events（ $emit）；通过父链 / 子链也可以通信（ $parent / $children）；ref 也可以访问组件实例；provide / inject API； $attrs/$listeners

- 兄弟通信： Bus；Vuex

- 跨级通信： Bus；Vuex；provide / inject API、 $attrs/$listeners
