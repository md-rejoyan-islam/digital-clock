//Time(minute,second,hour) button selector
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");

// AM or PM button selector
const pam = document.getElementById("pam");


setInterval(() => {
	//Take Real Time 
	const newDate = new Date();
	let seconds = newDate.getSeconds();
	let minutes = newDate.getMinutes();
	let hours = newDate.getHours();

	// AM Or PM declaration
	(hours > 12) ? (hours = hours - 12, pam.innerHTML = "PM") : (hour = hours, pam.innerHTML = "AM");

	// if time value less than 10 than add zero their front.
	(seconds < 10) ? sec.innerHTML = `0${seconds}`: sec.innerHTML = seconds;
	(minutes < 10) ? min.innerHTML = `0${minutes}`: min.innerHTML = minutes;
	(hours < 10) ? hour.innerHTML = `0${hours}`: hours.innerHTML = hours

}, 1000);