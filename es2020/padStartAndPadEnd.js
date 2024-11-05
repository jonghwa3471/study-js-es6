let hours = 12;
let minutes = 3;
let seconds = 2;

console.log(`${hours}h:${minutes}m:${seconds}s`);

console.log(
  `${hours}h:${minutes < 10 ? `0${minutes}` : minutes}m:${
    seconds < 10 ? `0${seconds}` : seconds
  }s`
);

console.log(
  `${hours}h:${String(minutes).padStart(2, "0")}m:${String(seconds).padStart(
    2,
    "0"
  )}s`
);
// Using padStart
