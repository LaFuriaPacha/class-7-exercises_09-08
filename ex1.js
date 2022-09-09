function redundantReturn(str) {
    return function (){
        return `This is my string ${str}`; // string interpolation
    }
};

const returnSomething = redundantReturn("HELLO");

console.log(returnSomething());