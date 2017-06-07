# Slider 轮播组件

> IE下使用css3动画会出现莫名问题，需使用传统的position进行动画，但性能会有所下降



## **结构**

```html
<div id="slider">
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```



## **初始化**

```javascript
let slider = new Slider({
  	// options...
});
```



## **初始化参数**

| 参数                     | 类型           | 默认值           | 描述                     |
| ---------------------- | ------------ | ------------- | ---------------------- |
| container              | dom          | null          | 容器元素（必须）               |
| prevBtn                | dom          | null          | 上一项按钮                  |
| nextBtn                | dom          | null          | 下一项按钮                  |
| indicator              | dom          | null          | 索引指示器                  |
| loop                   | boolean      | true          | 是否循环                   |
| dragable               | boolean      | true          | 是否可拖拽                  |
| currentIndex           | number (int) | 0             | 初始项下标                  |
| speed                  | number (ms)  | 1000          | 动画速度                   |
| interactiveSpeed       | number (ms)  | 200           | 人为交互后的动画速度             |
| interactiveDistance    | number (px)  | 100           | 人为交互后进行跳转的最短距离         |
| ease                   | string       | 'ease-in-out' | 缓动动画（css字符串）           |
| onChangeStart(i, next) | function     | null          | 动画开始时的回调，参数：当前下标，下一项下标 |
| onChangeEnd(i, prev)   | function     | null          | 动画结束后的回调，参数：当前下标，上一项下标 |



## **实例属性**

| 名称           | 类型           | 描述       |
| ------------ | ------------ | -------- |
| currentIndex | number (int) | 当前项下标    |
| items        | array        | 所有内容项的数组 |
| updating     | boolean      | 是否正在发生位移 |

***注：若要给slider内元素添加类似click的事件，需在事件处理函数的一开始判断updating值，若为true则禁止触发；若为false，则可正常触发（目的是为了防止在slider滑动过程中触发对应事件）***



## **实例方法**

| 名称                 | 描述                     |
| ------------------ | ---------------------- |
| slidePrev(t)       | 跳转到上一项，参数：动画时间         |
| slideNext(t)       | 跳转到下一项，参数：动画时间         |
| slideTo(i, t)      | 跳转到指定项，参数：目标项下标，动画时间   |
| prependSlide(dom)  | 在首部添加子项，参数：待添加的子项dom元素 |
| appendSlide(dom)   | 在尾部添加子项，参数：待添加的子项dom元素 |
| removeSlide(index) | 删除指定的子项，参数：待删除的子项下标    |
| refreshPosition()  | 重新排列子项位置和高度            |

