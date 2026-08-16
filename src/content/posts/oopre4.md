---
{
  "slug": "oopre4",
  "title": "BUAA-OOpre·笔记四",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-10-09T08:57:06.000Z",
  "updated": "2023-10-11T08:54:04.664Z",
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
<h1 id="第四次作业指导书">第四次作业指导书</h1><h2 id="第零部分：提交要求-amp-amp-Junit要求">第零部分：提交要求 &amp;&amp; Junit要求</h2><p>请保证提交项目的顶层目录存在两个文件夹：<code>src</code>和<code>test</code>（命名需严格与此保持一致），请将作业的<strong>功能代码</strong>存放于<code>src</code>文件夹下，同时将相关<strong>junit测试类代码</strong>文件存放于<code>test</code>文件夹下，以保证评测的正常进行（评测时<strong>只会</strong>针对<code>src</code>目录下的文件进行程序<strong>功能</strong>的评测以及代码风格检测，也就是说，<code>test</code>目录下的junit测试代码风格不会被检测）。参考目录结构如下：</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">|-src</span><br><span class="line">  |- Bottle.java</span><br><span class="line">  |- Equipment.java</span><br><span class="line">  |- ...</span><br><span class="line">|-test</span><br><span class="line">  |- BottleTest.java</span><br><span class="line">  |- EquipmentTest.java</span><br><span class="line">  |- ...</span><br></pre></td></tr></table></figure>
<p>本次作业，要求Junit测试覆盖率<strong>保证</strong><code>method &gt;= 90％</code>，<code>line &gt;= 60%</code>，<code>branch &gt;= 60%</code>。（<code>idea</code>显示的覆盖率和<code>评测</code>测到的覆盖率可能略有差别，请同学们以评测为准。同时请不要使用<code>assert</code>进行断言以免造成不必要的覆盖率损失）</p>
<h2 id="第一部分：训练目标">第一部分：训练目标</h2><ul>
<li>对输入进行解析，掌握正则表达式的初步用法</li>
</ul>
<h2 id="第二部分：题目描述">第二部分：题目描述</h2><h3 id="背景">背景</h3><p>本次作业仍将基于 第2次作业 与 第3次作业 的内容开发，同学们应当在实现前序题目所要求内容的前提下基于前序作业的代码完成本次作业。</p>
<p>在本次作业中，我们将引入战斗模式与战斗日志（FightLog）的概念。</p>
<p>在战斗模式中，冒险者能且仅能发起攻击或使用药水，并且保证战斗模式结束后所有进入战斗模式的冒险者体力均大于 0。</p>
<ul>
<li>战斗模式中使用药水，可以实现冒险者体力的增加，具体使用要求同前序作业中关于药水使用的定义。</li>
<li>战斗模式中发起攻击，分为一对一攻击，和一对多攻击，可以实现被攻击冒险者体力的减少，具体的计算公式和输入格式将在后文给出。</li>
</ul>
<p>同时我们引入战斗日志的查询功能，主要包括查询某日期的战斗日志，查询某冒险者发起攻击的日志，查询某冒险者受到攻击的日志。</p>
<p>在本次作业中，你需要实现的任务是：</p>
<ul>
<li>在第三次作业的基础上完成战斗模式中冒险者相关属性的增减。</li>
<li>实现战斗模式与战斗日志的记录与查询功能。</li>
</ul>
<p><strong>注意：冒险者的名字保证唯一，药水瓶、装备和食物的名字均可以重复</strong></p>
<h3 id="操作要求">操作要求</h3><p>在本次作业中，初始时，你没有需要管理的冒险者，我们通过若干条操作指令来修改当前的状态：</p>
<p>（<strong>对于第1-13条，若无特殊说明，则要求和限制同第三次作业</strong>）</p>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶、食物和装备，并且等级为 $1$，初始体力为 $500$）</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个药水瓶</p>
            </div>
<div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>删除某个冒险者的某个药水瓶</p>
            </div>
<div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个装备</p>
            </div>
<div class='checkbox cyan checked'><input type="radio" checked="checked"/>
            <p>删除某个冒险者的某个装备</p>
            </div>
<div class='checkbox blue checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者的某个装备提升一个星级（星级加1）</p>
            </div>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>给冒险者增加一个食物</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>删除冒险者的一个食物</p>
            </div>
<div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某件装备</p>
            </div>
<div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某个药水瓶</p>
            </div>
<div class='checkbox cyan checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试携带他拥有的某个食物</p>
            </div>
<div class='checkbox blue checked'><input type="radio" checked="checked"/>
            <p>冒险者使用某个药水瓶</p>
            </div>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>冒险者使用某个食物</p>
            </div>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>指定部分冒险者进入战斗模式及战斗模式中所发生的事件</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>查询战斗模式下某日期发生的事件</p>
            </div>
<div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>查询战斗模式下某冒险者发起的攻击</p>
            </div>
<div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>查询战斗模式下某冒险者受到的攻击</p>
            </div>
<h4 id="战斗模式下受到攻击时体力减少量的计算">战斗模式下受到攻击时体力减少量的计算</h4><p>被攻击者体力的减少量为攻击者使用的武器的<strong>星级</strong> 乘以 攻击者的<strong>等级</strong>（一对一攻击和一对多攻击均如此计算）：<br><code>healthPoint_decrease = star * level</code></p>
<h3 id="输入格式">输入格式</h3><p>第一行一个整数 <strong>n</strong>，表示操作的个数。</p>
<p>接下来的 n 个指令，每条指令占一行，是一个形如 <code>&#123;type&#125; &#123;attribute&#125;</code> 的操作，<code>&#123;type&#125;</code> 和 <code>&#123;attribute&#125;</code> 间、若干个 <code>&#123;attribute&#125;</code> 间使用<strong>若干</strong>个空格分割，操作输入形式及其含义如下。战斗日志的内容同样每条占一行，但是<strong>注意战斗日志内容不属于指令，指令数目n中不包含战斗日志占有的行数</strong></p>
<p>在<strong>操作14中</strong>，除了本身的指令占一行外，其余的fightLog每条占一行。保证操作14除了fightLog外所有<code>&#123;type&#125;</code> <code>&#123;attribute&#125;</code>均在一行内<br><details class="folding-tag" cyan open><summary> 具体要求表 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>type</th><th>attribute</th><th>意义</th><th>输出（每条对应占一行）</th></tr></thead><tbody><tr><td>1</td><td><code>{adv_id} {name}</code></td><td>加入一个 ID 为 <code>{adv_id}</code>、名字为 <code>{name}</code> 的冒险者  （新加入的冒险者不携带任何瓶子和装备，并且等级为1，初始血量为500）</td><td>无</td></tr><tr><td>2</td><td><code>{adv_id} {bot_id} {name} {capacity}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个药水瓶，药水瓶的 ID、名字、容量分别为 <code>{bot_id}</code>、<code>{name}</code>、<code>{capacity}</code>，<strong>且默认为已装满</strong>(<code>isEmpty</code>==<code>false</code>)</td><td>无</td></tr><tr><td>3</td><td><code>{adv_id} {bot_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{bot_id}</code> 的药水瓶删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者药水瓶数目，字符串为删除的药水瓶的name</td></tr><tr><td>4</td><td><code>{adv_id} {equ_id} {name} {star}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个装备，装备的 ID、名字、星级分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{star}</code></td><td>无</td></tr><tr><td>5</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者装备数目，字符串为删除的装备的name</td></tr><tr><td>6</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备提升一个星级</td><td><code>{一个字符串} {一个整数}</code>，字符串为装备的name，整数为装备升星后的星级</td></tr><tr><td>7</td><td><code>{adv_id} {food_id} {name} {energy}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个食物，食物的 ID、名字、能量分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{energy}</code></td><td>无</td></tr><tr><td>8</td><td><code>{adv_id} {food_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{food_id}</code> 的食物删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者食物数目，字符串为删除的食物的name</td></tr><tr><td>9</td><td><code>{adv_id} {equ_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{equ_id}</code> 的装备</td><td>无</td></tr><tr><td>10</td><td><code>{adv_id} {bot_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{bot_id}</code> 的瓶子</td><td>无</td></tr><tr><td>11</td><td><code>{adv_id} {food_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{food_id}</code> 的食物</td><td>无</td></tr><tr><td>12</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用名字为<code>{name}</code>的药水瓶</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该被使用药水瓶的id，整数B为该冒险者使用该药水瓶后的体力值<br/> 失败： <code>fail to use {name}</code>(其中name为输入中的name)</td></tr><tr><td>13</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用名字为<code>{name}</code>的食物</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该食物的id，整数B为该冒险者使用该食物后的等级<br/> 失败：<code>fail to eat {name}</code>(其中name为输入中的name)</td></tr><tr><td>14</td><td><code>m k {adv_name_1} {adv_name_2}</code> …<code>{adv_name_m}</code></td><td><code>m</code> 为进入战斗模式的人数，<code>k</code> 为此次战斗模式下战斗日志的条数，name 为 <code>{adv_name_j}</code> 的冒险者进入战斗模式，(m、k和name在一行)接下来的 <code>k</code> 行均为战斗日志</td><td>首先第一行输出 <code>Enter Fight Mode</code> ，接下来 k 行输出 k 条战斗日志的反馈，参见下文关于战斗日志输出的表格</td></tr><tr><td>15</td><td><code>YYYY/MM</code></td><td>查询在 <code>YYYY/MM</code> 发生的有效战斗日志</td><td>按输入顺序每条日志输出一行：使用药水：<code>YYYY/MM {adv_name_1} used {name}</code>、一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>16</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>攻击者</strong>的有效战斗日志</td><td>按输入顺序每条日志输出一行：一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>17</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>被攻击者</strong>的有效战斗日志</td><td>按输入顺序每条日志输出一行：一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr></tbody></table></div><p><strong>注意</strong> </p><ul><li>15/16/17中输出中的空白部分均应为一个空格！</li><li>15/16/17中，adv_name_1代表对应战斗日志中使用药水瓶的冒险者/攻击者的name，adv_name_2代表对应战斗日志中被攻击者的name，with {name} 指该战斗日志使用的武器的name</li><li>在AOE-attacked的输出中，不体现本条战斗日志的被攻击者。</li></ul>
              </div>
            </details></p>
<h4 id="关于战斗日志的具体说明">关于战斗日志的具体说明</h4><div class="table-container">
<table>
<thead>
<tr>
<th>输入格式</th>
<th>意义</th>
<th>输出格式</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>YYYY/MM-&#123;adv_name_1&#125;-&#123;name&#125;</code></td>
<td>在 <code>YYYY/MM</code>这个月，名字为 <code>&#123;adv_name_1&#125;</code> 的冒险者使用了名字为 <code>&#123;name&#125;</code> 的药水</td>
<td>成功：<code>&#123;一个整数A&#125; &#123;一个整数B&#125;</code>，整数A为该被使用药水的id，整数B为该冒险者使用该药水后的体力值                                                                                失败： <code>Fight log error</code></td>
</tr>
<tr>
<td><code>YYYY/MM-&#123;adv_name_1&#125;@&#123;adv_name_2&#125;-&#123;name&#125;</code></td>
<td>在 <code>YYYY/MM</code>这个月，名字为 <code>&#123;adv_name_1&#125;</code> 的冒险者对名字为 <code>&#123;adv_name_2&#125;</code> 的冒险者发起攻击，使用了名字为 <code>&#123;name&#125;</code> 的装备</td>
<td>成功：<code>&#123;一个整数A&#125; &#123;一个整数B&#125;</code>，整数A为<strong>被攻击者</strong>的id，整数B为该冒险者受到攻击后的体力值                                                                                失败： <code>Fight log error</code></td>
</tr>
<tr>
<td><code>YYYY/MM-&#123;adv_name_1&#125;@#-&#123;name&#125;</code></td>
<td>在 <code>YYYY/MM</code>这个月，名字为 <code>&#123;adv_name_1&#125;</code> 的冒险者对 剩余所有进入战斗模式的冒险者发起群体攻击，使用了名字为 <code>&#123;name&#125;</code> 的装备</td>
<td>成功：按照  进入战斗状态 的次序输出受攻击冒险者被攻击后的体力值，以一个空格隔开                                                      失败： <code>Fight log error</code></td>
</tr>
</tbody>
</table>
</div>
<p>上述 “Fight log error” 的输出场景为：<strong>非法冒险者名</strong>（冒险者不处于战斗模式）、<strong>非法药水名</strong>（该药水未被携带）、<strong>非法武器名</strong>（该武器未被携带）。保证战斗日志不会出现其他形式的错误。一旦出现错误，<strong>则该行战斗日志无效</strong>，不产生任何作用，同时 <strong>不应出现在15/16/17号命令的查询中</strong></p>
<p>特别地，对于一对多攻击，只要出现上述错误场景，视这条战斗日志无效，所有被攻击者均不会损失体力。</p>
<p><code>YYYY/MM</code>代表输入的字符串位数必然为4位数字/2位数字，你在输出的时候也应当采取这样的格式</p>
<p>保证实际月份值在1-12月之间。</p>
<p><strong>特别提醒</strong>：在有些程序的实现里，从字符匹配角度来看，一个战斗日志可能既符合<code>YYYY/MM-&#123;adv_name_1&#125;-&#123;name&#125;</code>也符合<code>YYYY/MM-&#123;adv_name_1&#125;@&#123;adv_name_2&#125;-&#123;name&#125;</code>，但是在<strong>数据限制</strong>的情况下有唯一意义，请思考这一点并将其应用于你的程序</p>
<h3 id="样例">样例</h3><div class="tabs" id="5-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#5-1-1">输入</button></li><li class="tab"><button type="button" data-href="#5-1-2">输出</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="5-1-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br></pre></td><td class="code"><pre><span class="line">8</span><br><span class="line">1 123 advName1</span><br><span class="line">1 124 advName2</span><br><span class="line">1 125 advName3</span><br><span class="line">4 124 1 equName 20</span><br><span class="line">2 123 2 botName 10</span><br><span class="line">10 123 2</span><br><span class="line">14 3 2 advName1 advName2 advName3</span><br><span class="line">2022/09-advName1-botName</span><br><span class="line">2022/09-advName2@#-equName</span><br><span class="line">15 2022/09</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="5-1-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">Enter Fight Mode</span><br><span class="line">2 510</span><br><span class="line">Fight log error</span><br><span class="line">2022/09 advName1 used botName</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="数据限制">数据限制</h3><h5 id="变量约束">变量约束</h5><details class="folding-tag" red><summary> 变量约束 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>变量</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>name</code></td><td>字符串</td><td>保证不会出现空白字符, <code>@</code>, <code>-</code>, <code>#</code>;长度区间: (0,40)</td></tr><tr><td><code>capacity</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>star</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>level</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>hitPoint</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>energy</code></td><td>整数</td><td>取值范围： 0 - 2147483647</td></tr></tbody></table></div><p>表格中a-b指变量范围为[a,b]</p><p>注意，变量约束指的是，在程序正确运行时，输入和对应属性值均保证在表格中给出的范围内。</p>
              </div>
            </details>
<h5 id="操作约束">操作约束</h5><details class="folding-tag" yellow><summary> 操作约束 </summary>
              <div class='content'>
              <ol><li><strong>保证所有的冒险者、药水瓶、装备、食物 id 均不相同，冒险者之间name均不相同</strong></li><li>保证删除了的药水瓶/装备/食物的 id 不会再次出现</li><li>2-6/14/16-17保证所有 id 对应的冒险者均已存在</li><li>3/5/6/8保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>保证增加的装备，食物和药水瓶原本不存在</li><li>操作数满足1≤<em>n</em>≤2000</li><li>9-11保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>12-13 <strong>不</strong>保证以提到的 name 为名字的物品已经被携带</li><li>14保证战斗模式结束时，任意一个冒险者的体力均大于0</li><li>保证战斗日志出现的时候一定处于战斗模式</li><li>同一次战斗模式下，保证日志输入中日期随输入顺序<strong>单调不减</strong>；如果多次进入战斗模式，进入战斗模式的日期也随输入顺序<strong>单调不减</strong></li><li>保证 14 中所有 提到的冒险者name均存在</li></ol>
              </div>
            </details>
<h1 id="关于第四次作业的解析与说明">关于第四次作业的解析与说明</h1><div  ><div class="note pink icon-padding modern"><p>第四次作业在第三次的基础上进行扩展，本文也从已经<strong>通过第三次作业强测</strong>的程序基础上进行讲解分析。 </p>
</div>
<div class="note primary modern"><p><strong><em>注意：划删除线的部分并非过时信息！</em></strong></p>
</div></div>
<h1 id="Part-1">Part 1</h1><h2 id="指导书要求分析">指导书要求分析</h2><p>这一部分就是上面的指导书内容，不再重复。</p>
<h2 id="具体分析">具体分析</h2><p>经过本人的实践，我自身在编程中遇到如下三点核心问题：</p>
<h3 id="通过name属性实现冒险者的快速查找">通过<code>name</code>属性实现冒险者的快速查找</h3><p>在前三次作业中，我都是利用<code>id</code>的唯一性，以此作为键值构建管理冒险者的<em>HashMap</em>，但是在本次作业中，由于<code>name</code>属性的引入，我不得不考虑如何通过<code>name</code>属性快速查找到对应的冒险者。<br>目前，我的方法是：</p>
<blockquote>
<p>构建一个从<code>id</code>属性到<code>name</code>属性的<em>HashMap</em>,将其做为<strong>一个过渡的查询工具</strong>。当每次提供<code>name</code>属性用来查询时，先通过该过渡容器找到<code>id</code>,再返回到原容器中查询。<br>这样虽然增加了一次查询，但是查询均使用<strong>hash原理</strong>，比直接遍历快上不少。</p>
</blockquote>
<h3 id="新增特性：战斗日志">新增特性：战斗日志</h3><p><del>事实上这部分反而不难。</del>  </p>
<h4 id="输入解析">输入解析</h4><p>根据三种战斗日志格式的第二部分：<br><code>&#123;adv_name_1&#125;</code> 或 <code>&#123;adv_name_1&#125;@&#123;adv_name_2&#125;</code> 或 <code>&#123;adv_name_1&#125;@#</code><br><strong>第一种情况没有<code>@</code>也没有<code>#</code>；第二种情况只有<code>@</code>；第三种情况有<code>@</code>和<code>#</code></strong>。<br>分别识别后用<code>split</code>函数提取信息处理即可。  </p>
<h4 id="日志管理">日志管理</h4><p>在战斗日志有效时需要写入日志以便查询。<br>因为有三种查询方式，<strong>为了避免简单遍历导致速度降低，我用三个容器管理三种形式的日志。</strong><br><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">HashMap&lt;String, ArrayList&lt;String&gt;&gt; logByDate = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br><span class="line">HashMap&lt;Integer, ArrayList&lt;String&gt;&gt; logByAttacker = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br><span class="line">HashMap&lt;Integer, ArrayList&lt;String&gt;&gt; logByAttacked = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br></pre></td></tr></table></figure><br><code>logByDate</code>支持按<code>YYYY/MM</code>日期格式查询；<br><code>logByAttacker</code>支持按攻击者<code>id</code>属性查询；<br><code>logByAttacked</code>支持按被攻击者<code>id</code>属性查询；<br><del>至于如何写入日志并查询比较简单，不再详述。</del>  </p>
<h3 id="Main类重构历程"><em>Main</em>类重构历程</h3><h4 id="目标">目标</h4><p>解决随着选项增多，<em>Main</em>类中<code>switch</code>语句的臃肿问题(<strong>容易超出60行限制</strong>)。</p>
<h4 id="解决方案">解决方案</h4><ol>
<li><p>确保每个<code>case</code>只调用一个函数解决对应业务逻辑。</p>
</li>
<li><p><strong>修改每个上述函数（后称业务函数）的参数表，只允许有一个参数，尽量不要有返回值</strong>。</p>
</li>
</ol>
<blockquote>
<p>这是为了配合使用<code>Consumer</code>函数式接口，使得每个业务函数都可以看作一个对象（像是C语言中的函数指针），能够给<code>Consumer</code>“赋值”（<br><del>说法可能不严谨，体会一下意思</del>）。</p>
</blockquote>
<ol>
<li><strong>构建一个<code>HashMap</code>成员，将<code>Consumer</code>作为<code>HashMap</code>的值，将选项作为<code>HashMap</code>的键</strong>。</li>
</ol>
<blockquote>
<p>例如：<br><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">HashMap&lt;Integer, Consumer&lt;ArrayList&lt;String&gt;&gt;&gt; actionsMap = <span class="keyword">new</span> <span class="title class_">HashMap</span>&lt;&gt;();</span><br></pre></td></tr></table></figure><br>在这里我们通过1个<code>Integer</code>类型的键值来获取1个<code>Consumer</code>类型的值，这个<code>Consumer</code>类型的值就是我们的业务函数。<br>给<code>Consumer</code>指定的类型就是<strong>唯一参数的声明类型</strong>。</p>
</blockquote>
<ol>
<li>实际调用时，<strong>通过<code>HashMap</code>的<code>get</code>方法获取对应的<code>Consumer</code>，再调用<code>Consumer</code>的<code>accept</code>方法</strong>。</li>
</ol>
<blockquote>
<p>例如：<br><figure class="highlight java"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">actionsMap.get(<span class="number">1</span>).accept(args);</span><br></pre></td></tr></table></figure><br>这里等价于<code>case</code>为1时，调用相应的函数。<br>这里<code>args</code>是传给业务函数的实际参数。<code>accept</code>方法是<code>Consumer</code>提供的方法，用来接收参数并调用业务函数。</p>
</blockquote>
<ol>
<li><strong>现在可以去掉<code>switch</code>语句块了</strong>。</li>
</ol>
<h4 id="补充">补充</h4><p>除了<code>Consumer</code>函数式接口，还有其他很多函数式接口，感兴趣可以自行了解。<br>这种方法称为<strong>表驱动法</strong>，可以有效减少代码量，提高可读性。</p>
<h1 id="Part-2">Part 2</h1><p>Junit测试，<strong>按上个文档新增内容的格式基础上扩展即可</strong>。</p>
