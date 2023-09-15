function likeBtn(){
  alert(`This page says
Ninja was liked`);
}

function removerBoton(element){
  element.closest('#add').remove();
}

function logBtn(element){
  let btnLog = document.querySelector('#log')
  let textBtnLog = btnLog.innerText;
  if(textBtnLog === "Login"){
    btnLog.textContent = "Logout";
  }else{
    btnLog.textContent = "Login";
  }  
}