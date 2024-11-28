function ModificarDom() {
  let titulo = document.querySelector("h1");
  titulo.innerText = "titulo cambiado lol";

  let sub = document.querySelector("h2");
  sub.innerText = "";

  let bento = document.querySelector(".bento");

  bento.style.gridTemplateColumns = "1fr 1fr";

  let grid7 = document.querySelector(".grid7");
  grid7.style.gridColumn = "span 2";

  let body = document.querySelector("body");
  body.style.backgroundColor = "#3b0d91";

  let gridImg = document.querySelector(".grid7");
  gridImg.innerHTML = "<h3>Hit me hard and soft</h3><img src='https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62' width='300' height='300' />";

  let gridImg2 = document.querySelector(".grid2");
  gridImg2.innerHTML = "<img src='https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634' width='300' height='300' />";

  let gridImg1 = document.querySelector(".grid1");
  gridImg1.innerHTML = "<h3>Did you know that there's a tunnel under ocean boulevard?</h3>";
  gridImg1.style.height = "300px";

  let gridImg3 = document.querySelector(".grid3");
  gridImg3.innerHTML = "<img src='https://i.scdn.co/image/ab67616d0000b273e46a867e57386a58cdf72c78' width='300' height='300' />";

  let gridImg4 = document.querySelector(".grid4");
  gridImg4.innerHTML = "<h3>Hasta la raiz</h3>";
  gridImg4.style.height = "300px";


  let gridImg6 = document.querySelector(".grid6");
  gridImg6.innerHTML = "<img src='https://i.scdn.co/image/ab67616d0000b273b6f50e46dac445dff914a56f' width='340' height='340' />";

  let gridImg5 = document.querySelector(".grid5");
  gridImg5.innerHTML = "<h3>Homogenic</h3>";
  gridImg5.style.height = "340px";

  let a1 = document.getElementById("id1");
  a1.href = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fintl-es%2Falbum%2F5HOHne1wzItQlIYmLXLYfZ&psig=AOvVaw3wALbtyQscvmMWd36-7oOw&ust=1732917281471000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjzgImCgIoDFQAAAAAdAAAAABAE";
  document.getElementById("id2").href = a1.href;


  let a3 = document.getElementById("id3");
  a3.href = "https://open.spotify.com/album/6DWTUm9rifRvl5PTyNMwqV";
  document.getElementById("id4").href = a3.href;

  
  let a4 = document.getElementById("id5");
  a4.href = "  https://open.spotify.com/album/0h19Ty9F2Ma8pKkRdx17UT";
  document.getElementById("id6").href = "https://open.spotify.com/album/0h19Ty9F2Ma8pKkRdx17UT";

    document.getElementById("id7").href = "https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n";
}   

