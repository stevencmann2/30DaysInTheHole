function binaryConverter(n) {

    const binaryStr = n.toString(2); 
    const binaryArr = binaryStr.split('');

    let onesCounter = 0;
    let consecutiveOnes = 0;
  

    if(!binaryArr.includes('1')){
      return consecutiveOnes;
    }else{
        
  
    
    binaryArr.forEach(function(str) {
      str === '1' ? onesCounter++ : onesCounter = 0;
      if(onesCounter > consecutiveOnes) consecutiveOnes = onesCounter;
    })
    
    }
    
  console.log(consecutiveOnes)
}

binaryConverter(5)
binaryConverter(65535)
binaryConverter(439)


// NEED TO FIND CASE WHERE LENGTH -1 FOR LAST SET OF NUMBERS BEING THE FINAL COUNT 

  //   for (i = 0; i < binaryArr.length - 1; i++) {
    //     // counter =1
    //     if (binaryArr[i] === '1') {
    //         onesCounter++;
    //   }else if(binaryArr[i]=== '0') {
    //       if (onesCounter > consecutiveOnes){
    //         consecutiveOnes = onesCounter;
    //         onesCounter = 0;
    //       }
    //     }  
  
    // }