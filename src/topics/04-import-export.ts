import { Usuario } from "./02-object-interface";
import { Person, Trabajo } from "./05-clases";

const juan: Usuario = {
    firstName: 'Juan',
    lastName: 'Morocho',
    email: 'juan@gmail.com',
    password: 'admin123',
    isAdmin: true,
    edad: 33,
    address: 'Machala'
};

const { firstName, password, address, telefono } = juan;

const user = new Person( firstName, password, address, telefono);

const user_trabajo = new Trabajo(1500, 'Desarrollador Web Senior', user);


console.log( juan );

