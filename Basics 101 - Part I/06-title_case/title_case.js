titleCase = sentence => {
  words = sentence.split(' ')
    for(let i = 0; i < words.length; i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return words.join(' ')
}

titleCase('hello world')
titleCase('javascript programming')
titleCase('openai chatbot')