var arrCities = ["Нью-Йорк", "Лондон", "Одесса", "Кишинев"];
var html = "<div><ul><li>" + arrCities.join("</li><li>") + "</li></ul></div>";
var objDiv = null, objUl = null, objLi = null;

document.write("<h2>Задание 1. Список городов</h2>");
document.write("<h3>1.1. Join</h3>");
document.write(html);

document.write("<h3>1.2. Document.write</h3>");
document.write("<div>");
document.write("    <ul>");
for (var i = 0, len = arrCities.length; i < len; i++) {
  document.write("      <li>" + arrCities[i] + "</li>");
}
document.write("    </ul>");
document.write("</div>");

// 1.3. createElement
document.write("<h3>1.3. createElement</h3>");
objDiv = document.createElement("div");
document.body.appendChild(objDiv, document.body.lastChild);
objUl = document.createElement("ul");
objDiv.appendChild(objUl);
for (var i = 0, len = arrCities.length; i < len; i++) {
    objLi = document.createElement("li");
    textNode = document.createTextNode(arrCities[i]);
    objLi.appendChild(textNode);
    objUl.appendChild(objLi);
}