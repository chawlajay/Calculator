const clear=document.querySelector(".clear");

const dateElement=document.getElementById("date");
let today = new Date();
let options = { weekday: 'long', month:'short', day:'numeric'};
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

const list=document.getElementById("list");

const input=document.getElementById("input_item");

// classes required when event occurs (check,uncheck,delete)
const CHECK="fa-check-circle";
const UNCHECK="fa-circle";
const LINE_THROUGH="lineThrough";

let LIST,index;

let data = localStorage.getItem("TODO");
	if(data)
	{
		LIST=JSON.parse(data);
		loadToDo(LIST);
		index=LIST.length;
		console.log(LIST);
	}
	else
	{
	LIST=[];
	index=0;
	}


// function to interchange checked circle and unchecked circle when it is clicked
function completeToDo(element){
	element.classList.toggle(CHECK);
	element.classList.toggle(UNCHECK);
	element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

	LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element){
	element.parentNode.parentNode.removeChild(element.parentNode);
	LIST[element.id].trash=true;
}

function loadToDo(array){
	array.forEach(function(item){
		addToDo(item.name,item.id,item.done,item.trash);
	});
}

function addToDo(toDo_item,id,done,trash){

if(trash){
	return;
}

const DONE = done ? CHECK : UNCHECK;   // to determine which circle icon to choose
const LINE = done ? LINE_THROUGH : "";  // when done strike through the text

const text= `<li class="item"><i class="far ${DONE}" job="complete" id="${id}"> </i> <p class="text ${LINE}"> ${toDo_item} </p> <i class="far fa-trash-alt" job="delete" id="${id}"> </i> </li>`; 
const position = "beforeend";

list.insertAdjacentHTML(position,text);
}


document.addEventListener("keyup",function(event){

if(event.keyCode == 13)    // keycode of enter key is 13
{
	const toDo = input.value;
	
	if(toDo)
	{
		addToDo(toDo,index,false,false);
		LIST.push(
			{
				name: toDo,
				id: index,
				done: false,
				trash:false
			}
		);
		localStorage.setItem("TODO",JSON.stringify(LIST));
	}
	input.value="";
	index++;
	console.log(LIST);
}

});

// to remove or to complete a todo event on click is added
list.addEventListener("click",(event) => {
let element = event.target;  // when delete button is clicked, element value is <i class="far fa-trash-alt" job="delete" id="${id}"> </i>
const elementJob = element.attributes.job.value;   // returns delete or complete

if(elementJob == "complete")
{
completeToDo(element);
}
else if(elementJob == "delete")
{
removeToDo(element);
}

// store and update local storage
localStorage.setItem("TODO",JSON.stringify(LIST));
});

// to clear the toDos on local storage when clear button is clicked
clear.addEventListener("click",()=>{
localStorage.clear();
location.reload();      // reload the page
});
