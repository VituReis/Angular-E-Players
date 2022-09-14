$(document).ready(function(){

    $("#cpf").mask("000.000.000-00")

    $(".signin").click(function(){

        let cpf = $("#cpf").val();
        let usuario  = $("#usuario").val();
        let senha= $("#senha").val();

        if(cpf.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos.");

        } else {
            $(".mensagem").text("Dados prontos para cadastrar!");
            

        }
    })
})