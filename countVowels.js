// function countVowels(str) {
//     // write your code below
//     const vowels=["a","e","i","o","u"];
//     let count=0;
//     for(let ltr of str.toLowerCase()){
//         console.log(ltr, str);
        
//         if(vowels.includes(ltr)){
//             count++
//         }
//     }
//     return count
// }
const countVowels=str=>str.toLowerCase().split("").filter(ltr=>"aeiou".includes(ltr)).length
console.log(countVowels("Fahim"))