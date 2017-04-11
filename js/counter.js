// alert('hello world!');

var status = 0;
var mSec = 0;
var sec = 0;
var min = 0;
var hr = 0;
var time;
var timerLabel = document.getElementById('timer');
var btnStart = document.getElementById('btnStart');
var btnReset = document.getElementById('btnReset');

btnStart.addEventListener('click', startPause);
btnReset.addEventListener('click', reset);

function startPause() {
	if (btnStart.innerHTML == 'Start') {
		btnStart.innerHTML = 'Pause';
		btnStart.classList.remove('btn-success');
		btnStart.classList.add('btn-primary');
		status = 1;
		timer();
	} else {
		btnStart.innerHTML = 'Start';
		btnStart.classList.remove('btn-primary');
		btnStart.classList.add('btn-success');
		status = 0;
	}
}

function reset() {
	btnStart.innerHTML = 'Start';
	btnStart.classList.remove('btn-primary');
	btnStart.classList.add('btn-success');
	status = 0;
	clearTimeout(time);
	mSec = 0;
	sec = 0;
	min = 0;
	hr = 0;
	timerLabel.innerHTML = '00:00:00.000';
}

function timeStyle() {
	var styleHr = 0; 
	var styleMin = 0; 
	var styleSec = 0; 
	var styleMsec = 0; 
	
	if ((mSec >= 10) && (mSec < 100)) {
		styleMsec = '0' + mSec; 
	} else {
		if (mSec < 10) {
			styleMsec = '00' + mSec;
		} else styleMsec = mSec;
	}
	if (sec < 10) {
		styleSec = '0' + sec;
	} else styleSec = sec;
	if (min < 10) {
		styleMin = '0' + min;
	} else styleMin = min;
	if (hr < 10) {
		styleHr = '0' + hr;
	} else styleHr = hr;

	var result =  styleHr + ':' + styleMin + ':' + styleSec + '.' + styleMsec ;
	return result; // 
}

function timer() {
	if (status == 1) {
		mSec += 4;
		if (mSec >= 999) {
			mSec = 0;
			sec++;
		}
		if (sec == 60) {
			sec = 0;
			min++;
		}
		if (min == 60) {
			min = 0;
			hr++;
		}

		var styleTimer = timeStyle();
		timerLabel.innerHTML = styleTimer;
		time = setTimeout('timer()', 1);
	}
}
