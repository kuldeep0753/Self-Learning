"use strict";
// console.log('workign fine');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

// TODO: make a seperate function while doing in a addeventListner then better to make a seperate function with a variable so it's would be better and code refatoring also;
for (let i = 0; i < btnsOpenModal.length; i++) {
    // Use to open a modal
    const openModal = function () {
    console.log("Button Clicked😁");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
    // Use to close a modal
    const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnsOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
//   overlay use for blur background
  overlay.addEventListener("click", closeModal);

//   To close modal using 'escape' button
  document.addEventListener('keydown',function(e){
    console.log(e.key); // key is a property 
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
  })
}
