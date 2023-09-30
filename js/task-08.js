const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault()
 
    const { email, password } = event.currentTarget.elements;
    
     if (email.value.trim() === '' || password.value.trim() === '') {
     return alert('All fields must be filed!');
    };
   
    const data = {
        email: email.value,
        password: password.value
    };

    console.log(data);

    event.currentTarget.reset();
}

