import{_ as e,c as i,o,a as t}from"./app.5f69941c.js";const b='{"title":"Modulo Arithmetics","description":"","frontmatter":{},"headers":[{"level":3,"title":"Modulo bias","slug":"modulo-bias"}],"relativePath":"Algorithms/Math/Modulo Arithmetics.md"}',a={name:"Algorithms/Math/Modulo Arithmetics.md"},s=t('<h1 id="modulo-arithmetics" tabindex="-1">Modulo Arithmetics <a class="header-anchor" href="#modulo-arithmetics" aria-hidden="true">#</a></h1><ul><li><code>x % 16</code> is the same as <code>x &amp; 0xF</code>, that is retaining the last 4 bits and zeroing out the rest.</li></ul><h3 id="modulo-bias" tabindex="-1">Modulo bias <a class="header-anchor" href="#modulo-bias" aria-hidden="true">#</a></h3><ul><li>C/C++ standard rand() gives values in 0..0x7FFFFFFF in GCC and when you want random numbers from 0 to 10 you do <code>rand() % 10</code>, but there unequal numbers of numbers ending with each digit since 0x80000000 is not divisible by 10.</li><li>There are less numbers of numbers ending in 8 and 9, which leads to lower probability of 8 and 9 ocuuring in <code>rand() % 10</code></li><li><code>rand() % 10</code> is not a uniform distribution</li><li>This is fine for video games but will have problems for scientific calculations / monte-carlo simulations</li></ul>',4),r=[s];function d(n,l,c,u,h,m){return o(),i("div",null,r)}var f=e(a,[["render",d]]);export{b as __pageData,f as default};
