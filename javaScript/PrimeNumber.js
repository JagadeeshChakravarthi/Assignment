"use strict"

let num = 97
let factor = 0
let i = 1

while (i <= num)
{   
   if(num%i == 0)
    
    {
        factor++;
        
    }
    i++
}
console.log(factor)
 if (factor < 3) 
 {
     console.log(`${num} is a Prime`)
 } 
 else 
 {
     console.log(`${num} is a Not a Prime`)
 }