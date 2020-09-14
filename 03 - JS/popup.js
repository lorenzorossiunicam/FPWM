function mostra() {
  var x = document.getElementById("pop");
  x.style.display = "block";
}

var x = document.getElementById("pop");
x.addEventListener ('click', function(){
  x.style.display = "none";
});
