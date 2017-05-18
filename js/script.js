// Задание 1
var arrCities = ["Нью-Йорк", "Лондон", "Одесса", "Кишинев"];
var html = "<div><ul><li>" + arrCities.join("</li><li>") + "</li></ul></div>";
var objDiv, objUl, objLi = null, objTextNode;

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
    objTextNode = document.createTextNode(arrCities[i]);
    objLi.appendChild(objTextNode);
    objUl.appendChild(objLi);
}

// Задание 2
var strFruits = "Яблоко;Апельсин;Мандарин;Груша;Слива";
var arrFruits = strFruits.split(";");

document.write("<h2>Задание 2. Список фруктов</h2>");
document.write("<div><ol><li>" + arrFruits.join("</li><li>") + "</li></ol></div>");

// Задание 3
var strWords = "", chrSep = ";", strWord;
var arrWords;

while (true){
    strWord = prompt("Введите ключевое слово:", "");
    if (typeof(strWord) == "object"){
        break;
    };

    if (strWord == ""){
        alert("Ввод пустой строки не допускается!");
        continue;
    };
    
    if (strWords != ""){
        strWords = strWords + chrSep;
    };
    strWords = strWords + strWord;
};

if (strWords != ""){
    document.write("<h2>Задание 2. Список слов</h2>");    
    arrWords = strWords.split(chrSep);
    arrWords.sort();
    document.write("<div><ol><li>" + arrWords.join("</li><li>") + "</li></ol></div>");    
};
