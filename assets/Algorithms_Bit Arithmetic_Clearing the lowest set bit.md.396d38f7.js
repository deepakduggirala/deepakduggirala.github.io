import{_ as s,c as a,o as n,a as e}from"./app.5f69941c.js";const h='{"title":"Clearing the lowest set bit","description":"","frontmatter":{},"headers":[],"relativePath":"Algorithms/Bit Arithmetic/Clearing the lowest set bit.md"}',l={name:"Algorithms/Bit Arithmetic/Clearing the lowest set bit.md"},t=e(`<h1 id="clearing-the-lowest-set-bit" tabindex="-1">Clearing the lowest set bit <a class="header-anchor" href="#clearing-the-lowest-set-bit" aria-hidden="true">#</a></h1><p>20210126112657</p><ul><li>How to quickly clear the lowest set bit</li><li>How to quickly return the lowest set bit</li></ul><p><code>x = x &amp; (x-1)</code> clears the lowest set bit</p><p>see [[20210126125107]] Python Integer Base Conversions</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">424 is 0b110101000</span></span>
<span class="line"><span style="color:#A6ACCD;">423 is 0b110100111</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">35 is 100011</span></span>
<span class="line"><span style="color:#A6ACCD;">34 is 100010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">15 is 1111</span></span>
<span class="line"><span style="color:#A6ACCD;">14 is 1110</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>x &amp; ~(x-1)</code> gives just the lowest set bit</p><p><code>math.log2(x &amp; ~(x-1)) + 1</code> gives the position of the lowest set bit</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">424 is 0b110101000</span></span>
<span class="line"><span style="color:#A6ACCD;">423 is 0b110100111</span></span>
<span class="line"><span style="color:#A6ACCD;">424 &amp; ~423 = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">35 is 100011</span></span>
<span class="line"><span style="color:#A6ACCD;">34 is 100010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">15 is 1111</span></span>
<span class="line"><span style="color:#A6ACCD;">14 is 1110</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),p=[t];function o(i,c,r,C,A,d){return n(),a("div",null,p)}var y=s(l,[["render",o]]);export{h as __pageData,y as default};
