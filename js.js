
document.getElementById('s').addEventListener('click',s,false);
function s(){

window.open("https://wa.me/584167845462?text="+'Hola Saludos Mi Nombre es '+nombre.value+" "+apellido.value+' soy de '+direccion.value+' Mensaje / Requerimiento : '+mensaje.value+"");
};
document.getElementById('modal').addEventListener('click',m,false);
function m(){
	modal.style.display ='none';
};

function mo(e){
	modal.style.display ='block';
	mi.src = e.src;
	mt.innerHTML = e.alt;
}