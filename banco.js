class pessoa {

    constructor (nome,Conta){

        this.nome = nome;
        this.Conta = Conta;

       
    }

    banco (tipoBanco){
        if (typeof tipoBanco == "string") {
            this.Conta = tipoBanco
            
        }
    
    }
}


let p1 = new pessoa("Taina");
let p2 = new pessoa("Tariane");
let p3 = new pessoa("Gabriela");
let p4 = new pessoa("Myrlei");

p1.banco ("corrente")
p2.banco ("poupança")
p3.banco ("corrente")
p4.banco ("poupança")



console.log(`${p1.nome} tem conta ${p1.Conta}`);
console.log(`${p2.nome} tem conta ${p2.Conta}`);
console.log(`${p3.nome} tem conta ${p3.Conta}`);
console.log(`${p4.nome} tem conta ${p4.Conta}`);