function counter(){
    let a = 0;
    function increase(){
        return ++a;
    }
    
    return increase
}

let counter1 = counter()
console.log(counter1());
console.log(counter1());
console.log(counter1());