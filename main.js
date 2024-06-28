$(document).ready(function(){
    let c = 0
    $('form').on("submit", function(e){
        e.preventDefault();

        const tarefa = $('#input-tarefa').val();
        c += 1;
        const novaTarefa = $('<li class="custom-checkbox"></li>')
        $( `<input type="checkbox" name="checkbox" id="checkbox${c}"><label for="checkbox${c}">${tarefa}</label>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#input-tarefa').val('');
    })
})

