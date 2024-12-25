var inp = document.getElementById('inp')
var ul = document.getElementById('ul')

function Add() {
    if ( inp.value ) {
        var list = document.createElement('li')
        var text = document.createTextNode(inp.value)
        list.appendChild(text)
        ul.appendChild(list)
        inp.value = ""
    }
    else{
        alert("You must write something !");
    }
}