function main(n) {
    
    const N = parseInt(n)

    if(N % 2 !== 0){
        console.log("Weird")
    }else if (N <= 5){
        console.log("Not Weird")
    }else if(N <= 20){
        console.log("Weird")
    }else if(N > 20){
        console.log("Not Weird")
    }
}

