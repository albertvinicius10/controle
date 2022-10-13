$(document).ready(function(){
    console.log('funcionou');

    var baseUrl = 'http://loclhost:8000/'
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');




    $(deleteBtn).on('click', function(e){

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar esta tarefa ?');
        if(result){
            window.location.href = delLink;
        }

    });


    $(searchBtn).on('click', function(){
        searchForm.submit();
    });
});