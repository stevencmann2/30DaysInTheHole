// Day 11 - Hour Glass

// Given a 6x6 array, find the largest possuble sum given the graphical representation ,  hourlgass 

function main() {

    //lines 6 through 10 are given to us by HackerRank
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    // Your Code Here.... 
    
    let hourglasses =  []
    for (let row = 0; row <= 3 ; row++){

        for (let column = 0; column <= 3; column ++){
            let hourglassSum = 0 ;

            hourglassSum += arr[row][column];
            hourglassSum += arr[row][column + 1];
            hourglassSum += arr[row][column + 2];
            hourglassSum += arr[row + 1][column + 1];
            hourglassSum += arr[row + 2][column]; 
            hourglassSum += arr[row + 2][column + 1];
            hourglassSum += arr[row + 2][column + 2];

            hourglasses.push(hourglassSum)
        }
    }

    hourglasses.sort(function(a, b) {
        return a - b;
    });

    console.log(hourglasses[hourglasses.length -1])

}
