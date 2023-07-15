
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";   
  }
  x[slideIndex-1].style.display = "block";  
}

document.getElementById("log-in").onclick = function () {
  location.href = "./CuoiKhoa-login.html"
}

function moveTo1 () {
  location.href = "https://ananas.vn/product-detail/agt0006/?utm_source=google&utm_medium=ggshopping&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEfJXE32J7b39c-kVebP7sJbk7CKc5Umh2b8jYCTP-3bx1eCxGQLFlEaAvvWEALw_wcB"
}

function moveTo2 () {
  location.href = "https://ananas.vn/product-detail/abt00011/?utm_source=google&utm_medium=ggshopping&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEcuZtURZbo9oVPYX9W-9FGS09rZSEho58TKGp0ZTmaeEp4Qvtk5rz0aAvsq"
}

function moveTo3 () {
  location.href = "https://haba.com.vn/san-pham/pin-du-phong-oisle-mp280-8000mah/?gclid=CjwKCAjwvdajBhBEEiwAeMh1UwvUL2pXPmUyQO09gYSgf4BKYO5_Lh5C0OXBbonPtUjlAT_gwAxHaxoCwKAQAvD_BwE"
}

function moveTo4 () {
  location.href = "https://zizoou.com/products/ao-jean-so-mi-nam-nu?variant=42559482855624&currency=VND&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad=1&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEfDJ8Mnfoi-OOup8mTsrzlO9MVPHR7VuvvuX6jTHatcdMiWRSr84D0aAsKzEALw_wcB"
}

function moveTo5 () {
  location.href = "https://hacom.vn/ban-phim-edra-ek312-trang-brown-sw-usb-led-blue?gclid=CjwKCAjwvdajBhBEEiwAeMh1UxYX0mggXH6iRG3n_oTeAubc4IENqnNDv9rg4MzTQjuOfomj08ahUBoC4aUQAvD_BwE"
}

function moveTo6 () {
  location.href = "https://tnj.vn/danh-muc/1515-qua-sinh-nhat-ltn0194.html?gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U0G8MjjDjoN8IpePZwRIZdSrbMUfyXvbACFS1CCsuqKl5PBkbwmbghoCaCUQAvD_BwE"
}

function moveTo7 () {
  location.href = "https://hc.com.vn/ords/p--tivi-lg-65uq7550psf?gclid=CjwKCAjwvdajBhBEEiwAeMh1U8zhUkOX2SsvnQ-oyCxpfS81sWIkTAPiQDY5YQyW624xiter9agh2BoCkR8QAvD_BwE"
}

function moveTo8 () {
  location.href = "https://www.chapi.vn/ao-thun-nam/ao-thun-nam-dai-tay-co-be-adg-mau-den?n=gg_aothunnam&gad=1&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEfRrvXZTwL18_MbHyDeMbsoqZToWKqCunMHbRETzMCAmpIlui3CwpIaApkjEALw_wcB"
}

function moveTo9 () {
  location.href = "https://www.lazada.vn/products/1set-24g-wireless-mouse-ergonomic-mouse-mover-led-rechargeable-silent-mouse-usb-optical-mice-i2281111144-s11033857031.html?spm=a2o4n.tm80167394.6052311970.1.75eccAEAcAEAJK.75eccAEAcAEAJK&priceCompare=skuId%3A11033857031%3Bsource%3Alazada-om%3Bsn%3A6379b3b5-34ec-4655-a9f0-4ffbcc137bac%3BoriginPrice%3A215000%3BvoucherPrice%3A197600%3Btimestamp%3A1685433097419%3BsearchDisctDet%3A%5B%7B%22discountValue%22%3A17400%2C%22toolCode%22%3A%22shopCoupon%22%2C%22voucherChannelId%22%3A1%2C%22voucherId%22%3A900000012867289%7D%5D"
}

function moveTo10 () {
  location.href = "https://khanphukien.com/products/khan-choang-co-da-mau-nau-tay-tron-cashmere-200x60cm-ma-kc075"
}

function moveTo11 () {
  location.href = "https://seve7.vn/san-pham/ban-phim-co-k3-premium-gaming-co-day/?gclid=CjwKCAjwvdajBhBEEiwAeMh1U58oHqo4H7QkUkhQZ7_5ddXZz870geihhZJlqobbGCQdpsCubdlV2BoChb8QAvD_BwE"
}

function moveTo12 () {
  location.href = "https://gubag.vn/san-pham/balo-thoi-trang-nam-nu-gb-bl47/?gclid=CjwKCAjwvdajBhBEEiwAeMh1U-S5eIBnLag5Q75UR5-EvYMiAOyL8xzEFs8SwjyKpiYaBq4cdUOVWBoCy8MQAvD_BwE"
}

function moveTo13 () {
  location.href = "https://www.banggood.com/MechZone-72-Keys-Chinese-Ink-Painting-Keycap-Set-OEM-Profile-PBT-Sublimation-Keycaps-for-Mechanical-Keyboards-p-1605458.html?utm_source=googleshopping&utm_medium=cpc_organic&gmcCountry=VN&utm_content=minha&utm_campaign=aceng-pmax-vn-vi-pc&currency=VND&cur_warehouse=CN&createTmp=1&utm_source=googleshopping&utm_medium=cpc_us&utm_campaign=aceng-pmax-as-vn-all-220402-massa&utm_content=massa&ad_id=&gclid=CjwKCAjwvdajBhBEEiwAeMh1U2oInv8Vr_vVvB1GFvBSCti27wK_cvrt419YpTCboh7F8K5ntg8nuBoC8RkQAvD_BwE"
}

function moveTo14 () {
  location.href = "https://tuda.vn/products/cap-da-cong-so-cao-cap-da-that-da-nang-dung-laptop-ho-so-sbm319?utm_source=googleshopping&utm_medium=cpc&utm_campaign=sale_laptopbag&utm_content=sbm319_1087246833&utm_source=&utm_medium=&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEf3QwRKOIWuo2B9USM5FfchJ6iB0rzsBW0F9HGugx74zumrX6gLcY8aAmOTEALw_wcB"
}

function moveTo15 () {
  location.href = "https://fptshop.com.vn/phu-kien/loa-bluetooth-xiaomi-mi-portable-bluetooth-speaker-16w?srsltid=AR57-fBbhNVcD3xVlZaip3SLF1dGVt06Ui5e12zYZKCtcRqRdyrUcUlAY38"
}

function moveTo16 () {
  location.href = "https://aeoneshop.com/products/tuong-ot-chinsu-250g?view=hn"
}

function moveTo17 () {
  location.href = "https://shopee.vn/Combo-b%C3%A1nh-tr%C3%A1ng-ph%C6%A1i-s%C6%B0%C6%A1ng-5-m%C3%B3n-s%E1%BB%91t-t%E1%BA%AFc-sa-t%E1%BA%BF-B%C6%A1-Ru%E1%BB%91c-H%C3%A0nh-Phi-i.215043735.20043397112"
}

function moveTo18 () {
  location.href = "https://aeoneshop.com/collections/thit/products/xuc-xich-vuon-bia-la-cusina-500g-05061051?view=hn"
}

function moveTo19 () {
  location.href = "https://aeoneshop.com/collections/thuy-hai-san/products/fillet-ca-hoi-khay-500g?view=hn"
}

function moveTo20 () {
  location.href = "https://aeoneshop.com/collections/thit-bo/products/gau-bo-canada-300g-09209909?view=hn"
}
//if(myEmail.value == '"'){return;} else{// handle}