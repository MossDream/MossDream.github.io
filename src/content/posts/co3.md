---
{
  "slug": "co3",
  "title": "BUAA-计算机组成原理·P1课上",
  "description": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P1课上内容。",
  "excerpt": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P1课上内容。",
  "published": "2023-10-17T01:01:25.000Z",
  "updated": "2023-10-24T01:07:44.143Z",
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
<p>通过阅读本文，您可以大致了解 2023 年秋季北航计算机组成原理课程 P1 课上测试的题目内容、难度和解题思路。</p>
<p>P1 课上测试共 3 题，完成 2 题即可通过，主要考察 Verilog 的综合使用。</p>
<p>题目每年都会发生变化，本文描述可能与原题存在一定差异。</p>
<h1 id="T0·向量点乘">T0·向量点乘</h1><h2 id="题目描述">题目描述</h2><p>在实现矩阵乘操作时，往往可以将其分解为若干向量的点乘操作来执行。现在，请你设计一个向量点乘模块，实现向量的点乘操作。      </p>
<h3 id="简介">简介</h3><p>为了简化题目，我们用两个位宽为 32 的 wire 型变量来表示两个需要点乘的 32 维向量，也就是说，向量任何一个维度的值只能为 0 或 1。你需要将两个向量同一位置相乘并将所有位置的乘积相加输出。</p>
<h3 id="输入输出">输入输出</h3><div class="table-container">
<table>
<thead>
<tr>
<th>名称</th>
<th>功能</th>
<th>位宽</th>
<th>方向</th>
</tr>
</thead>
<tbody>
<tr>
<td>vector_a[31:0]</td>
<td>需要点乘的向量a</td>
<td>32</td>
<td>I</td>
</tr>
<tr>
<td>vector_b[31:0]</td>
<td>需要点乘的向量b</td>
<td>32</td>
<td>I</td>
</tr>
<tr>
<td>result[5:0]</td>
<td>结果</td>
<td>6</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<h2 id="求解思路">求解思路</h2><p>很简单。<br><strong>各位相乘再求和（0位到31位）</strong>。 </p>
<h1 id="T1·涂色问题">T1·涂色问题</h1><h2 id="题目描述-1">题目描述</h2><p>小 B 同学准备对一列格子进行涂色，他想要使用红色，绿色，蓝色三种颜色，但是要求如下：同一颜色不得连续出现三次，红色不得与绿色相连。</p>
<h3 id="简介-1">简介</h3><p>我们将在每个周期通过 color 端口输入一个颜色代号：0（红色），1（绿色），2（蓝色），你需要设计 Moore 状态机来检测该涂色序列的合法性，并在检测到不合法的序列之后将输出端口 check 置为 1。</p>
<p>另外，在检测到不合法序列之后，小 B 同学会将最近的一次涂色擦除，重新涂色。 </p>
<h3 id="输入输出-1">输入输出</h3><div class="table-container">
<table>
<thead>
<tr>
<th>名称</th>
<th>功能</th>
<th>位宽</th>
<th>方向</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>颜色输入</td>
<td>2</td>
<td>I</td>
</tr>
<tr>
<td>rst_n</td>
<td>异步复位信号,低电平有效</td>
<td>1</td>
<td>I</td>
</tr>
<tr>
<td>clk</td>
<td>时钟信号</td>
<td>1</td>
<td>I</td>
</tr>
<tr>
<td>check</td>
<td>结果</td>
<td>1</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<h2 id="求解思路-1">求解思路</h2><p>个人建议不必按题目要求，可以用 Mealy 型状态机，更好理解。  </p>
<h3 id="次态逻辑">次态逻辑</h3><p><strong>状态表示识别情况，共7个状态3位二进制表示</strong>。</p>
<div class="table-container">
<table>
<thead>
<tr>
<th>状态（十进制）</th>
<th>识别情况</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>空，没有任何颜色</td>
</tr>
<tr>
<td>1</td>
<td>单个红色</td>
</tr>
<tr>
<td>2</td>
<td>单个绿色</td>
</tr>
<tr>
<td>3</td>
<td>单个蓝色</td>
</tr>
<tr>
<td>4</td>
<td>两个相连红色</td>
</tr>
<tr>
<td>5</td>
<td>两个相连绿色</td>
</tr>
<tr>
<td>6</td>
<td>两个相连蓝色</td>
</tr>
</tbody>
</table>
</div>
<p>需要注意的是，<strong>除正常地识别转换外，如果发现当前输出使次态非法，那么次态实际上应该回到当前状态。（题中所讲的擦除当前颜色）</strong></p>
<h3 id="输出逻辑">输出逻辑</h3><p>按照输出规则即可。</p>
<div class="note warning modern"><p>很抱歉，由于特殊原因，没有T2和助教问答的相关数据</p>
</div>
