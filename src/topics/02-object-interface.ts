export interface Usuario {
    firstName       : string;
    lastName        : string;
    fullName?       : () => void;
    email           : string;
    password        : string;
    isAdmin         : boolean;
    edad            : number;
    address?        : string;
    telefono?       : string;
}

const maria: Usuario = {
    firstName: 'Maria',
    lastName: 'Torres',
    email: 'maria@gmail.com',
    password: 'admin123',
    isAdmin: true,
    edad: 45,
    address: 'Cuenca'
};

const pedro: Usuario = {
    firstName: 'Pedro',
    lastName: 'Martinez',
    email: 'pedro@gmail.com',
    password: 'admin123',
    isAdmin: false,
    edad: 32,
}

console.log( maria, pedro  );