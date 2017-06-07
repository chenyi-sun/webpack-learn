# Platform

Will add checked classes to html tag automatic.

If match the platform, will return `true`, and add the class name below.

if not match the platform, will return `false`, and add the class name `not-{className}` or `no-touch`.



## usage

### css

```scss
.desktop{
  // style for desktop platform
}

.ie11{
  // style for IE11 platform
}

.iphone{
  // style for iPhone platform
}
```

### js

```javascript
import Platform from 'Platform';

if(Platform.isIE) {
  // do something on IE
}

if(Platform.isiPad) {
  // do something on iPad
}
```





| static property | class name    | desktop                |
| --------------- | ------------- | ---------------------- |
| isDesktop       | desktop       | desktop browser        |
| isIE            | ie            | IE brwoser             |
| isIE11          | ie11          | IE11 brwoser           |
| isEdge          | edge          | Edge brwoser           |
| isChrome        | chrome        | Chrome brwoser         |
| isFirefox       | firefox       | Firefox brwoser        |
| isSafari        | safari        | Safari brwoser         |
| isSamsungNative | samsungnative | samsung native brwoser |
| isTablet        | tablet        | tablet device          |
| isiPad          | ipad          | iPad device            |
| isAndroidPad    | androidpad    | Android tablet device  |
| isNexus7        | nexus7        | Google Nexus7 device   |
| isMobile        | mobile        | mobile device          |
| isiPhone        | iphone        | iPhone device          |
| isS4            | s4            | samsung S4 device      |
| isS5            | s5            | samsungS5 device       |
| isS6            | s6            | samsungS6 device       |
| isS7            | s7            | samsungS7 device       |
| isIOS           | ios           | IOS device             |
| isAndroid       | android       | Android device         |
| hasTouch        | has-touch     | touch screen device    |
| isMac           | mac           | mac os system          |
| isWindows       | windows       | windows system         |

