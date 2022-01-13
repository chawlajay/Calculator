const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener('click',()=>{
    addNewNote();
});

function addNewNote(noteText = ''){
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${noteText ? '' : 'hidden'}"></div>
    <textarea class="${noteText ? 'hidden' : ''}" rows="12"></textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    
    textArea.value = noteText;
    main.innerHTML = marked.parse(noteText);
    editBtn.addEventListener('click',(e)=>{
        // console.log(e.target);
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });
    
    deleteBtn.addEventListener('click', ()=>{
        note.remove();
        updateLS();
    });

    textArea.addEventListener('input',(e)=>{
        const {value} = e.target;
        main.innerHTML = marked.parse(value);

        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}