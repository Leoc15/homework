function message(msg: string) {
    return msg;
}

const hi: string = "hello world!!";
console.log(message(hi));



interface phone {
    brand: string;
    model: string;
    price: number;
}

const newPhone: phone = {
    brand: "google",
    model: "pixel 9 pro xl",
    price: 1200.00
};



console.log(newPhone);

class candy{

    constructor(public name:string, public flavor:string){

    }
}

const newCandy =new candy("tri bala","strawberry");
console.log(newCandy)

