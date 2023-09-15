ArrayIntersecion = (arr1, arr2)=>
{
    let intersection = []
    let unique = new Set(arr1)
    for(let num of arr2){
        if(unique.has(num)){
            intersection.push(num)
        }
    }
    return intersection
}

let a = ArrayIntersecion([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]) // 3,4,5
console.log(a)