// Nullish coalescing operator (널 병합 연산자)
let username;
username = 0;

console.log("hello", username || "anonymous");
// hello anonymous

console.log("hello", username ?? "anonymous");
// hello 0
