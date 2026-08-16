---
{
  "slug": "co1",
  "title": "BUAA-计算机组成原理·Pre课上",
  "description": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的Pre课上内容。",
  "excerpt": "本文章介绍北京航空航天大学2023秋季学期计算机组成原理课程的Pre课上内容。",
  "published": "2023-09-30T04:41:14.000Z",
  "updated": "2023-09-30T05:49:44.645Z",
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

<div class="note info modern"><p>📢<br>本系列文章只提供课上测试的解读<br>所有课下作业的源代码请按下面指示前往我的Github仓库~</p>
</div>
<a class="btn-beautify orange block center larger" target="_blank" rel="noopener" href="https://github.com/MossDream/BUAA-2023-CO"
  title="BUAA-2023-CO"><span>BUAA-2023-CO</span></a>
<div class="tip info"><p>通过阅读本文，您可以大致了解 2023 年秋季北航计算机组成原理课程 Pre 课上测试的题目内容、难度和解题思路<br>Pre 课上测试不计入课程分数。其主要内容是对预习部分的 logisim 、Verilog HDL 、 MIPS 汇编语言的综合考察<br>题目每年都会发生变化，题意描述大致清晰，但是可能与原题有一定差异</p>
</div>
<h1 id="T0·简单模拟俄罗斯方块的有限状态机">T0·简单模拟俄罗斯方块的有限状态机</h1><div class="note primary modern"><p>本题考察 logisim 的使用，以及有限状态机的建模</p>
</div>
<h2 id="题目描述">题目描述</h2><p>仅对一行8个方块进行模拟。<br>输入为一个8位二进制数（独热码），唯一的一位<code>1</code>代表将要放下方块的位置。<br><strong>如果已经有方块，不能再放入方块，输出代表放入失败的结果<code>00</code>;</strong><br><strong>如果没有方块，可以放入方块，,且放入后一行未满，输出代表放入成功但未满的结果<code>01</code>;</strong><br><strong>如果没有方块，可以放入方块，,且放入后一行已满，输出代表放入成功且已满的结果<code>10</code>,本行方块清零消去</strong>。  </p>
<h2 id="求解思路">求解思路</h2><p>用<code>Moore</code>或者<code>Mealy</code>型状态机均可，可以按照题目具体要求。  </p>
<h3 id="次态逻辑">次态逻辑</h3><p><strong>状态码也应该采用独热码，<code>0</code>代表该位置为空；<code>1</code>代表该位置有方块。在次态逻辑中，用<em>当前状态</em>和<em>输入</em>进行或运算得到次态，并且需要比较<em>次态</em>和<code>1111 1111</code>(判断是否已满)，若相等则清零并通知输出逻辑</strong>;</p>
<h3 id="输出逻辑">输出逻辑</h3><p>不难实现。<br><strong>根据当前状态（和输入）判断是规则中的哪一种情况，对应输出。</strong>  </p>
<h1 id="T1·用-Verilog-HDL-判断输入是否为不降序列">T1·用 Verilog HDL 判断输入是否为不降序列</h1><div class="note primary modern"><p>本题考察 Verilog HDL 的使用</p>
</div>
<h2 id="题目描述-1">题目描述</h2><p><del>本题基本没有难度。</del><br>输入为一个 16 位二进制数，输出为<code>1</code>或<code>0</code>，代表输入是否为不降序列。<br><strong>将输入按从高位到低位每 4 位拆分，分为从左到右 4 个部分，若从左往右都是不降的（<code>data1</code> &lt;= <code>data2</code> &lt;= <code>data3</code> &lt;= <code>data4</code> ），则输出<code>1</code>，否则输出<code>0</code>。</strong>   </p>
<h2 id="求解思路-1">求解思路</h2><p><strong>用1个<code>assign</code>语句，将输入拆分为4个部分（如<code>input[15:12]</code>就是第一个数），用连续的三元条件运算符判断<code>data1</code> &lt;= <code>data2</code> &lt;= <code>data3</code> &lt;= <code>data4</code> 是否成立即可</strong>  </p>
<h1 id="T2·用-MIPS-判断最高海拔">T2·用 MIPS 判断最高海拔</h1><div class="note primary modern"><p>本题考察 MIPS 汇编语言的使用</p>
</div>
<h2 id="题目描述-2">题目描述</h2><p>先输入一个整数<code>n</code>，代表接下来有<code>n</code>个整数。<br><strong>接下来向<code>数组g</code>输入<code>n</code>个整数，共<code>n+1</code>个点，起点海拔为<code>0</code></strong>。<br><strong><code>g[i]</code>代表第<code>i</code>个点到第<code>i+1</code>个点的海拔高度差。</strong><br><strong>输出最高海拔的值。</strong>   </p>
<h2 id="求解思路-2">求解思路</h2><p>先用C语言想一遍思路，有时间也可以写出来。<br><strong>总体上分为三个步骤：</strong></p>
<ol>
<li><strong>读入所有数据，并进行必要的存储。</strong></li>
<li><strong>计算每个点的海拔高度。</strong></li>
<li><strong>找出最高海拔高度。</strong>  </li>
</ol>
<div class="note warning modern"><p>我在实际操作中忘记考虑起点与其他点的比较，这点需要注意。</p>
</div>
