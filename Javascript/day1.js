
/*sample input
 12
4.0
is the best place to learn and practice coding!
*/


function main(num = 12 , dbl = 4.0, str = 'is the best place to learn and practice coding!') {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var num; 
    var dbl;  
    var str; 
    // Read and save an integer, double, and String to your variables.
    // num = readLine();
    // dbl = readLine();
    // str = readLine();
    // Print the sum of both integer variables on a new line.
    console.log((i + Number(num)));
    // Print the sum of the double variables on a new line.
    console.log((d + Number(dbl)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(`${s}${str}`)

}

main()