---
{
  "slug": "oopre3",
  "title": "BUAA-OOpre·笔记三",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-09-23T07:48:31.000Z",
  "updated": "2023-09-30T04:44:04.276Z",
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
<h1 id="第三次作业指导书">第三次作业指导书</h1><h2 id="第零部分：提交要求-amp-amp-Junit要求">第零部分：提交要求 &amp;&amp; Junit要求</h2><p>请保证提交项目的顶层目录存在两个文件夹：<code>src</code>和<code>test</code>（命名需严格与此保持一致），请将作业的<strong>功能代码</strong>存放于<code>src</code>文件夹下，同时将相关<strong>junit测试类代码</strong>文件存放于<code>test</code>文件夹下，以保证评测的正常进行（评测时<strong>只会</strong>针对<code>src</code>目录下的文件进行程序<strong>功能</strong>的评测以及代码风格检测，也就是说，<code>test</code>目录下的junit测试代码风格不会被检测）。参考目录结构如下：</p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">|-src</span><br><span class="line">  |- Bottle.java</span><br><span class="line">  |- Equipment.java</span><br><span class="line">  |- ...</span><br><span class="line">|-test</span><br><span class="line">  |- BottleTest.java</span><br><span class="line">  |- EquipmentTest.java</span><br><span class="line">  |- ...</span><br></pre></td></tr></table></figure>
<p>本次作业，要求Junit测试覆盖率<strong>保证</strong><code>method &gt;= 90％</code>，<code>line &gt;= 60%</code>。（<code>idea</code>显示的覆盖率和<code>评测</code>测到的覆盖率可能略有差别，请同学们以评测为准）</p>
<h2 id="第一部分：训练目标">第一部分：训练目标</h2><div class='checkbox plus purple checked'><input type="checkbox" checked="checked"/>
            <p>学习并掌握“管理对象”-<strong>容器</strong>，熟悉 ArrayList 、HashMap 、HashSet 的使用</p>
            </div>
<div class='checkbox plus red checked'><input type="checkbox" checked="checked"/>
            <p>掌握对象的层次结构，通过编写更多的类进行类的层次结构的理解</p>
            </div>
<h2 id="第二部分：题目描述">第二部分：题目描述</h2><h3 id="背景">背景</h3><p>本次作业基于第二次的内容开发，同学们应当在实现第二次题目所要求的内容的前提下基于第二次的代码完成本次作业。</p>
<p>好的，经过上次作业的准备，我们的冒险者可以拥有一些装备和一些药水瓶，但是想要外出冒险，不可能带着所有的装备和所有的药水瓶瓶罐。因此在本次作业，我们新增了一个叫 <strong>背包</strong> 的概念。</p>
<p>同时为了量化冒险者的状态，我们为冒险者引入了两个属性：体力（HitPoint），等级（level）</p>
<p>体力代表冒险者当前的体力值，保证在程序正确运行时，冒险者体力时刻大于 0 。</p>
<p>等级，决定了他的背包的容量（后面会详细规定）</p>
<p>同时，关于等级，我们需要引入食物类（Food），通过使用食物可以提升冒险者的等级</p>
<p>在本次作业中，你需要实现的任务是：</p>
<div class='checkbox plus green checked'><input type="checkbox" checked="checked"/>
            <p>在第一次作业的基础上完成冒险者新增加属性的管理</p>
            </div>
<div class='checkbox plus blue checked'><input type="checkbox" checked="checked"/>
            <p>实现冒险者的背包功能，并依据要求约束实现背包内物品数目的控制</p>
            </div>
<h3 id="背包限制">背包限制</h3><p>在上一次的作业里，我们定义了添加的概念（add），这个仅仅是让这名冒险者拥有了这个物品，但是他并没有携带这个物品。我们认为，当且仅当<strong>这个物品属于该冒险者且在该名冒险者的背包中</strong>，才算他携带了这个物品。</p>
<p>下面对每类物品给出携带与使用的规定。<br><div class="note warning modern"><h4 id="装备">装备</h4><h5 id="限制">限制</h5><p><strong>冒险者只能携带一件同名装备</strong>。</p>
<p>若冒险者已经携带了名字为 <code>sword</code> 的装备（该装备 <code>id</code> 为 $1$），下一次再尝试携带另一个名字为 <code>sword</code> 的不同装备（该装备<code>id</code>为 $2$）时，原本 <code>id</code> 为 $1$ 的 <code>sword</code> 会被顶替。注意被顶替的装备依然属于此冒险者。</p>
</div></p>
<div class="note info modern"><h4 id="药水瓶">药水瓶</h4><p>当冒险者携带药水瓶 A 时，他才能使用该药水瓶 A，否则为使用失败。</p>
<p>冒险者使用某药水瓶时，若药水瓶不为空，则冒险者的体力增加 $x$（$x$ 为该药水瓶的容积），药水瓶变空。</p>
<p>若药水瓶为空，冒险者的体力增加为 0，同样视作使用成功。同时，为了给继续携带药水瓶腾出空间，在使用后冒险者将丢弃该空药水瓶，即该药水瓶将不再被该冒险者拥有。对于这个丢弃行为我们不需要进行输出。</p>
<h5 id="限制">限制</h5><p>冒险者只能携带 <code>max_bottles</code> 个同名的药水瓶，其中max_bottles的值满足 </p>
<p>例如，若冒险者等级为 19, 则 <code>max_bottles</code> 的值是 $4$。假如在这时，该冒险者携带了四个同名药水瓶 <code>water</code>，之后再尝试携带同名的药水瓶后时，他的状态不会有任何改变，也不需要输出任何内容，他也不会携带新的同名药水瓶。</p>
</div>
<div class="note danger modern"><h4 id="食物">食物</h4><p>当冒险者携带食物 A 的时候，他才能使用该食物 A，否则为使用失败。</p>
<p>当冒险者使用食物时，他将消耗掉该食物（从此该食物<strong>不再属于</strong>该冒险者），冒险者的等级提升 $x$（$x$ 为食物的能量）。</p>
<p>比如冒险者当前等级为 1，拥有食物 A，A 的能量为 2。冒险者在携带后使用食物 A，则冒险者不再拥有食物 A，同时冒险者的等级变为 3。</p>
<h5 id="限制">限制</h5><p>背包对食物的数量没有任何限制。</p>
</div>
<p>特别的，我们规定，假设冒险者 A 尝试携带的物品 B ，本身已经在冒险者背包里了，那么该条指令不会造成任何影响（不需要任何输出，同时物品 B 依旧在冒险者的背包里 ）</p>
<h3 id="操作要求">操作要求</h3><p>在本次作业中，初始时，你没有需要管理的冒险者，我们通过若干条操作指令来修改当前的状态：</p>
<p>（<strong>第2-6条同第一次作业</strong>）<br><div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶、食物和装备，并且等级为 $1$，初始体力为 $500$）</p>
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
            </div><br><div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>给冒险者增加一个食物</p>
            </div><br><div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>删除冒险者的一个食物</p>
            </div><br><div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某件装备</p>
            </div><br><div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某个药水瓶</p>
            </div><br><div class='checkbox cyan checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某个食物</p>
            </div><br><div class='checkbox blue checked'><input type="radio" checked="checked"/>
            <p>冒险者使用某个药水瓶</p>
            </div><br><div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>冒险者使用某个食物</p>
            </div></p>
<div class="note warning modern"><p><strong>值得注意的是，在12和13中，我们采用 name 来确定所使用的物品。假设当前冒险者携带了多个同名物品，则使用 id最小的那个。</strong></p>
</div>
<p>同时，指令使用名字为name的物品时，如果冒险者携带了名字为该 name 的物品，则视为使用成功，（使用空瓶也算使用成功），假设冒险者没有携带名字为该 name 的物品，则视为使用失败，不产生任何其他影响。两种情况需按照下面的输入输出格式进行输出</p>
<h3 id="输入输出格式">输入输出格式</h3><p>第一行一个整数 $n$，表示操作的个数。</p>
<p>接下来的 $n$ 行，每行一个形如 <code>&#123;type&#125; &#123;attribute&#125;</code> 的操作，<code>&#123;type&#125;</code> 和 <code>&#123;attribute&#125;</code> 间、若干个 <code>&#123;attribute&#125;</code> 间使用<strong>若干</strong>个空格分割，操作输入形式及其含义如下<br><details class="folding-tag" cyan open><summary> 具体要求表 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th style="text-align:left">type</th><th>attribute</th><th>意义</th><th>输出（每条对应占一行）</th></tr></thead><tbody><tr><td style="text-align:left">1</td><td><code>{adv_id} {name}</code></td><td>加入一个 ID 为 <code>{adv_id}</code>、名字为 <code>{name}</code> 的冒险者</td><td>无</td></tr><tr><td style="text-align:left">2</td><td><code>{adv_id} {bot_id} {name} {capacity}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个药水瓶，药水瓶的 ID、名字、容量分别为 <code>{bot_id}</code>、<code>{name}</code>、<code>{capacity}</code>，<strong>且默认为已装满</strong></td><td>无</td></tr><tr><td style="text-align:left">3</td><td><code>{adv_id} {bot_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{bot_id}</code> 的药水瓶删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者药水瓶数目，字符串为删除的药水瓶的name</td></tr><tr><td style="text-align:left">4</td><td><code>{adv_id} {equ_id} {name} {star}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个装备，装备的 ID、名字、星级分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{star}</code></td><td>无</td></tr><tr><td style="text-align:left">5</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者装备数目，字符串为删除的装备的name</td></tr><tr><td style="text-align:left">6</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备提升一个星级</td><td><code>{一个字符串} {一个整数}</code>，字符串为装备的name，整数为装备升星后的星级</td></tr><tr><td style="text-align:left">7</td><td><code>{adv_id} {food_id} {name} {energy}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个食物，食物的 ID、名字、能量分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{energy}</code></td><td>无</td></tr><tr><td style="text-align:left">8</td><td><code>{adv_id} {food_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{food_id}</code> 的食物删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者食物数目，字符串为删除的食物的 name</td></tr><tr><td style="text-align:left">9</td><td><code>{adv_id} {equ_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{equ_id}</code> 的装备</td><td>无</td></tr><tr><td style="text-align:left">10</td><td><code>{adv_id} {bot_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{bot_id}</code> 的瓶子</td><td>无</td></tr><tr><td style="text-align:left">11</td><td><code>{adv_id} {food_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{food_id}</code> 的食物</td><td>无</td></tr><tr><td style="text-align:left">12</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用他拥有的名字为<code>{name}</code>的药水瓶</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为被使用药水瓶的id，整数B为该冒险者使用该药水瓶后的体力值 <br/> 失败： <code>fail to use {name}</code>，name为本条指令输入中的name)</td></tr><tr><td style="text-align:left">13</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用他拥有的名字为<code>{name}</code>的食物</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为被使用食物的 id，整数B为该冒险者使用该食物后的等级 <br/>失败：  <code>fail to eat {name}</code>，name 为本条指令输入中的 name</td></tr></tbody></table></div>
              </div>
            </details></p>
<h3 id="样例">样例</h3><div class="tabs" id="4-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#4-1-1">输入</button></li><li class="tab"><button type="button" data-href="#4-1-2">输出</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="4-1-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br></pre></td><td class="code"><pre><span class="line">16</span><br><span class="line">1 123456 advName</span><br><span class="line">2 123456 123 bottleName 40</span><br><span class="line">10 123456 123</span><br><span class="line">2 123456 321 bottleName 20</span><br><span class="line">10 123456 321</span><br><span class="line">12 123456 bottleName</span><br><span class="line">12 123456 bottleName</span><br><span class="line">12 123456 bottleName</span><br><span class="line">7 123456 111 foodName 10</span><br><span class="line">7 123456 888 candy 20</span><br><span class="line">8 123456 888</span><br><span class="line">13 123456 foodName</span><br><span class="line">11 123456 111</span><br><span class="line">13 123456 foodName</span><br><span class="line">7 123456 222 foodName 30</span><br><span class="line">8 123456 222</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="4-1-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br></pre></td><td class="code"><pre><span class="line">123 540</span><br><span class="line">123 540</span><br><span class="line">fail to use bottleName</span><br><span class="line">1 candy</span><br><span class="line">fail to eat foodName</span><br><span class="line">111 11</span><br><span class="line">0 foodName</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="数据限制">数据限制</h3><h4 id="变量约束">变量约束</h4><details class="folding-tag" red><summary> 变量约束 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>变量</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>name</code></td><td>字符串</td><td>保证不会出现空白字符，长度区间: (0,40)</td></tr><tr><td><code>capacity</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>star</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>energy</code></td><td>整数</td><td>取值范围： 0-2147483647</td></tr><tr><td><code>level</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>HitPoint</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr></tbody></table></div><p>注意，变量约束指的是，在程序运行时，输入和对应属性值均保证在表格中给出的范围内。</p>
              </div>
            </details>
<h4 id="操作约束">操作约束</h4><details class="folding-tag" yellow><summary> 操作约束 </summary>
              <div class='content'>
              <ol><li><strong>保证所有的冒险者、药水瓶、装备、食物id均不相同</strong></li><li>保证删除了的药水瓶/装备/食物的 id 不会再次出现</li><li>操作 2-6 保证所有冒险者均已存在</li><li>操作 3/5/6/8 保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>保证增加的装备，食物和药水瓶原本不存在</li><li>操作数满足$1\le n\le2000$</li><li>操作 9-11保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>操作 12-13 <strong>不</strong>保证提到的物品已经被携带</li></ol>
              </div>
            </details>
<h1 id="关于第三次作业的解析与说明">关于第三次作业的解析与说明</h1><div  ><div class="note pink icon-padding modern"><p>第三次作业在第二次的基础上进行扩展，本文也从已经<strong>通过第二次作业强测</strong>的程序基础上进行讲解分析。 </p>
</div>
<div class="note primary modern"><p><strong><em>注意：划删除线的部分并非过时信息！</em></strong></p>
</div></div>
<h1 id="Part-1">Part 1</h1><h2 id="指导书要求分析">指导书要求分析</h2><p>指导书扩展要求后，要求为：<br>实现以下类</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">Adventure ：ID，名字，药水瓶和装备各自的容器，背包，体力（HitPoint），等级（level）</span><br><span class="line">Bottle：ID，名字，容量(capacity)</span><br><span class="line">Equipment：ID，名字，星级(star)</span><br><span class="line">Food：ID，名字，能量(energy)</span><br></pre></td></tr></table></figure>
<p>以及实现以下操作</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br></pre></td><td class="code"><pre><span class="line">1.加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶和装备）</span><br><span class="line">2.给某个冒险者增加一个药水瓶</span><br><span class="line">3.删除某个冒险者的某个药水瓶</span><br><span class="line">4.给某个冒险者增加一个装备</span><br><span class="line">5.删除某个冒险者的某个装备</span><br><span class="line">6.给某个冒险者的某个装备提升一个星级</span><br><span class="line">    * 其中，提升星级的意思是，新星级=原有星级+1</span><br><span class="line">7.给冒险者增加一个食物</span><br><span class="line">8.删除冒险者的一个食物</span><br><span class="line">9.冒险者尝试携带他拥有的某件装备</span><br><span class="line">10.冒险者尝试携带他拥有的某个药水瓶</span><br><span class="line">11.冒险者尝试携带他拥有的某个食物</span><br><span class="line">12.冒险者使用某个药水瓶</span><br><span class="line">13.冒险者使用某个食物</span><br></pre></td></tr></table></figure>
<p>其中，新增的<strong>背包要求</strong>是本次作业的核心，引用如下：</p>
<blockquote>
<p>背包限制<br>在上一次的作业里，我们定义了添加的概念（add），这个仅仅是让这名冒险者拥有了这个物品，但是他并没有携带这个物品。我们认为，当且仅当<strong>这个物品属于该冒险者且在该名冒险者的背包中</strong>，才算他携带了这个物品。下面对每类物品给出携带与使用的规定。</p>
<p>装备</p>
</blockquote>
<ul>
<li>限制<br><strong>冒险者只能携带一件同名装备</strong>。<br>若冒险者已经携带了名字为 <code>sword</code> 的装备（该装备 <code>id</code> 为 1），下一次再尝试携带另一个名字为 <code>sword</code> 的不同装备（该装备<code>id</code>为<br>2）时，原本 <code>id</code> 为 1 的 <code>sword</code> 会被顶替。注意被顶替的装备依然属于此冒险者。</li>
</ul>
<blockquote>
<p>药水瓶<br>当冒险者携带药水瓶 A 时，他才能使用该药水瓶 A，否则为使用失败。<br>冒险者使用某药水瓶时，若药水瓶不为空，则冒险者的体力增加 x（x 为该药水瓶的容积），药水瓶变空。<br>若药水瓶为空，冒险者的体力增加为 0，同样视作使用成功。同时，为了给继续携带药水瓶腾出空间，在使用后冒险者将丢弃该空药水瓶，即该药水瓶将不再被该冒险者拥有。对于这个丢弃行为我们不需要进行输出。</p>
</blockquote>
<ul>
<li>限制<br>冒险者只能携带 <code>max_bottles</code> 个同名的药水瓶，其中max_bottles的值满足 <code>max_bottles = level / 5 + 1</code>。<br>例如，若冒险者等级为 19, 则 <code>max_bottles</code> 的值是 4。假如在这时，该冒险者携带了四个同名药水瓶 <code>water</code><br>，之后再尝试携带同名的药水瓶后时，他的状态不会有任何改变，也不需要输出任何内容，他也不会携带新的同名药水瓶。</li>
</ul>
<blockquote>
<p>食物<br>当冒险者携带食物 A 的时候，他才能使用该食物 A，否则为使用失败。<br>当冒险者使用食物时，他将消耗掉该食物（从此该食物<strong>不再属于</strong>该冒险者），冒险者的等级提升 x（x 为食物的能量）。<br>比如冒险者当前等级为 1，拥有食物 A，A 的能量为 2。冒险者在携带后使用食物 A，则冒险者不再拥有食物 A，同时冒险者的等级变为3。</p>
</blockquote>
<ul>
<li>限制<br>背包对食物的数量没有任何限制。</li>
</ul>
<blockquote>
<p>特别的，我们规定，假设冒险者 A 尝试携带的物品 B ，本身已经在冒险者背包里了，那么该条指令不会造成任何影响（不需要任何输出，同时物品B 依旧在冒险者的背包里 ）</p>
</blockquote>
<h2 id="思路要点">思路要点</h2><p>应该分成两个部分</p>
<h3 id="基于上次作业形式的直接扩展与修改">基于上次作业形式的直接扩展与修改</h3><p>具体有：</p>
<div class='checkbox yellow checked'><input type="checkbox" checked="checked"/>
            <p><em>Food</em>类的实现与管理</p>
            </div>
<div class='checkbox blue checked'><input type="checkbox" checked="checked"/>
            <p><code>remove</code>型函数返回类型的优化</p>
            </div>
<h3 id="本次作业的核心新增特性：背包管理">本次作业的核心新增特性：背包管理</h3><p>具体有：</p>
<div class='checkbox red checked'><input type="checkbox" checked="checked"/>
            <p><strong>携带</strong>动作：<code>takenBottles</code>、<code>takenEquipments</code>、<code>takenFoods</code>的实现与管理</p>
            </div>
<div class='checkbox green checked'><input type="checkbox" checked="checked"/>
            <p><strong>使用</strong>动作：<code>useBottle</code>、<code>eatFood</code>的实现</p>
            </div>
<h2 id="具体分析">具体分析</h2><p>针对思路要点里面的思路进行实现</p>
<h3 id="1-Food类的实现与管理">1. <em>Food</em>类的实现与管理</h3><p><del>这点很简单。</del><br><em>Food</em>类和先前的<em>Bottle</em>类、<em>Equipment</em>类内部结构很像，<code>foods</code>容器的管理也和先前的<code>bottles</code>、<code>equipments</code>容器的管理很像，还有<code>add</code>和<code>remove</code>函数的实现也很像，所以这里不再赘述，参照前一作业模板即可。</p>
<h3 id="2-remove型函数返回类型的优化">2. <code>remove</code>型函数返回类型的优化</h3><p><del>这点也不是很难。</del><br>由于第四点<strong>使用</strong>动作要求使用成功与失败返回不同的形式，因此不能直接返回一个<em>PrintInfo</em>类类型。最简单的思路就是采用<strong>直接打印的形式</strong>，分情况打印不同的信息。</p>
<h3 id="3-携带动作：takenBottles、takenEquipments、takenFoods的实现与管理">3. <strong>携带</strong>动作：<code>takenBottles</code>、<code>takenEquipments</code>、<code>takenFoods</code>的实现与管理</h3><p><strong>三、四两点是本次作业的核心。</strong><br>携带动作的要求上面已经引用。我目前的实现思路是将<em>Bottle</em>、<em>Equipment</em>、<em>Food</em>三个物品分别对应设置<em>Adventure</em>类中的三个私有属性：<code>takenBottles</code>、<code>takenEquipments</code>、<code>takenFoods</code>，分别用于管理冒险者携带的药水瓶、装备、食物。</p>
<ul>
<li>将来有需要可以将其封装成<em>Package</em>类。</li>
</ul>
<p><strong>重点是用什么容器类型实现这三个属性</strong>。<br>我们应该注意到，对背包物品的使用是以<code>name</code>属性来查找，并且取<code>id</code>最小的那个。因此，以<code>takenBottles</code>为例，我们应该使用的是<code>HashMap&lt;String , TreeMap&lt;Integer,Bottle&gt;&gt;</code>类型。<br><code>HashMap</code>以<em>String</em>做为key，提供了按名字查找的方法，简洁高效；<br><code>TreeMap</code>以<em>Integer</em>做为key，提供了按<em>id</em>升序排列的一系列同名物品，我们要用的就是一系列同名物的第一个。<br>由于携带要求不同，几个属性的实现也有所不同，具体如下：<br>对于<code>takenBottles</code>，应该根据<code>maxBots</code>,先判断是否已有同名物品，若没有则新建一个以该物品名字为key，新建映射；若有，则找到value（<em>TreeMap</em>），判断是否已有<em>Bottle</em>数是否已达到上限<code>maxBots</code>，若达到上限则不做任何操作，若未达到上限则在value中新增这个<em>Bottle</em>。<br>对于<code>takenEquipments</code>，由于其特殊性，类型可以简化为<code>HashMap&lt;String , Equipment&gt;</code>,每次无需判断直接加入，<em>HashMap</em>的<code>put</code>方法会自动覆盖同名物品。<br>对于<code>takenFoods</code>，和<code>takenBottles</code>类似，但是不需要判断上限，省略该步即可。</p>
<h3 id="4-使用动作：useBottle、eatFood的实现">4. <strong>使用</strong>动作：<code>useBottle</code>、<code>eatFood</code>的实现</h3><p>使用动作的要求上面已经引用。<br>首先判断是否有所需名字的物品，没有，按格式输出；有，则利用<em>TreeMap</em>特性，取出第一个物品，进行使用。<br><em>TreeMap</em>提供了<code>firstEntry</code>方法和<code>pollFirstEntry</code>方法，前者只返回第一个映射，即<em>TreeMap</em>中<em>id</em>最小的那个，后者返回并移除这个映射。<br>对于<code>useBottle</code>，先只返回，按要求分空与不空进行处理（<code>hp</code>等），<strong>切记当一个名字下没有物品时（<em>TreeMap</em>为空），要在<em>HashMap</em>中移除这个映射</strong>；<br>对于<code>eatFood</code>，直接返回并移除，按要求进行处理（<code>level</code>等），<strong>切记重算<code>maxBot</code>，同样当一个名字下没有物品时（<em>TreeMap</em>为空），要在<em>HashMap</em>中移除这个映射</strong>。  </p>
<h2 id="最后">最后</h2><p>在主程序<em>Main</em>类中，单独使用<code>main</code>方法已经太长，可以把每种不同的操作封装成一个方法，然后在<code>main</code><br>方法中调用这些方法，这样可以使得<code>main</code>方法更加简洁，也方便调试。<br><strong>本部分就大功告成了。</strong></p>
<h1 id="Part-2">Part 2</h1><p>仍然是<em>Junit</em>测试，这次有覆盖率要求，按照教程操作即可。</p>
<h2 id="Part-2新增内容">Part 2新增内容</h2><blockquote>
<p>在后续的过程中，我发现不少人对于Junit的覆盖率要求比较头疼。在正式提交评测前，我本人也对Main类的结构进行了重新修改，这里分享一下我的大致结构。   </p>
</blockquote>
<figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br></pre></td><td class="code"><pre><span class="line"><span class="keyword">public</span> <span class="keyword">static</span> <span class="keyword">void</span> <span class="title function_">main</span><span class="params">(String[] args)</span> &#123;</span><br><span class="line">        <span class="type">int</span> n;</span><br><span class="line">        HashMap&lt;Integer, Adventure&gt; advs = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br><span class="line">        <span class="type">Scanner</span> <span class="variable">scanner</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="title class_">Scanner</span>(System.in);</span><br><span class="line">        n = Integer.parseInt(scanner.nextLine().trim()); <span class="comment">//注意，直接用nextInt()会出错</span></span><br><span class="line">        <span class="keyword">for</span> (<span class="type">int</span> <span class="variable">i</span> <span class="operator">=</span> <span class="number">0</span>; i &lt; n; i++) &#123;</span><br><span class="line">            <span class="type">String</span> <span class="variable">nextLine</span> <span class="operator">=</span> scanner.nextLine(); <span class="comment">// 以一行字符串的形式读入一条指令</span></span><br><span class="line">            makeChoice(advs, getOrders(nextLine));</span><br><span class="line">            <span class="comment">/*getOrders把一行指令拆成各部分，返回一个ArrayList&lt;String&gt;，其中第一个元素是指令类型，后面的元素是指令的参数</span></span><br><span class="line"><span class="comment">             makeChoice根据指令类型，调用相应的方法，switch语句就在该方法中*/</span></span><br><span class="line">        &#125;</span><br><span class="line">    &#125;</span><br></pre></td></tr></table></figure>
<p><strong>需要遵守的原则是，<code>main</code>方法中尽量只有输入处理，且所有输入处理都在这里面完成。然后对其他所有方法编写单元测试。</strong></p>
<h1 id="Part-3-bug修复记录">Part 3 bug修复记录</h1><h2 id="Bug-001">Bug 001</h2><h3 id="说明">说明</h3><p><code>remove</code>型函数执行时，需要将背包里的相应物品也一并删除！</p>
<h3 id="改动详情">改动详情</h3><p>在<code>Adventure.java</code>文件中：<br><figure class="highlight diff"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br><span class="line">15</span><br><span class="line">16</span><br><span class="line">17</span><br><span class="line">18</span><br><span class="line">19</span><br><span class="line">20</span><br><span class="line">21</span><br><span class="line">22</span><br><span class="line">23</span><br><span class="line">24</span><br><span class="line">25</span><br><span class="line">26</span><br><span class="line">27</span><br><span class="line">28</span><br><span class="line">29</span><br><span class="line">30</span><br><span class="line">31</span><br><span class="line">32</span><br></pre></td><td class="code"><pre><span class="line">//现第70行</span><br><span class="line"><span class="deletion">-  if (takenBottles.containsKey(bottleName))  </span></span><br><span class="line"><span class="addition">+  if (takenBottles.containsKey(bottleName) &amp;&amp; !takenBottles.get(bottleName).isEmpty())</span></span><br><span class="line"></span><br><span class="line">//现第92行</span><br><span class="line"><span class="deletion">-  if (takenFoods.containsKey(foodName)) </span></span><br><span class="line"><span class="addition">+  if (takenFoods.containsKey(foodName) &amp;&amp; !takenFoods.get(foodName).isEmpty())  </span></span><br><span class="line"></span><br><span class="line">//现第111行</span><br><span class="line"><span class="addition">+          if (takenBottles.containsKey(name)) &#123;</span></span><br><span class="line"><span class="addition">+            takenBottles.get(name).remove(bottleId);</span></span><br><span class="line"><span class="addition">+            if (takenBottles.get(name).isEmpty()) &#123;</span></span><br><span class="line"><span class="addition">+                takenBottles.remove(name);</span></span><br><span class="line"><span class="addition">+            &#125;</span></span><br><span class="line"><span class="addition">+        &#125;</span></span><br><span class="line"></span><br><span class="line"></span><br><span class="line">//现第123行</span><br><span class="line"><span class="addition">+          if (takenEquipments.containsKey(name)) &#123;</span></span><br><span class="line"><span class="addition">+            int id = takenEquipments.get(name).getId();</span></span><br><span class="line"><span class="addition">+            if (id == equipmentId) &#123;</span></span><br><span class="line"><span class="addition">+                takenEquipments.remove(name);</span></span><br><span class="line"><span class="addition">+            &#125;</span></span><br><span class="line"><span class="addition">+        &#125;</span></span><br><span class="line"></span><br><span class="line">//现第135行</span><br><span class="line"><span class="addition">+          if (takenFoods.containsKey(name)) &#123;</span></span><br><span class="line"><span class="addition">+            takenFoods.get(name).remove(foodId);</span></span><br><span class="line"><span class="addition">+            if (takenFoods.get(name).isEmpty()) &#123;</span></span><br><span class="line"><span class="addition">+                takenFoods.remove(name);</span></span><br><span class="line"><span class="addition">+            &#125;</span></span><br><span class="line"><span class="addition">+        &#125;</span></span><br></pre></td></tr></table></figure></p>
