// Fist way to do it
count_occurences = (words,char) =>
{
   return words.split(char).length - 1
}
// Second way to do it
count_occurences_II = (words,char) =>
{
    count = 0
    for(let i = 0; i < words.length ; i++)
    {
        if (words[i] !== char){
            continue
        }
        else {
            count++
        }
    }
    return count;
}

let occurences = count_occurences("hello world",'o')
let occurences_II = count_occurences_II("hellow world", 'o')
console.log(occurences)
console.log(occurences_II)


