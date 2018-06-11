$(".submit").on("click", function(event){
    event.preventDefault();
    console.log($(this));
    let burger_id = $(this).childen(".input").val();
    console.log(burger_id);

    $.ajax({
        url: "/api/burger/" + burger_id, 
        method:"PUT" 
    }).then(function(data) {
        location.reload();
    })

});
