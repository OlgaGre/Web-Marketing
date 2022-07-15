//import _ from 'lodash';
//import './style.css';
//import Icon from './1.jpg'
//import json from './dataset.json';
const json = {
  page_meta: {
    h1: "DAF - TRUCKS FOR SALE FROM NETHERLANDS",
    title: "Used DAF trucks from Netherlands for sale at SuperTrucks NL",
    meta_keywords: "trucks, offers, prices, used, new, marketplace",
    meta_description:
      "Keyword: daf netherlands. 26 trucks. Find new or used trucks in any price range fast and easy!",
  },
  nav: [
    {
      href: "#",
      text: "Home",
    },
    {
      href: "#",
      text: "Trucks",
    },
    {
      href: "#",
      text: "About Us",
    },
    {
      href: "#",
      text: "Contact",
    },
  ],
  breadcrumbs: [
    {
      href: "#",
      text: "Home",
    },
    {
      href: "#",
      text: "Trucks",
    },
    {
      href: "#",
      text: "DAF",
    },
  ],
  stock: [
    {
      href: "#",
      title: "DAF XF 440 6X2 SSC Intarder Standklima Liftachse ACC Euro 6",
      price: 25900,
      price_currency: "EUR",
      make: "DAF",
      model: "XF 440 SSC",
      type: "Container transporter/ swap body truck",
      year: 2014,
      mileage: 486647,
      mileage_measure: "km",
      axle_configuration: "6x2",
      power: 440,
      power_measure: "hp",
      payload: "16 550 kg",
      gross_weight: "25 700 kg",
      image: "1.jpg",
    },
    {
      href: "#",
      title: "DAF XF 460 SSC 6X2 SSC ACC Liftachse Intarder Euro 6",
      price: 29900,
      price_currency: "EUR",
      make: "DAF",
      model: "XF 440 SSC",
      type: "Container transporter/ swap body truck",
      year: 2016,
      mileage: 554317,
      mileage_measure: "km",
      axle_configuration: "6x2",
      power: 460,
      power_measure: "hp",
      payload: "15 761 kg",
      gross_weight: "26 000 kg",
      image: "2.jpg",
    },
    {
      href: "#",
      title: "DAF CF 75.310 + Manual",
      price: 7950,
      price_currency: "EUR",
      make: "DAF",
      model: "CF 75.310",
      type: "Cab chassis truck",
      year: 2006,
      mileage: 1026087,
      mileage_measure: "km",
      axle_configuration: "4x4",
      power: 310,
      power_measure: "hp",
      payload: "10 710 kg",
      gross_weight: "18 600 kg",
      image: "3.jpg",
    },
    {
      href: "#",
      title: "DAF CF 65.300 + Euro 5 + lift",
      price: 25950,
      price_currency: "EUR",
      make: "DAF",
      model: "CF 65.300",
      type: "Curtainsider truck",
      year: 2014,
      mileage: 537307,
      mileage_measure: "km",
      axle_configuration: "4x2",
      power: 300,
      power_measure: "hp",
      payload: "9 634 kg",
      gross_weight: "19 000 kg",
      image: "4.jpg",
    },
    {
      href: "#",
      title: "DAF XF 105.410 + Combi floor + Euro 5",
      price: 19500,
      price_currency: "EUR",
      make: "DAF",
      model: "XF 105.410",
      type: "Box truck",
      year: 2009,
      mileage: 1142998,
      mileage_measure: "km",
      axle_configuration: "4x2",
      power: 408,
      power_measure: "hp",
      payload: "7 445 kg",
      gross_weight: "19 000 kg",
      image: "5.jpg",
    },
    {
      href: "#",
      title: "DAF 105 XF 460 6x2, EURO 5, Airco, Combi",
      price: 18750,
      price_currency: "EUR",
      make: "DAF",
      model: "XF 105.460",
      type: "Curtainsider truck",
      year: 2012,
      mileage: 897000,
      mileage_measure: "km",
      axle_configuration: "6x2",
      power: 460,
      power_measure: "hp",
      payload: "14 960 kg",
      gross_weight: "26 000 kg",
      image: "6.jpg",
    },
  ],
  page_text: [
    {
      tag: "p",
      content:
        "A truck (a heavy load vehicle) – is a means of transport intended for load transportation. The concept of a “truck” has a rather broad definition and includes tractor units, as well as commercial vehicles and even pick-ups. A truck consists of a traction part and a load platform. Now let’s take into consideration trucks with the integral load platform and the GVW that reaches up to 7, 5 tons.",
    },
    {
      tag: "p",
      content:
        "Trucks’ axle configuration may vary from 4x2 to 8x8 according to the engine capacity and the purpose of a truck. Thus, quarry and construction dump trucks are equipped with 4x4, 6x4, 6x6 and 8x6 wheel-bases more often.",
    },
    {
      tag: "p",
      content:
        "Trucks are equipped with all modern passive and active safety systems in order to use the truck in urban areas or on the highways. These systems include collision prevention system, hill hold control, self-adjusting headlights, etc. Moreover, a contemporary truck meets all the requirements concerning driver’s comfort and the ergonomics of the cabin.",
    },
  ],
};
const navMenu = document.getElementsByClassName("nav-menu-link");
const btnSearch = document.getElementById('search')
//console.log(navMenu);

