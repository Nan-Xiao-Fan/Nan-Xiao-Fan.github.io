---
hide: 
  - toc
---

# 操作过程模拟 - 项目演示

<div markdown="1" id="promptWindow">

> 操作指南见[操作说明](opsdoc.md)，点击开始模拟按钮开始演示。

</div>


<div class="center" id="beginWindow">
	<button type="button" class="defaultButton" onclick="beginWindow()"><span>开始模拟</span></button>
</div>
<div class="center" id="displayWindow" style="display: none">
	<div class="right">
		<button type="button" class="defaultButton" onclick="javascript:location.reload()"><span>重新开始</span></button>
	</div>
	<h2>外卖序列</h2>
	<p><span style="color: green">绿色</span>代表装满已锁<br><span style="color: blue">蓝色</span>代表装满未锁<span style="color: brown"><br>棕色</span>代表空柜已锁</p>
</div>

---

<div class="center" id="operatePane" style="display: none">
	<h2>操作序列</h2>
	<div class="center" id="operations"></div>
</div>

<style>
	.right {
		text-align: right;
	}
	.center {
		text-align: center;
	}
	.box {
		margin: 4px;
		border: solid 4px;
		height: 60px;
		width: 60px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
	.defaultButton {
		margin: 4px;
		border: solid 4px;
		border-radius: 10px;
		padding: 10px 10px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
</style>
<script src="/javascripts/opsroutine.js"></script>

