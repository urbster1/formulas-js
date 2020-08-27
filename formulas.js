const formulaArray = [
  "b2",
  "2",
  "b3",
  "3",
  "4",
  "b5",
  "5",
  "b6",
  "6",
  "b7",
  "7",
];

let tempDiv = "";

function generateFormulas(arr, data, start, end, index, combSize) {
  if (index === combSize) {
    tempDiv +=
      `<div class="row"><div class="cell">1</div>` +
      data.join("") +
      `</div>\n`;
    // console.log("1\t" + data.join("\t"));
    return;
  }
  let i = start;
  for (i; i <= end && end - i + 1 >= combSize - index; i++) {
    data[index] = `<div class="cell">` + arr[i] + `</div>`;
    generateFormulas(arr, data, i + 1, end, index + 1, combSize);
  }
}

function start() {
  tempDiv = `<p><div class="rowHeader">1-note formula</div>\n<div class="row"><div class="cell">1</div>\n</div>\n</p>\n`;
  // console.log(`1-note formula\n1`);

  for (let i = 1; i < 11; i++) {
    let data = new Array();
    tempDiv += `<p><div class="rowHeader">${i + 1}-note formulas</div>\n`;
    // console.log(`${i + 1}-note formulas`);
    generateFormulas(formulaArray, data, 0, formulaArray.length - 1, 0, i);
    tempDiv += `</div></p>\n`;
  }

  document.getElementById("formulas").innerHTML =
    tempDiv +
    `<p><div class="rowHeader">12-note formula</div>\n<div class="row"><div class="cell">1</div><div class="cell">` +
    formulaArray.join(`</div><div class="cell">`) +
    `</div>\n</div></p>\n`;
  // console.log(`12-note formula\n1\t` + formulaArray.join("\t"));
}
