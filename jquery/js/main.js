// $('[type=radio]').on("click", (event) =>{
   
//     $('#first-input').val(event.target.value);
// })


$('input[type = "radio"]').on("click", (e)=>{
    let value = e.target.value;

    switch (value){
        case "text 1":
            $('.square').slideUp(1000)
        break;

        case "text 2":  
            $('.square').slideDown(1000)
        break;

        case "text 3":
            $('.square').slideToggle(1000)
        break;

        default:
        break;
    }
})