import{_ as l,c as i,o as a,a as s,b as e}from"./app.5f69941c.js";const v='{"title":"Divisor Game","description":"","frontmatter":{},"headers":[{"level":3,"title":"Solution","slug":"solution"},{"level":3,"title":"Examples","slug":"examples"}],"relativePath":"Algorithms/Dynamic Programming/Problems/Divisor Game.md"}',n={name:"Algorithms/Dynamic Programming/Problems/Divisor Game.md"},t=s('<h1 id="divisor-game" tabindex="-1">Divisor Game <a class="header-anchor" href="#divisor-game" aria-hidden="true">#</a></h1><p>20200902211339</p><p>Source: <a href="https://leetcode.com/problems/divisor-game" target="_blank" rel="noopener noreferrer">https://leetcode.com/problems/divisor-game</a></p><p>Alice and Bob play a game that starts with a number N, N&gt;0</p><ul><li>Alice picks a number $0&lt;x&lt;N$ such that N%x==0, that is x divides N</li><li>She replaces N with N-x, which is also divisible by x</li></ul><p>The game is played until a player cannot find an x to replace N, return True if Alice wins or False otherwise</p><p>N = 20</p><ul><li>Alice: x=4, N=16</li><li>Bob: x=8, N=8</li><li>Alice x=1, N=7</li><li>Bob x=1, N=6</li><li>Alice x=3, N=2</li><li>Box x=1, N=1</li></ul><p>The game is played until a player cannot choose a number that divides N and less than N. Every number is divisible by 1, so the game stops when N reaches 1. If the turn when N is replaced by 1 is even, then Alice looses else Alice wins</p><p>For a given N, there are p-1 choices, where p is the number of divisors of N.</p><p>Consider the game started with N-x, if N-x reaches 1 in even number of turns then by choosing x, N reaches in odd number of turns and vice-versa</p><p>f(N) = any [~f(N-x)] for all x such that N%x is 0 and 0 &lt; x &lt; N</p><ul><li>f(1) = False</li><li>f(2) = any [ ~f(1) ] = True</li><li>f(3) = any [ ~f(2) ] = False</li><li>f(4) = any [ ~f(2), ~f(3) ] = any [ False, True] = True</li><li>f(5) = any [ ~f(4) ] = False</li><li>f(6) = any [~f(5), ~f(4), ~f(3)], x = 1,2,3 = True</li><li>f(7) = any [~f(6)] = False</li><li>f(8) = any [~f(7), ~f(6), ~f(4)], 1,2,4 = True</li><li>f(9) = any [~f(8), ~f(6)], x=1,3 = False</li><li>f(10) = any [~f(9)], x=1,5 = True</li><li>f(11) = [~f(10)] = False</li><li>f(12) = [~f(11)], x = 1,2,3,4,6 = True</li><li>f(13) = [~f(12)] = False</li><li>f(14) = [~f(13), ~f(7)], x=1,7 = True</li><li>f(15) = [f(14), f(12), f(10)], x=1,3,5 = False</li><li>f(21) = [~f(20), ~f(18), ~f(14)]x=1,3,7 = False</li></ul><h3 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-hidden="true">#</a></h3><p>odd numbers, Alice loses and even numbers Alice wins</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3>',16),r=e("p",{"1,":"",2:""},"4 -",-1),o=e("ul",null,[e("li",null,"1, 3 | 2, 2"),e("li",null,"1, 2 | 1, 1"),e("li",null,"1, 1 | Alice lost"),e("li",null,"Alice Won | Alice Lost")],-1),c=e("p",{1:""},"5 -",-1),f=e("ul",null,[e("li",null,"A: 1, 4"),e("li",null,"B: 1, 3"),e("li",null,"A: 1, 2"),e("li",null,"B: 1, 1"),e("li",null,"A: lost")],-1),h=[t,r,o,c,f];function u(d,p,m,x,_,N){return a(),i("div",null,h)}var y=l(n,[["render",u]]);export{v as __pageData,y as default};
