# 操作过程演示

<div class="center" id="beginWindow">
	<button type="button" class="defaultButton" onclick="beginWindow()"><p>开始模拟</p></button>
</div>
<div class="center" id="displayWindow" style="display: none">
	<h2>外卖序列</h2>
	<p><span style="color: green">绿色</span>代表装满已锁<br><span style="color: blue">蓝色</span>代表装满未锁<span style="color: brown"><br>棕色</span>代表空柜已锁</p>
</div>

---

<div class="center" id="operatePane" style="display: none">
	<h2>操作序列</h2>
	<div class="center" id="operations"></div>
</div>

<style>
	.center {
		text-align: center;
	}
	.box {
		margin: 4px;
		border: solid 4px;
		padding: 0 1em;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
	.defaultButton {
		margin: 4px;
		border: solid 4px;
		border-radius: 10px;
		padding: 0 1em;
		text-align: center;
		text-decoration: none;
		display: inline-block;
	}
</style>
<script src="../opsroutine.js"></script>