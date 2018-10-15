#### 图形属性

#### 图形属性的方法

> chart.<geomType>().<attrType>(fields\[,callback]);

* geomType,几个标记类型
* attrType，图形属性类型
* fields 参与单个视觉通道映射的字段，可以使单个字段也可以多个字段，多个字段用 * 分割
* callback 用于定义如何解析视觉通道

```javascript

chart.point().position('a*b').color('c');
chart.interval().position('a*b').color('c',(cValue) => {
    if(cValue === 'fall'){
        return 'red';
    }
    return green;
});
```

##### position 位置属性

##### color


