
export class Person {

    public name: string;
    public password: string;
    public address?: string;
    public phone?: string;

    constructor( name: string, password: string, address?: string, phone?: string ){
        this.name = name;
        this.password = password;
        this.address = address;
        this.phone = phone;
    }
}

/* export class Trabajo extends Person {

    private salario: number;
    public puesto: string;

    constructor( salario: number, puesto: string, name: string, password: string ){
        super( name, password );
        this.salario = salario;
        this.puesto = puesto;
    }
} */

export class Trabajo {

    constructor(
        private salario: number,
        public puesto: string,
        public person: Person
    ){}
}