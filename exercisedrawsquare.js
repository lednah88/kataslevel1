function drawsquare(num) {
    str = "#"
    strRow = str.repeat(num) + "\n"
    return strRow.repeat(num);
}
console.log(drawsquare(4))