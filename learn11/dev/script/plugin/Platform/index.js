const ua = window.navigator.userAgent.toLowerCase();
const html = document.getElementsByTagName('html')[0];

class Component {
    static hasTouch = 'ontouchstart' in window;
    static isiPad = ua.match(/ipad/i) !== null;
    static isNexus7 = ua.match(/Nexus 7/gi) !== null;
    static isMobile = ua.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) !== null && ua.match(/Mobile/i) !== null;
    static isiPhone = ua.match(/iphone/i) !== null;
    static isAndroid = ua.match(/android/i) !== null;
    static isS4 = ua.match(/(gt\-i95)|(sph\-l720)/i) !== null;
    static isS5 = ua.match(/sm\-g900/i) !== null;
    static isS6 = ua.match(/sm\-g9250/i) !== null;
    static isS7 = (ua.match(/sm\-g930(0|p|v)/i) !== null);
    static isIE = ua.match(/(msie|trident)/i) !== null;
    static isIE11 = ua.match(/Trident\/7\.0/i) !== null;
    static isEdge = ua.match(/edge/i) !== null;
    static isChrome = ua.match(/chrome/gi) !== null && ua.match(/edge/gi) === null;
    static isSafari = ua.match(/safari/gi) !== null && ua.match(/chrome/gi) === null;
    static isFirefox = ua.match(/firefox/gi) !== null;
    static isMac = ua.match(/mac/gi) !== null;
    static isWindows = ua.match(/windows/gi) !== null;
    static isSamsungNative = ua.match(/samsung/gi) !== null;

    static isAndroidPad = Component.isAndroid && !Component.isMobile;
    static isTablet = Component.isiPad || Component.isAndroidPad;
    static isDesktop = !(Component.isMobile || Component.isTablet);
    static isIOS = Component.isiPad || Component.isiPhone
}

for(const key of Object.keys(Component)) {
    let className = key.toLowerCase().replace('is', '');

    if (className.includes('has')) {
        className = className.replace('has', 'has-');
    }

    if (!Component[key]) {
        if (className.includes('has')) {
            className = className.replace('has', 'no');
        } else {
            className = 'not-' + className;
        }
    }

    html.classList.add(className);
}


export default Component;
