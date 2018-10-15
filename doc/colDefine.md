### 列定义

所谓的列定义就是对度量 scale的操作

G2 默认提供了一套生成度量的机制，但是这套机制并不能满足全部的要求。

> 说明：列定义上的操作可以理解为直接修改数据源中的数据属性，因此它会影响坐标轴、tooltip 提示信息、图例、辅助元素 guide 以及几何标记的标签文本 label 的数据内容显示。
  
#### 操作方式

* chart.source(data,defs); 数据源载入时设置
* chart.scale('field',defs); 该方法会覆盖chart.source 中定义的对应字段的列定义

##### chart.surce(data,defs)

为多个数据列进行度量类型的定义

##### chart.scale

1. 为单独某个字段进行列定义

```javascript
const data = [
    {type: 0, value: 1},
    {type: 1, value: 2},
    {type: 2, value: 3},
];
chart.scale('type',{
    type: 'cat',
    values: ['A','B','C'],
    alias: '类型'
})
```

2. 为多个字段进行列定义

```javascript
chart.scale({
    type: {
        nice: false
    },
    value: {
        nice: true
    }
})
```
















