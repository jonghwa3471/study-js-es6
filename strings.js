// template literal

const arrowHi = (aName = "anon") => `Hello ${aName} lovely to have you`;

function add(a, b) {
  return a + b;
}
console.log(`hi ${add(2, 4)}`);

// HTML Fragments

const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  /*   const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "Hello";
  h1.className = "sexyTitle"
  div.append(h1); */
  const div = `
    <div class="hello">
      <h1 class="title">Hello</h1>
    </div>
  `;
  wrapper.innerHTML = div;
};

//setTimeout(addWelcome, 2000);

// HTML Fragments example2

const friends = ["me", "lynn", "dal", "mark"];

const ul = document.createElement("ul");
friends.forEach((friend) => ul.append(`<li>${friend}</li>`));
wrapper.append(ul);

// 이 방식으로 하면 html이 잘 안 나온다.
//  잘 나오게 하기 위해선 수정을 해야 하는데, 코드가 더 길어진다.

const list = `
  <h1>friends</h1>
  <ul>${friends.map((friend) => `<li>${friend}</li>`).join("")}</ul>
`;
wrapper.innerHTML = list;

// Cloning Styled Components

const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

const title = styled("h1")`
  background-color: red;
  color: blue;
`;

const subtitle = styled("span")`
  color: green;
`;

title.innerText = "styled component cloned";
subtitle.innerText = "siiiiiiiiiiiiiii";

document.body.append(title, subtitle);
