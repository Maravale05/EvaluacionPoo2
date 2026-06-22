import { Accion } from "./Accion";
import { Inversionista } from "./Inversionista";
 
console.log("=== Sistema Bolsa de Valores ===\n");
 
// 1. Instanciar la acción
const accionGoogle = new Accion("Google", 150.0);
 
// 2. Instanciar dos inversionistas
const inversionista1 = new Inversionista("Ana García");
const inversionista2 = new Inversionista("Carlos López");
 
// 3. Vincular ambos inversionistas a la acción
accionGoogle.registrarReceptor(inversionista1);
accionGoogle.registrarReceptor(inversionista2);
 
// 4. Cambiar el precio dos veces (notificación automática)
accionGoogle.precio = 175.5;
accionGoogle.precio = 162.3;
 
console.log("\n=== Simulación completada ===");