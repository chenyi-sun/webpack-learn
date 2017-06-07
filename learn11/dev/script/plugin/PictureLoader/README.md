# PictureLoader

Use the sessionStorage, loading pictures will first check whether there is no expired sessionStorage resources, if any, then directly from the local load; otherwise, request online resources.

> tip：sessionStorage has a size limit, if the image size exceeds the limit, it will not be stored locally, still use online resources



## **initialize 1：insert to dom after load**

### step 1

```html
<div class="preload" data-source="image/source.jpg"></div>
```

### step 2

```javascript
let loader = new PictureLoader({
  	className: 'preload',
});
```



## **initialize 2：load the image source only**

```javascript
let loaderQueue = new PictureLoader({
    sourceQueue: [
        'image/1.jpg',
        'image/2.jpg',
        'image/3.jpg',
        'image/4.jpg',
        'image/5.jpg',
    ],
});
```



## **start to load**

```javascript
loader.load();
```



## html attribute

| name        | description                      |
| ----------- | -------------------------------- |
| data-source | image source to load             |
| data-bg     | whether load as background image |



## initialize options

> className & sourceQueue two choose one

| name        | type     | default value | description                              |
| ----------- | -------- | ------------- | ---------------------------------------- |
| className   | string   | preload       | determine the class name of loader element |
| sourceQueue | array    | []            | source collection to load                |
| loadOne     | function | null          | trigger when load one image              |
| loadAll     | function | null          | trigger when load all images             |



## **static property**

| name         | type        | default value                            | description                              |
| ------------ | ----------- | ---------------------------------------- | ---------------------------------------- |
| dataName     | string      | data-source                              | determine which attribute to set the source |
| flagBg       | string      | data-bg                                  | determine whether to load as background image |
| survivalTime | number (ms) | 60000                                    | survival time of cache                   |
| useStorage   | boolean     | `true` on desktop browser except IE. Other platform will be `false` | whether use sesstion storage or not      |

