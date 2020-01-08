 var licz = 0;
 var tab = [];
 var i=1;
 var x="";
 var y="";


 while (i<5) {
   tab.push(document.getElementById('auto'+i));
   i++;
 }
    x =tab[Math.floor(Math.random()*tab.length)];
    x.classList.add("auto");
    x.classList.remove("zero");
    x.addEventListener("click", licznikx );


  function licznikx() {

      x.classList.remove("auto");
      x.classList.add("zero");

      y=tab[Math.floor(Math.random()*tab.length)];
      y.classList.add("auto");
      y.classList.remove("zero");
      y.addEventListener("click", liczniky );
   licz++ ;

   document.getElementById("licznik").innerHTML= "licznik: "+licz ;

  }
  function liczniky() {

      y.classList.remove("auto");
      y.classList.add("zero");

      x=tab[Math.floor(Math.random()*tab.length)];
      x.classList.add("auto");
      x.classList.remove("zero");
      x.addEventListener("click", licznikx );
   licz++ ;

   document.getElementById("licznik").innerHTML= "licznik: "+licz ;

  }


 document.getElementById("licznik").innerHTML= "licznik: "+licz ;
