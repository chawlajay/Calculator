const clear=document.querySelector(".clear");

const dateElement=document.getElementById("date");

const list=document.getElementById("list");

const input=document.getElementById("input_item");

function addToDo(toDo_item){
const text= `<li class="item"><i class="far fa-circle" job="complete"> </i> <p class="text"> ${toDo_item} </p> <i class="far fa-trash-alt" job="delete"> </i> </li>`; 
const position = "beforeend";

list.insertAdjacentHTML(position,text);
}


document.addEventListener("keyup",function(event){

if(event.keyCode == 13)
{
	const toDo = input.value;
	
	if(toDo)
	{
		addToDo(toDo);
	}
	input.value="";
}

});



