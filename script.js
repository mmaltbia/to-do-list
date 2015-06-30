$(document).ready(function(){

$.backstretch ("images/notebook2.jpg");

var $form = $('#new_todo_item');
var $formInput = $('#item_name');
var toDoArr = []; 

$form.on("submit", function(){
	event.preventDefault();
	console.log('You pressed submit!');
	var $newLi = $('<li class="item"><input class="check-box" type="checkbox"><p>' + $formInput.val() + '</p></input></li>');
	$('#toDo_list').append($newLi);
	toDoArr.push($formInput.val());
	console.log(toDoArr);
})

var $li = $('.item');
var $ul = $('#toDo_list');

console.log($li);


$ul.on("click", '.item', function(){
	$(this).addClass("done");
	$(this).css('text-decoration', 'line-through')
	$(this).fadeOut('slow', 0);
	completedItems.push(this);
	console.log(completedItems);
})




var completedItems = [];
var $done = $('.done');
var $showComp = $('#show-completed');




$showComp.on('submit', function(){
	event.preventDefault();
	$('.done').fadeIn('fast', 1);
	$(completedItems).each(function(index, textContent){
	console.log("completedItems Array " + index + " " + textContent);
	 })
	// $done.show(fast, 1);
	console.log('the button was clicked');
	

});




})
















//SCRIPT FROM CLASS

// $(document).ready(function(){

// var $newItemForm = $("#new_todo_item");
// var $item = $(".item");

// console.log($item);
// console.log($newItemForm);

// $newItemForm.on("submit", function(event){
// 	event.preventDefault();
// 	console.log("Form Submitted");
// 	console.log($('#item_name').val()); // Shopping list info
// 	var $newLi = $('<li>' + $('#item_name').val() + '<li>');
// 	$('#toDo_list').append($newLi);
// });

// var $toDoList = [];
// var $item1 = {item_name: "Learn jquery",
// 			  item_description: "on Codecademy"};

// toDoList.push(item1);

// var $newToDoItem = ('<li>' + $item1["item_name"] + '</li>');
// $('#toDo_list').append($newToDoItem);
// });