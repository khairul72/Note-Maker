function date_picker(){
	var date_picker_win = Ti.UI.createWindow({
		backgroundColor: 'white',
		layout: 'vertical'
	});
	
	var date_picker = Ti.UI.createPicker({
/*		left : 0,
		backgroundColor : 'black',
		type : Ti.UI.PICKER_TYPE_DATE,
		minDate : new Date(2000, 0, 1),
		maxDate : new Date(2019, 12, 31),
		value : new Date(2014, 3, 12),
		top : 5*/
	});

	date_picker.showDatePickerDialog({
		value : new Date(2018, 8, 1),
		callback : function(e) {
			if (e.cancel) {
				Ti.API.info('User canceled dialog');
			} else {
				Ti.API.info('User selected date: ' + e.value);
			}
		}
	});
	
	date_picker_win.add(date_picker);
	date_picker_win.open();
	
	return date_picker;
}

module.exports = date_picker;
