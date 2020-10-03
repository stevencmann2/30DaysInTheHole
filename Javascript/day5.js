// Day 5: Are you in the Loop?

// write a function that given an integer,n, returns the
// 'result' for its first ten mulitples 


function main(n) {
    const n = parseInt(readLine(), 10);
    for (let i=1; i <= 10; i++){
        let result = n*i
        console.log( `${n} x ${i} = ${result}`)
    }
}