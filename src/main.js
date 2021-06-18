const level = document.querySelectorAll("div[class^='level']");
let n = 1;
for (let i = 0; i < level.length; i++) {
  level[i].addEventListener(
    "click",
    (e) => {
      const t = e.currentTarget;
      setTimeout(() => {
        t.classList.remove("x");
      }, n * 1000);
      n += 1;
    },
    true
  );
}
for (let i = 0; i < level.length; i++) {
  level[i].addEventListener("click", (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.add("x");
    }, n * 1000);
    n += 1;
  });
}
