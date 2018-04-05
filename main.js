

//let input = document.getElementsByClassName('formulaire');
let input = document.getElementsByTagName('form');

let google = 'https://www.google.fr/search?source=hp&ei=Wy3GWr35OtDQwALf7YHIAg&q=' + input;
console.log(input);

//

//let gr = window.location.replace("http://www.un-site.com/une-page.htm");
function ShowDiv() {
    document.getElementById("myDIV").style.display = "";
    document.getElementById("BB").style.display='none';
}

window.onload = function() {
  document.getElementById('btn').onclick = function()
  {
    window.location.href = "https://www.google.fr/#q="+document.getElementById("url").value
  };
}

setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
