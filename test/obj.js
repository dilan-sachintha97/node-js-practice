const user = {
    id:1,
    name:"dilan",
    password:"rrcrc445",
    login: function(){
        console.log(this.name + " has login");
    },
    logout: ()=>{
        console.log("User has been log out");
    }
}

class Person{
    constructor(){
        this.id = 1,
        this.name = "Dilan",
        this.password = "cdcc45"
    }
}


const user1 = new Person();
console.log(user1.name);

class Man{
    constructor(){
        this.id,
        this.name,
        this.password
    }
}

const man1 = new Man();
man1.name = "Saman"
console.log(man1.name );

class Animal{
    constructor(id, username, passsword){
        this.id = id,
        this.name = username,
        this.password = passsword
    }
}

const dog = new Animal(5,"rubii","rede44");
console.log(dog);


// default value

class Animal2{
    constructor(id=0, username="Elephent", passsword){
        this.id = id,
        this.name = username,
        this.password = passsword
    }
}