function fullThePage() {
  fullNav();
  fullBreadcrumbs();
  fullPagination();
  fullStockItems();
  fullTextPage();
}

function fullNav() {
  for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].innerHTML = json.nav[i].text;
    navMenu[i].href = json.nav[i].href;
  }
}
function fullBreadcrumbs() {
  let breadcrumbsLi = "";
  for (let i = 0; i < json.breadcrumbs.length; i++) {
    breadcrumbsLi += ` <li><a href="${json.breadcrumbs[i].href}" class="link">${json.breadcrumbs[i].text}</a></li>`;
  }
  breadcrumbsUl.insertAdjacentHTML("afterbegin", breadcrumbsLi);
}
function fullPagination() {
  let numPagination = Math.ceil(json.stock.length / 6);
  let els = document.getElementsByClassName("pagination_left");
  let divsForPagination = "";
  for (let i = 1; i <= numPagination; i++) {
    divsForPagination += `<div> ${i} </div>`;
  }
  Array.prototype.forEach.call(els, function (el) {
    el.insertAdjacentHTML("afterend", divsForPagination);
  });
}
function fullStockItems() {
  let stockItems = "";
  for (let i = 0; i < 6; i++) {
    stockItems += ` <div class="stock-item">
   <img src="./${json.stock[i].image}" alt="">
   <div class="stock-content">
   <div class="firstLine">
     <div class="title">${json.stock[i].title}</div>
     <div class="price">${json.stock[i].price}  ${json.stock[i].price_currency}</div>
     </div>
     <div class="detailed">
     <p>type: ${json.stock[i].type}</p>
     <p>power: ${json.stock[i].power}  ${json.stock[i].power_measure}</p>
     <p>payload: ${json.stock[i].payload}</p>
     <p>gross weight: ${json.stock[i].gross_weight}</p>
     </div>
     <div class="thirdLine">
     <div class="year">${json.stock[i].year}</div>
     <div class="mileage">${json.stock[i].mileage}${json.stock[i].mileage_measure}</div>
     <div class="axle_configuration">${json.stock[i].axle_configuration}</div>
   </div>
   </div>
   </div>`;
  }

  document
    .getElementById("stockItems")
    .insertAdjacentHTML("afterbegin", stockItems);
}
function fullTextPage() {
  let page_text = "";
  for (let i = 0; i < json.page_text.length; i++) {
    page_text += `<p>${json.page_text[i].content}</p>`;
  }
  document
    .getElementById("page_text")
    .insertAdjacentHTML("afterbegin", page_text);
}

function cleanStock() {
  document.getElementById('stockItems').innerHTML = ''
}

function filter() {
  var checkRadio = document.querySelector(
    'input[name="power"]:checked');
    if(checkRadio == null) {
    return
  }
  cleanStock();
  let arrNeedStock = [];
for (let i = 0; i < json.stock.length; i++) {
if (json.stock[i].power > checkRadio.value ) {
  arrNeedStock.push(json.stock[i])
}
  
}
console.log(arrNeedStock)
let needStockItems = "";
  for (let i = 0; i < arrNeedStock.length; i++) {
    needStockItems += ` <div class="stock-item">
   <img src="./${arrNeedStock[i].image}" alt="">
   <div class="stock-content">
   <div class="firstLine">
     <div class="title">${arrNeedStock[i].title}</div>
     <div class="price">${arrNeedStock[i].price}  ${arrNeedStock[i].price_currency}</div>
     </div>
     <div class="detailed">
     <p>type: ${arrNeedStock[i].type}</p>
     <p>power: ${arrNeedStock[i].power}  ${arrNeedStock[i].power_measure}</p>
     <p>payload: ${arrNeedStock[i].payload}</p>
     <p>gross weight: ${arrNeedStock[i].gross_weight}</p>
     </div>
     <div class="thirdLine">
     <div class="year">${arrNeedStock[i].year}</div>
     <div class="mileage">${arrNeedStock[i].mileage}${arrNeedStock[i].mileage_measure}</div>
     <div class="axle_configuration">${arrNeedStock[i].axle_configuration}</div>
   </div>
   </div>
   </div>`;
  }

  document.getElementById("stockItems").insertAdjacentHTML("afterbegin", needStockItems);
console.log(arrNeedStock)
}


btnSearch.addEventListener('click', filter)
fullThePage();
console.log(navMenu);
