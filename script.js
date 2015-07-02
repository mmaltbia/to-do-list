$(document).ready(function(){

//Full Width Background Image
$.backstretch("images/notebook2.jpg");

function ToDo(name, description){
	this.name = name;
	this.description = description;
}

var toDo = new ToDo(name, description);

ToDo.all = [];


ToDo.prototype.save = function(){
	ToDo.all.push(this);
	console.log(ToDo.all);
}

console.log(ToDo.all[0]);

//Underscore Template
var underscoreTemplate = _.template($('#underscore-template').html());

var $taskListUl = $("#task-list-ul");

ToDo.prototype.render = function (name, description){
	$(underscoreTemplate(this));


}
 // append existing todos (from seed data) to `$toDoList`
 // `_.each` is an "iterator" function provided by Underscore.js




var $form = $('#new_todo_item')
var $formInputName = $("#form-input-name");
var $formInputDescription = $("form-input-description");
var $li = $("li");




 // submit form to create new todo
$form.on('submit', function(){
		event.preventDefault();
	// if ($formInputName.val() !== null && $formInputDescription.val() !== null){
		// var newTask = new ToDo($formInputName.val(), $formInputDescription.val());
		var newTask = new ToDo($formInputName.val(), $formInputDescription.val());
		newTask.save();
		$taskListUl.append('<li class="item"><p>' + ToDo.all[i].name + ' - ' + ToDo.all[i].description + '</p></li>');
		$form[0].reset();
		console.log('This is working');		

	// var $name = $('#form-input-task').val();
	// var $description = $('#form-input-description').val();
	// ToDo.all.push($taskData);

	newTask.render();
})

console.log("Goodbye");

_.each(ToDo.all, function (task, index) {
	task.render();
  	$taskListUl.append('<li class="item"><p>' + task.name + ' - ' + task.description + '</p></li>');
});

})


//!!!!Script from Underscore Edit!!!! - This works!

// // Array that holds each task, description of task, and due date
// var toDoArr = [

// 	{name: "Pick up dry cleaning",
// 	description: "By 5 P.M."},

// 	{name: "Wash Car",
// 	description: "By 10 A.M."},

// 	{name: "Pack for Vacation",
// 	description: "By 8 A.M."}
// ];

// // Form to create new task 
// var $form = $('#new_todo_item');


// // Var for task list
// var $taskListUl = $("#task-list-ul");

//  // append existing todos (from seed data) to `$toDoList`
//   // `_.each` is an "iterator" function provided by Underscore.js
// _.each(toDoArr, function (task, index) {
//   $taskListUl.append('<li class="item"><p>' + task.name + ' - ' + task.description + '</p></li>');
// });

//  // submit form to create new todo
// $form.on('submit', function(name, description){
// 	event.preventDefault();
// 	var $name = $('#form-input-task').val();
// 	var $description = $('#form-input-description').val();
// 	var $taskData = {name: $name, description: $description};
// 	toDoArr.push($taskData);
// 	$taskListUl.append('<li class="item"><p>' + $name + ' - ' + $description + '</p></li>');
// 	$form[0].reset();
// })


// //Full Width Background Image
// $.backstretch("images/notebook2.jpg");

// // Var for task list
// var $taskListUl = $("#task-list-ul");

// // Var for the add to list button 
// var $addBtn = $("#add-btn");

// // Var for show completed button 
// var $showCompletedBtn = ("#show-completed");

// console.log($('#underscore-template').html());

// // Var for underscore template
// var $underscoreTemplate = _.template($('#underscore-template').html());

// // Var for task list in template portion of HTM
// var $taskListTemplate = $("#task-list-template");

// // Var for task and description input fields
// var $formInputTask = $("#form-input-task");
// var $formInputDescription = $("form-input-description");
// var $li = $("li");

// $taskListUl.on("click", ".item", function(){
// 	$(this).addClass("done");

// 	$(this).css('text-decoration', 'line-through')
// 	$(this).fadeOut('slow', 0);
// 	completedItems.push(this);
// 	console.log(completedItems);
// })
 	

// })









//Script from original working file that is now non working thanks to my refactor

// var completedItems = [];
// var $done = $('.done');
// var $showComp = $('#show-completed');




// $showComp.on('submit', function(){
// 	event.preventDefault();
// 	$('.done').fadeIn('fast', 1);
// 	$(completedItems).each(function(index, textContent){
// 	console.log("completedItems Array " + index + " " + textContent);
// 	 })
// 	// $done.show(fast, 1);
// 	console.log('the button was clicked');
	

// var $li = $('.item');
// var $ul = $('#toDo_list');

// console.log($li);


// $ul.on("click", '.item', function(){
// 	$(this).addClass("done");
// 	$(this).css('text-decoration', 'line-through')
// 	$(this).fadeOut('slow', 0);
// 	completedItems.push(this);
// 	console.log(completedItems);
// })

// });


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
