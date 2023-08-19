const displayWindow = document.getElementById('displayWindow');
const operatePane = document.getElementById('operatePane');
const operations = document.getElementById('operations');
const N = 9;
let boxs = [];
let selectBox = [];
let isFull = [];
let isLock = [];
let takeaway = [];
let nowSelect = -1;
const beginWindow = () => {
	const beginWindow = document.getElementById('beginWindow');
	const promptWindow = document.getElementById('promptWindow');
	beginWindow.style.display = 'none';
	promptWindow.style.display = 'none';
	displayWindow.style.display = 'block';
	
	gameInit();
}
const gameInit = () => {
	for (let i = 0; i < N; i++) {
		let box = document.createElement('button');
		box.type = 'button';
		box.classList.add('box');
		box.innerHTML = "<span>" + (i+1).toString() + "</span>"
		box.onclick = () => {clickBox(i);}
		boxs.push(box);
		selectBox.push(0);
		isFull.push(0);
		isLock.push(0);
		takeaway.push(new Array);
		displayWindow.appendChild(box);
	}
}
const getBox = (i) => {
	boxs[i].style.borderColor = 'red';
}
const ungetBox = (i) => {
	boxs[i].style.borderColor = '';

}
const clickBox = (i) => {
	selectBox[i] ^= 1;
	if (selectBox[i]) {
		if (nowSelect !== -1) {
			selectBox[nowSelect] = 0;
			ungetBox(nowSelect);
		}
		getBox(i);
		nowSelect = i;
	} else {
		ungetBox(i);
		nowSelect = -1;
	}
	showOperatePane();
}
const changeBoxStatus = (i) => {
	const subh = boxs[i].firstChild;
	if (isFull[i]) {
		if (isLock[i]) {
			subh.style.color = 'white';
			boxs[i].style.backgroundColor = 'green';
		}
		else {
			subh.style.color = 'white';
			boxs[i].style.backgroundColor = 'blue';
		}
	} else {
		if (isLock[i]) {
			subh.style.color = 'white';
			boxs[i].style.backgroundColor = 'brown';
		}
		else {
			subh.style.color = '';
			boxs[i].style.backgroundColor = '';
		}
	}
}

const showOperatePane = () => {
	if (nowSelect === -1) {
		operatePane.style.display = 'none';
	} else {
		operatePane.style.display = 'block';
		showOperations();
	}
}

const cfullButton = () => {
	const x = nowSelect;
	if (!isFull[x] && isLock[x])
		return;
	const cfull = document.createElement('button');
	cfull.type = 'button';
	cfull.classList.add('defaultButton');
	if (isFull[x]) {
		cfull.innerHTML = '<span>' + (isLock[x] ? '解锁' : '') + '取餐</span>';
		cfull.onclick = () => {
			if (isLock[x]) {
				const answer = prompt('取 ' + (x+1).toString()+ ' 号外卖。\n学生请在终端机上刷卡选择解锁；\n社会人士请联系保安登记取走。\n你的标识号为：');
				if (answer === null) {
					return ;
				}
				takeaway[x].push(answer);
			}
			isFull[x] = isLock[x] = 0;
			changeBoxStatus(x);
			showOperatePane();
		}
	} else {
		cfull.innerHTML = '<span>放餐</span>';
		cfull.onclick = () => {
			isFull[x] = 1;
			changeBoxStatus(x);
			showOperatePane();
		}
	}
	operations.appendChild(cfull);
}
const clockButton = () => {
	const x = nowSelect;
	if (isFull[x] && isLock[x])
		return;
	const clock = document.createElement('button');
	clock.type = 'button';
	clock.classList.add('defaultButton');
	if (!isLock[x]) {
		clock.innerHTML = '<span>上锁</span>';
		clock.onclick = () => {
			isLock[x] = 1;
			changeBoxStatus(x);
			showOperatePane();
		}
	} else {
		clock.innerHTML = '<span>（管理员）处理空锁</span>';
		clock.onclick = () => {
			isLock[x] = 0;
			changeBoxStatus(x);
			showOperatePane();
		}
	}
	operations.appendChild(clock);
}
const cstealButton = () => {
	const x = nowSelect;
	const csteal = document.createElement('button');
	csteal.type = 'button';
	csteal.classList.add('defaultButton');
	csteal.innerHTML = '<span>外卖被偷举报</span>';
	csteal.onclick = () => {
		if (takeaway[x].length === 0) {
			alert('在信息化中心查询...\n第 ' + (x+1).toString() + ' 号外卖锁过去无外卖取出');
		} else {
			let ret = '在信息化中心查询...\n第 ' + (x+1).toString() + ' 号外卖锁过去共有 ' + takeaway[x].length.toString() + ' 人取出外卖：\n';
			for (let i = 0; i < takeaway[x].length; i++) {
				ret += (i+1).toString() + ': ' + takeaway[x][i] + '\n';
			}
			alert(ret);

		}
		showOperatePane();
	}
	operations.appendChild(csteal);
}
const crobButton = () => {
	const x = nowSelect;
	if (!isFull[x] || !isLock[x])
		return;
	const crob = document.createElement('button');
	crob.type = 'button';
	crob.classList.add('defaultButton');
	crob.innerHTML = '<span>强行扯袋取走</span>';
	crob.onclick = () => {
		alert('动作过大，被保安扭送带走。');
		showOperatePane();
	}
	operations.appendChild(crob);
}
const showOperations = () => {
	operations.innerHTML = '';
	cfullButton();
	clockButton();
	cstealButton();
	crobButton();
}