var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	layout: 'vertical'
});

var view = Ti.UI.createView({
	top : 0,
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	layout : 'horizontal'
});

var logo = Ti.UI.createImageView({
	left : 20,
	top : 10,
	height : 50,
	width : 50,
	image : '/images/take-note.png'
});

var label = Ti.UI.createLabel({
	left : 80,
	top : 20,
	text : 'NOTES',
	font : {
		fontSize : 20,
		fontWeight : 'bold'
	},
	color : '#FA5808',
	heigth : Ti.UI.SIZE,
	width : Ti.UI.SIZE
});

var button = Ti.UI.createButton({
	left : 80,
	borderRadius : 350,
	title : 'Add new',
	backgroundColor: '#FA5808',
	top : 10,
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});
button.addEventListener('click', function(e) {
	var add_note = require('/lib/addNote.js');
	var note = new add_note();

	win.add(note);
});

var line_view = Ti.UI.createView({
	top : 10,
	height : 1,
	width : Ti.UI.FILL,
	backgroundColor : 'gray'
});

view.add(logo);
view.add(label);
view.add(button);
win.add(view);
win.add(line_view);
win.open();
