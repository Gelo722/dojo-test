
const callback = () => {
    Swal.fire({
        customClass: {
            confirmButton: "pop-btn",  
        },
        buttonsStyling: false,
        title: "Ваша заявка принята!",
        text: "В ближайшее время оператор свяжется с вами.",
        icon: "success",
        background: "#121920",
        color: "#fff",
    });
}

const button = document.querySelector('#become-client');
button.addEventListener('click', callback);


