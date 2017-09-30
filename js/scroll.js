var db = [],
    a = document.getElementById('a'),
    p = document.getElementById('p'),
    w = document.getElementById('w'),
    c = document.getElementById('c');

db.push(a, p, w, c);

for(i=0; i<db.length; i++){
  db[i].addEventListener("click", function(){
    move(this);
  });
}

function move (elem){
  var anim = setInterval(scroll, 10),
      stop = 0,
      id = elem.getAttribute("data-id"),
      trgt = document.getElementById(id),
      dist = trgt.getBoundingClientRect().top;
  dist -= 80;

  function scroll(){
    if(dist > 0){
      if(stop >= dist){
        clearInterval(anim)
      } else {
        window.scrollBy(0, 20);
        stop += 20;
      }
    } else if(stop <= dist){
          clearInterval(anim);
        } else {
          window.scrollBy(0, -20)
          stop -= 20;
        }
      }
    }
