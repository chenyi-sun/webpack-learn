import Picture from './Picture.js';

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

const ua = window.navigator.userAgent.toLowerCase();
const isMobile = ua.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) !== null && ua.match(/Mobile/i) !== null;
const isiPad = ua.match(/ipad/i) !== null;
const isAndroid = ua.match(/android/i) !== null;
const isAndroidPad = isAndroid && !isMobile;
const isTablet = isiPad || isAndroidPad;
const isIE = /(msie|trident)/i.test(navigator.userAgent);
const isDesktop = !(isMobile || isTablet);

class Component {
    static dataName = 'data-source';
    static flagBg = 'data-bg';
    static survivalTime = 1000 * 60 * 1;
    static useStorage = isDesktop && !isIE;

    className = 'preload';
    loadOne = function() {};
    loadAll = function() {};

    loadCount = 0;
    pictureList = [];

    constructor(options) {
        for(const key in options) {
            this[key] = options[key];
        }

        if(this.sourceQueue === undefined) {
            for(const container of [...document.getElementsByClassName(this.className)]) {
                const src = container.getAttribute(Component.dataName);
                const useBg = container.getAttribute(Component.flagBg) !== null;

                const picture = new Picture({
                    src,
                    container,
                    useBg,
                });

                this.pictureList.push(picture);
            }
        } else {
            for(const src of this.sourceQueue) {
                const picture = new Picture({
                    src,
                });

                this.pictureList.push(picture);
            }
        }

        this.totalCount = this.pictureList.length;
    }

    load() {
        if(this.totalCount === 0) {
            this.loadAllHandler();
            return;
        }

        for(const picture of this.pictureList) {
            picture.load()
            .then(() => {
                // success
                if(Component.useStorage) {
                    picture.save(Component.survivalTime);
                }

                picture.setContent();
            }, () => {
                // fail
            })
            .finally(() => {
                this.loadHandler();
            });
        }
    }

    loadHandler() {
        this.loadCount += 1;

        this.loadOne(this.loadCount, this.totalCount);

        if (this.loadCount === this.totalCount) {
            this.loadAll(this.totalCount);
        }
    }
}

export default Component;
