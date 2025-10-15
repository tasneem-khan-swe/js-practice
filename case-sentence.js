function titleCase(sentence) {
    // write your code below   
    const words=sentence.split(" ");
    const titleCasedWords = words.map(word=>{
        word=word.split("")[0].toUpperCase()+word.slice(1).toLowerCase();
        console.log(word);
        
        return word;
    })
    console.log(titleCasedWords)
    return titleCasedWords.join(" ");
}
titleCase("hello world from javascript");