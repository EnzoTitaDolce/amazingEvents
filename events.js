let eventos={
    "currentDate": "2022-01-01",
    "events": [
      {
        _id: 1,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
  }

  var categoriasFiltradas=[];
  function filtroCategorias(){
   var categorias=[] 
    for (let evento of eventos.events){
        categorias.push(evento.category)
         if(!categoriasFiltradas.includes(evento.category)){
             categoriasFiltradas.push(evento.category);
         }
    }
    //categoriasFiltradas=new Set(categorias);
  }

function crearChecks(){
    filtroCategorias()
    let mainBar=document.getElementById('mainBar');
    for (let categoria in categoriasFiltradas){
        var checkConainer=document.createElement('div');
        var check=document.createElement('INPUT');
        check.setAttribute("type","checkbox");
        check.setAttribute('value', categoria);
        check.setAttribute('name', categoria);
    
        var label = document.createElement('label');
        label.htmlFor = categoria;
        label.appendChild(document.createTextNode(categoriasFiltradas[categoria]));
        
        mainBar.appendChild(checkConainer)
        checkConainer.appendChild(check);
        checkConainer.appendChild(label)
    }
    var inputText=document.createElement('input');
    inputText.setAttribute('type','text');
    mainBar.appendChild(inputText);
}

function crearElementos(datos){ 
    var seccion=document.getElementById('cards');
  
        /*      CREA EL H5 DEL EVENTO       */
        
        var eventoTitulo=document.createElement('h5');
        eventoTitulo.innerHTML=datos.name
        eventoTitulo.setAttribute('class','card-title');

        /*      CREA LA IMAGEN DEL EVENTO       */

        var eventoItemImg=document.createElement('img');
        eventoItemImg.setAttribute('src',datos.image);
        eventoItemImg.setAttribute('class','card-img-top');
        eventoItemImg.setAttribute('height','100%');

        

        /*      CREA LOS PARRAFOS        */

        var descripcion=document.createElement('p');
        descripcion.innerHTML=datos.description;
        descripcion.setAttribute('class','card-text');
        var precio=document.createElement('p');
        precio.innerHTML='Price: $'+datos.price;
        precio.setAttribute('class','cardP')
        
        /*      CREA LA DESCRIPCIÓN DEL EVENTO       */
        
        var eventoBody=document.createElement('div');
        eventoBody.setAttribute('class','card-body');



        /*      CREA LA TARJETA DEL EVENTO       */


        var eventoItem=document.createElement('div');
        eventoItem.setAttribute('name','eventoItem');
        eventoItem.appendChild(eventoItemImg);
        eventoItem.appendChild(eventoTitulo);
        eventoItem.appendChild(eventoBody);
        eventoItem.appendChild(descripcion);
        eventoItem.appendChild(precio);
        eventoItem.setAttribute('class','card');
        eventoItem.style.width='18rem';
        eventoItem.style.padding='10px';
        
        seccion.appendChild(eventoItem);
    
 }


function eventosTodos(){
    for(let i=0; i<eventos.events.length; i++)
        crearElementos(eventos.events[i])
  
}

function  eventosFuturos(){
    
//    for(let i=0; i<eventos.events.length;i++){
//         if(eventos.events[i].date.includes('2022')){
//             crearElementos(eventos.events[i])
//         }
//     }

    for(let evento of eventos.events){
        if(evento.date.includes('2022')){
            crearElementos(evento)
        }
    }
}


function  eventosPasados(){
    
    for(let evento of eventos.events){
        if(evento.date.includes('2021')){
            crearElementos(evento)
        }
    }
}