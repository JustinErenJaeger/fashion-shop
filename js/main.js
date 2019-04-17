function Products(name, price, description, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
};

let item1 = new Products("Jeans", "R599.99", "Feeling like you lost your groove? Well then get your self-esteem back with our new denim jeans complete with patches.", "images/products/denim-jeans.jpg");

let jacket = document.getElementById("product-1");
    amount = document.getElementById("price-1");
    info = document.getElementById("discription-1");
    img = document.getElementById("image-1");

    jacket.innerHTML = item1.name;
    amount.innerHTML = item1.price;
    info.innerHTML = item1.description;
    img.src = item1.image;


let item2 = new Products("Glasses", "R1199.99", "If you feel like your future is too bright why not purchase these gold framed shades to block out that bright light.", "images/products/gold-framed-glasses.jpg");

let glasses = document.getElementById("product-2");
    amount = document.getElementById("price-2");
    info = document.getElementById("discription-2");
    img = document.getElementById("image-2");

    glasses.innerHTML = item2.name;
    amount.innerHTML = item2.price;
    info.innerHTML = item2.description;
    img.src = item2.image;


let item3 = new Products("Hat", "R249.99", "Is the sun too hot and won't even give you a break? Well then purchase our new and fresh Straight out of programming hat.", "images/products/cap.jpg");

let cap = document.getElementById("product-3");
    amount = document.getElementById("price-3");
    info = document.getElementById("discription-3");
    img = document.getElementById("image-3");

    cap.innerHTML = item3.name;
    amount.innerHTML = item3.price;
    info.innerHTML = item3.description;
    img.src = item3.image;

let item4 = new Products("Flannel Jacket", "R899.99", "So the cold who's boss with our new flannel jacket with some of the newest insulation.", "images/products/flannel-jacket.jpg");

let flannel = document.getElementById("product-4");
    amount = document.getElementById("price-4");
    info = document.getElementById("discription-4");
    img = document.getElementById("image-4");

    flannel.innerHTML = item4.name;
    amount.innerHTML = item4.price;
    info.innerHTML = item4.description;
    img.src = item4.image;
