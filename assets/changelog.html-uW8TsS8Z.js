import{_ as t,r as i,o as n,c as l,b as e,d as o,e as d,a}from"./app-NddbIoz1.js";const s={},r=e("h1",{id:"更新日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),o(" 更新日志")],-1),_=e("blockquote",null,[e("p",null,[o("这里记录了 "),e("code",null,"KYukiReflection"),o(" 的版本更新历史。")])],-1),h=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"特别注意"),e("p",null,"我们只会对最新的 API 版本进行维护，若你正在使用过时的 API 版本则代表你自愿放弃一切维护的可能性。")],-1),u={id:"_1-0-2-2024-6-29",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_1-0-2-2024-6-29","aria-hidden":"true"},"#",-1),f=a("<ul><li>针对真实的使用场景我们增加了诸如 <code>singletonInstance</code> 和 <code>companionSingletonInstance</code> 这样的方法以快速获取单例和对象类实例</li><li>进行 <code>bindProperty()</code> 方法委托绑定时如果被绑定的属性 <code>this</code> 与 <code>Class</code> 类型一致则不需要传入 <code>thisRef</code> ，将自动使用域内的<code>this</code></li><li>当使用 <code>Kotlin</code> 的反射查找获得的 函数、属性 为对象类或单例类成员则不需要传入 <code>thisRef</code> 将自动使用相关示例</li><li>为元数据异常的 <code>Kotlin</code> 类增加签名查找方式，通过只读取 <code>Class</code> 的元数据来查找对应数据避免异常发生</li><li>为查找的结果实例增加 <code>original</code> 函数使得允许调用没有进行 <code>Hook</code> 的相关内容，尽管这只在有 <code>HookAPI</code> 时才生效</li><li>新增 <code>function</code> 查找结果实例或查找实例中可以直接获取 <code>getter</code>、<code>setter</code> 的 <code>property</code> 查找结果实例或查找实例</li><li>新增 <code>KFunction</code>、<code>KProperty</code> 通过 <code>instance</code> 方法转换为查找结果实例</li><li>优化 <code>Kotlin</code> 的反射查找和匹配适应程度</li><li>更多内容请细节优化在使用中体现</li></ul>",1),m={id:"_1-0-1-2024-06-18",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_1-0-1-2024-06-18","aria-hidden":"true"},"#",-1),x=e("ul",null,[e("li",null,"首个版本提交至 Maven")],-1);function v(b,k){const c=i("Badge");return n(),l("div",null,[r,_,h,e("h3",u,[p,o(" 1.0.2 | 2024.6.29  "),d(c,{type:"tip",text:"最新",vertical:"middle"})]),f,e("h3",m,[g,o(" 1.0.1 | 2024.06.18  "),d(c,{type:"warning",text:"过旧",vertical:"middle"})]),x])}const y=t(s,[["render",v],["__file","changelog.html.vue"]]);export{y as default};
