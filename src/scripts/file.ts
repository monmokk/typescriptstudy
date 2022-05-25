// type Age = number;
// type Name = string;
// type Player = {
//     readonly name : Name
//     age? : Age
// }
//
// const playerMaker = (name : string) : Player => ({name})
// const mj = playerMaker('mj');
// mj.age = 32;

// tuple
// const player : [string, number, boolean] = ['mj', 32, true]

// any could be anything
// const a : any[] = [1,2,3,4]
// const b : any = true
// a + b

//unknown 어떤 타입인지 아직 모름
// let a: unknown;
// if (typeof a === 'number') {
//     let b = a + 1
// } else if (typeof a === 'string') {
//     a.toUpperCase()
// }

// never  절대 어떤 리턴값도 없을 때
// function hello(name:string|number):never {
//     if (typeof name === 'string') {
//         name
//     }else if (typeof name === 'number') {
//         name
//     } else {
//         name
//     }
// }