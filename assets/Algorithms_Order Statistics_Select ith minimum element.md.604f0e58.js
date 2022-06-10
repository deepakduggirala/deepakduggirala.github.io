import{_ as s,c as n,o as a,a as l}from"./app.5f69941c.js";const i='{"title":"Select ith minimum element","description":"","frontmatter":{},"headers":[{"level":3,"title":"Random Select","slug":"random-select"},{"level":3,"title":"Select","slug":"select"}],"relativePath":"Algorithms/Order Statistics/Select ith minimum element.md"}',p={name:"Algorithms/Order Statistics/Select ith minimum element.md"},o=l(`<h1 id="select-ith-minimum-element" tabindex="-1">Select ith minimum element <a class="header-anchor" href="#select-ith-minimum-element" aria-hidden="true">#</a></h1><p>20200924145554</p><p>Source: Introduction to Algorithms - CLRS: Medians and Order Statistics</p><h3 id="random-select" tabindex="-1">Random Select <a class="header-anchor" href="#random-select" aria-hidden="true">#</a></h3><ul><li>time: expected: O(n), worstcase: O(n^2)</li></ul><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">randomized_select</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">randint</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    le_pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> pivot</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    gt_pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> pivot</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">le_pivot</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> pivot</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">randomized_select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">le_pivot</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">randomized_select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">gt_pivot</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#82AAFF;">randomized_select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-hidden="true">#</a></h3><ul><li>time: worstcase: O(n)</li></ul><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    groups_5 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">sorted</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># nlog5</span></span>
<span class="line"><span style="color:#A6ACCD;">    medians </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">[(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">group</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> group </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> groups_5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># if n is even, median is lower median</span></span>
<span class="line"><span style="color:#A6ACCD;">    median_of_medians </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">medians</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">medians</span><span style="color:#89DDFF;">)-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># T(n/5)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> median_of_medians</span></span>
<span class="line"><span style="color:#A6ACCD;">    le_pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> pivot</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    gt_pivot </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> nums </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> pivot</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    k </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">le_pivot</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> pivot</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">le_pivot</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">gt_pivot</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">nums </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">select</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">12345</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,F,D,y,A){return a(),n("div",null,e)}var m=s(p,[["render",t]]);export{i as __pageData,m as default};