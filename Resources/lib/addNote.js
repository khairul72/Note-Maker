function add_note() {

	var add_note_win = Ti.UI.createWindow({
		backgroundColor : 'white',
		layout : 'vertical'
	});

	var view = Ti.UI.createView({
		top : 0,
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		layout : 'horizontal'
	});

	var logo = Ti.UI.createImageView({
		left : 5,
		top : 10,
		height : 50,
		width : 50,
		image : '/images/take-note.png'
	});

	var label = Ti.UI.createLabel({
		top : 20,
		left : 70,
		text : 'ADD NOTE',
		font : {
			fontSize : 20,
			fontWeight : 'bold'
		},
		color : '#FA5808',
		heigth : 50,
		width : Ti.UI.SIZE
	});

	var line_view = Ti.UI.createView({
		top : 10,
		height : 1,
		width : Ti.UI.FILL,
		backgroundColor : 'gray'
	});

	var scrollView = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true,
		layout : 'vertical',
		height : '90%',
		width : '90%'
	});
	
	// add title

	var title = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Title',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var title_textArea = Ti.UI.createTextArea({
		top : 5,
		left : 0,
		borderWidth : 2,
		borderColor : '#bbb',
		borderRadius : 5,
		color : '#888',
		textAlign : 'left',
		width : 300,
		height : 50
	});
	
	// add description

	var description = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Description',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var description_textArea = Ti.UI.createTextArea({
		top : 5,
		left : 0,
		borderWidth : 2,
		borderColor : '#bbb',
		borderRadius : 5,
		color : '#888',
		textAlign : 'left',
		width : 300,
		height : 230
	});
	
	// add date picker

	var date = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Date',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var date_view = Ti.UI.createView({
		top : 5,
		left : 0,
		height : 35,
		width : 300,
		borderColor : '#bbb',
		borderWidth : 2,
		borderRadius : 5
	});

	date_view.addEventListener('click', function(e) {
		var date_picker = Ti.UI.createPicker({
			
		});

		date_picker.showDatePickerDialog({
			value : new Date(2018, 8, 1),
			callback : function(e) {
				if (e.value) {
					var labelPicker = Ti.UI.createLabel({
						text : e.value.toLocaleString()

					});
					date_view.add(labelPicker);
				}
			}
		});
	});

	//add time picker

	var time = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Time',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var time_view = Ti.UI.createView({
		top : 5,
		left : 0,
		height : 35,
		width : 300,
		borderColor : '#bbb',
		borderWidth : 2,
		borderRadius : 5
	});

	time_view.addEventListener('click', function(e) {
		var time_picker = Ti.UI.createPicker({
			type : Ti.UI.PICKER_TYPE_TIME
		});

		time_picker.showTimePickerDialog({
			format24 : true
		});
	});

	//add image

	var image = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Image',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var image_view = Ti.UI.createView({
		top : 5,
		left : 0,
		height : 250,
		width : 300,
		borderColor : '#bbb',
		borderWidth : 2,
		borderRadius : 5
	});

	var optionDialog = Titanium.UI.createOptionDialog({
		title : 'Choose an image source..',
		options : ['Photo Gallery', 'Camera', 'Cancel'],
		cancel : 2
	});

	optionDialog.addEventListener('click', function(e) {
		if (e.index < 2) {
			if (e.index === 0) {
				Ti.Media.openPhotoGallery({
					mediaTypes : [Titanium.Media.MEDIA_TYPE_PHOTO],
					
				});
			} else if (e.index === 1) {

				function showCamera(type, callback) {
					var camera = function() {
						// call Titanium.Media.showCamera and respond callbacks
						Ti.Media.showCamera({
							success : function(e) {
								callback(null, e);
							},
							cancel : function(e) {
								callback(e, null);
							},
							error : function(e) {
								callback(e, null);
							},
							saveToPhotoGallery : true, // save our media to the gallery
							mediaTypes : [type]
						});
					};

					// check if we already have permissions to capture media
					if (!Ti.Media.hasCameraPermissions()) {

						// request permissions to capture media
						Ti.Media.requestCameraPermissions(function(e) {

							
						});
					} else {
						camera();
					}
				}

				// attempt to take a photo with the camera
				showCamera(Ti.Media.MEDIA_TYPE_PHOTO, function(error, result) {
					if (error) {
						alert('could not take photo');
						return;
					}

					// validate we taken a photo
					if (result.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

						// create an imageView to display our photo
						var imageView = Ti.UI.createImageView({
							image : result.media
						});

						// add the imageView to the window
						image_view.add(imageView);
					}
				});
			}

		} else {

		}

	});

	image_view.addEventListener('click', function(e) {

		optionDialog.show();
	});
	image_view.add(optionDialog);

	// add video

	var video = Ti.UI.createLabel({
		top : 5,
		left : 0,
		text : 'Video',
		color : 'black',
		heigth : Ti.UI.SIZE,
		width : Ti.UI.SIZE
	});

	var video_view = Ti.UI.createView({
		top : 5,
		left : 0,
		height : 250,
		width : 300,
		borderColor : '#bbb',
		borderWidth : 2,
		borderRadius : 5
	});

	video_view.addEventListener('click', function(e) {
		Ti.Media.openPhotoGallery({
			mediaTypes : [Titanium.Media.MEDIA_TYPE_VIDEO],
			success : function(e) {
				alert('Added video');
			},
			error : function(e) {
				alert('error opening image: ' + e);
			}
		});
	});

	var save_button = Ti.UI.createButton({
		left : 80,
		borderRadius : 100,
		title : 'Save',
		backgroundColor : '#FA5808',
		top : 10,
		width : 100,
		height : Ti.UI.SIZE
	});
	save_button.addEventListener('click', function(e) {

	});

	view.add(logo);
	view.add(label);
	add_note_win.add(view);

	add_note_win.add(line_view);

	scrollView.add(title);
	scrollView.add(title_textArea);
	scrollView.add(description);
	scrollView.add(description_textArea);

	scrollView.add(date);
	scrollView.add(date_view);

	scrollView.add(time);
	scrollView.add(time_view);

	scrollView.add(image);
	scrollView.add(image_view);

	scrollView.add(video);
	scrollView.add(video_view);

	scrollView.add(save_button);

	add_note_win.add(scrollView);

	add_note_win.open();

	return add_note;
}

module.exports = add_note;
