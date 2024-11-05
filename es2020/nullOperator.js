// Nullish coalescing operator (널 병합 연산자)
let username;
username = 0;

console.log("hello", username || "anonymous");
// hello anonymous

console.log("hello", username ?? "anonymous");
// hello 0

// Optional Chaning
const lynn = {
  profile: {
    phonenumber: 101,
  },
};
console.log(lynn?.profile?.email);
// && 표현식으로 표현하면 console.log(lynn && lynn.profile && lynn.profile.email)과 같다.
// ?. optional chaining은 null이나 undefined인 속성에 접근할 때만, 에러를 발생시킨다.
// 그래서 만약 그냥 console.log(lynn.profile.email)로 접근했어도 에러는 반환되지 않고, undefined만 출력된다.

// console.log(lynn?.profile.email)은 console.log(lynn && lynn.profile.email)과 같다.
// lynn이 존재하는지만 확인하고 profile은 확인하지 않고 lynn이 존재하면 바로 profile.email에 접근하기 때문이다.

// 메서드에 접근하려면 console.log(lynn?.profile?.method?.())로 접근하면 된다.
