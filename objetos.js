function Smartphone(marca, modelo, usuario, idade){
    this.marca = marca;
    this.modelo = modelo;
    this.usuario = usuario;
    this.idade = idade;

    this.Saudacao = function(){
        if (this.idade >= 18){
            console.log(`olá, ${this.usuario} :)\nseu ${this.modelo} está pronto para uso.`)
        } else {
            console.log(`a configuração do ${this.modelo} deve ser feita por um usuário maior de idade`)
        }
    }
}


function Android(marca, modelo, usuario, idade) {
    Smartphone.call(this, marca, modelo, usuario, idade); 
    this.sistema = "Android";
}

function IOS(marca, modelo, usuario, idade) {
    Smartphone.call(this, marca, modelo, usuario, idade); 
    this.sistema = "iOS";
}


SmartphoneDaAline = new IOS("apple","iphone 13","aline", 19)
SmartphoneDoAleandro = new Android("motorola","razr 40","aleandro", 41)
SmartphoneDaAlice = new Android("samsung","s23 ultra","alice", 10)


console.log(SmartphoneDaAline);
console.log("Esse aparelho é Android:", SmartphoneDaAline instanceof Android);
console.log("Esse aparelho é iOS:", SmartphoneDaAline instanceof IOS);
SmartphoneDaAline.Saudacao();

console.log(SmartphoneDoAleandro);
console.log("Esse aparelho é Android:", SmartphoneDoAleandro instanceof Android);
console.log("Esse aparelho é iOS:", SmartphoneDoAleandro instanceof IOS);
SmartphoneDoAleandro.Saudacao();

console.log(SmartphoneDaAlice);
console.log("Esse aparelho é Android:", SmartphoneDaAlice instanceof Android);
console.log("Esse aparelho é iOS:", SmartphoneDaAlice instanceof IOS);
SmartphoneDaAlice.Saudacao();