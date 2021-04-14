function reformat(str){
    let myStr = "";
    let words = str.split(" ");
    words.forEach(function(word, index){
        console.log(word + " --> " + index);
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        word = [...word].map(letter => {
            if(vowels.includes(letter.toLowerCase())){
                return "";
            }else{
                return letter.toLowerCase();
            }
        }).join("");
        console.log(word);
       if(index === 0){
            myStr = myStr + word.charAt(0).toUpperCase() + word.slice(1) + " ";
            
        }else{
            myStr = myStr + word.toLowerCase() + " ";
        }
  

    });
    console.log(myStr);
}
reformat("hello there vIJaY aNd aNusHa");