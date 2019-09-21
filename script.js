(function () {
   
    //var base = 'https://server.txtrider.com/txtRider-publisher-panel/admin_1_angularjs/widget/';
    var base = 'https://txtrider.co/txtRider-publisher-panel/admin_1_angularjs/widget/';
    var desktopScriptUrl = base + 'desktop.js'
    var mobileScriptUrl= base + 'mobile.js';
    var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent))
    var scriptUrl = isMobile ? mobileScriptUrl : desktopScriptUrl;
    var txtScript = document.createElement('script');
    txtScript.setAttribute('src', scriptUrl);
    document.head.appendChild(txtScript);
})();
