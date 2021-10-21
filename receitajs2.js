window.onload = function () {
    let body = document.getElementsByTagName("body")[0];console.log(body);
    for (r of lista) {body.appendChild(montaDiv(r));
    }
}
function montaDiv(r) {

    let divR = document.createElement("div");divR.classList.add("divR");
    
    let r1 = document.createElement("div");r1.classList.add("r1");
    
    let titulo = document.createElement("h3");
    
    let tituloText = document.createTextNode(r.nome);
    
    let descricao = document.createElement("p");
    
    let descricaoText = document.createTextNode(r.descricao);
    
    let foto = document.createElement("img");foto.src = r.foto;

    titulo.appendChild(tituloText);

    descricao.appendChild(descricaoText);

    r1.appendChild(titulo);r1.appendChild(foto);r1.appendChild(descricao);
    
    let r2 = document.createElement("div");r2.classList.add("r2");


    let tituloIngredientes = document.createElement("h4");
    let tituloIngredientesText = document.createTextNode("Ingredientes:");tituloIngredientes.appendChild(tituloIngredientesText);r2.appendChild(tituloIngredientes);

  
    let ul = document.createElement("ul");

    for(let i = 0; i < r.ingredientes.length; i++) {       
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(r.ingredientes[i]);tituloPreparo.appendChild(tituloPreparoText);ul.appendChild(tituloPreparo);
    }    
    
    r2.appendChild(ul);

    let tituloPreparo = document.createElement("h4");
    let tituloPreparoText = document.createTextNode("Preparo:");tituloPreparo.appendChild(tituloPreparoText);r2.appendChild(tituloPreparo);



    let ol = document.createElement("ol");

    for(let i = 0; i < r.preparo.length; i++) {       
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(r.preparo[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ol.appendChild(tituloPreparo);
    }    
    
    r2.appendChild(ol);
  
/* ---------------------------------------------------*/

    divR.appendChild(r1)
    divR.appendChild(r2)
     let br = document.createElement("br");
    br.classList.add("br");
    divR.appendChild(br);
    let hr = document.createElement("hr");
    divR.appendChild(hr);    
    return divR;
}