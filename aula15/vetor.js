let valores = [7, 4, 1, 0, 8, 5]
valores.sort()
//for (let pos = 0; pos < valores.length; pos++) {
//console.log(`à posição ${pos} tem o valor ${valores[pos]}`)/
//}
for (let pos in valores) {
  console.log(`a posçao ${pos} tem o valor ${valores[pos]}`)
}
