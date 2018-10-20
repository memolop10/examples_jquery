$(".nav-button").on("click",function(e){
    // let selectedButton = e.target;
    let currentSection = $(e.target).data("controls");
    console.log(currentSection);
    $("section").hide();
    $(currentSection).show();
})

