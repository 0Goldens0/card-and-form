$(document).ready(function () {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});

document.querySelector('#btn-lg').addEventListener('click', () => {
    let h = document.querySelector('#lg').textContent;
    document.getElementById('pn').value = h;
})

document.querySelector('#btn-phil').addEventListener('click', () => {
    let h = document.querySelector('#phlips').textContent;
    document.getElementById('pn').value = h;
})

document.querySelector('#btn-sony').addEventListener('click', () => {
    let h = document.querySelector('#sony').textContent;
    document.getElementById('pn').value = h;
})

document.querySelector('#btn-xia').addEventListener('click', () => {
    let h = document.querySelector('#xiaomi').textContent;
    document.getElementById('pn').value = h;
})