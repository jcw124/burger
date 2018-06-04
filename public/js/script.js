$(".submit").on("click", function(event){
    event.preventDefault();
    let burger_id = $(this).children(".input").val();

    $.ajax({
        url: "/api/burger/" + burger_id, 
        method:"PUT" 
    }).then(function(data) {
        location.reload();
    })

});
