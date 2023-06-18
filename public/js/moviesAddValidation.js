window.onload = function () {
    let titulo = document.querySelector(".moviesAddTitulo");
    let formulario = document.querySelector("#formulario");
    let article = document.querySelector("article");
    titulo.innerHTML = "AGREGAR PELÍCULA";
    titulo.classList.add("titulo");
    article.classList.add("fondoTransparente");
    formulario.classList.add("fondoCRUD");

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//
    let form = document.querySelector(".form");
    let submitErrors = document.querySelector(".submitErrors");
    const errores = document.querySelector(".errores");
    let title = document.querySelector("#title");
    let titleError = document.querySelector("#titleError");
    let rating = document.querySelector("#rating");
    let ratingError = document.querySelector("#ratingError");
    let awards = document.querySelector("#awards");
    let awardsError = document.querySelector("#awardsError");
    let release_date = document.querySelector("#release_date");
    let releaseError = document.querySelector("#releaseError");
    let length = document.querySelector("#length");
    let lengthError = document.querySelector("#lengthError");
    let genreID = document.querySelector("#genre_id");
    let genreError = document.querySelector("#genreError");
    regExNum = /^[0-9]$/,
    regExLength = /^[0-9]{2,3}$/,

    title.focus();
    title.addEventListener("blur", () => {
        switch (true) {
            case !title.value.trim():
                titleError.innerText = "El Titulo no puede estar vacio";
                title.classList.remove("is-valid");
                title.classList.add("is-invalid");
                break;
            default:
                title.classList.remove("is-invalid");
                title.classList.add("is-valid");
                titleError.innerText = "";
                break;
        }
    });

    rating.addEventListener("blur", () => {
        switch (true) {
            case !rating.value.trim():
                ratingError.innerText = "El rating no puede estar vacio";1
                rating.classList.remove("is-valid");
                rating.classList.add("is-invalid");
                break;
            case (rating.value < 0 || rating.value > 10):
                ratingError.innerText = 'el rating debe ser entre 1 y 10';
                rating.classList.remove("is-valid");
                rating.classList.add("is-invalid");
                break;
            default:
                rating.classList.remove("is-invalid");
                rating.classList.add("is-valid");
                ratingError.innerText = "";
                break;
        }
    });
    awards.addEventListener("blur", () => {
        switch (true) {
            case !awards.value.trim():
                awardsError.innerText = "Los premios no pueden estar vacio";
                awards.classList.remove("is-valid");
                awards.classList.add("is-invalid");
                break;
            case (awards.value < 0 || awards.value > 10):
                awardsError.innerText = 'los premios deben ser entre 1 y 10';
                awards.classList.remove("is-valid");
                awards.classList.add("is-invalid");
                break;
            default:
                awards.classList.remove("is-invalid");
                awards.classList.add("is-valid");
                awardsError.innerText = "";
                break;
        }
    });
    release_date.addEventListener("blur", () => {
        switch (true) {
            case !release_date.value.trim():
                releaseError.innerText = "La fecha de estreno no puede estar vacia";
                release_date.classList.remove("is-valid");
                release_date.classList.add("is-invalid");
                break;
            default:
                release_date.classList.remove("is-invalid");
                release_date.classList.add("is-valid");
                releaseError.innerText = "";
                break;
        }
    });
    length.addEventListener("blur", () => {
        switch (true) {
            case !length.value.trim():
                lengthError.innerText = "La duracion no puede estar vacia";
                length.classList.remove("is-valid");
                length.classList.add("is-invalid");
                break;
            case (length.value < 60 || length.value > 360):
                lengthError.innerText = 'los premios deben ser entre 60 y 360';
                length.classList.remove("is-valid");
                length.classList.add("is-invalid");
                break;
            default:
                length.classList.remove("is-invalid");
                length.classList.add("is-valid");
                lengthError.innerText = "";
                break;
        }
    });
    genreID.addEventListener("blur", () => {
        switch (true) {
            case !genreID.value.trim():
                genreError.innerText = "El genero no puede estar vacio";
                genreID.classList.remove("is-valid");
                genreID.classList.add("is-invalid");
                break;
            default:
                genreID.classList.remove("is-invalid");
                genreID.classList.add("is-valid");
                genreError.innerText = "";
                break;
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const FORM_ELEMENTS = event.target.elements;

        for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
            const element = FORM_ELEMENTS[index];
            if(element.value === "") {
                element.classList.add("alert-warning")
            }
        }
        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores1 = elementosConErrores.length > 0;

        if(errores1) {
            alert("Hay errores en el formulario");
        } else {
            alert("La película se guardó satisfactoriamente");
            form.submit()
        }
     })
};