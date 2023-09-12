function countVowels(str){
    str.toLowerCase()
    vowels = ['a','e','i','o','u']
    count = 0
    for(let i = 0; i < str.length ;i++){
        const char = str[i]
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
