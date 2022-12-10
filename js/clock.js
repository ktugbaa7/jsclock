let isim = prompt("Lütfen isminizi giriniz:", ""); // kullanıcıdan isim bilgisi alındı.
let nameMy = document.querySelector("#myName"); // id seçici ile myName id'sine atadık.

if(isim) {
    nameMy.innerHTML = `${isim}`; // ismi ekrana yazdırır.
}else {
    alert("Boş bırakmayınız. Adınızı yazınız.") // boş geçilmemesi için uyarı verilir.
    location.reload(); // bulunduğumuz sayfayı yeniler (ki tekrar isim bilgisi almak için).
}


const günler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
function showTime() {
    let tarih = new Date(); // new Date() bilgisi tarih değişkenine atandı.
    let gün = günler[tarih.getDay()]; // getDay() ile günün bilgisi alınır
    let saat = tarih.getHours();  // getHours() ile saat bilgisi alınır
    let dakika = tarih.getMinutes();  // getMinutes() ile dakika bilgisi alınır
    let saniye = tarih.getSeconds(); // getSecond() ile saniye bilgisi alınır

    saat = (saat < 10) ? "0" + saat : saat; // bu 3 satırdaki saat dakika saniye yazımı tek basamaklı sayının yazımını düzeltmek amacıyla yazılmıştır. mesela saniye 10 dan küçük 6 olsun. 6 olarak görünmesindense 06 olarak görünmesini sağladık.
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;

    document.querySelector("#myClock").innerHTML = `${saat}: ${dakika}: ${saniye}  ${gün}`  // id seçici ile ekrana yazdırıldı.
}
showTime();  // sayfa açıldığında hemen çalıştırır
setInterval(showTime, 1000); // ilk parametre olan showTime fonksiyonu çalıştırılır.İkinci parametre olan 1000, 1 sanide bir çalıştırılmasını sağlar. Bu yazılmazsa ekranda donuk bir şekilde kalır sayaç. Sayfa yenilendiğinde saat ilerlemiş görünür sadece.
