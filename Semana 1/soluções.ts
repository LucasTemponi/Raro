// 1. Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara"). Imagino que você fará bom uso da https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
function bhaskara(a:number,b:number,c:number){
    let delta:number = 0;
    
    delta = b^2-4*a*c;
    if (delta>=0){
        let raiz1 = (-b+delta)/(2*a);
        let raiz2 = (-b-delta)/(2*a);
        return ([raiz1,raiz2]);
    }
    return("Não possui raízes reais")    
}
//console.log(bhaskara(3,3,6))

//------------------------------------------------------------------------------------------------------------------------------------------
//2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`. A partir dos valores recebidos, você precisa verificar se os valores forma um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.
function tipoTriangulo(a:number,b:number,c:number){

    if((a+b>c) && (a+c>b) && (b+c>c)){
        if (a==b && b==c ){
            return 'Triângulo Equilátero'
        }
        else if((a==b) || (b==c) || (c==a)){
            return 'Triângulo Isóceles'
        }
        return 'Triângulo Escaleno'
    }
    return ('Isso nem é um triângulo')
}
//console.log(tipoTriangulo(3,3,5))

//-----------------------------------------------------------------------------------------------------------------------------------------
//3. Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os objetos ordenados. Pede-se que não se utilize métodos prontos do objeto de array, como o [array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas para esta implementação: `bubble sort` ou `selection sort`.
function ordenaNumeros(arr: number[]) {
  const cpyArr = [...arr];
  const { length } = cpyArr;

  const swap = (a: number, b: number): void => {
    cpyArr[a] = cpyArr[a] + cpyArr[b];
    cpyArr[b] = cpyArr[a] - cpyArr[b];
    cpyArr[a] = cpyArr[a] - cpyArr[b];
  };

  for (let x = 0; x < length - 1; x++)
    for (let y = 0; y < length - 1 - x; y++) {
      const [currentIndex, nextIndex] = [y, y + 1];
      if (cpyArr[currentIndex] > cpyArr[nextIndex])
        swap(currentIndex, nextIndex);
    }

  return cpyArr;
}
//console.log(ordenaNumeros([1, 2, 3, 4, 5, 6,4, 4, 5, 6, 7, 8]))

//-------------------------------------------------------------------------------------------------------------------------------------------
// Para os exercícios 4, 5 e 6, considere os dois conjuntos abaixo:

 const a = [1, 2, 3, 4,4, 5, 6];
 const b = [4,4, 4, 5, 6, 7, 8,9];

// 4. Implementar a união dos grupos a e b. Os valores do objeto resultante devem ser todos únicos
function uniaoDosGrupos(a:number[],b:number[]){
    let c =ordenaNumeros(a.concat(b))
    let d:number[] = []
    for (let i = 0;i<c.length;i++){
        if (c[i] != c[(i+1)]){
            d.push(c[i])   
        }
    }
    return d
}
console.log(uniaoDosGrupos(a,b))

//-------------------------------------------------------------------------------------------------------------------------------------------
// 5. Implementar a interseção dos gupos a e b.

function intesecaoDosGrupos(a:number[],b:number[]){
    let c:number[]=[]
    a.forEach(i=>{
        if (b.indexOf(i)>=0 && c.indexOf(i)<0){
            c.push(i)
        }
    })
    return c
}
console.log(intesecaoDosGrupos(a,b))

//---------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Implementar a diferença de a e b
// function diferencaDosGrupos(a:number[],b:number[]){
//     let uniao = uniaoDosGrupos(a,b)
//     let inter = intesecaoDosGrupos(a,b)
//     let diferenca:number[] = []

//     uniao.forEach(i=>{
//         if (inter.indexOf(i)<0){
//             diferenca.push(i)
//         }
//     }
//     )
//     return diferenca
// }
// console.log(diferencaDosGrupos(a,b))

function diferencaDosGrupos(g1:number[],g2:number[]){
    let c:number[] = []
    g1.forEach(i=>{
        if (g2.indexOf(i)<0 && c.indexOf(i)<0){
            c.push(i)
        }
    })
    return c
}
console.log(diferencaDosGrupos(a,b))