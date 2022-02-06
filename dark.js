var dark = document.getElementById("dark");
dark.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    dark.innerHTML = 'light'
    
  }
  else{
    dark.innerHTML = 'dark'
  }
}