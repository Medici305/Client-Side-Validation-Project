$(document).ready(function(){
    $('.modal').modal();
});

const trial = document.querySelector('.free-trial');
trial.addEventListener('click', e => {
    //e.target.style.backgroundColor = 'blue';
})

const validate = () => {
    //Variables
    const form = document.getElementById('form');
    const firstName = document.getElementById('first_name');
    const sureName = document.getElementById('surename');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const firstText = document.getElementById('text-one');
    const secondText = document.getElementById('text-two');
    const thirdText = document.getElementById('text-three');
    const fourthText = document.getElementById('text-four');

    //Conditions No input
    if(firstName.value.trim() == '' && sureName.value.trim() == ''
    && email.value.trim() == '' && password.value.trim() == '' ) {
        alert('Please fill out the form');
    } 

    if(firstName.value.trim() == '') {
        firstText.textContent = 'Please enter First Name';
    } else {
        firstText.textContent = '';
    }
    
    if (sureName.value.trim() == '') {
        secondText.textContent = 'Please enter Surename!';
    } else {
        secondText.textContent = '';
    }
    
    if (email.value.trim() == '') {
        thirdText.textContent = 'Please enter Email Address!';
    } else {
        thirdText.textContent = '';
    }
    
    if (password.value.trim() == '') {
        fourthText.textContent = 'Please enter Password!';
    } else {
        fourthText.textContent = '';
    }
}

//Whenever you click on enter.
document.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        e.preventDefault;
        validate();
        document.getElementById('form').submit();
        document.priceOptionForm.submit();
        document.priceOptionForm.method='post';
    }
})

/*
const submitForm = () => {
    document.priceOptionForm.submit();
    document.priceOptionForm.method='post';
}
*/
