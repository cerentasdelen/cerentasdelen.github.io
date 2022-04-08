$(".nav a").click(function(){
    $( ".nav a").removeClass("active");
    $(this).addClass("active");


    $(window).hashchange(function(){
        let hash = location.hash;
        console.log(hash);
        $("section").hide();
        $("#"+ hash).show();
    });
});



