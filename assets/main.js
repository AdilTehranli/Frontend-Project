const homeElement = document.getElementById("home");
const dropdownElement = document.querySelector(".dropdown_home");

homeElement.addEventListener("mouseover", () => {
  dropdownElement.style.display = "block";
});
dropdownElement.addEventListener("mouseover", () => {
    dropdownElement.style.display = "block";
  });
  dropdownElement.addEventListener("mouseout", () => {
    dropdownElement.style.display = "none";
  });

homeElement.addEventListener("mouseout", () => {
  dropdownElement.style.display = "none";
});



const shopElement = document.getElementById("shop");
const dropdownshopElement = document.querySelector(".dropdown_shop");

shopElement.addEventListener("mouseover", () => {
    dropdownshopElement.style.display = "block";
});
dropdownshopElement.addEventListener("mouseover", () => {
    dropdownshopElement.style.display = "block";
  });
  dropdownshopElement.addEventListener("mouseout", () => {
    dropdownshopElement.style.display = "none";
  });

  shopElement.addEventListener("mouseout", () => {
    dropdownshopElement.style.display = "none";
});


const productElement = document.getElementById("product");
const dropdownproductElement = document.querySelector(".dropdown_product");

productElement.addEventListener("mouseover", () => {
    dropdownproductElement.style.display = "block";
});
dropdownproductElement.addEventListener("mouseover", () => {
    dropdownproductElement.style.display = "block";
  });
  dropdownproductElement.addEventListener("mouseout", () => {
    dropdownproductElement.style.display = "none";
  });

  productElement.addEventListener("mouseout", () => {
    dropdownproductElement.style.display = "none";
});


const productpagesElement = document.getElementById("pages");
const dropdownpagesElement = document.querySelector(".dropdown_pages");

productpagesElement.addEventListener("mouseover", () => {
    dropdownpagesElement.style.display = "block";
});
dropdownpagesElement.addEventListener("mouseover", () => {
    dropdownpagesElement.style.display = "block";
  });
  dropdownpagesElement.addEventListener("mouseout", () => {
    dropdownpagesElement.style.display = "none";
  });

  productpagesElement.addEventListener("mouseout", () => {
    dropdownpagesElement.style.display = "none";
});


const productblogElement = document.getElementById("blog");
const dropdownblogElement = document.querySelector(".dropdown_blog");

productblogElement.addEventListener("mouseover", () => {
    dropdownblogElement.style.display = "block";
});
dropdownblogElement.addEventListener("mouseover", () => {
    dropdownblogElement.style.display = "block";
  });
  dropdownblogElement.addEventListener("mouseout", () => {
    dropdownblogElement.style.display = "none";
  });

  productblogElement.addEventListener("mouseout", () => {
    dropdownblogElement.style.display = "none";
});

const productelementsElement = document.getElementById("elements");
const dropdownelemenetsElement = document.querySelector(".dropdown_elements");

productelementsElement.addEventListener("mouseover", () => {
    dropdownelemenetsElement.style.display = "block";
});
dropdownelemenetsElement.addEventListener("mouseover", () => {
    dropdownelemenetsElement.style.display = "block";
  });
  dropdownelemenetsElement.addEventListener("mouseout", () => {
    dropdownelemenetsElement.style.display = "none";
  });

  productelementsElement.addEventListener("mouseout", () => {
    dropdownelemenetsElement.style.display = "none";
});