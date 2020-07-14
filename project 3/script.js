let ArrayBtnObject = [];
let userExit = false;
let btnObject = function(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
};

let btnObj1 =new btnObject("Shoes",50.99,0);
let btnObj2 =new btnObject("Vegetables",5.99,0);
let btnObj3 =new btnObject("Laptop",500.99,0);
let btnObj4 =new btnObject("Cheese",10.99,0);
let btnObj5 =new btnObject("Jewelry",999.99,0);
let btnObj6 =new btnObject("Sportive Car",50000,0);
ArrayBtnObject.push(btnObj1);
ArrayBtnObject.push(btnObj2);
ArrayBtnObject.push(btnObj3);
ArrayBtnObject.push(btnObj4);
ArrayBtnObject.push(btnObj5);
ArrayBtnObject.push(btnObj6);

let updateInterface = function() {
    let sum = 0;
    let string = "";
    ArrayBtnObject.forEach(function(cur) {
        sum += cur.price * cur.amount;

        if (cur.amount !== 0)
        {
            string += "name: " + cur.name + " price: " + cur.price + " amount: " + cur.amount + '<i class=\"fa fa-times-circle text-white ml-auto\" id=\"' + cur.name + '\"></i>'+ "<br>"
        }
    });

    let totalPrice = Math.round(sum * 100) / 100;
    string += "total : " + totalPrice +  "$";
    document.getElementById('total_price').innerHTML = string;

    if (totalPrice == 0) {
        document.getElementsByClassName('purchase')[0].disabled = true;
    } else {
        document.getElementsByClassName('purchase')[0].disabled = false;
    }

    ArrayBtnObject.forEach(function(cur) {
        if (cur.amount !== 0)
        {
            document.getElementById(cur.name).addEventListener('click', function(){
                console.log(btnObj1);
                cur.amount --;
                updateInterface();
            });
        }
    });
};

let initEventListener = function() {
    document.getElementById("btn1").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj1.amount ++;
        updateInterface();
    });
    document.getElementById("btn2").addEventListener('click', function(){
        console.log(btnObj2);
        btnObj2.amount ++;
        updateInterface();
    });
    document.getElementById("btn3").addEventListener('click', function(){
        console.log(btnObj3);
        btnObj3.amount ++;
        updateInterface();
    });
    document.getElementById("btn4").addEventListener('click', function(){
        console.log(btnObj4);
        btnObj4.amount ++;
        updateInterface();
    });
    document.getElementById("btn5").addEventListener('click', function(){
        console.log(btnObj5);
        btnObj5.amount ++;
        updateInterface();
    });
    document.getElementById("btn6").addEventListener('click', function(){
        console.log(btnObj6);
        btnObj6.amount ++;
        updateInterface();
    });
/*    document.getElementById("btn1").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj1.amount --;
        updateInterface();
    });
    document.getElementById("btn2").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj2.amount --;
        updateInterface();
    });
    document.getElementById("btn3").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj3.amount --;
        updateInterface();
    });
    document.getElementById("btn4").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj4.amount --;
        updateInterface();
    });
    document.getElementById("btn5").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj5.amount --;
        updateInterface();
    });
    document.getElementById("btn6").addEventListener('click', function(){
        console.log(btnObj1);
        btnObj6.amount --;
        updateInterface();
    });

 */

    document.getElementById("cart-icon").addEventListener('click', function(){
        let state = document.getElementById('cart-float').style.display;
        if(state === "")
        {
            document.getElementById('cart-float').style.display = "block";
        }
        else if (state === 'block')
        {
            document.getElementById('cart-float').style.display = "none";
        }
        else {
            document.getElementById('cart-float').style.display = "block";
        }
    });
    document.getElementsByClassName('purchase')[0].addEventListener('click', function(){
        document.getElementById('dataSend').value = document.getElementById('total_price').innerHTML;
        let myJSON = JSON.stringify(ArrayBtnObject);
        document.getElementById('arrayData').value = myJSON;
    });
    document.addEventListener("mouseleave",function(){
        if(!userExit)
        {
            userExit = true;
            alert('good bye');
        }
    });
    let table = document.getElementById("table-hover");
    table.addEventListener("mouseout", function( event ) {
        // highlight the mouseout target
        event.target.parentElement.style.backgroundColor = "#212529";

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
    }, false);
    table.addEventListener("mouseover", function( event ) {
        // highlight the mouseout target
        event.target.parentElement.style.backgroundColor = "#007bff";

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "";
        }, 500);
    }, false);
};

initEventListener();

