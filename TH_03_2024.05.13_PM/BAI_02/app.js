$(document).ready(function(){
    $("#addItemBtn").click(function(){
        // Lấy giá trị từ ô input
        var newItemValue = $("#newItemInput").val().trim();

        // Kiểm tra xem ô input có rỗng hay không
        if(newItemValue !== '') {
            // Tạo một phần tử mới cho danh sách
            var newItem = $("<li>").text(newItemValue);
            // Thêm phần tử mới vào danh sách
            $("#itemList").append(newItem);
            // Xoá trắng ô input
            $("#newItemInput").val('');
        }
    });
});
