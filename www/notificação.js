function alertSucess(params) {
    $('.alert-success').alert(function() {
        setTimeout(function () {
            $('.alert-success').hide(); // "foo" é o id do elemento que seja manipular.
        }, 2500); // O valor é representado em milisegundos.
    })
}

function alertError(params) {
    $('.alert-warning').alert(function() {
        setTimeout(function () {
            $('.alert-warning').hide(); // "foo" é o id do elemento que seja manipular.
        }, 2500); // O valor é representado em milisegundos.
    })
}