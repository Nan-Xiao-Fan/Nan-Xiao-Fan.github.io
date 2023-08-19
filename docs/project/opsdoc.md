# 操作过程模拟 - 操作说明

[项目演示](opsroutine.md)涵盖了大部分情况下该外卖存取方案的操作逻辑，以下是对其的解释。

## 格子的四种状态

对于每一个格子（代表实际情况中的一个外卖存放点位），有一下四种状态：

1. <b>白格子</b>：表示该格子为空，且没有上锁，即可以存放外卖。
2. <span style="color: blue"><b>蓝格子</b></span>：表示该格子已经装满外卖，但是没有上锁，容易被盗取。
3. <span style="color: green"><b>绿格子</b></span>：表示该格子已经装满外卖，且已经上锁，不容易被盗取。
4. <span style="color: brown"><b>棕格子</b></span>：表示该格子为空，但是被上锁，是一种错误状态，需要管理员进行纠正。

<div align="center">
<img src="/img/opsdoc1.png">
</div>

## 存外卖

外卖员到达后，选择一个<b>白格子</b>，先将外卖放入其中（此时该格则被装满，变为<span style="color: blue"><b>蓝格子</b></span>），再上锁变为<span style="color: green"><b>绿格子</b></span>。另外，外卖员还需要将带有格子编号的外卖照片发给顾客。此时外卖员的工作就完成了。

<div align="center">
<img src="/img/opsdoc2.gif">
</div>

## 取外卖

### 取外卖 - 对于<span style="color: green"><b>绿格子</b></span>

<span style="color: green"><b>绿格子</b></span>是最安全的格子，要取出外卖，需要进行记录：

- 对学生而言，需要在终端机上选择所取格的编号，并**刷校园卡**开锁，从而会留下学号的记录；
- 对于社会人士，需要在保安/志愿者处登记外卖存取情况，由保安开锁。

于是，这极大地提高了偷取外卖的难度和风险。

<div align="center">
<img src="/img/opsdoc3.gif">
</div>

### 取外卖 - 对于<span style="color: blue"><b>蓝格子</b></span>

不幸的是，有些情况下外卖员忘记上锁，此时格子仍然是<span style="color: blue"><b>蓝格子</b></span>，此时取外卖的人直接取出外卖即可，不需要进行记录。这警示我们**一定要提醒外卖员进行上锁**。

<div align="center">
<img src="/img/opsdoc4.gif">
</div>

## 空锁故障

有时候因为误触和恶作剧等原因，格子是空的却被上了锁，此时格子是<span style="color: brown"><b>棕格子</b></span>，需要保安/志愿者进行纠正，开锁，将其变为<b>白格子</b>。

<div align="center">
<img src="/img/opsdoc5.gif">
</div>

## 盗取溯源

在<span style="color: green"><b>绿格子</b></span>的情况下，如果有人通过正常手段开锁（“盗”外卖），在失主找到时，可以到信息化中心处查询外卖柜的历史记录，从而找到盗取者的学号/登记信息，进而找到盗取者。这极大地增大了偷取外卖的风险。

<div align="center">
<img src="/img/opsdoc6.gif">
</div>

## 暴力拆袋

在<span style="color: green"><b>绿格子</b></span>的情况下，如果有人不按照正常状态开锁（“抢”外卖），试图直接通过扯开外卖袋的方式取出外卖，这是非常显眼的，会被保安/志愿者发现，这极大地增大了偷取外卖的风险。

<div align="center">
<img src="/img/opsdoc7.gif">
</div>

<style>

img {
	width: 600px;
	height: auto;
	display: block;
	margin: 0 auto;
	border: 2px solid;
	border-radius: 20px;
}
</style>