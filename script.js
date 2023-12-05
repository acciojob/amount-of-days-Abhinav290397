//your JS code here. If required.
function daysOfAYear(year){
	if(year%4 != 0)return 365;
	if(year%4 == 0){
		if(year%100 ==0)return 365;
		else return 366;
	}
	if(year%100 == 0){
		if(year%400 == 0)return 366;
		return 365;
	}
}
