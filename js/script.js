$(document).ready(function () {

    $('.open-popup-link').magnificPopup({
        type: 'image',
        midClick: true
    });
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.single-item').slick({
        dots: false,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        responsive: true,
        // speed: 500,
        // fade: true,
        // cssEase: 'linear'
    });

    $("#accordion").accordion({
        heightStyle: "content"
        // collapsible: true
    });


    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    });


    let inputZip = document.getElementById('inputZip');

    inputZip.onkeydown = (e) => {
        if (isNaN(parseInt(e.key))) {
            e.preventDefault();
        }
    }
    let buttonTestForm = document.getElementById("button");

    buttonTestForm.onclick = function (e) {
        let inputName14 = document.getElementById("inputName14");
        let inputSName14 = document.getElementById("inputSName14");
        let inputPNumber = document.getElementById("inputPNumber");
        let inputCountry = document.getElementById("inputCountry");
        let inputAddress = document.getElementById("inputAddress");


        if (!inputName14.value) {
            alert('Заполните поле: Имя');
            e.preventDefault();
            return;
        }
        if (!inputSName14.value) {
            alert('Заполните поле: Фамилия');
            e.preventDefault();
            return;
        }
        if (!inputPNumber.value) {
            alert('Заполните поле: Телефон');
            e.preventDefault();
            return;
        }
        if (!inputCountry.value) {
            alert('Заполните поле: Страна');
            e.preventDefault();
            return;
        }
        if (!inputZip.value) {
            alert('Заполните поле: Индекс');
            e.preventDefault();
            return;
        }
        if (inputZip.value.length !== 6) {
            alert('Индекс должен состоять из 6 цифр');
            e.preventDefault();
            return;
        }
        if (!inputAddress.value) {
            alert('Заполните поле: Адрес');
            e.preventDefault();
            return;
        }

        document.getElementById('formH3').innerHTML = "Спасибо за заказ. Мы свяжемся с вами в ближайшее время!";
        // $('formH3').html = "Спасибо за заказ. Мы свяжемся с вами в ближайшее время!";
        document.getElementById('blinkForm').style.display = "none";
        // $('blinkForm').css('display', 'none');

        e.preventDefault();

    }


});