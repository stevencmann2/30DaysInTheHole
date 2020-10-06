
// DAY 6
function processData(input) {
    //Enter your code here
    let words = input.split('\n');

    for(let i = 1; i < words.length; i++){
        let str = words[i];
        let letters = str.split('');
        let evenArr = [];
        let oddArr = [];
            for (let j = 0; j < letters.length; j++){
                if (j === 0 || j % 2 === 0){
                    evenArr.push(letters[j])
                }else{
                    oddArr.push(letters[j])
                }
            }
            let evenStr = evenArr.join('');
            let oddStr = oddArr.join('')
            console.log(`${evenStr} ${oddStr}`) 
    }

} 


