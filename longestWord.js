// function findLongestWord(sentence) {
//     // your code here
//     const arr = sentence.split(" ")
//     let longestWord = arr[0]
//     for(let word of arr){
//       if(word.length > longestWord.length){
//         longestWord = word
//       }
//     }
//     return longestWord
//   }
  
//   console.log(findLongestWord("I am learning JavaScript again")); // "JavaScript"
  function longestWord(sentence) {
    // write your code below
    const words=sentence.split(" ");
    let lWord="";
    for(const word of words){
        if(word.length>lWord.length){
            lWord=word
        }
    }
    return lWord
}
  console.log(longestWord("I am learning JavaScript again")); // "JavaScript"
