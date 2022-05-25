// function add(a: number, b: number) {
//     return a + b;
// }

// const add = (a: number, b: number) => a + b;

//call signature 어덯게 함수를 실행, 어떤걸 반환
// type Add = (a:number, b:number) => number;
// const add: Add = (a, b) => a + b;

// Generics
// type SuperPrint = {
//     <TypePlaceholder> (arr: TypePlaceholder[]): TypePlaceholder
// }
//
// const superPrint: SuperPrint = (arr) => arr[0]
// const d = superPrint([1,2,3,false,true,'hi'])
// type Player<E> = {
//     name: string
//     extraInfo: E
// }
