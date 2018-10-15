## G2 图表组成

#### axis 坐标抽 

直角坐标系 x,y 轴 每个周包含
 
 * line 坐标轴线
 * tickLine 刻度线
 * label刻度文本
 * title 标题
 * grid 网格线
 
 #### legend 图例
 
 图例作为图表的辅助元素，用于标定不同的数据类型以及数据的范围，用于辅助阅读图表，帮助用户在图表中进行数据的筛选过滤。
 
 #### geometry 
 
 几何标记（Geometry），即我们所说的点、线、面这些几何图形，在 G2 中几何标记的类型决定了生成图表的类型。也就是数据被可视化后的实际表现，不同的几何标记都包含对应的图形属性。
 
 #### tooltip 
 
 当鼠标悬停在某个点上时，会以提示框的形式显示当前点对应的数据的信息，比如该点的值，数据单位等。数据提示框内提示的信息还可以通过格式化函数动态指定。
 
 #### guide
 
 当需要在图表上绘制一些辅助线、辅助框或者图片时，比如增加平均值线、最高值线或者标示明显的范围区域时，可以使用辅助标记 guide。