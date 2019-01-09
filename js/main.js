$(document).ready(function(){
	$('.main-visual-list').bxSlider({
			auto:true,
			controls:false,
			autoControls:true,
			autoControlsCombine:true
			});
});

/*calendar*/
function init(){
	var today = new Date();
	
	function calendar() {
		var thisYear = today.getFullYear(); //2018년
		var thisMonth = today.getMonth(); //11월
		var thisDate = today.getDate(); //27일

		
		var firstDay = new Date(thisYear, thisMonth, 1).getDay();
		

		
		var arrLastNum = [31,28,31,30,31,30,31,31,30,31,30,31];
		
		if (thisYear % 4 == 0 && thisYear % 100 != 0 || thisYear % 400 == 0){
			arrLastNum[1] = 29;
		}
		var thisLastNum = arrLastNum[thisMonth];
		
		var rowNum = Math.ceil( (firstDay + thisLastNum) / 7);
		
		var str = '<table>';
		str += '<thead>';
		str += '<tr>';
		str += '<th scope="col">일</th>';
		str += '<th scope="col">월</th>';
		str += '<th scope="col">화</th>';
		str += '<th scope="col">수</th>';
		str += '<th scope="col">목</th>';
		str += '<th scope="col">금</th>';
		str += '<th scope="col">토</th>';
		str += '</tr>';
		str += '</thead>';
		str += '<tbody>';
		/*str += '<tr>';
		str += '<td>1</td>';
		str += '<td>2</td>';
		str += '<td>3</td>';
		str += '<td>4</td>';
		str += '<td>5</td>';
		str += '<td>6</td>';
		str += '<td>7</td>';
		str += '</tr>';*/

		var dayNum  = 1;
		for (var i = 1; i <= rowNum; i++){
			str += '<tr>'
			for (var k = 1; k <= 7; k++){
				if (i == 1 && k <= firstDay || dayNum > thisLastNum ){
					str += '<td> </td>';
				} else {
					str += '<td onclick=location.href="http://naver.com" style="cursor:pointer">' + dayNum + '</td>';
					dayNum++;
				}
			}
				
			str += '</tr>';
		}
		
		str += '</tbody>';
		str += '</table>';
		var innerCalendar = document.querySelector('.event-wrap > #calendar-1 > .inner-calendar');
		innerCalendar.innerHTML = str;
		var ct = document.querySelector('.calendar-txt');
		ct.innerHTML = thisYear + '. ' + (thisMonth + 1);
	}
	calendar();
	
	var btn1 = document.querySelector('.btnNext');
	var btn2 = document.querySelector('.btnPrev');

	btn1.onclick = nextMonth;
	btn2.onclick = prevMonth;

	function nextMonth() {
		today.setMonth(today.getMonth() + 1);
		calendar();
	}

	function prevMonth() {
		today.setMonth(today.getMonth() - 1);
		calendar();
	}
}
if (window.addEventListener) {
	window.addEventListener('load',init);
} else {
	window.attachEvent('onload',init);
}

