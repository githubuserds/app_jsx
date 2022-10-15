const get_form = document.querySelector("#formulario");

get_form.addEventListener("submit", validarForm);

function validarForm(e) {
  e.preventDefault();

  const img_get = document.querySelector("#foto").value;
}

const vista_return = (Event) => {
  let conver_img = new FileReader(img_get);
  let span_img = document.getElementById("img-foto");

  conver_img = () => {
    if (conver_img.readyState == 2) {
      span_img.src = conver_img.result;
    }
  };

  conver_img.readAsDataURL(Event.target.files[0]);
};

// const vista_preliminar = (Event) => {
//   let leer_img = new FileReader(img_get);
//   let id_img = document.getElementById("img-foto");

//   leer_img.onload = () => {
//     if (leer_img.readyState == 2) {
//       id_img.src = leer_img.result;
//     }
//   };

//   leer_img.readAsDataURL(Event.target.files[0]);
// };
