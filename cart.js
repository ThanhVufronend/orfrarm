
$(function () {
    $(".typeClick").click(function () {
        let type = $(this).attr("type");
        let quantity = parseInt($(this).parent().find("input").val());
        let sum = parseInt($(this).closest("tr").find(".total span").text());
        let total = parseInt($(".card-total .sum span").text());
        let priceCore = parseInt($(this).closest("tr").find(".pricecore").text());
        switch (type) {
            case "plus":
                quantity++;
                break;
            case "minus":
                if (quantity > 1) {
                    quantity--;
                }
                break;
            case "delete":
                
                total = total - sum;
                
                $(this).closest("tr").fadeOut(200);
                break;
        }
        if (!isNaN(quantity)) {
            total = total - sum;
            sum = priceCore * quantity;
            total = total + sum;
        }

        $(this).closest("tr").find(".total span").text(sum);
        $(this).parent().find("input").val(quantity);
        $(".card-total .sum span").text(total);
        $(".card-total .total span").text(total);
    });
});
