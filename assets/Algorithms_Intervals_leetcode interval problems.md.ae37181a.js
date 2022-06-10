import{_ as e,c as s,o as a,a as n}from"./app.5f69941c.js";const C='{"title":"leetcode interval problems","description":"","frontmatter":{},"headers":[{"level":3,"title":"https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3467/","slug":"https-leetcode-com-explore-challenge-card-september-leetcoding-challenge-556-week-3-september-15th-september-21st-3467"}],"relativePath":"Algorithms/Intervals/leetcode interval problems.md"}',t={name:"Algorithms/Intervals/leetcode interval problems.md"},l=n(`<h1 id="leetcode-interval-problems" tabindex="-1">leetcode interval problems <a class="header-anchor" href="#leetcode-interval-problems" aria-hidden="true">#</a></h1><p>20200921181016</p><h3 id="https-leetcode-com-explore-challenge-card-september-leetcoding-challenge-556-week-3-september-15th-september-21st-3467" tabindex="-1"><a href="https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3467/" target="_blank" rel="noopener noreferrer">https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3467/</a> <a class="header-anchor" href="#https-leetcode-com-explore-challenge-card-september-leetcoding-challenge-556-week-3-september-15th-september-21st-3467" aria-hidden="true">#</a></h3><p>Here we need, when an interval starts and an interval ends in sorted order, almost like you need an event fired for start and end of an interval.</p><p>sort the intervals using the start locations. If any two interval has the same start_location, use end_location to sort them.</p><p>After sorting they look like</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(c1, s1, e1), (c2, s2, e2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">given: s_i &lt; e_i, s_i &lt;= s_i+1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">s1 &lt; e1, s2 &lt; e2 and s1 &lt;= s2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1. s1 &lt; e1 &lt;= s2 &lt; e2 - disjoint</span></span>
<span class="line"><span style="color:#A6ACCD;">2. s1 &lt;= s2 &lt; e1 &lt; e2 - partial overlap</span></span>
<span class="line"><span style="color:#A6ACCD;">3. s1 &lt;= s2 &lt; e2 &lt;= e1 - complete overlap</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for every interval make these two tuples and push them into an array and sort it (si, i, &#39;start&#39;, ci), (ei, i, &#39;end&#39;, ci)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">iterate through this sorted array increasing the capacity variable when it is start and decreasing it when it is end.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">time: O(nlogn), space: O(n)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),r=[l];function p(o,c,i,d,h,m){return a(),s("div",null,r)}var _=e(t,[["render",p]]);export{C as __pageData,_ as default};
