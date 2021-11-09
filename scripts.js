//get open modal button
const modalButton = document.getElementById('button1')
//get modal eleemnt
const modal1 = document.getElementById('modal1')
const modal2 = document.getElementById('modal2')
//get close button
const modalClose = document.querySelector('.close')


// create an event listener to identify when a user clicks on the modal button
modalButton.addEventListener('click', openModal);

//listen for the close click
modalClose.addEventListener('click', closeModal);

//listen for ourside click
window.addEventListener('click', outsideClick);


// Open modal
function openModal(){
  modal1.style.display = 'block';
}

// Close modal
function closeModal(){
  modal1.style.display = 'none';
}

// Click outside and close
function outsideClick(e){
  if(e.target == modal1){
    modal1.style.display = 'none';
  }
}
