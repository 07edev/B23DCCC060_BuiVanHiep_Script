$(document).ready(function(){
    $("#addItemBtn").click(function(){
        var newItemValue = $("#newItemInput").val().trim();
        if(newItemValue !== '') {
            var newItem = $("<li>").text(newItemValue);
            $("#itemList").append(newItem);
            $("#newItemInput").val('');
        }
    });
});
