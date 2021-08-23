console.log("hellow")
const brandSection = document.querySelector('#brand-container')

document.getElementById("myBtn").addEventListener('click',function(){

      window.scrollTo({
          top:0,
          behavior:"smooth"
        })
    })


    var typed = new Typed('.typedText', {
      strings: ["نوفر خدمة الصيانة لجميع محافظات واقاليم ومدن مصر.", "متاحين طوال ايام الاسبوع.", "توفير وسيلة النقل اذا لزم نقل الجهاز من المنزل.", "نعمل بجد و نسعى لتحقيق مستوى جديد من الانجازات."],
      typeSpeed: 30,
      loop: true,showCursor: true,
      startDelay: 500,
    //   shuffle:true,
      backSpeed:20
    });
  let toggleBrandShow = false
    // brands data
    const brands = [
      {
        brandName: 'Toshiba',
        phoneNumber: '01129379928',
        brandLogo : 'assests/Samsung_logo_blue.png' ,
        imgSrc: [
          
         'assests/Samsung_logo_blue.png',
         'assests/شركة-يونيفرسال.jpg',
         'assests/لوجو.png'
        ]
      },
      {
        brandName: 'Toshiba',
        phoneNumber: '01129379928',
        brandLogo : 'assests/Samsung_logo_blue.png' ,
        imgSrc: [
          
         'assests/Samsung_logo_blue.png',
         'assests/شركة-يونيفرسال.jpg',
         'assests/لوجو.png'
        ]
      },
      {
        brandName: 'Toshiba',
        phoneNumber: '01129379928',
        brandLogo : 'assests/Samsung_logo_blue.png' ,
        imgSrc: [
          
         'assests/Samsung_logo_blue.png',
         'assests/شركة-يونيفرسال.jpg',
         'assests/لوجو.png'
        ]
      }, {
        brandName: 'Toshiba',
        phoneNumber: '01129379928',
        brandLogo : 'assests/Samsung_logo_blue.png' ,
        imgSrc: [
          
         'assests/Samsung_logo_blue.png',
         'assests/شركة-يونيفرسال.jpg',
         'assests/لوجو.png'
        ]
      }
    ]
    let count =0
    let renderedBrands = ''
    const showBrands = () => {

    brands.map(b =>{
     const tmp = toggleBrandShow?  getPrefix(b.brandLogo,b.phoneNumber,b.imgSrc) : getPostfix(b.brandLogo,b.phoneNumber,b.imgSrc)
    //  renderedBrands.push(tmp)
    renderedBrands += tmp
    count++;

      // toggleBrandShow = !toggleBrandShow
    })
  }

    const getPrefix = (brandLogo,phoneNumber,imgSrc) => {
      console.log(brandLogo,phoneNumber,imgSrc)
      return `
      
      <div class="container slider-container mb-5">
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
const getPostfix = (brandLogo,phoneNumber,imgSrc) => {
      console.log(brandLogo,phoneNumber,imgSrc)
      return `
      <div class="container slider-container mb-5">
      <div class="row">
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
      </div>
    </div>

      `
    } 


    console.log("🚀 ~ file: main.js ~ line 91 ~ brandSection", brandSection)

    window.addEventListener('load', () => {
      showBrands()
      brandSection.innerHTML = renderedBrands
    })
