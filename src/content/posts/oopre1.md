---
{
  "slug": "oopre1",
  "title": "BUAA-OOpre·笔记一",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-09-18T02:53:32.000Z",
  "updated": "2023-09-30T04:44:24.499Z",
  "tags": [
    "BUAA",
    "OOP",
    "Java"
  ],
  "categories": [
    "BUAA计算机课程",
    "OOPre"
  ]
}
---

<h1 id="第一次作业指导书">第一次作业指导书</h1><h2 id="训练目标">训练目标</h2><ul>
<li>学习 Java 的基本语法并完成给定代码的错误修改</li>
</ul>
<h2 id="任务：基于给定-Java-代码完成错误的修改">任务：基于给定 Java 代码完成错误的修改</h2><h3 id="作业要求">作业要求</h3><p>课程组在本次作业对应的git仓库中提供了一份有错误的代码，你需要对代码进行修改，使程序能够正确的完成上面的场景逻辑。完成代码的修改后，你需要将代码提交到hw1的评测窗口，并且通过所有测试点</p>
<h3 id="代码场景描述">代码场景描述</h3><p>该代码模拟一个孩子从水果店购买水果和吃水果的场景。</p>
<p>题目中涉及的水果种类有且仅有苹果（apple）和香蕉（banana）。初始时刻，孩子持有 20 元且没有任何水果，水果店有 5 个苹果和 5 个香蕉，其中每个苹果 3 元，每个香蕉 2 元。</p>
<p>在水果店购买水果可以增加孩子手中的对应的水果数目。对于一种水果，只有孩子的钱足够购买它，并且店内这种水果的数量大于 0 时才可以成功购买这种水果，否则购买失败。</p>
<p>吃水果会减少孩子手中水果数目，只有孩子手中某种水果的数目大于 0 孩子才可以食用这种水果，否则食用失败</p>
<h3 id="输入输出格式">输入输出格式</h3><div class="tabs" id="1-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#1-1-1">输入</button></li><li class="tab"><button type="button" data-href="#1-1-2">输出</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="1-1-1"><ul>
<li>在第一行输入一个 整数 n    (1&lt;n&lt;50)</li>
<li>接下来 n 行每行输入一个命令，格式为 <code>eat/buy</code>+ 空格 + 水果名称，代表孩子尝试食用/购买对应水果。</li>
<li>保证水果名称仅仅有 banana 和 apple。</li>
</ul><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-1-2"><p>输出的内容在我们所给的代码中是正确完成的，同学们不修改 <code>System.out</code> 相关的内容即可。正确实现后的代码会在每一个接受一个命令后输出执行成功或者失败。若成功则输出 <code>ok</code> ，失败则输出 <code>failed</code>。</p><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="样例">样例</h3><div class="tabs" id="1-2"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#1-2-1">样例1</button></li><li class="tab"><button type="button" data-href="#1-2-2">样例2</button></li><li class="tab"><button type="button" data-href="#1-2-3">样例3</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="1-2-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">4</span><br><span class="line">buy apple</span><br><span class="line">eat apple</span><br><span class="line">eat apple</span><br><span class="line">eat banana</span><br></pre></td></tr></table></figure>
<p>期望输出</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">buy apple ok!</span><br><span class="line">eat apple ok!</span><br><span class="line">eat apple failed!</span><br><span class="line">eat banana failed!</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-2-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line">5</span><br><span class="line">eat banana</span><br><span class="line">eat apple</span><br><span class="line">buy banana</span><br><span class="line">eat apple</span><br><span class="line">eat banana</span><br></pre></td></tr></table></figure>
<p>期望输出</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">eat banana failed!</span><br><span class="line">eat apple failed!</span><br><span class="line">buy banana ok!</span><br><span class="line">eat apple failed!</span><br><span class="line">eat banana ok!</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-2-3"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">6</span><br><span class="line">buy apple</span><br><span class="line">buy apple</span><br><span class="line">buy apple</span><br><span class="line">buy apple</span><br><span class="line">buy apple</span><br><span class="line">buy apple</span><br></pre></td></tr></table></figure>
<p>期望输出</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br></pre></td><td class="code"><pre><span class="line">buy apple ok!</span><br><span class="line">buy apple ok!</span><br><span class="line">buy apple ok!</span><br><span class="line">buy apple ok!</span><br><span class="line">buy apple ok!</span><br><span class="line">buy apple failed!</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h1 id="关于第一次作业的解析与说明">关于第一次作业的解析与说明</h1><div  ><div class="note pink icon-padding modern"><p>本文对作业要求的<strong>源代码修改</strong>进行总结并展示自己的理解</p>
</div></div>
<h2 id="源代码语法错误点">源代码语法错误点</h2><h3 id="Main类">Main类</h3><ul>
<li>Line 9  <figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; opCount; ++i)</span><br></pre></td></tr></table></figure>
<div class="note primary modern"><p>该行代码中的<strong>i</strong>是<strong>未定义</strong>的</p>
</div>
</li>
</ul>
<h3 id="Seller-Store-类">Seller(Store)类</h3><ul>
<li>Line 16 <figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">child.money -= APPLE_PRICE;</span><br></pre></td></tr></table></figure>
<div class="note primary modern"><p><em>Child</em>类的<strong>money</strong>属性是<strong>private</strong>的,无法直接访问，应该调用<strong>public</strong>方法<strong>subMoney</strong></p>
</div>
<h3 id="Child类">Child类</h3></li>
</ul>
<div class="tabs" id="1-3"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#1-3-1">Line 6</button></li><li class="tab"><button type="button" data-href="#1-3-2">Line 16</button></li><li class="tab"><button type="button" data-href="#1-3-3">Line 36</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="1-3-1"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">public</span> <span class="keyword">void</span> <span class="title function_">Child</span><span class="params">(<span class="type">int</span> money)</span></span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p>这是一个构造器,没有返回类型,应该去掉<strong>void</strong>关键字</p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-3-2"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="title function_">addOneFruit</span><span class="params">(String goal)</span></span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p>该方法在<em>Seller(Store)</em> 类中通过对象被调用,不应该有<strong>static</strong>修饰</p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-3-3"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">public</span> <span class="type">boolean</span> <span class="title function_">buyFromStore</span><span class="params">(String goal, Store store)</span></span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p>方法体中没有返回语句,也无需返回值,返回类型改为<strong>void</strong></p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h2 id="源代码风格改进点">源代码风格改进点</h2><h3 id="Main类-1">Main类</h3><h4 id="Magic-Number问题">Magic Number问题</h4><div class="tabs" id="1-4"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#1-4-1">Line 5</button></li><li class="tab"><button type="button" data-href="#1-4-2">Line 6</button></li><li class="tab"><button type="button" data-href="#1-4-3">Line 12&14</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="1-4-1"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="type">Store</span> <span class="variable">store</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="title class_">Store</span>(<span class="number">5</span>, <span class="number">5</span>);</span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p>向该类构造器传入<strong>数字字面量(Magic Number)</strong> 5,不利于快速理解代码含义,建议改为<strong>appleCount, bananaCount</strong></p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-4-2"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="type">Child</span> <span class="variable">child</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="title class_">Child</span>(<span class="number">20</span>);</span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p><strong>20</strong>建议改为<strong>initMoney</strong></p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="1-4-3"><pre><code><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">child.eatOneFruit(instr.substring(<span class="number">4</span>));</span><br><span class="line">child.buyFromStore(instr.substring(<span class="number">4</span>), store);</span><br></pre></td></tr></table></figure>
</code></pre>  <div class="note primary modern"><p><strong>4</strong>表示对输入指令字符串的起始位置,建议改为<strong>beginIndex</strong></p>
</div><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="Seller-Store-类-1">Seller(Store)类</h3><h4 id="类名问题">类名问题</h4><div class="note primary modern"><p>源代码中类文件名是<em>Seller.java</em>,但是类名是<em>Store</em>,建议保持一致，这里将类名改为<em>Seller</em></p>
</div>
