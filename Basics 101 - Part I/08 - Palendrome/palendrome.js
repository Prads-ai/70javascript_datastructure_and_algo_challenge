isPalindrome = (str) => {
   let formattedStr =  str.toLowerCase().replace(/[^a-z0-9]/g)
    let reversedFormattedStr = formattedStr.split('').reverse().join('')
    return formattedStr === reversedFormattedStr
}
isPalindrome_TwoPointer = (str) => {
    left = 0
    right = str.length - 1

    while(left < right)
    {
        if(str[left] !== str[right])
        {
            return false
        }
        left++
        right--
    }
    return true
}
let a = isPalindrome('racecar');
let b = isPalindrome('Hello');
let c = isPalindrome('A man, a plan, a canal, Panama');
let d = isPalindrome('12321')

let aa = isPalindrome_TwoPointer('racecar');
let bb = isPalindrome_TwoPointer('Hello');
let cc = isPalindrome_TwoPointer('A man, a plan, a canal, Panama');
let dd = isPalindrome_TwoPointer('12321')

console.log(a,b,c,d,)
console.log(aa,bb,cc,dd)