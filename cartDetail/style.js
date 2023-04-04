function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
        var array = num.toString().split("");
        var index = -3;
        while (array.length + index > 0) {
            array.splice(index, 0, separator);
            index -= 4;
        }
        return array.join("");
    }
}
function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
}
$(function () {
    $(".typeClick").click(function () {
        let type = $(this).attr("type");
        let quantity = $(this).parent().find("input").val();
        let sum = convertNumber($(this).closest(".cart-item").find(".price span").text());
        let total = convertNumber($(".total span").text());
        let priceCore = $(this).closest(".cart-item").find(".pricecore").text();
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
                console.log(quantity);
                $(this).closest(".cart-item").fadeOut(200);
                break;
        }
        if (quantity != undefined) {
            total = total - sum;
            sum = priceCore * quantity;
            total = total + sum;
        }

        $(this).closest(".cart-item").find(".price span").text(convertMoney(sum));
        $(this).parent().find("input").val(quantity);
        $(".sum span").text(convertMoney(total));
        $(".total span").text(convertMoney(total));
    });
});
