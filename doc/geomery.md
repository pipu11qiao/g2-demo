#### 什么是几何标记

即我们所说的点、线、面这些几何图形，G2中并没有特定的图表类型，

#### 几个标记类型
geom类型|描述
---|---
point | 点
path | 路径
line | 线
area | 填充线图跟坐标系之间构成的区域图
interval | 使用矩形活着弧形，用面积来表示大小关系的图形
polygon | 多边形
edge | 两个点之间的链接，用于构建树图和关系图中的边、流程图中的链接
schema | 自定义图形，用于构建箱型图，蜡烛图
heatmap | 用于热力图的绘制

#### 几何标记和图表类型

geom类型|图表类型
---|---
point | 点图、折线图中的点
path | 路径图、地图上的路径
line | 折线图、曲线图、阶梯线图
area | 区域图、层叠区域图、区间区域图
interval | 柱状图、直方图、南丁格尔玫瑰图、饼图、条形环图、漏斗图
polygon | 色块图、热力图、地图
schema | k线图、箱型图
edge | 树图、流程图、关系图
heatmap | 热力图

#### geom 对象方法

几何标记 geom 对象方法主要有两种

* 图形属性(attr)方法： 用户设置数据到视觉通道的映射
    * position
    * color
    * size
    * shape
    * opacity 
* 属性方法之外的方法
    * label（dims,\[callback\],cfg） 几个标记上显示文本
    * tooltip(dims) 映射到tooltip的字段
    * style(cfg) 配置图形的样式
    * select(cfg) 图形选中操作
    * active(boolean) 图形激活交互开关
    * animate（cfg）图形的动画
    
#### 几何标记和图形形状

使用几个标记实现各种图表类型是，低于每一种几个标记来说，在绘制的时候有不同的形状，十月通道跟图形属性的映射方式不一样也会生成不同的突变型：

* 点图，可以使用圆点、三角形、正方形、十字符号等表示点
* 线图，可以可以有折线、曲线、点线等
* 多边形 可以使实心


geom 内置提供的shape类型

geom类型 | shape类型|注
---| --- | ---
point | 

























