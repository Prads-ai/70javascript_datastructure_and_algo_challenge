count_occurences = (words,char) =>
{
   return words.split(char).length - 1
}
let occurences = count_occurences("hellow world", 'o')
console.log(occurences)



