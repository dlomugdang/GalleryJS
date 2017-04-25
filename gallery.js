var chico = ["Bear Hole", "Monkey Face", "Table Mountain", "Feather Falls", "Chico State University"];
var current;

function shuffleGallery()
{
  var element;// = chico[Math.floor(Math.random() * chico.length)];
  //console.log(element);

  do
  {
    element = chico[Math.floor(Math.random() * chico.length)];
  }
  while (element == current);
  console.log(element);
  current = element;
}
