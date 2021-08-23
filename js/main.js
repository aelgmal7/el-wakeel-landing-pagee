console.log("hellow")
const brandSection = document.querySelector("#brand-container")
/* add scroll event listener */
// side button
document.getElementById("myBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

//header scroll
const brandContainer = document.getElementById("brand-container")
console.log(brandContainer.offsetHeight)
document.getElementById("brands-scroll").addEventListener("click", function () {
  window.scrollTo({
    top: brandContainer.offsetHeight - 300,
    behavior: "smooth",
  })
})


$(window).scroll(function (e) {
  if ($(window).scrollTop() > 900) {
    $("#myBtn").fadeIn(500)
  } else $("#myBtn").fadeOut(500)
  $(".slider-container0").animate({left:"0px"},800)
    
    $(".slider-container1").animate({left:"0px"},800)
})
$("#myBtn").fadeOut(500)

/* */
var typed = new Typed(".typedText", {
  strings: [
    "نوفر خدمة الصيانة لجميع محافظات واقاليم ومدن مصر.",
    "متاحين طوال ايام الاسبوع.",
    "توفير وسيلة النقل اذا لزم نقل الجهاز من المنزل.",
    "نعمل بجد و نسعى لتحقيق مستوى جديد من الانجازات.",
  ],
  typeSpeed: 30,
  loop: true,
  showCursor: true,
  startDelay: 500,
  //   shuffle:true,
  backSpeed: 20,
})
let toggleBrandShow = false
// brands data
const brands = [
  {
    brandName: "LG",
    phoneNumber: "01060201205",
    brandLogo: "assests/logos/LG.jpg",
    imgSrc: [
      "assests/slider/lg1.jpg",
      "assests/slider/lg2.jpg",
      "assests/slider/lg3.jpg",
     
    ],
  },
  {
    brandName: "Alska",
    phoneNumber: "01114983720",
    brandLogo: "assests/logos/alska.jpg",
    imgSrc: [
      "assests/slider/alaska1.jpg",
      "assests/slider/alaska2.jpg",
      "assests/slider/alaska3.jpg",
      
    ],
  },
  {
    brandName: "Kiriazi",
    phoneNumber: "01020301334",
    brandLogo: "assests/logos/kiriazi.jpg",
    imgSrc: [
      "assests/slider/Kiriazi1.jpg",
      "assests/slider/Kiriazi2.jpg",
      "assests/slider/Kiriazi3.jpg",

      
    ],
  },
  {
    brandName: "Universal",
    phoneNumber: "01002322851",
    brandLogo: "assests/logos/universal.jpg",
    imgSrc: [
      "assests/slider/Universal1.jpg",
      "assests/slider/Universal2.jpg",
      "assests/slider/Universal3.jpg",
    ],
  }, {
    brandName: "hitachi",
    phoneNumber: "01013213645",
    brandLogo: "assests/logos/hitachi.jpg",
    imgSrc: [
      "assests/slider/hitachi1.jpg",
      "assests/slider/hitachi2.jpg",
      "assests/slider/hitachi3.jpg",

    ],
  }, {
    brandName: "Electro Star ",
    phoneNumber: "01119264144",
    brandLogo: "assests/logos/electroStar.jpg",
    imgSrc: [
      "assests/slider/elctro1.jpg",
      "assests/slider/elctro2.jpg",
      "assests/slider/elctro3.jpg",
    ],
  }, {
    brandName: "white point",
    phoneNumber: "01093010064",
    brandLogo: "assests/logos/whit-point.jpg",
    imgSrc: [
      "assests/slider/white1.jpg",
      "assests/slider/white2.jpg",
      "assests/slider/white3.jpg",
    ],
  },
  , {
    brandName: "samsung",
    phoneNumber: "01029090494",
    brandLogo: "assests/logos/samsung.jpg",
    imgSrc: [
      "assests/slider/samsung1.jpg",
      "assests/slider/samsung2.jpg",
      "assests/slider/samsung3.jpg"
    ]
    
  }
]
let count = 0
let renderedBrands = ""
const showBrands = () => {
  brands.map((b) => {
    const tmp = toggleBrandShow
      ? getPrefix(b.brandLogo, b.phoneNumber, b.imgSrc)
      : getPostfix(b.brandLogo, b.phoneNumber, b.imgSrc)
    //  renderedBrands.push(tmp)
    renderedBrands += tmp
    count++

     toggleBrandShow = !toggleBrandShow
  })
}

const getPrefix = (brandLogo, phoneNumber, imgSrc) => {
  console.log(brandLogo, phoneNumber, imgSrc)
  return `
      
      <div class="container slider-container0 mb-5 ">
      <div class="row">
        <div class="col-4">
        <div class="container">
          <div class="row text-center mt-lg-5 mt-md-4 mt-sm-3">
            <div class="col-12">
              <img src="${brandLogo}" class="img-fluid" />
              <hr class="w-75 m-auto mb-4 opacity-40" />
            </div>
            <div class="col-12">
              <a class="contactBtn btn btn-primary" href="tel:${phoneNumber}">
                <h4>اتصل الأن</h4>
                <span  style="color:orange">${phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="col-8">
          <div id="carouselExampleIndicators-${count}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${imgSrc[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${imgSrc[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${imgSrc[2]}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${count}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${count}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
      `
}
const getPostfix = (brandLogo, phoneNumber, imgSrc) => {
  console.log(brandLogo, phoneNumber, imgSrc)
  return `
      <div class="container slider-container1 mb-5">
      <div class="row">
      <div class="col-4">
        <div class="container">
          <div class="row text-center mt-lg-5 mt-md-4 mt-sm-3">
            <div class="col-12">
              <img src="${brandLogo}" class="img-fluid" />
              <hr class="w-75 m-auto mb-4 opacity-40" />
            </div>
            <div class="col-12">
              <a class="contactBtn btn btn-primary" href="tel:${phoneNumber}">
                <h4>اتصل الأن</h4>
                <span  style="color:orange">${phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div class="col-8">
          <div id="carouselExampleIndicators-${count}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${imgSrc[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${imgSrc[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${imgSrc[2]}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${count}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${count}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
      </div>
    </div>

      `
}

console.log("🚀 ~ file: main.js ~ line 91 ~ brandSection", brandSection)

window.addEventListener("load", () => {
  showBrands()
  brandSection.innerHTML = renderedBrands
  $(".secondBlock").animate({ marginTop: "-120px" }, 350)
  
  
})

// window.addEventListener('scroll', () => {
//   $(".slider-container").animate({ marginLeft: '185px' }, 350)
// })
