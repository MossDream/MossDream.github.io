---
{
  "slug": "co5",
  "title": "BUAA-计算机组成原理·P3课上",
  "description": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P3课上内容。",
  "excerpt": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P3课上内容。",
  "published": "2023-10-31T01:07:55.000Z",
  "updated": "2023-10-31T01:34:46.996Z",
  "tags": [
    "BUAA",
    "CO"
  ],
  "categories": [
    "BUAA计算机课程",
    "CO"
  ]
}
---

<h1 class="article-preface" id="前言">前言</h1>
<p>通过阅读本文，您可以大致了解 2023 年秋季北航计算机组成原理课程 P3 课上测试的题目内容、难度和解题思路。</p>
<p>P3 课上测试共 3 题，完成 2 题即可通过，主要对 P3 课下已经实现的 CPU 进行强测，并要求增加新指令。</p>
<p>题目每年都会发生变化，本文描述可能与原题存在一定差异。</p>
<h1 id="T0·新增指令1-qaq">T0·新增指令1-qaq</h1><h2 id="指令格式">指令格式</h2><p>R型指令，<code>op-rd-rs-rt-fn</code></p>
<h2 id="RTL语言表述">RTL语言表述</h2><p>temp1 &lt;- GRF[rs] <em> GRF[rs]<br>temp2 &lt;- GRF[rt] </em> GRF[rt]<br>GRF[rd] &lt;- temp1[31:0] | temp2[31:0]  </p>
<h2 id="求解思路">求解思路</h2><p>与<code>add</code>和<code>sub</code>指令类似，只需要将<code>add</code>和<code>sub</code>指令在ALU中的<code>+</code>和<code>-</code>操作换成一个全新的操作<code>qaq</code>（算平方再按位与）即可。</p>
<h1 id="T1·新增指令2-booze">T1·新增指令2-booze</h1><h2 id="指令格式-1">指令格式</h2><p><code>op-rs-rt-offset</code></p>
<h2 id="RTL语言表述-1">RTL语言表述</h2><p>if GRF[rs][15:0]有奇数个1 &amp;&amp; GRF[rt][31:16] 有偶数个0 then<br>    PC &lt;- PC + 4 + offset<br>else<br>    PC &lt;- PC + 4  </p>
<h2 id="求解思路-1">求解思路</h2><p>与<code>beq</code>指令类似，只需要将<code>beq</code>指令在ALU中的<strong>判断相等操作</strong>换成一个全新的操作<code>booze</code>（判断<code>GRF[rs][15:0]有奇数个1 &amp;&amp; GRF[rt][31:16] 有偶数个0是否成立</code>）即可。</p>
<h1 id="T2·新增指令3-csws">T2·新增指令3-csws</h1><h2 id="指令格式-2">指令格式</h2><p><code>op-rs-rt-offset</code></p>
<h2 id="RTL语言表述-2">RTL语言表述</h2><p>Addr &lt;- GRF[rs] + sign_extend(offset)<br>if GRF[rt]的最高位为1 then<br>    Mem[Addr] &lt;- GRF[rt]<br>else<br>    Mem[Addr] &lt;- 0 </p>
<h2 id="求解思路-2">求解思路</h2><p>与<code>sw</code>指令类似，ALU需要一个全新的操作<code>csws</code>（算出Addr并且判断条件）；DM的数据来源多出一条可选通路：直接写入常数0。</p>
<h1 id="助教问答环节">助教问答环节</h1><p>这部分只提供问题。</p>
<ol>
<li>T1题的求解思路是什么？</li>
<li>检查是否进行了本地测试。</li>
<li>检查课下设计文档是否完整。</li>
</ol>
