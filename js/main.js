window.addEventListener("load", function(){
  var agregar = document.getElementById("agregar");
  var textArea = document.getElementById("textArea");
  textArea.focus();

  agregar.addEventListener("click", function(){
    var tarea = textArea.value;
    agregarTarea(tarea);
    textArea.value = "";
  });
   textArea.addEventListener("keydown", function(){
    var longitud = textArea.value.length;
    agregar.disabled = false;
      if (longitud == 0){
        agregar.disabled = true;
      }
    }); 

  function agregarTarea(tarea){
    var contenedorTareas = document.getElementById("contenedorTareas");
    var tareas = document.createElement("div");
    tareas.setAttribute("class", "tareas");
    tareas.classList.add("row");
    contenedorTareas.insertBefore(tareas, contenedorTareas.childNodes[0]);
    var check = document.createElement("input");
    check.setAttribute("class","check");
    check.classList.add("col-xs-1");
    check.setAttribute("type","checkbox");
    tareas.insertBefore(check, tareas.childNodes[0]);
    var span = document.createElement("span");
    span.setAttribute("class","spanCreado");
    span.classList.add("col-xs-9");
    span.innerText = tarea;
    tareas.insertBefore(span, tareas.childNodes[1]);
    var ico = document.createElement("i");
    ico.setAttribute("class","glyphicon glyphicon-remove-circle");
    ico.classList.add("ico");
    ico.classList.add("col-xs-2");
    tareas.insertBefore(ico, tareas.childNodes[2]);
    agregar.disabled = true;
    textArea.focus();
    check.addEventListener("click", function(){
      span.style.textDecoration = "line-through";
    });

    ico.addEventListener("click",function(){
      tareas.style.display = "none";
    });
  };
});




// var max = 140;
//     var longitud = comentario.value.length;
//     var contador = document.getElementById("contador");
//     if(longitud <= max) { 
//         contador.innerText = max-longitud; 
//       }else{
//         contador.innerText = max -longitud;
//     }
//     if(longitud >= 120){
//       contador.setAttribute("class", "verde");
//     }else{
//       contador.setAttribute("class", "negro");
//     }
//     if(longitud >= 130){
//       contador.setAttribute("class", "rojo");
//     } 
//     if(longitud > max){
//       contador.setAttribute("class", "rojo");
//       boton.disabled = true;
//     } 
//     if (longitud == 0){
//       boton.disabled = true;
//     }
//   });
