function solve(data) {
  String.prototype.htmlEscape = function() {
    return this.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };
  let table = data.map(x => JSON.parse(x));
  let result = "<table>\n";
  for (let record of table) {
    result += `  <tr>\n<td>${record.name.htmlEscape()}</td>
        <td>${record.position.htmlEscape()}</td>
        <td>${record.salary}</td>\n</tr>\n`;
  }
  result += "</table>";
  return result;
}
solve([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);
