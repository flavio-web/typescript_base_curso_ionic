
let nombre: string = 'Atom';
let edad: number = 30;
const isAdmin: boolean = true;

nombre = '300';
console.log( nombre );

let cedula: string | number | undefined = '';

cedula = '07845126101';
cedula = 7410214587;
console.log( cedula );

let fecha: Date | string;
fecha = new Date();
console.log( fecha );

let isAdministrador: boolean | undefined;

let rol: 'ADMIN' | 'SECRETARIA' | 'FINANZAS';
rol = 'ADMIN';
console.log('el rol es: '+rol);

const colores: string[] = ['amarillo', 'verde', 'rojo'];
colores.push( 'azul' );

console.log( colores );
