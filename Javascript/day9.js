// write a recursive function to handle factorial N!
// i.e. factorial(5) = 5 * 4 * 3 * 2 * 1  = 30 


function factorial(n) {
    //base case
    if(n === 1 || n === 0){
        return 1;
    }
    // call function w/ new params
    return n * factorial(n - 1);

}

