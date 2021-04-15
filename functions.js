function repeat(arrVar){
    let repeaterArr = Array(3);
    repeaterArr.fill([...arrVar]);
    console.log([].concat.apply([], [...repeaterArr]));
}

function reformat(str){
    let myStr = "";
    let words = str.split(" ");
    words.forEach(function(word, index){
        //console.log(word + " --> " + index);
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        word = [...word].map(letter => {
            if(vowels.includes(letter.toLowerCase())){
                return "";
            }else{
                return letter.toLowerCase();
            }
        }).join("");
    //console.log(word);
       if(index === 0){
            myStr = myStr + word.charAt(0).toUpperCase() + word.slice(1) + " ";
        }else{
            myStr = myStr + word.toLowerCase() + " ";
        }
  

    });
    console.log(myStr);
}

function next_binary_number(binaryArr) {
    let decimal = 0;
    let decStep = 0;
    
    for(var itr = binaryArr.length - 1 ; itr >= 0 ; itr--){
        decimal = decimal + binaryArr[itr] * Math.pow(2, decStep);
        //console.log(itr + " => " + binaryArr[itr] + " => " + decimal);
        decStep++;
    }
    
    let nextDecimal = decimal + 1;
    let binary = 0;
    let rem, i = 1, step = 1;
    
    while (nextDecimal != 0) {
        rem = nextDecimal % 2;
        nextDecimal = parseInt(nextDecimal / 2);
        binary = binary + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${[...String(binary)].map(Number)}`);
}