var selected_color = null;

$(function(){
    //DOM selection
	$('#add').click(add_colors);//add colors when you click on the button
	$('#colors').on('hover', '.color', change_bg);//change background of the area where you put the text when you hover over the colored square
	$('#colors').on('dblclick', '.color', delete_color);// delete the colored square once you double click
	$('#colors').on('click', '.color', toggle_select_color);// toggle between border and non border on the colored square
	$('#left').click(left); // move border to the square to the left
	$('#right').click(right);// move border to the square to the right

});

function add_colors()
{
	var colors = $('#colors_string').val();//get the value of the input box - eg. blue etc - and assigned it to the variable 'colors'
	colors = colors.split(', ');//have a comma and space split up the color text
	for(var i = 0; i < colors.length; i++)// a for loop to prevent repitition
	{
		var color = $('<div>');//create a div and store it in the variable 'color'
		color.addClass('color');//you need to add this because the colored square currently does not have height/width etc
		color.css('background-color', colors[i]);// give an appropriate background color to the color names inputted
		$('#colors').append(color);// append the colors below (they will be inline for the first part as they are floating)
	}
}

function change_bg()
{
	var color = $(this).css('background-color');
	$('#colors_string').css('background-color', color);//change the background of the iput box to the color of the square hovered over
}

function delete_color()
{
	$(this).remove();//delete the colored box on double click
}

function toggle_select_color()
{
	if(selected_color != this)
	{
		$(selected_color).removeClass('selected');//remove the 'selected' class from the color
		selected_color = this;
		$(selected_color).addClass('selected'); // add border to the selected color
	}
	else
	{
		$(selected_color).removeClass('selected');// otherwise remove
		selected_color = null;
	}
}


function left()
{
	if(selected_color !== null)
	{
		var previous = $(selected_color).prev();//moves to next color on the left
		previous.before(selected_color);
	}
}

function right()
{
	if(selected_color !== null)
	{
		var next = $(selected_color).next();//moves to next color on the right
		next.after(selected_color);
	}
}