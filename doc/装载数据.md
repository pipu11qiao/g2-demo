#### 装载数据

chart 对象支持两种数据载入的方式

* 方式1 **data** 属性传入
```javascript
const chart = new G2.Chart({
    id: 'C1',
    width: 600,
    height: 300,
    data: [
        {x:'a',y:1},
        {x:'b',y:2}
    ]
});
```

* 方式2 调用 **chart.source(data)** 方法,每个字段的列定义也可以在这里传入

```javascript

chart.source(data,{
    x: {
        type: 'cat'
    },
    y: {
        min: 0
    }
})

```

#### 支持的数据格式

1. JSON 数组
2. DataView 对象

#### 更新数据

G2更新数据的方式主要有三种

* 仅仅是更新图表的数据
* 清理所有，重新绘制
* 使用DataView时的更新

##### 更新数据

如果是立即更新图表
* chart.changeData(data);
* view.changeData(data);
如果仅仅是更新数据，而不需要马上更新图表，可以调用chart.source(data),需要更新图标时调用chart.repaint()

#### 清理图形语法

更新数据时还可以清除图表上的所有元素，重新定义图形语法，重新绘制

```javascript
chart.line().position('x*y');
chart.render();

chart.clear(); // 清除所有
chart.source(newData); // 重新加载数据
chart.interval().position(x*y).color('z');
chart.render();

```

#### 使用DataView 更新

由于DataSet 支持状态量 state，一旦更改状态量，图表一起刷新





