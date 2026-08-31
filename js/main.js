//MENSAJE DE INICIO

const respuesta = prompt("Bienvenidos a la página de nuestra comunidad. Nuestra región tiene paisajes muy bellos, cultivos diversos, y dintintos comercios y emprendimientos. A continuación le ofrecemos algunos contactos en caso de tener una emergencia. Coloque Aceptar para continuar o Cancelar para cerrar el mensaje.").toLowerCase();

while (respuesta !== "aceptar" && respuesta !== "cancelar") {
    respuesta = prompt("Opción incorrecta. Desea ver nuevamente la información sugerida? Coloque Aceptar para continuar o Cancelar para cerrar el mensaje.").toLowerCase();
    }

if (respuesta === "aceptar") {
    alert(`La información de contactos que disponemos es la siguiente: 
                        Comisaria: 
                        Bomberos:
                        Defensa Civil:
                        Hospital:  
                    Para finalizar haga click en el botón de Aceptar`);
} else {
    alert("Gracias por ingresar a nuestra página. Disfrute el contenido y ante cualquier consulta nuestros instituciones con sus contactos y localización en el mapa estan al final de la página. ¡Hasta luego!");
}










