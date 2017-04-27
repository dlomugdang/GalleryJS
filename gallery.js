/*var chico = ["Bear Hole", "Monkey Face",
"Table Mountain", "Feather Falls",
 "Chico State University"];*/
var chico = [
  { description: "Bear Hole",
    picture: "https://s-media-cache-ak0.pinimg.com/736x/91/51/cd/9151cdacefa31f37bbd2fdcbbef89f1b.jpg",
    from: "pinterest.com"
  },
  { description: "Monkey Face",
    picture: "http://image.chicoer.com/storyimage/NA/20160113/NEWS/160119920/AR/0/AR-160119920.jpg&maxh=400&maxw=667",
    from: "chicoer.com"
  },
  { description: "Table Mountain",
    picture: "https://www.outdoorproject.com/sites/default/files/styles/odp_header_adaptive/public/features/img_2573_0.jpg?itok=j_s8RVKF",
    from: "outdoorproject.com"
  },
  { description: "Feather Falls",
    picture: "https://media-cdn.tripadvisor.com/media/photo-s/0e/aa/ef/cd/feather-falls-from-the.jpg",
    from: "tripadvisor.com"
  },
  { description: "Chico State University",
    picture: "http://www.csuchico.edu/cob/images/kendall-hall.jpg",
    from: "csuchico.edu"
  },
]
var current;

function shuffleGallery()
{
  var element;// = chico[Math.floor(Math.random() * chico.length)];
  //console.log(element);

  do
  {
    element = chico[Math.floor(Math.random() * chico.length)];
    document.getElementById("picture").src = element.picture;
    document.getElementById("caption").innerHTML = element.description;
    document.getElementById("source").innerHTML = "Image courtesy of: " + element.from;
  }
  while (element == current);
  console.log(element);
  current = element;
}
