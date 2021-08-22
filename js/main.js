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