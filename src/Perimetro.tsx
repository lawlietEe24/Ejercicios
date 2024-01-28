function sumarElementos(arreglo: number[]): number {
    return arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
  }
   esteban: const arreglo = [1, 2, 3, 4, 5];
  const resultado = sumarElementos(arreglo);
  console.log(La suma de los elementos del arreglo es: ${resultado});