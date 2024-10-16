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

setTimeout(addWelcome, 2000);
