console.log("hellow")

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


    const brands = [
      {
        brandName: 'Toshiba',
        phoneNumber: '34131318313',
        imgSrc: 'assests/Samsung_logo_blue.png'
      }
    ]

    const getPrefix = () => {
      return `
      <div class="container slider-container">
      <div class="row">
        <div class="col-4">
          <div class="row text-center mt-lg-5 mt-md-4 mt-sm-3">
            <div class="col-12">
              <img src="assests/Samsung_logo_blue.png" class="img-fluid" />
              <hr class="w-75 m-auto mb-4 opacity-40" />
            </div>
            <div class="col-12">
              <a class="contactBtn btn btn-primary" href="tel:01006831361">
                <h4>تواصل معنا</h4>
                <span class="text-muted">115668453465</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assests/شركة-يونيفرسال.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assests/be938c35ae21acb8d4fae8035f30746d.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="assests/195-1958564_lg-logo-png-lg-logo.png" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
      `
    } 

    const getPostfix = () => {
      return `
      </div>
      </div>
    </div>
  </div>
      `
    }

    const brandSection = document.querySelector('#brand-container')
    console.log("🚀 ~ file: main.js ~ line 91 ~ brandSection", brandSection)

    window.addEventListener('load', () => {
      brandSection.innerHTML = getPrefix()
    })
