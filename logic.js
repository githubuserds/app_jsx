// const get_form = document.querySelector("#formulario");

// Crear evento submit
// get_form.addEventListener("submit", validarForm);

// Funciones

// function validarForm(e) {

//      e.preventDefault();
//      const img_get = document.querySelector("#img").value



//      var img1 = new Image(); // HTML5 Constructor
//      img1.src = img_get;
//      img1.alt = 'img_upload';
//      let img_contr = document.body.appendChild(img1);

// let img = `<img src="${img_contr}">`;

// ]     document.getElementById('result').innerHTML = `${img_contr}`;

// document.getElementById('result').innerHTML = `<img src="${img_contr.HTMLImageElement}">`;

// img_contr.HTMLImageElement

// const create_img = createImageBitmap(img_get);

// document.getElementById('result').innerHTML = `tu ${create_img} crack` ;

// document.getElementById('result').innerHTML;


// console.log(img_get).HTMLImageElement
// }

const images = {
     10: `https://upload.wikimedia.org/wikipedia/commons/a/a8/EUR_10_obverse_%282014_issue%29.png`,
     20: `https://upload.wikimedia.org/wikipedia/commons/b/bb/The_Europa_series_20_%E2%82%AC_obverse_side.jpg`
};

const container = document.querySelector(`#result`);

// Aplicas tu lógica
// Como resultado tendremos un array de billete-cantidad
const result = [
     { valor: 10, cantidad: 8 },
     { valor: 20, cantidad: 3 }
];

const display = result => {
     for (element of result)
          displayElement(element); 
}

const displayElement = element => {
     const content = document.createElement(`div`);
     content.classList.add(`image-content`);

     const quantity = createQuantityTag(element);
     const img = createImage(element);

     content.appendChild(quantity);
     content.appendChild(img);

     container.appendChild(content);
}

const createQuantityTag = element => {
     const tag = document.createElement(`div`);
     tag.innerHTML = element.cantidad;
     return tag;
}

