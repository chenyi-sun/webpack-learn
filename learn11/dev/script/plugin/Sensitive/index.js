import Blacklist from './blacklist';

export default class {
    static check(str) {
        let illegal = false;

        //check bad words
        //---------------------------------
        for(let filter of Blacklist) {
            let pattern = new RegExp('\\b' + filter + '\\b', 'ig');

            if (pattern.test(str)) {
                illegal = true;
                break;
            }
        }

        //check spec illegal characters
        //---------------------------------
        if (str.match(/[\<\>!@#~`·()\$%^&\*,]+/i)) {
            illegal = true;
        }

        return illegal;
    }
};
