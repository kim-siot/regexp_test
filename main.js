const str = `
010-1234-5678
siot@email.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
abbcccddd
`

console.log(str.match(/.{1,}(?<=@).{1,}/g))