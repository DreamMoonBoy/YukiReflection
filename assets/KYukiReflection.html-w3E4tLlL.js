import{_ as e,o,c as s,a}from"./app-NddbIoz1.js";const n={},c=a(`<h1 id="yukireflection-object" tabindex="-1"><a class="header-anchor" href="#yukireflection-object" aria-hidden="true">#</a> YukiReflection <span class="symbol">- object</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiReflection</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>这是 <code>YukiReflection</code> 的装载调用类。</p></blockquote><h2 id="tag-field" tabindex="-1"><a class="header-anchor" href="#tag-field" aria-hidden="true">#</a> TAG <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> TAG: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 <code>YukiReflection</code> 的名称 (标签)。</p></blockquote><h2 id="version-field" tabindex="-1"><a class="header-anchor" href="#version-field" aria-hidden="true">#</a> VERSION <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">const</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> VERSION: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>获取当前 <code>YukiReflection</code> 的版本。</p></blockquote><h2 class="deprecated">API_VERSION_NAME - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><code>v1.0.3</code> <code>作废</code></p><p>不再区分版本名称和版本号，请迁移到 <code>VERSION</code></p><h2 class="deprecated">API_VERSION_CODE - field</h2><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><code>v1.0.3</code> <code>作废</code></p><p>不再区分版本名称和版本号，请迁移到 <code>VERSION</code></p><h2 id="configs-object" tabindex="-1"><a class="header-anchor" href="#configs-object" aria-hidden="true">#</a> Configs <span class="symbol">- object</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Configs</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>对 API 相关功能的配置类。</p></blockquote><h3 id="debuglog-method" tabindex="-1"><a class="header-anchor" href="#debuglog-method" aria-hidden="true">#</a> debugLog <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">debugLog</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">YLog</span><span style="color:#ADBAC7;">.Configs.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.3</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>配置 <code>YLog.Configs</code> 相关参数。</p></blockquote><h3 class="deprecated">debugTag - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><code>v1.0.3</code> <code>作废</code></p><p>请迁移到 <code>debugLog</code></p><h3 id="isdebug-field" tabindex="-1"><a class="header-anchor" href="#isdebug-field" aria-hidden="true">#</a> isDebug <span class="symbol">- field</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> isDebug: </span><span style="color:#F69D50;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>是否启用 Debug 模式。</p></blockquote><p>默认不启用，启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台。</p><h3 class="deprecated">isAllowPrintingLogs - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><code>v1.0.3</code> <code>作废</code></p><p>请迁移到 <code>debugLog</code></p><h3 class="deprecated">isEnableMemberCache - field</h3><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><code>v1.0.2</code> <code>作废</code></p><p><code>Member</code> 的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题</p><h2 id="configs-method" tabindex="-1"><a class="header-anchor" href="#configs-method" aria-hidden="true">#</a> configs <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">inline</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">configs</span><span style="color:#ADBAC7;">(initiate: </span><span style="color:#F69D50;">Configs</span><span style="color:#ADBAC7;">.() </span><span style="color:#F47067;">-&gt;</span><span style="color:#ADBAC7;"> Unit)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.0.0</code> <code>添加</code></p><p><strong>功能描述</strong></p><blockquote><p>对 <code>Configs</code> 类实现了一个 <strong>lambda</strong> 方法体。</p></blockquote><p>你可以轻松地调用它进行配置。</p>`,69),p=[c];function d(l,t){return o(),s("div",null,p)}const i=e(n,[["render",d],["__file","KYukiReflection.html.vue"]]);export{i as default};
