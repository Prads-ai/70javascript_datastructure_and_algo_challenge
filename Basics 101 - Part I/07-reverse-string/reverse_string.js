const reverse = (str) => str.split('').reverse().join('')
const second_reverse = (str) => {
    let reversed = ""
    for(let i = str.length - 1; i >= 0; i--){
         reversed += str[i]
    }
    return reversed
}

const reversed_string = reverse('hello')
const reversed_string_secondWay = second_reverse('hello')

console.log('firstway: ',reversed_string)
console.log('second way: ',reversed_string_secondWay)

