const form = document.querySelector('.login-form')
// console.log(form)

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault()
    // console.dir(event.currentTarget)

    const { email, password } = event.currentTarget.elements;
    // console.log(email)
    // console.log(password)
   
     if (email.value === '' || password.value === '') {
     return alert('All fields must be filed!');
    };
   
    const data = {
        email: email.value,
        password: password.value
    };

    console.log(data);

    event.currentTarget.reset();
}

