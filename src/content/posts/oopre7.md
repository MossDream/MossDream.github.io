---
{
  "slug": "oopre7",
  "title": "BUAA-OOpre·笔记七",
  "description": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "excerpt": "本文章为北京航空航天大学2023秋季学期OOpre课程的学习笔记系列的，主要内容为Java语言的学习。",
  "published": "2023-10-28T02:25:40.000Z",
  "updated": "2023-11-03T13:04:21.222Z",
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

<h1 id="第七次作业指导书">第七次作业指导书</h1><h2 id="第零部分：提交要求-amp-amp-Junit要求">第零部分：提交要求 &amp;&amp; Junit要求</h2><p>请保证提交项目的顶层目录存在两个文件夹：<code>src</code>和<code>test</code>（命名需严格与此保持一致），请将作业的<strong>功能代码</strong>存放于<code>src</code>文件夹下，同时将相关<strong>junit测试类代码</strong>文件存放于<code>test</code>文件夹下，以保证评测的正常进行（评测时<strong>只会</strong>针对<code>src</code>目录下的文件进行程序<strong>功能</strong>的评测以及代码风格检测，也就是说，<code>test</code>目录下的junit测试代码风格不会被检测）。参考目录结构如下：</p>
<figure class="highlight plaintext"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br></pre></td><td class="code"><pre><span class="line">|-src</span><br><span class="line">  |- Bottle.java</span><br><span class="line">  |- Equipment.java</span><br><span class="line">  |- ...</span><br><span class="line">|-test</span><br><span class="line">  |- BottleTest.java</span><br><span class="line">  |- EquipmentTest.java</span><br><span class="line">  |- ...</span><br></pre></td></tr></table></figure>
<p>本次作业，要求Junit测试覆盖率<strong>保证</strong><code>method &gt;= 90％</code>，<code>line &gt;= 60%</code>，<code>branch &gt;= 60%</code>。（<code>idea</code>显示的覆盖率和<code>评测</code>测到的覆盖率可能略有差别，请同学们以评测为准。同时请不要使用<code>assert</code>进行断言以免造成不必要的覆盖率损失）</p>
<h2 id="第一部分：训练目标">第一部分：训练目标</h2><ul>
<li>掌握和理解设计模式的作用和意义</li>
<li>在作业中体验设计模式的理念</li>
</ul>
<h2 id="第二部分：题目描述">第二部分：题目描述</h2><h3 id="背景">背景</h3><p>本次作业将是面向对象先导课程的最后一次迭代开发，与前面不同的是，本次作业将围绕的不是某些java语法知识点，而是一些面向对象的设计模式。</p>
<h4 id="价值新定义">价值新定义</h4><p>本次作业新增金钱的概念，为冒险者的属性，在计算价值体的价值时，若该价值体为冒险者，<strong>则需要，在将其所有价值体价值求和后增加其本身拥有的金钱</strong></p>
<h4 id="商店">商店</h4><p>在本次作业中，我们引入商店的概念。在作业中，商店将有且仅有一个。</p>
<p>为了防止直接删除造成的浪费，在指令3,5,8中，冒险者会选择不再直接删除物品（<strong>注明，尝试使用空瓶所导致的丢弃不进行此改变，依旧选择不与商店接触的直接删除</strong>），而是会去往商店售卖该物品，获得和其价值相等的金钱。（售卖后的物品不再参与后续行为，状态与之前作业中被删除后相同）同时，商店会对此次买入的基本类型名称和物品特征做记录。基本类型分为装备、药水瓶、食物三种。</p>
<p>冒险者可以通过输入的方式给商店提出购买需求（指令23），然后商店会按照当前自身的记录和购买的需求来卖给冒险者<strong>新的物品</strong>，商店的卖出行为 <strong>不做任何记录</strong>。此处的 <strong>新的物品</strong>代表该物品id不曾在当前程序运行中出现，可以认为商店在收到冒险者的购买需求后立刻新创造了一个符合需求的物品返回给冒险者</p>
<p>购买规则为：冒险者提供所需物品的 ID、名字和类型(如果类型非<code>RegularBottle</code> <code>Food</code> <code>RegularEquipment</code>三个普通物品之一，则会额外提供其对应特殊属性,详见输入说明部分)，商店对当前<strong>该类型所属基本类型</strong>的所有交易记录的金额求平均值并向下取整，得到价格A。假如冒险者当前的金钱数值大于等于A，则冒险者的金钱数值减少A，并且成功购买。否则购买失败，冒险者和商店状态不产生任何变化。</p>
<p>购买得到的物品属性满足:</p>
<ul>
<li>若物品的类型属于药水瓶，则其容量为所有药水瓶交易记录的容量求平均并向下取整,默认为满</li>
<li>若物品的类型属于装备，则其星级为所有装备交易记录的星级平均并向下取整</li>
<li>若物品的类型属于食物，则其能量为所有食物交易记录的能量平均并向下取整</li>
<li>物品的价格为所有同基本类型交易记录的价格平均并向下取整</li>
</ul>
<p>其中，类型指：<code>Food</code>，<code>RegularBottle</code>，<code>ReinforcedBottle</code>，<code>RecoverBottle</code>，<code>RegularEquipment</code>，<code>CritEquipment</code>，<code>EpicEquipment</code> </p>
<p>基本类型包括药水瓶<code>Bottle</code>，食物<code>Food</code>,装备<code>Equipment</code>，在记录和计算交易价格时按照基本类型分类</p>
<h4 id="援助">援助</h4><p>在第六次作业作业的雇佣基础上，本次作业增加援助功能。</p>
<p>被冒险者A雇佣的冒险者们需要密切关注A的体力状态。当冒险者A进入战斗状态时，被A雇佣的冒险者们会记录A当前的体力。当冒险者A从此战斗状态退出后，若A当前体力值不大于进入战斗前的一半（该数值向下取整），假设A在此战斗模式种损失的体力为$a$,则所有被A雇佣的冒险者都会尝试给A  $a<em>10000$ 的金钱（假设某个被雇佣的冒险者持有的金钱少于此数值，则给A它剩余全部的金钱）<em>*结算顺序按照进入战斗模式的顺序，例如，按照<code>adv_name_1</code>,<code>adv_name_2</code>的顺序进入战斗模式，则应按照<code>adv_name_1</code>,<code>adv_name_2</code>的顺序依次判断是否需要被援助并给予援助</em></em></p>
<p>为了防止歧义：有且仅有通过18号指令才能建立雇佣关系，也即，若A雇佣B，B雇佣C，而A未在18号指令中雇佣C，则C不被视为被A雇佣的冒险者，C也不用在A退出战斗模式的时候给A金钱。）</p>
<h3 id="操作要求">操作要求</h3><p>在本次作业中，初始时，你没有需要管理的冒险者，有且仅有一家没有任何记录的商店，我们通过若干条操作指令来修改当前的状态：</p>
<p>（<strong>新增指令22~23，指令3,5,8意义有变，19-20行为有变</strong>）</p>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>加入一个需要管理的冒险者（新加入的冒险者不携带任何药水瓶、食物和装备，并且等级为 $1$，初始体力为 $500$）</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个药水瓶</p>
            </div>
<div class='checkbox green checked'><input type="radio" checked="checked"/>
            <p>卖出某个冒险者的某个药水瓶</p>
            </div>
<div class='checkbox yellow checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者增加一个装备</p>
            </div>
<div class='checkbox cyan checked'><input type="radio" checked="checked"/>
            <p>卖出某个冒险者的某个装备</p>
            </div>
<div class='checkbox blue checked'><input type="radio" checked="checked"/>
            <p>给某个冒险者的某个装备提升一个星级（星级加1）</p>
            </div>
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>给冒险者增加一个食物</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>卖出冒险者的一个食物</p>
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
<div class='checkbox purple checked'><input type="radio" checked="checked"/>
            <p>将冒险者携带的所有物品卖出</p>
            </div>
<div class='checkbox red checked'><input type="radio" checked="checked"/>
            <p>冒险者尝试从商店购买一件物品</p>
            </div>
<p>其中，卖出的意思是，冒险者失去该物品（对冒险者而言，和第二次作业到第六次作业的删除效果相同），同时，冒险者的金钱增加，增加的数值为该物品的价值，商店增加一条该物品的类型的记录。</p>
<h3 id="输入格式">输入格式</h3><p>第一行一个整数 <strong>n</strong>，表示操作的个数。</p>
<p>接下来的 n 个指令，每条指令占一行，是一个形如 <code>&#123;type&#125; &#123;attribute&#125;</code> 的操作，<code>&#123;type&#125;</code> 和 <code>&#123;attribute&#125;</code> 间、若干个 <code>&#123;attribute&#125;</code> 间使用<strong>若干</strong>个空格分割，操作输入形式及其含义如下。战斗日志的内容同样每条占一行，但是<strong>注意战斗日志内容不属于指令，指令数目n中不包含战斗日志占有的行数</strong></p>
<p>在<strong>操作14中</strong>，除了本身的指令占一行外，其余的fightLog每条占一行。保证操作14除了fightLog外所有<code>&#123;type&#125;</code> <code>&#123;attribute&#125;</code>均在一行内<br><details class="folding-tag" cyan open><summary> 具体要求表 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>type</th><th>attribute</th><th>意义</th><th>输出（每条对应占一行）</th></tr></thead><tbody><tr><td>1</td><td><code>{adv_id} {name}</code></td><td>加入一个 ID 为 <code>{adv_id}</code>、名字为 <code>{name}</code> 的冒险者</td><td>无</td></tr><tr><td>2</td><td><code>{adv_id} {bot_id} {name} {capacity} {price} {type} {others}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个药水瓶，药水瓶的 ID、名字、容量、价值、类型、其他属性分别为 <code>{bot_id}</code>、<code>{name}</code>、<code>{capacity}</code>、<code>{price}</code>、<code>{type}</code>、<code>{others}</code>，关于其他属性在上文有具体定义，<strong>且默认为已装满</strong>(<code>isEmpty</code>==<code>false</code>)</td><td>无</td></tr><tr><td>3</td><td><code>{adv_id} {bot_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{bot_id}</code> 的药水瓶卖出</td><td><code>{一个整数} {一个字符串}</code>，整数为卖出后冒险者药水瓶数目，字符串为删除的药水瓶的name</td></tr><tr><td>4</td><td><code>{adv_id} {equ_id} {name} {star} {price} {type} {others}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个装备，装备的 ID、名字、星级、价值、类型、其他属性分别为 <code>{equ_id}</code>、<code>{name}</code>、<code>{star}</code>、<code>{price}</code>、<code>{type}</code>、<code>{others}</code>，关于其他属性在上文有具体定义</td><td>无</td></tr><tr><td>5</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备卖出</td><td><code>{一个整数} {一个字符串}</code>，整数为卖出后冒险者装备数目，字符串为删除的装备的name</td></tr><tr><td>6</td><td><code>{adv_id} {equ_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{equ_id}</code> 的装备提升一个星级</td><td><code>{一个字符串} {一个整数}</code>，字符串为装备的name，整数为装备升星后的星级</td></tr><tr><td>7</td><td><code>{adv_id} {food_id} {name} {energy} {price}</code></td><td>给 ID 为 <code>{adv_id}</code> 的冒险者增加一个食物，食物的 ID、名字、能量、价值分别为 <code>{food_id}</code>、<code>{name}</code>、<code>{energy}</code>、<code>{price}</code></td><td>无</td></tr><tr><td>8</td><td><code>{adv_id} {food_id}</code></td><td>将 ID 为 <code>{adv_id}</code> 的冒险者的 id 为 <code>{food_id}</code> 的食物卖出</td><td><code>{一个整数} {一个字符串}</code>，整数为卖出后冒险者食物数目，字符串为删除的食物的name</td></tr><tr><td>9</td><td><code>{adv_id} {equ_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{equ_id}</code> 的装备</td><td>无</td></tr><tr><td>10</td><td><code>{adv_id} {bot_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{bot_id}</code> 的瓶子</td><td>无</td></tr><tr><td>11</td><td><code>{adv_id} {food_id}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试携带ID为 <code>{food_id}</code> 的食物</td><td>无</td></tr><tr><td>12</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用他拥有的名字为<code>{name}</code>的药水瓶</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该被使用药水瓶的id，整数B为该冒险者使用该药水瓶后的体力值                                                                                 失败： <code>fail to use {name}</code>(其中name为输入中的name)</td></tr><tr><td>13</td><td><code>{adv_id} {name}</code></td><td>ID 为 <code>{adv_id}</code> 的冒险者尝试使用他拥有的名字为<code>{name}</code>的食物</td><td>成功：<code>{一个整数A} {一个整数B}</code>，整数A为该食物的id，整数B为该冒险者使用该食物后的等级                  失败：  <code>fail to eat {name}</code>(其中name为输入中的name)</td></tr><tr><td>14</td><td><code>m k {adv_id_1} {adv_name_2}</code> …<code>{adv_name_m}</code></td><td><code>m</code> 为进入战斗模式的人数，<code>k</code> 为此次战斗模式下战斗日志的条数，name 为 <code>{adv_name_j}</code> 的冒险者进入战斗模式，m,k和name均在同一行。接下来的 <code>k</code> 行均为战斗日志</td><td>首先第一行输出 <code>Enter Fight Mode</code> ，接下来 k 行输出 k 条战斗日志的反馈，参见下文关于战斗日志输出的表格</td></tr><tr><td>15</td><td><code>yyyy/MM</code></td><td>查询在 <code>yyyy/MM</code> 发生的有效战斗日志</td><td>按输入的顺序每条日志输出一行：使用药水：<code>yyyy/MM {adv_name_1} used {name}</code>、一对一攻击：<code>yyyy/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>yyyy/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>16</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>攻击者</strong>的有效战斗日志</td><td>按输入的顺序每条日志输出一行：一对一攻击：<code>yyyy/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>yyyy/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>17</td><td><code>adv_id</code></td><td>查询 id 为 <code>adv_id</code> 的冒险者在战斗模式下作为<strong>被攻击者</strong>的有效战斗日志</td><td>按输入的顺序每条日志输出一行：一对一攻击：<code>yyyy/MM {adv_name_1} attacked {adv_name_2} with {name}</code>、一对多攻击：<code>yyyy/MM {adv_name_1} AOE-attacked with {name}</code>。如果不存在符合条件的日志，输出<code>No Matched Log</code></td></tr><tr><td>18</td><td><code>{adv_id1} {adv_id2}</code></td><td>ID 为<code>adv_id1</code>的冒险者雇佣 ID 为<code>adv_id2</code>的冒险者，<strong>对于多次出现的雇佣关系仅算作一次雇佣</strong></td><td>无</td></tr><tr><td>19</td><td><code>{adv_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有<strong>价值体</strong>的数量与价值之和<br/>如果价值体是装备、药水瓶或食物，则价值就是 <code>price</code>，对数量的贡献是 1 <br/>如果价值体是冒险者，则其价值计算按照本次作业最开始定义的规则，对数量的贡献也是 1，不需要考虑被雇佣冒险者所拥有的其他价值体</td><td><code>{一个整数 A} {一个整数 B}</code>，整数 A 表示某冒险者所拥有<strong>价值体</strong>数量，整数 B 表示某人所有<strong>价值体</strong>的价值总和</td></tr><tr><td>20</td><td><code>{adv_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有<strong>价值体</strong>的价值的最大值<br>如果价值体是装备、药水瓶或食物，则价值就是 <code>price</code> <br>如果价值体是冒险者，则其价值计算按照本次作业最开始定义的规则</td><td><code>{一个整数}</code>，表示该冒险者所持有<strong>价值体</strong>的价值的最大值，若不持有价值体则输出 <code>0</code></td></tr><tr><td>21</td><td><code>{adv_id} {com_id}</code></td><td>查询 ID 为 <code>{adv_id}</code> 的冒险者所持有的 ID 为 <code>{com_id}</code> 的价值体所属类的类名</td><td>一个字符串 <code>Commodity whose id is {com_id} belongs to {x}</code>，其中<code>{com_id}</code>为价值体的 ID，<code>{x}</code> 为 <code>Adventurer</code>，<code>Food</code>，<code>RegularBottle</code>，<code>ReinforcedBottle</code>，<code>RecoverBottle</code>，<code>RegularEquipment</code>，<code>CritEquipment</code>，<code>EpicEquipment</code>中价值体所属类的类名</td></tr><tr><td>22</td><td><code>{adv_id}</code></td><td>ID为<code>{adv_id}</code>的冒险者卖出它携带的所有物品</td><td><code>{冒险者name} emptied the backpack {一个整数}</code>，整数表示本次卖出所有携带物品所获得的金钱之和</td></tr><tr><td>23</td><td><code>{adv_id}</code>  <code>{id}</code> <code>{name}</code> <code>{type}</code> <code>{others}</code></td><td>ID为<code>{adv_id}</code>的冒险者尝试购买ID为<code>{id}</code> 的物品，其名字为<code>{name}</code>该物品的属性为<code>{others}</code></td><td>购买成功：<code>successfully buy {name} for {购买价格}</code>                                                                  购买失败：<code>failed to buy {name} for {购买价格}</code></td></tr></tbody></table></div><p>保证<code>{others}</code>的输入和<code>{adv_id}</code>  <code>{id}</code> <code>{name}</code> <code>{type}</code>在同一行内。</p><p>同时，在19号的查询中，<strong>自己所拥有的金钱不算自己持有的价值体，因此不用计算在内</strong>，这一点和计算冒险者价值时有所不同，希望同学们注意。</p>
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
<h3 id="购买指令-23-不同物品的-others-输入">购买指令(23)不同物品的{others}输入</h3><p>下表展示了23号指令中<code>&#123;others&#125;</code>不同类型对应的输入，无代表没有<code>&#123;others&#125;</code>部分的输入，<code>&#123;&#125;</code>内的变量符合数据限制中的要求</p>
<div class="table-container">
<table>
<thead>
<tr>
<th>type</th>
<th>others</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>RegularBottle</code></td>
<td>无</td>
</tr>
<tr>
<td><code>RecoverBottle</code></td>
<td><code>&#123;ratio&#125;</code></td>
</tr>
<tr>
<td><code>ReinforcedBottle</code></td>
<td><code>&#123;ratio&#125;</code></td>
</tr>
<tr>
<td><code>RegularEquipment</code></td>
<td>无</td>
</tr>
<tr>
<td><code>CritEquipment</code></td>
<td><code>&#123;critical&#125;</code></td>
</tr>
<tr>
<td><code>EpicEquipment</code></td>
<td><code>&#123;ratio&#125;</code></td>
</tr>
<tr>
<td><code>Food</code></td>
<td>无</td>
</tr>
</tbody>
</table>
</div>
<h3 id="样例">样例</h3><div class="tabs" id="7-1"><ul class="nav-tabs"><li class="tab active"><button type="button" data-href="#7-1-1">输入</button></li><li class="tab"><button type="button" data-href="#7-1-2">输出</button></li></ul><div class="tab-contents"><div class="tab-item-content active" id="7-1-1"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br><span class="line">5</span><br><span class="line">6</span><br><span class="line">7</span><br><span class="line">8</span><br><span class="line">9</span><br><span class="line">10</span><br><span class="line">11</span><br><span class="line">12</span><br></pre></td><td class="code"><pre><span class="line">11</span><br><span class="line">1 123 advName</span><br><span class="line">7 123 1 foodName 11 10000</span><br><span class="line">4 123 2 equName 10 20000 RegularEquipment</span><br><span class="line">2 123 3 botName 10 30000 RegularBottle</span><br><span class="line">2 123 11 botName2 10 55000 RegularBottle</span><br><span class="line">10 123 11</span><br><span class="line">10 123 3</span><br><span class="line">22 123</span><br><span class="line">23 123 5 bot RegularBottle</span><br><span class="line">23 123 6 bot RegularBottle</span><br><span class="line">23 123 7 bot RegularBottle</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div><div class="tab-item-content" id="7-1-2"><figure class="highlight text"><table><tr><td class="gutter"><pre><span class="line">1</span><br><span class="line">2</span><br><span class="line">3</span><br><span class="line">4</span><br></pre></td><td class="code"><pre><span class="line">advName emptied the backpack 85000</span><br><span class="line">successfully buy bot for 42500</span><br><span class="line">successfully buy bot for 42500</span><br><span class="line">failed to buy bot for 42500</span><br></pre></td></tr></table></figure><button type="button" class="tab-to-top" aria-label="scroll to top"></button></div></div></div>
<h3 id="数据限制">数据限制</h3><h5 id="变量约束">变量约束</h5><details class="folding-tag" red><summary> 变量约束 </summary>
              <div class='content'>
              <div class="table-container"><table><thead><tr><th>变量</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>name</code></td><td>字符串</td><td>保证不会出现空白字符, <code>@</code>, <code>-</code>, <code>#</code> ,长度范围(0,40)</td></tr><tr><td><code>capacity</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>star</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>level</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>hitPoint</code></td><td>整数</td><td>取值范围：1 - 2147483647</td></tr><tr><td><code>energy</code></td><td>整数</td><td>取值范围： 0-2147483647</td></tr><tr><td><code>ratio</code></td><td>浮点数</td><td>0 &lt; <code>ratio</code> &lt; 1，double 精度范围内</td></tr><tr><td><code>price</code></td><td>长整数</td><td>所有价值体的价值均在 long 精度范围内，且保证不小于0</td></tr><tr><td><code>critical</code></td><td>整数</td><td>取值范围：0 - 2147483647</td></tr><tr><td><code>money</code></td><td>长整数</td><td>long 精度范围内，且保证不小于0</td></tr><tr><td><code>type</code></td><td>字符串</td><td>出现时必定为<code>Adventurer</code>，<code>Food</code>，<code>RegularBottle</code>，<code>ReinforcedBottle</code>，<code>RecoverBottle</code>，<code>RegularEquipment</code>，<code>CritEquipment</code>，<code>EpicEquipment</code> 中的一个</td></tr></tbody></table></div><p>表格中a-b指变量范围为[a,b]</p><p>注意，变量约束指的是，在程序正确运行时，输入和对应属性值均保证在表格中给出的范围内</p><p>在本次作业的数据中<strong>不会</strong>存在money的实际值超过long范围的情况，但是如果一个情景存在超过long的需求呢？请同学们自行了解Java中的BigInteger类，以应对今后学习工作中的情况。</p>
              </div>
            </details>
<h5 id="操作约束">操作约束</h5><details class="folding-tag" yellow><summary> 操作约束 </summary>
              <div class='content'>
              <ol><li><strong>保证所有的冒险者、药水瓶、装备、食物 id 均不相同，冒险者之间的name均不相同</strong></li><li>保证删除了的药水瓶/装备/食物的 id 不会再次出现</li><li>2-6/14/16-17保证所有 id 对应的冒险者均已存在</li><li>3/5/6/8 保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>保证增加的装备，食物和药水瓶原本不存在</li><li>操作数满足1≤<em>n</em>≤2000</li><li>9-11保证该冒险者拥有操作中提到 id 的药水瓶/装备/食物</li><li>12-13 <strong>不</strong>保证以提到的 name 为名字的物品已经被携带</li><li>14保证战斗模式结束时，任意一个冒险者的体力均大于0</li><li>保证战斗日志出现的时候一定处于战斗模式</li><li>同一次战斗模式下，保证日志输入中日期随输入顺序<strong>单调不减</strong>；如果多次进入战斗模式，进入战斗模式的日期也随输入顺序<strong>单调不减</strong></li><li>保证 14 中所有 name 均存在，18-21 中所有 id 均存在，21 中冒险者一定拥有对应 id 的价值体</li><li>保证不会出现两个或多个冒险者之间循环雇佣的情况</li><li>保证单个数据点内冒险者数目不会超过15</li><li>保证冒险者从商店购买该类型物品前已经有对该类型物品的购买记录</li><li>23保证购买物品的 id 原本不存在</li></ol>
              </div>
            </details>