# Util

all are static method.



## **category: Dom**

| name                  | description                              |
| --------------------- | ---------------------------------------- |
| parseDom(str)         | parse dom string `str` to dom element    |
| closest(el, selector) | get the nearest root node of `el`  which match `selector`. Will return `null` if false. |
| inViewWhole(el)       | adjust if `el` is in viewport totally    |
| inViewPartial(el)     | adjust if `el` is in viewport partly     |



## **categorty: String**

| name                         | description                              |
| :--------------------------- | ---------------------------------------- |
| substringByWord(str, length) | truncate  `str` to the nearest full word before the specified `length` |



## **category: Array**

| name                         | description                           |
| ---------------------------- | ------------------------------------- |
| indexOf(el, collection)      | get the index of `el` in `collection` |
| sortObjArrByKey(objArr, key) | sort object array by the given `key`  |



## **category: Event**

| name                              | description                              |
| --------------------------------- | ---------------------------------------- |
| triggerEvent(el, eventName, data) | trigger given `eventName` event on `el` with event data `data` |



## **category: Social**

| name                 | description                              |
| -------------------- | ---------------------------------------- |
| shareFacebook(opts)  | share to facebook（arguments object：app_id，link，picture，name，description，redirect_uri） |
| shareTwitter(opts)   | share to twitter（arguments object：text，href） |
| sharePinterest(opts) | share to pinterest（arguments object：url，media，description） |



## category: Performance

| name                 | description                              |
| -------------------- | ---------------------------------------- |
| throttle (fn,  wait) | call function `fn` up to once every `wait` millisecond |