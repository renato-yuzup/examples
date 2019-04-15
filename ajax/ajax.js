function loadMock() {
    var request = $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        type: 'GET',
        dataType: 'html',
    }).done((response) => {
        var obj = JSON.parse(response);
        console.log(response);
        $('div.teste-label').hide();
        $('div.teste-label').fadeIn();
        $('div.teste-label').html(obj.title);
        console.log('Success!');
    }).fail((jqXHR, error) => {
        $('div.teste-label').hide();
        $('div.teste-label').fadeIn();
        $('div.teste-label').html('ERRO!');
        console.log('Error!');
        console.log(error);
    });
}

