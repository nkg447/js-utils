const imageData = [];
function onSubmit() {
  const main = document.getElementById("main");
  const rows = +document.getElementById("rows").value;
  const columns = +document.getElementById("columns").value;
  const url = document.getElementById("url").value;
  const img = document.getElementById("image");
  console.log(rows, columns);
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    const _ = [];
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
      _.push(" ");
    }
    main.appendChild(row);
    imageData.push(_);
  }
  img.style.background = `url(${url})`;
  img.style.width = `${20 * columns}px`;
  img.style.height = `${20 * rows}px`;
  img.style.backgroundSize = "contain";
  $("#main > tr > td").click(function () {
    var column_num = parseInt($(this).index());
    var row_num = parseInt($(this).parent().index());
    if (this.style.backgroundColor == "white") {
      imageData[row_num][column_num] = " ";
      this.style.backgroundColor = "transparent";
    } else {
      imageData[row_num][column_num] = "█";
      this.style.backgroundColor = "white";
    }
    let charImg = "";
    imageData
      .map((ar) => ar.join(""))
      .forEach((s) => {
        charImg = charImg + "<br /><pre>" + s + "</pre>";
      });
    document.getElementById("result").innerHTML = charImg;
  });
}
