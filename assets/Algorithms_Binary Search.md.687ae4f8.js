import{_ as s,c as a,o as n,a as l}from"./app.5f69941c.js";const i='{"title":"Binary Search","description":"","frontmatter":{},"headers":[],"relativePath":"Algorithms/Binary Search.md"}',p={name:"Algorithms/Binary Search.md"},o=l(`<h1 id="binary-search" tabindex="-1">Binary Search <a class="header-anchor" href="#binary-search" aria-hidden="true">#</a></h1><p>20210131094449</p><ul><li><p>see binary search and loop properties in [[20210122140652]] Column-4 Writing Correct Programs</p></li><li><p>Only line changed in <code>p=l+(u-l)//2</code> because <code>p=(l+u)//2</code> leads to overflow when both l and u are large</p></li></ul><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">binary_search</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    u </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> l </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> u</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> l</span><span style="color:#89DDFF;">+(</span><span style="color:#A6ACCD;">u</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">)//</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> p</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># x[p] &gt; t</span></span>
<span class="line"><span style="color:#A6ACCD;">            u </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,D,y,C,A){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
