import{_ as e,c as i,o as r,a as s}from"./app.5f69941c.js";const b='{"title":"Prime Numbers","description":"","frontmatter":{},"headers":[{"level":3,"title":"Fundamental Theorem of Arithmetics","slug":"fundamental-theorem-of-arithmetics"},{"level":3,"title":"Encoding lists with prime numbers (using composite numbers as containers)","slug":"encoding-lists-with-prime-numbers-using-composite-numbers-as-containers"},{"level":3,"title":"Coprime numbers","slug":"coprime-numbers"},{"level":3,"title":"Semiprime numbers","slug":"semiprime-numbers"}],"relativePath":"Algorithms/Math/Prime Numbers.md"}',n={name:"Algorithms/Math/Prime Numbers.md"},t=s('<h1 id="prime-numbers" tabindex="-1">Prime Numbers <a class="header-anchor" href="#prime-numbers" aria-hidden="true">#</a></h1><p>20210123173113</p><p>Source: Math for Programmers</p><h3 id="fundamental-theorem-of-arithmetics" tabindex="-1">Fundamental Theorem of Arithmetics <a class="header-anchor" href="#fundamental-theorem-of-arithmetics" aria-hidden="true">#</a></h3><ul><li>Any number can be represented as product of prime numbers, in only one single way. This can be thought of as a signature of the number</li><li>Composite number is a number that is composed of prime numbers</li></ul><h3 id="encoding-lists-with-prime-numbers-using-composite-numbers-as-containers" tabindex="-1">Encoding lists with prime numbers (using composite numbers as containers) <a class="header-anchor" href="#encoding-lists-with-prime-numbers-using-composite-numbers-as-containers" aria-hidden="true">#</a></h3><ul><li>Each position in the list is associated with a prime number, ith position -&gt; ith prime number</li><li>\u201Chello\u201D is [ \u2018h\u2019, \u2018e\u2019, \u2018l\u2019, \u2018l\u2019, \u2018o\u2019 ], which is [ 72, 101, 108, 108, 111 ] (ASCII codes)</li><li>This is list is represented as $2^{72} * 3^{101} * 5^{108} * 7^{108} * 11^{111}$</li><li>Appending another character is multiplying with $13^{33}$</li><li>Removing 3rd character is dividing the repr by $3^{101}$</li><li>Since there are infinite number of prime numbers lists of any size can be represented using these big numbers</li><li>Goedel used this kind of representation to encode all the rules of mathematics</li></ul><h3 id="coprime-numbers" tabindex="-1">Coprime numbers <a class="header-anchor" href="#coprime-numbers" aria-hidden="true">#</a></h3><ul><li>Two numbers are coprime if they don\u2019t have a common divisot</li><li>GCD(a, b) = 1 if a and b are coprimes</li><li>$\\frac{a}{b}$ is an irreducible fraction</li><li>All pairs of primes are coprimes ex: (3, 5) or (5, 7)</li><li>But (7, 10) and (15, 28) are also coprimes</li></ul><h3 id="semiprime-numbers" tabindex="-1">Semiprime numbers <a class="header-anchor" href="#semiprime-numbers" aria-hidden="true">#</a></h3><ul><li>semiprime is a product of two primes</li><li>1679 = 23 * 73</li></ul>',11),a=[t];function m(o,l,h,u,c,d){return r(),i("div",null,a)}var f=e(n,[["render",m]]);export{b as __pageData,f as default};
