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
