function validAgeDate() {
    let ageDate = document.getElementById("InputAge")
    let currentDate = new Date()
    let dateAge = new Date(ageDate.value)
    let rest = currentDate.getTime() - dateAge.getTime()
    if (Math.round(rest/ (1000*60*60*24*365)) < 18) {
        alert("No posee más de 18 años")
        let submitButt = document.getElementById("Botton1")
        submitButt.remove()
    }
}

function radioAge(numRadioB) {
    let divAge = document.getElementById("validAge")
    switch (numRadioB) {
        case 1:
            divAge.innerHTML = '<div class="mb-3"><label for="InputAge" class="form-label">Ingrese su fecha de nacumiento</label> <br> <input type="date" class="form-control" id="InputAge" onfocusout="validAgeDate()" required></div>'
            break
        case 2:

            divAge.innerHTML = '<span>Solo se puedes registrar los mayores de edad</span>'
            break
        default:
            divAge.innerHTML = '<span>No seleccionado</span>'
    }
}

function validPwd() {
    let pwd1 = document.getElementById("InputPassword1")
    let pwd2 = document.getElementById("InputPassword2")
    console.log(pwd1, pwd2);
    let msjValid = document.getElementById("pwdValid");
    let buttonSend = document.getElementById("Botton1");
    console.log(buttonSend)
    if (pwd1.value.length != 0 && pwd2.value.length != 0) {
        if (pwd1.value.length < 8) {
            buttonSend.desable = true;
            msjValid.style.color = 'orange'
            msjValid.innerHTML = "<span>No Valida</span> <br><span>Debe contener minimo 8 caracteres</span>"
        } else {
            if (pwd1.value === pwd2.value) {
                msjValid.style.color = 'green';
                msjValid.innerHTML = "<span>Valida</span>";
            } else {
                msjValid.style.color = 'orange';
                msjValid.innerHTML = "<span>No Valida, no coinciden</span>";
            }
        }

    } else {
        msjValid.style.color = 'orange'
        msjValid.innerHTML = "<span>La contrasena no puede ser vacia</span>"
    }
}