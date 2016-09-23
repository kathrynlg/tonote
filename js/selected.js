define(function () {
	var article = document.getElementsByTagName('article')[0];   
	var editBox = document.createElement('div');
	var titleInput = document.createElement('input');
	var contentInput = document.createElement('textarea');
	var editDate = document.createElement('p');
	article.addEventListener('click',selectThis, false);
	article.addEventListener('click',saveNote, false);
	var currentNote;
	var title ="";
	var content="";
	var inUse= false;
	function selectThis(event){
		if(inUse==true){
			return;
		}
		console.log(event.target);
		if(event.target.className=="addNote new" || event.target.className=="addNote"){
			currentNote = event.target;
			title = currentNote.childNodes[0].innerHTML;
			content = currentNote.childNodes[2].innerHTML;
			currentNote.className="addNote selected";
			article.appendChild(editBox);
			editBox.className="edit";
			editBox.appendChild(titleInput);
			titleInput.className="titleInput";
			editBox.appendChild(contentInput);
			titleInput.placeholder="note title";
			contentInput.placeholder="note content"
			if(title=="click me to edit title"){
				titleInput.value="";			
			}else{
				titleInput.value = title;
			}
			if(content=="click me to edit title"){
				contentInput.value="";
			}else{
				contentInput.value = content;
			}
			contentInput.className = "contentInput";

			var title = event.target.childNodes[0].innerHTML;
			inUse = true;
		}
	}
//		}else if(event.target.className=="addNote selected"){
			//if(!event.target.className=="noteTitle"||!event.target.className=="noteContent"){
//				event.target.className="addNote";
	function saveNote(event){
		//tests for injection
		var testTitle = titleInput.value;
		console.log(testTitle.value);

		if(event.target.className=="edit"){
			console.log(title);
			var newEditDate = new Date();
			// newTitle.innerHTML = title;
			// newTxt.innerHTML= content;
			currentNote.childNodes[0].innerHTML = titleInput.value;
			currentNote.childNodes[2].innerHTML = contentInput.value;
			currentNote.childNodes[4].innerHTML = "last editDate: "+ newEditDate.toString();
			event.target.remove();
			currentNote.className="addNote";
			inUse = false;
		}
	}
});