var firstItem = document.getElementById("one"); //get first list item

if (firstItem.hasAttribute("class")) {
  //if it has class attribute

  var attr = firstItem.getAttribute("class"); //get the attribute

  var el = document.getElementById("scriptResults"); //add the value of the attribute after the list

  el.innerHTML = "<p>the first item has a class name: " + attr + "</p>";
}
console.log(document);
