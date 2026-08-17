---
{
  "slug": "co2",
  "title": "BUAA-计算机组成原理·P0课上",
  "description": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P0课上内容。",
  "excerpt": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的P0课上内容。",
  "published": "2023-10-10T06:38:14.000Z",
  "updated": "2023-10-10T07:24:52.668Z",
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
<p>通过阅读本文，您可以大致了解 2023 年秋季北航计算机组成原理课程 P0 课上测试的题目内容、难度和解题思路。</p>
<p>P0 课上测试共 3 题，完成 2 题即可通过，主要考察 Logisim 的综合使用。</p>
<p>题目每年都会发生变化，本文描述可能与原题存在一定差异。</p>
<h1 id="T0·未出现的正整数">T0·未出现的正整数</h1><h2 id="题目描述">题目描述</h2><p>本题中，你需要设计组合电路，找出输入中未出现的最小正整数。</p>
<h3 id="简介">简介</h3><p>使用 Logisim 搭建一个组合电路。给定输入的 5 个任意无符号二进制数。确定输入中未出现的最小正整数是多少。</p>
<p>例如：<strong>输入为 3，0，1，2，7 时，正整数 1，2，3 已经出现，未出现的最小正整数是 4</strong>。</p>
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
<td>input1</td>
<td>数据输入</td>
<td>8</td>
<td>I</td>
</tr>
<tr>
<td>input2</td>
<td>数据输入</td>
<td>8</td>
<td>I</td>
</tr>
<tr>
<td>input3</td>
<td>数据输入</td>
<td>8</td>
<td>I</td>
</tr>
<tr>
<td>input4</td>
<td>数据输入</td>
<td>8</td>
<td>I</td>
</tr>
<tr>
<td>input5</td>
<td>数据输入</td>
<td>8</td>
<td>I</td>
</tr>
<tr>
<td>输出</td>
<td>结果</td>
<td>8</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<blockquote>
<p>输入：五个整数（8bit）<br>输出：输入中未出现的最小正整数（8bit）</p>
</blockquote>
<h2 id="求解思路">求解思路</h2><p>我们设最终输出的结果为<code>out</code>。显然，<code>out</code>是一个正整数。<br>对于5个输入的情况，经过分析，我们会有如下结论：<br><div class="note primary modern"><p><strong><code>out</code>的最大值是6，最小值是1。取6的情况是：五个输入分别是1、2、3、4、5。而取1的情况是五个输入中没有1</strong>。</p>
</div></p>
<p>这是整道题的核心。根据这个结论，我们可以直接穷举结果。<br><strong>若五个输入没有1，<code>out</code>取1；若有1，则继续判断</strong>：<br><strong>若五个输入没有2，<code>out</code>取2；若有2，则继续判断</strong>：<br><strong>若五个输入没有3，<code>out</code>取3；若有3，则继续判断</strong>：<br><strong>若五个输入没有4，<code>out</code>取4；若有4，则继续判断</strong>：<br><strong>若五个输入没有5，<code>out</code>取5；若有5，则取6</strong>。  </p>
<h1 id="T1·回字楼游走">T1·回字楼游走</h1><h2 id="题目描述-1">题目描述</h2><p>本题中，你需要设计 Mealy 型状态机模拟在回型建筑中移动的学生。</p>
<h3 id="简介-1">简介</h3><p>某校有一栋回字型的建筑，可以分为八个单元，由右上角起顺时针编号为 1 至 8，结成一个环。现一名学生从编号 1（东北角）的单元开始移动。<br>                      7  8  1<br>                      6  空 2<br>                      5  4  3<br><strong>当学生恰好移动向相邻单元方向时，学生进入该相邻单元，输出其编号</strong>。<br><strong>当学生的移动方向上没有单元，这次不移动，直接输出当前所在单元格编号</strong>。<br>输入输出如下：  </p>
<blockquote>
<p>输入 00 时，学生试图向上（北）移动。<br>输入 01 时，学生试图向下（南）移动。<br>输入 10 时，学生试图向左（西）移动。<br>输入 11 时，学生试图向右（东）移动。  </p>
<p>输出学生试图移动到的建筑单元。  </p>
</blockquote>
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
<td>input</td>
<td>方向输入</td>
<td>2</td>
<td>I</td>
</tr>
<tr>
<td>reset</td>
<td>异步复位信号</td>
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
<td>output</td>
<td>结果</td>
<td>4</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<blockquote>
<p>输入：移动方式（2bit），异步复位信号（1bit），时钟信号（1bit）。<br>输出：建筑单元编号（4bit）。  </p>
</blockquote>
<h2 id="求解思路-1">求解思路</h2><p>按题目要求，必须用 Mealy 型状态机。<br>这题目不难。<strong>状态表示现在所处位置，8个状态3位二进制表示</strong>。<br>次态逻辑对照行走规则，输出逻辑与状态一一对应。</p>
<h1 id="T2·识别十六进制合法序列">T2·识别十六进制合法序列</h1><p>本题中，你需要设计 Moore 型状态机模拟识别字符序列。  </p>
<h2 id="题目描述-2">题目描述</h2><h3 id="简介-2">简介</h3><p>每周期输入一个16进制数（4位2进制表示）。<br>当三个周期内连续出现：<br><strong>EEE，输出1</strong>；<br><strong>A0E，输出2</strong>；<br><strong>0A0，输出3</strong>；<br>其余状态输出0。</p>
<blockquote>
<p>注意，可以重叠识别，例如<code>A0EEE</code>，在第3、第5周期输出<code>2</code>、<code>1</code>。</p>
</blockquote>
<h3 id="输入输出-2">输入输出</h3><div class="table-container">
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
<td>input</td>
<td>数字输入</td>
<td>4</td>
<td>I</td>
</tr>
<tr>
<td>reset</td>
<td>异步复位信号</td>
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
<td>output</td>
<td>结果</td>
<td>2</td>
<td>O</td>
</tr>
</tbody>
</table>
</div>
<blockquote>
<p>输入：十六进制数（4bit），异步复位信号（1bit），时钟信号（1bit）。<br>输出：相应结果（2bit）。  </p>
</blockquote>
<h2 id="求解思路-2">求解思路</h2><p>按题目要求，必须用 Moore 型状态机。  </p>
<h3 id="次态逻辑">次态逻辑</h3><p><strong>状态表示识别情况，共10个状态4位二进制表示</strong>。</p>
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
<td>无效</td>
</tr>
<tr>
<td>1</td>
<td>E</td>
</tr>
<tr>
<td>2</td>
<td>A</td>
</tr>
<tr>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>EE</td>
</tr>
<tr>
<td>5</td>
<td>A0</td>
</tr>
<tr>
<td>6</td>
<td>0A</td>
</tr>
<tr>
<td>7</td>
<td>EEE</td>
</tr>
<tr>
<td>8</td>
<td>A0E</td>
</tr>
<tr>
<td>9</td>
<td>0A0</td>
</tr>
</tbody>
</table>
</div>
<p>注意重叠识别，然后就能得到次态逻辑。</p>
<h3 id="输出逻辑">输出逻辑</h3><p>按照输出规则即可。  </p>
<h1 id="助教问答环节">助教问答环节</h1><p>这部分只提供问题。</p>
<ol>
<li>在logisim中，如何实现同步复位？</li>
<li>在logisim中，probe元件的作用和用法？</li>
<li>在logisim中，导线蓝色和橙色分别说明了什么情况？</li>
</ol>
