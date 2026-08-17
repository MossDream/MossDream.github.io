---
{
  "slug": "oopre6",
  "title": "BUAA-OOpre·笔记六",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-10-21T04:27:11.000Z",
  "updated": "2023-10-22T07:30:16.095Z",
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

<h1 class="article-preface" id="前言">前言</h1>
<p>特别说明：第五次作业不在迭代开发范围内，因此没有对应的解析文档和笔记。</p>
<h1 id="第六次作业指导书">第六次作业指导书</h1><h2 id="第零部分：提交要求-amp-amp-Junit要求">第零部分：提交要求 &amp;&amp; Junit要求</h2><p>请保证提交项目的顶层目录存在两个文件夹：<code>src</code>和<code>test</code>（命名需严格与此保持一致），请将作业的<strong>功能代码</strong>存放于<code>src</code>文件夹下，同时将相关<strong>junit测试类代码</strong>文件存放于<code>test</code>文件夹下，以保证评测的正常进行（评测时<strong>只会</strong>针对<code>src</code>目录下的文件进行程序<strong>功能</strong>的评测以及代码风格检测，也就是说，<code>test</code>目录下的junit测试代码风格不会被检测）。参考目录结构如下：</p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">|-src</span><br><span class="line">  |- Bottle.java</span><br><span class="line">  |- Equipment.java</span><br><span class="line">  |- ...</span><br><span class="line">|-test</span><br><span class="line">  |- BottleTest.java</span><br><span class="line">  |- EquipmentTest.java</span><br><span class="line">  |- ...</span><br></pre></td></tr></table></figure>
<p>本次作业，要求Junit测试覆盖率<strong>保证</strong><code>method &gt;= 90％</code>，<code>line &gt;= 60%</code>，<code>branch &gt;= 60%</code>。（<code>idea</code>显示的覆盖率和<code>评测</code>测到的覆盖率可能略有差别，请同学们以评测为准。同时请不要使用<code>assert</code>进行断言以免造成不必要的覆盖率损失）</p>
<h2 id="第一部分：训练目标">第一部分：训练目标</h2><ul>
<li>掌握继承以及接口的使用</li>
</ul>
<h2 id="第二部分：题目描述">第二部分：题目描述</h2><h3 id="背景">背景</h3><p>本次作业将继续基于第四次作业的“冒险者游戏”进行迭代开发，同学们应当在实现前序题目所要求内容的前提下基于前序作业的代码完成本次作业。</p>
<p>在本任务中，我们允许<strong>冒险者雇佣另一个冒险者</strong>，且赋予装备、药水瓶、食物、冒险者<strong>价值</strong>的概念，把装备、药水瓶、食物和冒险者都看作是<strong>价值体 <code>commodity</code></strong>。另一方面，我们细化<strong>装备</strong>和<strong>药水瓶</strong>的类型，使不同类型的<strong>装备</strong>和<strong>药水瓶</strong>具有不同的效果。</p>
<p>细节如下：</p>
<ul>
<li>增加 Commodity 接口，并使冒险者 Adventurer 类、装备 Equipment 类、药水瓶 Bottle 类、食物 Food 类实现 Commodity 接口。接口中应定义实现该接口的所有类的共有方法。</li>
<li>定义冒险者的<strong>价值</strong>为其拥有的所有价值体的价值之和，即冒险者的价值是其<strong>装备</strong>、<strong>食物</strong>、<strong>药水瓶</strong>的价值及其<strong>雇佣的冒险者</strong>的价值的和。（拥有即可，不需要携带，药水瓶为空仍具有价值）</li>
<li>增加冒险者之间的<strong>雇佣关系</strong>：冒险者 A 雇佣冒险者 B，可以认为是把冒险者 B 看成一个<strong>价值体</strong>，且该价值体被冒险者A所持有。</li>
<li>将装备和药水瓶分别分为三个子类型，建议通过继承实现。</li>
</ul>
<h4 id="关于不同类型药水瓶的具体说明">关于不同类型药水瓶的具体说明</h4><div class="table-container">
<table>
<thead>
<tr>
<th>类型<code>type</code></th>
<th>其他属性<code>others</code></th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>RegularBottle</code></td>
<td>无</td>
<td>常规药水瓶，按原先方式计算</td>
</tr>
<tr>
<td><code>ReinforcedBottle</code></td>
<td><code>ratio</code></td>
<td>百分比强化药水，使用该药水增加的体力值为 [<code>(1+ratio)</code>*<code>capacity</code>]，[x]表示不大于x的最大整数</td>
</tr>
<tr>
<td><code>RecoverBottle</code></td>
<td><code>ratio</code></td>
<td>百分比恢复药水，使用该药水增加的体力值为 [<code>ratio</code>*<code>冒险者使用前HitPoint</code>]，[x]表示不大于x的最大整数</td>
</tr>
</tbody>
</table>
</div>
<h4 id="关于不同类型装备的具体说明">关于不同类型装备的具体说明</h4><div class="table-container">
<table>
<thead>
<tr>
<th>类型<code>type</code></th>
<th>其他属性<code>others</code></th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>RegularEquipment</code></td>
<td>无</td>
<td>常规装备，按原先方式计算<code>HitPoint_decrease</code> = <code>star</code> * <code>level</code></td>
</tr>
<tr>
<td><code>CritEquipment</code></td>
<td><code>critical</code></td>
<td>暴击装备，受攻击者损失生命值为<code>HitPoint_decrease</code> = <code>star</code> * <code>level</code> + <code>critical</code></td>
</tr>
<tr>
<td><code>EpicEquipment</code></td>
<td><code>ratio</code></td>
<td>史诗装备，受攻击者损失生命值为<code>HitPoint_decrease</code> = [<code>受攻击者被攻击前HitPoint</code> * <code>ratio</code>]，[x]表示不大于x的最大整数</td>
</tr>
</tbody>
</table>
</div>
<h3 id="操作要求">操作要求</h3><p>在本次作业中，初始时，你没有需要管理的冒险者，我们通过若干条操作指令来修改当前的状态：</p>
<p>（<strong>新增指令18~21，指令2、4、7的输入格式有变,其余指令若无特殊说明，则要求和限制同第四次作业</strong>）</p>
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
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>一个冒险者雇佣另一个冒险者</p>
            </div>
<div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>查询冒险者所拥有的价值体数量、价值体的价值总和</p>
            </div>
<div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>查询冒险者所拥有的价值体中价值的最大值</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>查询冒险者对应价值体的属性</p>
            </div>
<h3 id="输入格式">输入格式</h3><p>第一行一个整数 <strong>n</strong>，表示操作的个数。</p>
<p>接下来的 n 个指令，每条指令占一行，是一个形如 <code>&#123;type&#125; &#123;attribute&#125;</code> 的操作，<code>&#123;type&#125;</code> 和 <code>&#123;attribute&#125;</code> 间、若干个 <code>&#123;attribute&#125;</code> 间使用<strong>若干</strong>个空格分割，操作输入形式及其含义如下。战斗日志的内容同样每条占一行，但是<strong>注意战斗日志内容不属于指令，指令数目n中不包含战斗日志占有的行数</strong></p>
<p>在<strong>操作14中</strong>，除了本身的指令占一行外，其余的fightLog每条占一行。保证操作14除了fightLog外所有<code>&#123;type&#125;</code> <code>&#123;attribute&#125;</code>均在一行内<br><details class="folding-tag" cyan open><summary> 具体要求表 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>type</th><th>attribute</th><th>意义</th><th>输出（每条对应占一行）</th></tr></thead><tbody><tr><td>1</td><td><code>{adv_id} {name}</code></td><td>加入一个 ID 为 <code>{adv_id}</code>、名字为 <code>{name}</code> 的冒险者  （新加入的冒险者不携带任何瓶子和装备，并且等级为1，初始血量为500）</td><td>无</td></tr><tr><td>2</td><td><code>{adv_id} {bot_id} {name} {capacity} {price} {type} {others}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个药水瓶，药水瓶的 ID、名字、容量、价值、类型、其他属性分别为 <code>{bot_id}</code>、<code>{name}</code>、<code>{capacity}</code>、<code>{price}</code>、<code>{type}</code>、<code>{others}</code>，关于其他属性在上文有具体定义，<strong>且默认为已装满</strong>(<code>isEmpty</code>==<code>false</code>)</td><td>无</td></tr><tr><td>3</td><td><code>{adv_id} {bot_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{bot_id}</code> 的药水瓶删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者药水瓶数目，字符串为删除的药水瓶的name</td></tr><tr><td>4</td><td><code>{adv_id} {equ_id} {name} {star} {price} {type} {others}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个装备，装备的 ID、名字、星级、价值、类型、其他属性分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{star}</code>、<code>{price}</code>、<code>{type}</code>、<code>{others}</code>，关于其他属性在上文有具体定义</td><td>无</td></tr><tr><td>5</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者装备数目，字符串为删除的装备的name</td></tr><tr><td>6</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备提升一个星级</td><td><code>{一个字符串} {一个整数}</code>，字符串为装备的name，整数为装备升星后的星级</td></tr><tr><td>7</td><td><code>{adv_id} {food_id} {name} {energy} {price}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个食物，食物的 ID、名字、能量、价值分别为 <code>{food_id}</code>、<code>{name}</code>、<code>{energy}</code>、<code>{price}</code></td><td>无</td></tr><tr><td>8</td><td><code>{adv_id} {food_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{food_id}</code> 的食物删除</td><td><code>{一个整数} {一个字符串}</code>，整数为删除后冒险者食物数目，字符串为删除的食物的name</td></tr><tr><td>9</td><td><code>{adv_id} {equ_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{equ_id}</code> 的装备</td><td>无</td></tr><tr><td>10</td><td><code>{adv_id} {bot_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{bot_id}</code> 的瓶子</td><td>无</td></tr><tr><td>11</td><td><code>{adv_id} {food_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{food_id}</code> 的食物</td><td>无</td></tr><tr><td>12</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用名字为<code>{name}</code>的药水瓶</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该被使用药水瓶的id，整数B为该冒险者使用该药水瓶后的体力值<br/> 失败： <code>fail to use {name}</code>(其中name为输入中的name)</td></tr><tr><td>13</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用名字为<code>{name}</code>的食物</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该食物的id，整数B为该冒险者使用该食物后的等级<br/> 失败：<code>fail to eat {name}</code>(其中name为输入中的name)</td></tr><tr><td>14</td><td><code>m k {adv_name_1} {adv_name_2}</code> …<code>{adv_name_m}</code></td><td><code>m</code> 为进入战斗模式的人数，<code>k</code> 为此次战斗模式下战斗日志的条数，name 为 <code>{adv_name_j}</code> 的冒险者进入战斗模式，(m、k和name在一行)接下来的 <code>k</code> 行均为战斗日志</td><td>首先第一行输出 <code>Enter Fight Mode</code> ，接下来 k 行输出 k 条战斗日志的反馈，参见下文关于战斗日志输出的表格</td></tr><tr><td>15</td><td><code>YYYY/MM</code></td><td>查询在 <code>YYYY/MM</code> 发生的有效战斗日志</td><td>按输入顺序每条日志输出一行：使用药水：<code>YYYY/MM {adv_name_1} used {name}</code>、一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>16</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>攻击者</strong>的有效战斗日志</td><td>按输入顺序每条日志输出一行：一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>17</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>被攻击者</strong>的有效战斗日志</td><td>按输入顺序每条日志输出一行：一对一攻击：<code>YYYY/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>YYYY/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>18</td><td><code>{adv_id1} {adv_id2}</code></td><td>ID 为<code>adv_id1</code>的冒险者雇佣 ID 为<code>adv_id2</code>的冒险者，<strong>对于多次出现的雇佣关系仅算作一次雇佣</strong></td><td>无</td></tr><tr><td>19</td><td><code>{adv_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有<strong>价值体</strong>的数量与价值之和<br/>如果价值体是装备、药水瓶或食物，则价值就是 <code>price</code>，对数量的贡献是 1 <br/>如果价值体是冒险者，则其价值计算按照本次作业最开始定义的规则，对数量的贡献也是 1，不需要考虑被雇佣冒险者所拥有的其他价值体</td><td><code>{一个整数 A} {一个整数 B}</code>，整数 A 表示某冒险者所拥有<strong>价值体</strong>数量，整数 B 表示某人所有<strong>价值体</strong>的价值总和</td></tr><tr><td>20</td><td><code>{adv_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有<strong>价值体</strong>的价值的最大值<br>如果价值体是装备、药水瓶或食物，则价值就是 <code>price</code> <br>如果价值体是冒险者，则其价值计算按照本次作业最开始定义的规则</td><td><code>{一个整数}</code>，表示该冒险者所持有<strong>价值体</strong>的价值的最大值，若不持有价值体则输出 <code>0</code></td></tr><tr><td>21</td><td><code>{adv_id} {com_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有的 ID 为 <code>{com_id}</code> 的价值体所属类的类名</td><td>一个字符串 <code>Commodity whose id is {com_id} belongs to {x}</code>，其中<code>{com_id}</code>为价值体的 ID，<code>{x}</code> 为 <code>Adventurer</code>，<code>Food</code>，<code>RegularBottle</code>，<code>ReinforcedBottle</code>，<code>RecoverBottle</code>，<code>RegularEquipment</code>，<code>CritEquipment</code>，<code>EpicEquipment</code>中价值体所属类的类名</td></tr></tbody></table></div><p>在计算冒险者持有价值体的价值之和的时候，按照题目说明流程即可，不必特殊考虑。例如A雇佣了B，B雇佣了C，A雇佣了C，则计算A价值之和的时候，作业要求的算法是通过自己的雇佣加上了一次C的价值，又通过B对C的雇佣加上了一次C的价值，不必剔除对C的多次计算</p><p>循环雇佣：存在一个雇佣序列，A0雇佣A1，A1雇佣A2…..An雇佣A0.</p><p>数据保证不会出现循环雇佣的情况。</p>
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
<h3 id="样例">样例</h3><div class="tabs" id="5-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#5-1-1">输入</button></li><li class="tab"><button type="button" data-href="#5-1-2">输出</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="5-1-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br><span class="line">13</span><br><span class="line">14</span><br></pre></td><td class="code"><pre><span class="line">13</span><br><span class="line">1 123 advName1</span><br><span class="line">1 124 advName2</span><br><span class="line">1 125 advName3</span><br><span class="line">18 123 124</span><br><span class="line">18 123 125</span><br><span class="line">2 124 1 botName 20 10 RegularBottle</span><br><span class="line">4 125 2 equName 12 35 CritEquipment 123</span><br><span class="line">20 123</span><br><span class="line">1 126 advName4</span><br><span class="line">18 124 126</span><br><span class="line">21 124 126</span><br><span class="line">21 125 2</span><br><span class="line">19 123</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="5-1-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">35</span><br><span class="line">Commodity whose id is 126 belongs to Adventurer</span><br><span class="line">Commodity whose id is 2 belongs to CritEquipment</span><br><span class="line">2 45</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="数据限制">数据限制</h3><h5 id="变量约束">变量约束</h5><details class="folding-tag" red><summary> 变量约束 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>变量</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>name</code></td><td>字符串</td><td>保证不会出现空白字符, <code>@</code>, <code>-</code>, <code>#</code>;长度满足(0,40)</td></tr><tr><td><code>capacity</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>star</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>level</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>hitPoint</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>energy</code></td><td>整数</td><td>取值范围： 0-2147483647</td></tr><tr><td><code>ratio</code></td><td>浮点数</td><td>0 &lt; <code>ratio</code> &lt; 1，double 精度范围内</td></tr><tr><td><code>price</code></td><td>长整数</td><td>所有价值体的价值均在 long 精度范围内，且保证不小于0</td></tr><tr><td><code>critical</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr></tbody></table></div><p>表格中a-b指变量范围为[a,b]</p><p>注意，变量约束指的是，在程序正确运行时，输入和对应属性值均保证在表格中给出的范围内。</p>
              </div>
            </details>
<h5 id="操作约束">操作约束</h5><details class="folding-tag" yellow><summary> 操作约束 </summary>
              <div class='content'>
              <ol><li><strong>保证所有的冒险者、药水瓶、装备、食物 id 均不相同，冒险者之间name均不相同</strong></li><li>保证删除了的药水瓶/装备/食物的 id 不会再次出现</li><li>2-6/14/16-17保证所有 id 对应的冒险者均已存在</li><li>3/5/6/8保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>保证增加的装备，食物和药水瓶原本不存在</li><li>操作数满足1≤<em>n</em>≤2000</li><li>9-11保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>12-13 <strong>不</strong>保证以提到的 name 为名字的物品已经被携带</li><li>14保证战斗模式结束时，任意一个冒险者的体力均大于0</li><li>保证战斗日志出现的时候一定处于战斗模式</li><li>同一次战斗模式下，保证日志输入中日期随输入顺序<strong>单调不减</strong>；如果多次进入战斗模式，进入战斗模式的日期也随输入顺序<strong>单调不减</strong></li><li>保证 14 中所有 name 均存在，18-21 中所有 id 均存在，21 中冒险者一定拥有对应 id 的价值体</li><li>保证不会出现两个或多个冒险者之间循环雇佣的情况</li></ol>
              </div>
            </details>
<h1 id="关于第六次作业的解析与说明">关于第六次作业的解析与说明</h1><div  ><div class="note pink icon-padding modern"><p>第六次作业在第四次的基础上进行扩展，本文也从已经<strong>通过第四次作业强测</strong>的程序基础上进行讲解分析。 </p>
</div>
<div class="note primary modern"><p><strong><em>注意：划删除线的部分并非过时信息！</em></strong></p>
</div></div>
<h1 id="Part-1">Part 1</h1><h2 id="指导书要求分析">指导书要求分析</h2><p>这一部分就是上面的指导书内容，不再重复。</p>
<h2 id="具体分析">具体分析</h2><p>本次作业需要解决两个核心问题：</p>
<h3 id="实现Commodity接口">实现<code>Commodity</code>接口</h3><ul>
<li><code>Commodity</code>接口由<code>Adventure</code>、<code>Equipment</code>、<code>Bottle</code>、<code>Food</code>实现，需要在这四个类中实现接口中的方法</li>
<li><code>Commodity</code>接口提供两个抽象方法：<code>int getPrice()</code>和<code>String getClassName()</code>，<strong>分别用于获取该价值体的价值和所属类类名（运行时实际类的类名）
</strong><ul>
<li><code>getPrice</code>直接返回属性<code>price</code>，<code>getClassName</code>使用<code>getClass().getSimpleName()</code>获取类名（因为<code>Bottle</code>和<code>Equipment</code><br>实际类型是它们的子类）</li>
</ul>
</li>
<li><code>Adventure</code>类新增属性<code>HashMap&lt;Integer，Commodity&gt; commodities</code>，用于存储冒险者拥有的价值体，并且可以按照<code>id</code>快速查找</li>
</ul>
<h3 id="实现Bottle和Equipment的各三个子类">实现<code>Bottle</code>和<code>Equipment</code>的各三个子类</h3><ul>
<li><code>Bottle</code>和<code>Equipment</code>的各三个子类分别为<code>RegularBottle</code>、<code>ReinforcedBottle</code>、<code>RecoverBottle</code><br>和<code>RegularEquipment</code>、<code>CritEquipment</code>、<code>EpicEquipment</code></li>
<li>三个子类需要重写<strong>构造方法，以及使用这个对象时造成增益或者伤害的方法</strong>， 并按题意要求新增属性</li>
<li>在<code>Main</code>类添加装备和药水瓶时，需要根据输入的<code>type</code>来判断具体实例化哪个子类，可以使用<code>switch</code>语句；注意<code>other</code><br>参数可能为空，因此需要判断<code>orders</code>指令的长度</li>
</ul>
<h1 id="Part-2">Part 2</h1><p>Junit测试，<strong>按上个文档新增内容的格式基础上扩展即可</strong>。</p>
<h1 id="Part-3-bug修复记录">Part 3 bug修复记录</h1><h2 id="Bug-001">Bug 001</h2><h3 id="说明">说明</h3><p>给定的测试用例中，有一条指令为：</p>
<figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line">4 674341 573832 /MpITw8 0 165922655 EpicEquipment  0.728</span><br></pre></td></tr></table></figure>
<p><strong>检查发现，<code>EpicEquipment</code>和<code>0.728</code>之间有两个空格</strong>。<br>因此在处理指令时，<strong>按照原先以一个空格做为分隔符会出现<code>orders</code>数组长度为8的情况（多出一个空格字符串）</strong>。<br>解决方案是将分隔符改为<strong>一个及以上个空格</strong>，即<code>orders.split(&quot;\\s+&quot;);</code>。</p>
<h3 id="改动详情">改动详情</h3><p>在<code>Main.java</code>文件中：</p>
<figure class="highlight diff"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br></pre></td><td class="code"><pre><span class="line">//现第374行</span><br><span class="line"><span class="deletion">-  String[] strings = line.trim().split(&quot; &quot;); </span></span><br><span class="line"><span class="addition">+  String[] strings = line.trim().split(&quot;\\s+&quot;);</span></span><br></pre></td></tr></table></figure>
<h2 id="Bug-002">Bug 002</h2><h3 id="说明-1">说明</h3><p>对于雇佣的冒险者，当其本身的价值变化时，其雇主的价值也要变化。<br>当瓶子和食物因为使用被丢弃时，其拥有者的价值也要变化。</p>
<p>解决方案是：<br>修改<code>Adventure</code>类中的：<br><code>getPrice</code>方法，<strong>在计算价值时，用递归的方法一直计算到没有雇佣任何冒险者的冒险者，然后逐层返回就可以实现价值的更新</strong>。<br><code>useBottle</code>和<code>eatFood</code>方法，<strong>在使用完瓶子和食物达到丢弃条件时，更新价值并将其从<code>commodities</code>中移除</strong>。</p>
<h3 id="改动详情-1">改动详情</h3><p>只展示<code>getPrice</code>方法的修改。<br>在<code>Adventure.java</code>文件中：</p>
<figure class="highlight diff"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">//现第249行</span><br><span class="line"><span class="deletion">-        return this.price;</span></span><br><span class="line"><span class="addition">+        long totalPrice = 0;</span></span><br><span class="line"><span class="addition">+        for (Commodity commodity : commodities.values()) &#123;</span></span><br><span class="line"><span class="addition">+            totalPrice += commodity.getPrice();</span></span><br><span class="line"><span class="addition">+        &#125;</span></span><br><span class="line"><span class="addition">+        this.price = totalPrice;</span></span><br><span class="line"><span class="addition">+        return this.price;</span></span><br></pre></td></tr></table></figure>
