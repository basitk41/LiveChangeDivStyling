let width = 100;
let height = 100;
let radius = 5;
let border = 1;
let bordercolor = "blue";
const init = () => {
  const div = document.getElementById("root");
  div.innerHTML = `
<br />
<button class="btn btn-info" onclick='w(${10})'>+</button> <b>Width</b> <button class="btn btn-danger" onclick='w(${-10})'>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-info" onclick='b(${1})'>+</button> <b>Border</b> <button class="btn btn-danger" onclick='b(${-1})'>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b>Select Border Color</b>
<select id='bc' onchange='c()' style='padding:7px;border-radius:5px'>
<option ${bordercolor === "blue" ? "selected" : ""} value='blue'>blue</option>
<option ${bordercolor === "red" ? "selected" : ""} value='red'>red</option>
<option ${
    bordercolor === "green" ? "selected" : ""
  } value='green'>green</option>
</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-info" onclick='r(${10})'>+</button> <b>Radius</b> <button class="btn btn-danger" onclick='r(${-10})'>-</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button class="btn btn-info" onclick='h(${10})'>+</button> <b>Height</b> <button class="btn btn-danger" onclick='h(${-10})'>-</button>
<hr />
<div class='div' style="width:${width}px;height:${height}px;border-radius:${radius}px;border:${border}px ${bordercolor} solid;"></div>
`;
};
const h = (h) => {
  if (h < 0) {
    if (height > 0) {
      height += h;
    }
  } else {
    height += h;
  }
  init();
};
const w = (w) => {
  if (w < 0) {
    if (width > 0) {
      width += w;
    }
  } else {
    width += w;
  }
  init();
};
const r = (r) => {
  if (r < 0) {
    if (radius > 0) {
      radius += r;
    }
  } else {
    if (radius < 50) radius += r;
  }
  init();
};
const b = (b) => {
  if (b < 0) {
    if (border > 0) {
      border += b;
    }
  } else {
    if (border < 20) border += b;
  }
  init();
};
const c = () => {
  const select = document.getElementById("bc");
  bordercolor = select.value;
  init();
};
init();
