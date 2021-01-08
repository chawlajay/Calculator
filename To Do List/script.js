const clear=document.querySelector(".clear");

const dateElement=document.getElementById("date");

const list=document.getElementById("list");

const input=document.getElementById("input_item");

let LIST =[];
let index=0;

// <i class="far fa-check-circle"></i>   when job is complete (try fad)

// classes required when event occurs (check,uncheck,delete)
const CHECK="fa-check-circle";
const UNCHECK="fa-circle";
const LINE_THROUGH="lineThrough";


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
	}
	input.value="";
	index++;
}

});


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



