// let contacts = new Map()
// contacts.set('Jessie', "213-555-1234")



// console.log(contacts)
// console.log(contacts.has('Jessie'))

function processData(input) {
    //Enter your code here
   const entries = input.split('\n');
   const contactsToAdd = parseInt(entries[0]);
   let phoneBook = {};

    for(let i = 1; i <= contactsToAdd; i++){
        let data = entries[i].split(' ');
        phoneBook[data[0]] = data[1]
    }
   
   for (let i = contactsToAdd + 1; i < entries.length; i ++){
       if(!phoneBook[entries[i]]){
           console.log('Not found')
       }else{
           console.log(entries[i] + '=' + phoneBook[entries[i]])
       }

   }
   
} 
