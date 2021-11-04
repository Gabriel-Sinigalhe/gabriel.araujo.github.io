window.onload = home;

    var url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';

    var xhttp =  new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {

        if(this.readyState == 4 && this.status == 200)
        {

            var movies = JSON.parse(xhttp.responseText);

            home(movies);

        }

    }  

    xhttp.open("GET", url);
    xhttp.send();

function home(movies)
{

    movies.forEach(function(filme)
    {
        var gbflix = document.getElementsByTagName("main")[0];
        gbflix.appendChild(movie(filme));
    });

};
    
function movie(filme)
{

    var movie = document.createElement("div");
    movie.classList.add("netflixdogabriel");    
    
    var foto = document.createElement("img");
    foto.src= filme.figura;

    var t1 = document.createElement("h3");
    var t2 = document.createTextNode(filme.titulo);

    var r1 = document.createElement("p");
    var r2 = document.createTextNode(filme.resumo);r1.id="ola";

    var g1 = document.createElement("ul");

    var etaria1 = document.createElement("p");
    var etaria2 = document.createTextNode(filme.classificacao);etaria1.id="etaria";

    var e1 = document.createElement("ul");e1.id="ecss";
    

    var op1 = document.createElement("ul");


    movie.appendChild(foto);

    t1.appendChild(t2);
    movie.appendChild(t1);

    movie.appendChild(op1);
    filme.opinioes.forEach((aux, i)=>
    {
    var op2 = document.createElement("li");
    var op2x = document.createElement("li")
    op2.appendChild(document.createTextNode(`${aux.rating} estrelas`));
    op2x.appendChild(document.createTextNode(aux.descricao));
    op1.appendChild(op2);
    op1.appendChild(op2x);

    });

    r1.appendChild(r2);
    movie.appendChild(r1);

    movie.appendChild(g1);
    filme.generos.forEach((aux, i)=>
    {
    var g2 = document.createElement("li");
    g2.appendChild(document.createTextNode(aux));
    g1.appendChild(g2);
    });

    movie.appendChild(e1);
    filme.elenco.forEach((aux, i)=>
    {
    var e2 = document.createElement("li");
    e2.appendChild(document.createTextNode(aux));
    e1.appendChild(e2);
    });

    etaria1.appendChild(etaria2);
    movie.appendChild(etaria1);

     

    return movie;
}

