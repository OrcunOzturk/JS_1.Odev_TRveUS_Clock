//const Usa = <i class="flag flag-united-states"></i>
const TURKEY = ` `


//Site girişinde prompt ile kullanıcı adı alınıyor ve yazdırılıyor
function kullaniciAdi() {
    var isim = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = isim;
}




//Saat için zamanGoster fonksiyonu ve Date elemanı kullanılıyor

function zamanGoster() {
    var date = new Date();
    var saat = date.getHours();
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var gunadi = date.getDay(); 

  if (gunadi == 1) {
    gunadi = "Pazartesi";
  } else if (gunadi == 2) {
    gunadi = "Salı";
  } else if (gunadi == 3) {
    gunadi = "Çarşamba";
  } else if (gunadi == 4) {
    gunadi = "Perşembe";
  } else if (gunadi == 5) {
    gunadi = "Cuma";
  } else if (gunadi == 6) {
    gunadi = "Cumartesi";
  } else if (gunadi == 0)  // 7 değil 0 olmalı?  
    { gunadi = "Pazar";
  }

  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  var tarih = `${saat}:${dakika}:${saniye} ${gunadi}`

  document.getElementById("myClock").innerText = tarih;  
  document.getElementById("myClock").textContent = tarih;

  setTimeout(zamanGoster, 1000);
}

//USA time için

function zamanGoster2() {

var usadate = new Date();
usadate.setHours(usadate.getHours()-7);
    var usasaat = usadate.getHours();
    var usadakika = usadate.getMinutes();
    var usasaniye = usadate.getSeconds();
    var usagunadi = usadate.getDay(); 

    if (usagunadi == 1) {
        usagunadi = "Pazartesi";
      } else if (usagunadi == 2) {
        usagunadi = "Salı";
      } else if (usagunadi == 3) {
        usagunadi = "Çarşamba";
      } else if (usagunadi == 4) {
        usagunadi = "Perşembe";
      } else if (usagunadi == 5) {
        usagunadi = "Cuma";
      } else if (usagunadi == 6) {
        usagunadi = "Cumartesi";
      } else if (usagunadi == 0)  // 7 değil 0 olmalı?  
        { usagunadi = "Pazar";
      }

      usasaat = usasaat < 10 ? "0" + usasaat : usasaat;
      usadakika = usadakika < 10 ? "0" + usadakika : usadakika;
      usasaniye = usasaniye < 10 ? "0" + usasaniye : usasaniye;
    
      var usatarih = usasaat + ":" + usadakika + ":" + usasaniye + " " + usagunadi;
      document.getElementById("myClock2").textContent = usatarih;


   

    setTimeout(zamanGoster2, 1000);
}

//Melbourne time için

function zamanGoster3() {

    var audate = new Date();
    audate.setHours(audate.getHours()+7);
        var ausaat = audate.getHours();
        var audakika = audate.getMinutes();
        var ausaniye = audate.getSeconds();
        var augunadi = audate.getDay(); 
    
        if (augunadi == 1) {
            augunadi = "Pazartesi";
          } else if (augunadi == 2) {
            augunadi = "Salı";
          } else if (augunadi == 3) {
            augunadi = "Çarşamba";
          } else if (augunadi == 4) {
            augunadi = "Perşembe";
          } else if (augunadi == 5) {
            augunadi = "Cuma";
          } else if (augunadi == 6) {
            augunadi = "Cumartesi";
          } else if (augunadi == 0)  // 7 değil 0 olmalı?  
            { augunadi = "Pazar";
          }
    
          ausaat = ausaat < 10 ? "0" + ausaat : ausaat;
          audakika = audakika < 10 ? "0" + audakika : audakika;
          ausaniye = ausaniye < 10 ? "0" + ausaniye : ausaniye;
        
          var autarih = ausaat + ":" + audakika + ":" + ausaniye + " " + augunadi;
          document.getElementById("myClock3").textContent = autarih;
    
    
       
    
        setTimeout(zamanGoster3, 1000);
    }









kullaniciAdi()
zamanGoster();
zamanGoster2()
zamanGoster3()
