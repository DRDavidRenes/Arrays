

//Declaración de variables, en este caso 2 arrays
var fichAlumno = ["David", "Renes", "Tejado", "71270642J", "DWEC", "DAW", "FOC"];
var etiquetas = ["Nombre", "Apellido1", "Apellido2", "DNI", "Módulo", "Ciclo", "Centro"];


//Creamos una función donde se meten los 3 métodos, uno por cada bucle
function mostrarTodo() { // meter aqui los 3 bucles para que se muestren los 3  
      bucleWhile();
      bucleFor();
      bucleDoWhile();

}

//Método con bucle while
function bucleWhile() {
      document.write("<B>Array con bucle while" + "<br><br></B>"); //Mensaje que se imprime por pantalla
      var i = 0;
      while (i < fichAlumno.length) { //Mientras que la i sea menor que la longuitud del array
            document.write(etiquetas[i] + ": " + fichAlumno[i] + "<br>"); //Que imprima cada etiqueta y cada fichAlumno
            i++; //Incrementamos en 1 el valor de i
      }

}

//Método con bucle for
function bucleFor() {
      document.write("<br>" + "<B>Array con bucle for" + "<br><br></B>"); //Mensaje que se imprime por pantalla

      for (var i = 0; i < fichAlumno.length; i++) {
            document.write(etiquetas[i] + ": " + fichAlumno[i] + "<br>");
      } //Mientras que se cumpla la condición de dentro del for se cumpla, va imprimiendo cada vez una etiqueta y fich

}

//Método con bucle do while
function bucleDoWhile() {
      document.write("<br>" + "<B>Array con bucle Do While" + "<br><br></B>"); //Mensaje que se imprime por pantalla

      var i = 0;
      do { //Dentro del do se va a ejecutar ese código mientras se cumpla la condición del while
 
            document.write(etiquetas[i] + ": " + fichAlumno[i] + "<br>");
            i++;

      } while (i < fichAlumno.length); //Condición a cumplir
}


//Método para mostrar las posiciones pares de los arrays de la tarea

function pares() {

      //Primero ponemos este write fuera del bucle para que solo lo imprima una vez
      document.write ("<B>Las posiciones pares de los arrays son : " + "<br><br></B>");

      /*Inicializamos var en 2 porque va a ser la primera posición par siempre en un array
      y lo comparamos con ambos arrays con el comparados && */
      //En la tarea entregué con var i=2 pero seria 0 porque 0 es par también
      for (var i = 0; i< fichAlumno.length && i< etiquetas.length; i++) {

          //Usamos el condicional if para ver el resto de i, que si es 0 significa que será par.
            if (i % 2 == 0)
            
            //Y imprimimos por pantalla
            document.write(etiquetas[i] + ": " + fichAlumno[i] + "<br>");
      }
}