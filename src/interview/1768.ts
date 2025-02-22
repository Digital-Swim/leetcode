

function mergeAlternately(word1: string, word2: string): string {

    let c = "";

    let len = word1.length < word2.length ? word1.length : word2.length
    
    for(let i = 0; i < len ; i++){
        c = c + word1[i] + word2[i]
    }

    if(word1.length > word2.length){
        c = c+ word1.slice(len)
    }
    else if(word2.length > word1.length){
        c = c + word2.slice(len)
    }
    

    return c;


};


const a = mergeAlternately("abcd","pq")
console.log(a)