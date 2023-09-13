let num = [5, 7, 6, 9, 8]
num.push(1)
num.sort()
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor  do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
  console.log("o valor nao foi  encontrado!")
} else {
  console.log(` o valor esta na posiçao ${pos}`)
}
