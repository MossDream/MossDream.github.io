---
{
  "slug": "oopre2",
  "title": "BUAA-OOpre·笔记二",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-09-18T02:53:40.000Z",
  "updated": "2023-09-30T04:44:16.299Z",
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

<div class="note info modern"><p>📢完整的题目要求和源代码请按下面指示前往我的Github仓库~</p>
</div>
<a class="btn-beautify orange block center larger" target="_blank" rel="noopener" href="https://github.com/MossDream/BUAA-2023-OOpre"
  title="BUAA-2023-OOpre"><span>BUAA-2023-OOpre</span></a>
<div class="tip fas fa-comment-dots"><p>题目信息</p>
</div>
<h1 id="第二次作业指导书">第二次作业指导书</h1><p>在本次作业中，我们即将完成面向对象先导课程作业的基础代码编写，在以后的作业中，我们将在本次作业的基础上进行迭代开发。</p>
<h2 id="第一部分：提交要求">第一部分：提交要求</h2><p>请保证提交项目的顶层目录至少存在两个文件夹：<code>src</code>和<code>test</code>（命名需严格与此保持一致），请将作业的<strong>功能代码</strong>存放于<code>src</code>文件夹下，同时将相关<strong>junit测试类代码</strong>文件存放于<code>test</code>文件夹下，以保证评测的正常进行（评测时<strong>只会</strong>针对<code>src</code>目录下的文件进行程序<strong>功能</strong>的评测以及代码风格检测，也就是说，<code>test</code>目录下的junit测试代码风格不会被检测）。参考目录结构如下：</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">|-src</span><br><span class="line">  |- Bottle.java</span><br><span class="line">  |- Equipment.java</span><br><span class="line">  |- ...</span><br><span class="line">|-test</span><br><span class="line">  |- BottleTest.java</span><br><span class="line">  |- EquipmentTest.java</span><br><span class="line">  |- ...</span><br></pre></td></tr></table></figure>
<h2 id="第二部分：题目描述">第二部分：题目描述</h2><h3 id="背景">背景</h3><p>在接下来的若干次作业中，同学们将进行以本次作业为基础的迭代开发，因此在具体的代码实现中，希望同学们可以考虑到每一次所写代码的可扩展性和可维护性，从而减少下一次的工作量。</p>
<p>在接下来的几次作业中，请想象你是一个穿越到魔法大陆上的冒险者，在旅途中，你需要收集各种道具，使用各种装备，招募其他冒险者加入队伍，提升自己的等级并体验各种战斗。</p>
<p><strong>在本次作业中，你要做的是</strong>：<br><div class='checkbox yellow checked'><input type="checkbox" checked="checked"/>
            <p>实现冒险者类 <code>Adventurer</code> 、药水瓶类 <code>Bottle</code> 、装备类 <code>Equipment</code></p>
            </div><br><div class='checkbox blue checked'><input type="checkbox" checked="checked"/>
            <p>利用容器，管理所有冒险者，并管理每一个冒险者所拥有的药水瓶和装备</p>
            </div></p>
<p><strong>你可能需要实现的类和它们要拥有的属性有</strong>：<br><div class='checkbox plus green checked'><input type="checkbox" checked="checked"/>
            <p>Adventure ：ID，名字，药水瓶和装备各自的容器</p>
            </div><br><div class='checkbox plus purple checked'><input type="checkbox" checked="checked"/>
            <p>Bottle：ID，名字，容量(capacity)</p>
            </div><br><div class='checkbox plus red checked'><input type="checkbox" checked="checked"/>
            <p>Equipment：ID，名字，星级(star)</p>
            </div>  </p>
<div class="note danger modern"><p><strong>请注意，在作业中，可能会存在ID不同但名字相同的情况，请同学们在设计代码的时候考虑这一点</strong></p>
</div>
<div class="note warning modern"><p>Bottle的容量属性在本次作业中不会被测试，但是却是后续作业的重要部分，请同学们不要忽略。  </p>
</div>
<p><strong>在本次作业中，初始时，你没有需要管理的冒险者，我们通过若干条操作指令来修改当前的状态</strong>：<br><div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶和装备）</p>
            </div><br><div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个药水瓶</p>
            </div><br><div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>删除某个冒险者的某个药水瓶</p>
            </div><br><div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个装备</p>
            </div><br><div class='checkbox cyan checked'><input type="radio" checked="checked"/>
            <p>删除某个冒险者的某个装备</p>
            </div><br><div class='checkbox blue checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者的某个装备提升一个星级（星级加1）</p>
            </div></p>
<h3 id="输入格式">输入格式</h3><p>第一行一个整数 <em>n</em>，表示操作的个数。</p>
<p>接下来的 n 行，每行一个形如 <code>&#123;type&#125; &#123;attribute&#125;</code> 的操作，<code>&#123;type&#125;</code> 和 <code>&#123;attribute&#125;</code> 间、若干个 <code>&#123;attribute&#125;</code> 间使用<strong>若干</strong>个空格分割，操作输入形式及其含义如下。同时，为了方便测评，我们需要在需要执行一些指令后进行相关输出。具体要求也在下面的表中列出：<br><details class="folding-tag" cyan open><summary> 具体要求表 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>type</th><th>attribute</th><th>意义</th><th>输出格式（每条对应的占一行）</th></tr></thead><tbody><tr><td>1</td><td><code>{adv_id} {name}</code></td><td>加入一个 ID 为 <code>{adv_id}</code>、名字为 <code>{name}</code> 的冒险者</td><td>无</td></tr><tr><td>2</td><td><code>{adv_id} {bot_id} {name} {capacity}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个药水瓶，药水瓶的 ID、名字、容量分别为 <code>{bot_id}</code>、<code>{name}</code>、<code>{capacity}</code></td><td>无</td></tr><tr><td>3</td><td><code>{adv_id} {bot_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{bot_id}</code> 的药水瓶删除</td><td><code>{一个整数} {一个字符串}</code>（解释：整数为删除后冒险者药水瓶数目，字符串为删除的药水瓶的name）</td></tr><tr><td>4</td><td><code>{adv_id} {equ_id} {name} {star}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个装备，装备的 ID、名字、星级分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{star}</code></td><td>无</td></tr><tr><td>5</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备删除</td><td><code>{一个整数} {一个字符串}</code>（解释：整数为删除后冒险者装备数目，字符串为删除的装备的name）</td></tr><tr><td>6</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备提升一个星级</td><td><code>{一个字符串} {一个整数}</code>（解释：字符串为装备的name，整数为装备升星后的星级）</td></tr></tbody></table></div><p>输出数值时，你的输出数值需要和正确数值相等。</p>
              </div>
            </details></p>
<h4 id="样例">样例</h4><div class="tabs" id="2-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#2-1-1">样例1</button></li><li class="tab"><button type="button" data-href="#2-1-2">样例2</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="2-1-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br></pre></td><td class="code"><pre><span class="line">4</span><br><span class="line">1 700917 i$KdS=1n</span><br><span class="line">4 700917 829431 ?TE/G1 3 </span><br><span class="line">6 700917 829431</span><br><span class="line">5 700917 829431</span><br></pre></td></tr></table></figure>
<p>期望输出</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br></pre></td><td class="code"><pre><span class="line">?TE/G1 4</span><br><span class="line">0 ?TE/G1</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="2-1-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">3</span><br><span class="line">1 700917 i$KdS=1n</span><br><span class="line">2 700917 829431 ?TE/G1 3 </span><br><span class="line">3 700917 829431</span><br></pre></td></tr></table></figure>
<p>期望输出</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">0 ?TE/G1</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="数据限制">数据限制</h3><h5 id="变量约束">变量约束</h5><details class="folding-tag" red><summary> 变量约束 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>变量</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>name</code></td><td>字符串</td><td>保证不会出现空白字符，长度区间: (0,40)</td></tr><tr><td><code>capacity</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>star</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr></tbody></table></div>
              </div>
            </details>
<h5 id="操作约束">操作约束</h5><details class="folding-tag" yellow><summary> 操作约束 </summary>
              <div class='content'>
              <ol><li><strong>保证所有的冒险者、药水瓶、装备 id 均不相同</strong></li><li>保证删除了的药水瓶/装备的 id 不会再次出现</li><li>2-6保证所有冒险者均已存在</li><li>3/5/6保证该冒险者拥有操作中提到 id 的药水瓶/装备</li><li>保证增加的装备和药水瓶原本不存在</li><li>操作数满足1≤<em>n</em>≤2000</li></ol>
              </div>
            </details>
<h3 id="junit测试">junit测试</h3><p>我们在gitlab上准备了一份<strong>junit使用示例代码</strong>（基于hw1程序）以及一份<strong>junit使用文档</strong>供大家参考，推荐各位同学在课下测试时使用 junit 单元测试来对自己的程序进行测试  </p>
<p>junit 是一个单元测试包，<strong>可以通过编写单元测试类和方法，来实现对类和方法实现正确性的快速检查和测试</strong>。还可以查看测试覆盖率以及具体覆盖范围（精确到语句级别），以帮助编程者全面无死角地进行程序功能测试。  </p>
<p>此外，Junit 对主流 Java IDE（Idea、eclipse 等）均有较为完善的支持，具体的配置和使用方法可以参考gitlab上的使用文档。  </p>
<h4 id="要求">要求</h4><p>本次作业要求同学们需要自行编写junit测试代码对自己的代码进行测试。在本次作业中，检测到<strong>存在junit测试方法</strong>并可以<strong>成功编译</strong>即视为通过junit评测。</p>
<div class="tip fas fa-comment-dots"><p>解析说明</p>
</div>
<h1 id="关于第二次作业的解析与说明">关于第二次作业的解析与说明</h1><div  ><div class="note pink icon-padding modern"><p>第二次作业开始正式迭代开发，本次作业难度一般，主要目标是编写<strong>基础代码</strong>准备接下来几周的<strong>迭代与扩展</strong>。   </p>
</div>
<div class="note primary modern"><p><strong><em>注意：划删除线的部分并非过时信息！</em></strong></p>
</div></div>
<h2 id="Part-1">Part 1</h2><p>指导书的大致要求是：<br>实现以下类</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">Adventure ：ID，名字，药水瓶和装备各自的容器</span><br><span class="line">Bottle：ID，名字，容量(capacity)</span><br><span class="line">Equipment：ID，名字，星级(star)</span><br></pre></td></tr></table></figure>
<p>以及实现以下操作</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">1.加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶和装备）</span><br><span class="line">2.给某个冒险者增加一个药水瓶</span><br><span class="line">3.删除某个冒险者的某个药水瓶</span><br><span class="line">4.给某个冒险者增加一个装备</span><br><span class="line">5.删除某个冒险者的某个装备</span><br><span class="line">6.给某个冒险者的某个装备提升一个星级</span><br><span class="line">* 其中，提升星级的意思是，新星级=原有星级+1</span><br></pre></td></tr></table></figure>
<p>并且做了一些约束使问题简化，这里不再赘述。</p>
<p>我认为本次作业主要考虑<strong>三点</strong>：<br><div class='checkbox yellow checked'><input type="checkbox" checked="checked"/>
            <p>如何用合适的容器对<em>Adventure</em>类、<em>Bottle</em>类以及<em>Equipment</em>类进行管理</p>
            </div><br><div class='checkbox blue checked'><input type="checkbox" checked="checked"/>
            <p>上述三个类的<strong>内部结构如何实现</strong></p>
            </div><br><div class='checkbox red checked'><input type="checkbox" checked="checked"/>
            <p>如何实现<strong>同时返回</strong>一个<strong>字符串和整数</strong>信息</p>
            </div>  </p>
<div class="note info modern"><p>对于第一点，我一开始的思路是，用<em>ArrayList</em>来管理三个类，这是一种很自然的想法。但是，在随后的具体实现中，我发现很多操作要求通过ID来获取对象，而由于ID属性被封装在各个类中，<del>以我的水平只能</del>对<em>ArrayList</em>遍历来查找需要的冒险者、药瓶或者是装备。<br>这样带来的坏处是，需要自己实现遍历查找算法，而且遍历效率极低。同时<strong>checkstyle</strong>还会提示<strong>for循环部分重复度过高</strong>(查找<em>Bottle</em>和<em>Equipment</em>时有大量重复结构)。<br>那么，有没有更好的改进办法呢？我想到了下面的思路：  </p>
<p><div class="note primary modern"><p>利用每个对象<strong>ID</strong>属性的唯一性，用ID作为<strong>Key</strong>，相应对象（<em>Adventure</em>类、<em>Bottle</em>类以及<em>Equipment</em>类）做为<strong>Value</strong>，构建HashMap来进行管理。</p>
</div></p>
<p><p>也就是如下三个容器：</p><br><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">HashMap&lt;Integer, Adventure&gt; adventures = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br><span class="line">HashMap&lt;Integer, Bottle&gt; bottles = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br><span class="line">HashMap&lt;Integer, Equipment&gt; equipments = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br></pre></td></tr></table></figure></p>
<p><p>这样的好处是，HashMap类本身已经提供了通过Key快速查找Value的方法，而且<strong>代码简洁</strong>，<strong>checkstyle</strong>也不会提示重复度过高的问题。可谓一举两得。<br></p>
</div></p>
<div class="note warning modern"><p>有了第一点的思路，各个类的内部结构也就比较清晰，以功能最多的<em>Adventure</em>类为例，应该如下：</p>
<figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br><span class="line">33</span><br><span class="line">34</span><br><span class="line">35</span><br><span class="line">36</span><br></pre></td><td class="code"><pre><span class="line"><span class="comment">//属性</span></span><br><span class="line">    <span class="keyword">private</span> <span class="keyword">final</span> <span class="type">int</span> id;</span><br><span class="line">    <span class="keyword">private</span> <span class="keyword">final</span> String name;</span><br><span class="line">    <span class="keyword">private</span> HashMap&lt;Integer, Bottle&gt; bottles = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();<span class="comment">//管理Bottle</span></span><br><span class="line">    <span class="keyword">private</span> HashMap&lt;Integer, Equipment&gt; equipments = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();<span class="comment">//管理Equipment</span></span><br><span class="line"><span class="comment">//方法</span></span><br><span class="line">    <span class="keyword">public</span> <span class="title function_">Adventure</span><span class="params">(<span class="type">int</span> id, String name)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line">    <span class="keyword">public</span> <span class="keyword">void</span> <span class="title function_">addBottle</span><span class="params">(Bottle bottle)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> <span class="keyword">void</span> <span class="title function_">addEquipment</span><span class="params">(Equipment equipment)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> PrintInfo <span class="title function_">removeBottle</span><span class="params">(<span class="type">int</span> bottleId)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> PrintInfo <span class="title function_">removeEquipment</span><span class="params">(<span class="type">int</span> equipmentId)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> PrintInfo <span class="title function_">increaseStar</span><span class="params">(<span class="type">int</span> equipmentId)</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> HashMap&lt;Integer, Bottle&gt; <span class="title function_">getBottles</span><span class="params">()</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> HashMap&lt;Integer, Equipment&gt; <span class="title function_">getEquipments</span><span class="params">()</span> &#123;</span><br><span class="line">    <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br></pre></td></tr></table></figure></div>
<div class="note success modern"><p>在<strong>java</strong>中，一个方法或者函数<strong>只能返回一个对象</strong>，那么如何同时返回一个字符串和整数呢？<br>一开始，我同样想用<em>HashMap</em>，但是又遇到问题：我们每次只需要<strong>一个Key-Value对</strong>，为此单独构造一个容器似乎没有必要，而且这也没有体现<strong>Key和Value的映射关系</strong>。<br>因此经过考虑，我自定义了一个工具类<em>PrintInfo</em>，能根据一个整数值和字符串值构造对象，并提供不同顺序的打印方法。</p>
<figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">public</span> <span class="keyword">class</span> <span class="title class_">PrintInfo</span> &#123;</span><br><span class="line">    <span class="keyword">private</span> <span class="keyword">final</span> <span class="type">int</span> numOrStar;</span><br><span class="line">    <span class="keyword">private</span> <span class="keyword">final</span> String name;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> <span class="title function_">PrintInfo</span><span class="params">(<span class="type">int</span> numOrStar, String name)</span> &#123;</span><br><span class="line">        <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> <span class="keyword">void</span> <span class="title function_">printIntFirst</span><span class="params">()</span> &#123;</span><br><span class="line">        <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line"></span><br><span class="line">    <span class="keyword">public</span> <span class="keyword">void</span> <span class="title function_">printStringFirst</span><span class="params">()</span> &#123;</span><br><span class="line">        <span class="comment">//...</span></span><br><span class="line">    &#125;</span><br><span class="line">&#125;</span><br></pre></td></tr></table></figure>
<p>这样 负责删除且需要返回结果的方法便可以声明返回该类型。</p>
</div>
<p><del>解决了这三个问题，Part 1的要求相信很快就能解决。</del></p>
<h2 id="Part-2">Part 2</h2><p><del>本次作业Part 2要求不高，自行阅读文档，了解<em>JUnit</em>类的使用即可。</del></p>
