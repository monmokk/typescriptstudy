// type Team = "red" | "blue" | "yellow";
// type Health = 1 | 5 | 10

//interface object의 모양을 ts한테 알려주는 역할
// interface Player {
//     nickName: string,
//     team: Team,
//     health: Health
// }
//
// const mj : Player = {
//     nickName: "꾸꾸",
//     team: "red",
//     health: 1
// }

// interface User {
//     readonly name: string
// }
//
// interface Player extends User {
//
// }
//
// const mj : Player = {
//     name: 'mj'
// }
// // readonly시 수정 불가
// // mj.name = '꾸꾸까?'

// 객체 정보 축적 가능
// interface User {
//     name: string
// }
//
// interface User {
//     lastName: string
// }
//
// interface User {
//     health: number
// }
//
// const mj : User = {
//     name: 'mj',
//     lastName: 'k',
//     health: 1
//
// }