$(function () {
    lst = [];
    curItem = null;
    var data = [
        {
            "value":"iPhone 14 Pro",
            "label":"iPhone 14 Pro - $999",
            "codeProduct":"iphone01",
            "nameProduct":"iPhone 14 Pro",
            "price":999,
            "unit":"PCS",
            "type":"iPhone"
        },
        {
            "value":"iPhone 14",
            "label":"iPhone 14 - $799",
            "codeProduct":"iphone02",
            "nameProduct":"iPhone 14",
            "price":799,
            "unit":"PCS",
            "type":"iPhone"
        },
        {
            "value":"iPhone 13",
            "label":"iPhone 13 - $999",
            "codeProduct":"iphone03",
            "nameProduct":"iPhone 13",
            "price":599,
            "unit":"PCS",
            "type":"iPhone"
        },
        {
            "value":"MacBook Pro 16”",
            "label":"MacBook Pro 16” - $2499",
            "codeProduct":"mac01",
            "nameProduct":"MacBook Pro 16”",
            "price":2499,
            "unit":"PCS",
            "type":"Mac"
        },
        {
            "value":"MacBook Pro 14”",
            "label":"MacBook Pro 13” - $1999",
            "codeProduct":"mac02",
            "nameProduct":"MacBook Pro 14”",
            "price":1999,
            "unit":"PCS",
            "type":"Mac"
        },
        {
            "value":"MacBook Pro 13”",
            "label":"MacBook Pro 13” - $1299",
            "codeProduct":"mac03",
            "nameProduct":"MacBook Pro 13”",
            "price":1299,
            "unit":"PCS",
            "type":"Mac"
        },
        {
            "value":"iPad Pro",
            "label":"iPad Pro - $799",
            "codeProduct":"ipad01",
            "nameProduct":"iPad Pro",
            "price":799,
            "unit":"PCS",
            "type":"Ipad"
        },
        {
            "value":"iPad Air",
            "label":"iPad Air - $599",
            "codeProduct":"ipad02",
            "nameProduct":"iPad Pro",
            "price":599,
            "unit":"PCS",
            "type":"Ipad"
        },
        {
            "value":"iPad",
            "label":"iPad - $449",
            "codeProduct":"ipad03",
            "nameProduct":"iPad Pro",
            "price":449,
            "unit":"PCS",
            "type":"Ipad"
        }        
    ];
    $("#txtProduct").autocomplete({
        source: data,
        select: function(e, ui){
            curItem = ui.item.codeProduct;
            $("#lblSelect").html("You have chosse ["+ ui.item.nameProduct+"] - price: "+formatNumber(ui.item.price));
        }
    });
});  

function addProduct(){
    lst.push(curItem);
}

function formatNumber(n)
{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}