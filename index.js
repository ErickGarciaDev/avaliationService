const avaliationStars = [2, 15, 18, 25, 40]
let sum = 0

for (let i = 0; i < avaliationStars.length; i++) {
    const element = (avaliationStars[i] * (i + 1))
    sum += element
}

let media = sum / 100
console.log(media)


