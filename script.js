



var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.className = "row";


row.append(container);

async function move() {
  var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  var data1 = await data.json();

  for (var i = 0; i < data1.length; i++) {
    row.innerHTML += `
    <div class="col-md-4">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <img src="${data1[i].api_featured_image}" class="card-img-top" alt="...">
    <div class="card-header">${data1[i].name}</div>
   <div class="card-body text-primary">
   <h5 class="card-title">Brand:${data1[i].brand}</h5>
   <p class="card-text">description::${data1[i].description}</p>
   <div class="price">${data1[i].price}$</div>
  </div>
  </div>
    </div>`;


    document.body.append(container);

  }
}
move();
