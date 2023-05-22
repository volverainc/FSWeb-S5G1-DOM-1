const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

/* logo */
document.getElementById("logo-img").src = siteContent["images"]["logo-img"]

/*footer copyright*/
document.querySelector("footer > a").classList.add("bold");
document.querySelector("footer > a").innerHTML = siteContent["footer"]["copyright"]

/* header nav */
const headerNav = document.querySelectorAll("nav > a");
headerNav.forEach((nav) => { nav.classList.add("italic") })

headerNav[0].innerHTML = siteContent["nav"]["nav-item-1"]
headerNav[1].innerHTML = siteContent["nav"]["nav-item-2"]
headerNav[2].innerHTML = siteContent["nav"]["nav-item-3"]
headerNav[3].innerHTML = siteContent["nav"]["nav-item-4"]
headerNav[4].innerHTML = siteContent["nav"]["nav-item-5"]
headerNav[5].innerHTML = siteContent["nav"]["nav-item-6"]

/*cta*/
document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"]
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"]
document.getElementById("cta-img").src = siteContent["images"]["cta-img"]

/*top ve bottom text content*/
const topTextH1 = document.querySelector(".top-content .text-content:nth-child(1) h4");
const topTextH2 = document.querySelector(".top-content .text-content:nth-child(2) h4");
const bottomTextH1 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
const bottomTextH2 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
const bottomTextH3 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");

document.getElementById("middle-img").src = siteContent["images"]["accent-img"]

topTextH1.textContent = siteContent["ana-içerik"]["özellikler-h4"];
topTextH2.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
bottomTextH1.textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomTextH2.textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomTextH3.textContent = siteContent["ana-içerik"]["vizyon-h4"];

const topText1 = document.querySelector(".top-content .text-content:nth-child(1) p");
const topText2 = document.querySelector(".top-content .text-content:nth-child(2) p");
const bottomText1 = document.querySelector(".bottom-content .text-content:nth-child(1) p");
const bottomText2 = document.querySelector(".bottom-content .text-content:nth-child(2) p");
const bottomText3 = document.querySelector(".bottom-content .text-content:nth-child(3) p");

topText1.textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topText2.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
bottomText1.textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomText2.textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomText3.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

/* iletisim */

document.querySelector(".contact h4").textContent = siteContent["iletisim"]["iletişim-h4"];

const contactP1 = document.querySelector(".contact p:nth-child(2)");
const contactP2 = document.querySelector(".contact p:nth-child(3)");
const contactP3 = document.querySelector(".contact p:nth-child(4)");

contactP1.textContent = siteContent["iletisim"]["adres"];
contactP2.textContent = siteContent["iletisim"]["telefon"];
contactP3.textContent = siteContent["iletisim"]["email"];