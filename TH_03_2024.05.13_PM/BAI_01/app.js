$(document).ready(function(){
    $(".button").click(function(){
        var contentDiv = $(this).prev();
        var newContent = contentDiv.html();
        $("#content").html(newContent);
    });
});
