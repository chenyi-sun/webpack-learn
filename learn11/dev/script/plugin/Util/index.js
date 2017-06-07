export default class {

    /////////
    // Dom //
    /////////

    static parseDom(str) {
        var div = document.createElement('div');
        div.innerHTML = str;

        return div.children[0];
    };

    static closest(el, selector) {
        var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        while (el) {
            if (matchesSelector.call(el, selector)) {
                return el;
            } else {
                el = el.parentElement;
            }
        }
        return null;
    };

    static inViewWhole(el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = ((elemTop >= 0) && (elemTop < window.innerHeight)) ||
            ((elemBottom > 0) && (elemBottom <= window.innerHeight));

        return isVisible;
    };

    static inViewPartial(el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;

        var isVisible = !(elemTop < 0 && elemBottom < 0) && (elemTop < window.innerHeight);

        return isVisible;
    };


    ////////////
    // String //
    ////////////

    static substringByWord(str, length) {
        if (str.length > length) {
            str = str.substring(0, str.lastIndexOf(' ', length));
        }

        return str;
    };


    ///////////
    // Array //
    ///////////

    static indexOf(el, collection) {
        return [].indexOf.call(collection, el);
    };

    static sortObjArrByKey(arr, key) {
        return arr.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };


    ///////////
    // Event //
    ///////////

    static triggerEvent(el, eventName, data) {
        var event;

        data = data || {};

        if (window.CustomEvent) {
            event = new CustomEvent(eventName, {
                detail: data
            });
        } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    };


    ////////////
    // social //
    ////////////

    static shareFacebook(opts) {
        var path = 'https://www.facebook.com/dialog/feed?' +
            'app_id=' + encodeURIComponent(opts.app_id) +
            '&link=' + encodeURIComponent(opts.link) +
            '&picture=' + encodeURIComponent(opts.picture) +
            '&name=' + encodeURIComponent(opts.name) +
            '&description=' + encodeURIComponent(opts.description) +
            '&redirect_uri=' + encodeURIComponent(opts.redirect_uri);

        window.open(path, '_blank');
    };

    static shareTwitter(opts) {
        var path = 'https://twitter.com/intent/tweet?' +
            'text=' + encodeURIComponent(opts.text) +
            '&url=' + encodeURIComponent(opts.href);

        window.open(path, '_blank');
    };

    static sharePinterest(opts) {
        var path = 'https://pinterest.com/pin/create/link/?' +
            'url=' + encodeURIComponent(opts.url) +
            '&media=' + encodeURIComponent(opts.media) +
            '&description=' + encodeURIComponent(opts.description);

        window.open(path, '_blank');
    };


    /////////////////
    // performance //
    /////////////////

    static throttle(func, wait) {
        var ctx, args, rtn, timeoutID; // caching
        var last = 0;

        return function throttled() {
            ctx = this;
            args = arguments;
            var delta = new Date() - last;

            if (!timeoutID){
                if (delta >= wait) call();
                else timeoutID = setTimeout(call, wait - delta);
            }

            return rtn;
        };

        function call() {
            timeoutID = 0;
            last = +new Date();
            rtn = func.apply(ctx, args);
            ctx = null;
            args = null;
        }
    }
}
