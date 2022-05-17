 //1
 function Result(num1,num2) {
    

    return num1/num2
}
let a=9;
let b=3;
console.log(Result(a,b));


//2
function Repaet(Word,Count) {
    let word = " "
    for (let i = 0; i < Count; i++) {
word+=Word
        
    }
    return word;


}
console.log(Repaet("Hah",3));
//4
// Bir method olsun göndərilən "n" sayda ədədin hamsını toplayıb geri qaytarsın.
function Sum() {
    let a=0
    let array=Array.from(arguments)  
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        a+=element
    }
    return a;
    
}







//5

function Sahe() {  // 1 adli olasi ucun alqortm istifAde eledim
 let array=Array.from(arguments)


    if (array.length==1) {
      
    
   
            return array[0]*array[0 ]*3
           
    
    
    }
   else  if (array.length==2) {
   
  
          
       return array[0]*array[1]
            
        
 
    }
    else  if (array.length===4) {
   
  
          
       
           p=(array[0]+array[1]+array[2])/2
            return p*array[3]
       
      
   
   }  else{
return "bele hesablama yoxdur"

            
}


}

console.log(Sahe(2))
 console.log(Sahe(2,3))
 console.log(Sahe(2,3,2,2))
 console.log(Sahe(2,3,2,2,6))
 console.log(Sum(1,2))
