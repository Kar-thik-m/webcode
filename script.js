

//second container;

var container = document.createElement("div");
container.setAttribute("class", "container");


var row = document.createElement("div");
container.setAttribute("class", "row");

var finalresult = document.createElement("div");
finalresult.setAttribute("class", "oo");

async function makeup() {
  var se = document.getElementById("hi").value;

  var link = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${se}`
  var int = await fetch(link);
  var int1 = await int.json();
  console.log(int1);
  var inner = "";

  for (var i = 0; i < int1.length; i++) {
    inner +=`
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${int1[i].api_featured_image}" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${int1[i].brand}</h5>
        <p class="cart-name"><b>${int1[i].name} </b></p>
        <p class="card-text">${int1[i].description}</p>
        <h3 class="card-price"><b>${int1[i].price}<b></h3>
        <a href="#" class="card-link">${int1[i].product_link}</a>
      </div>
    </div>
  </div>
</div>`;
    finalresult.innerHTML = inner;
  }


}

makeup();





document.body.append(container, row, finalresult);