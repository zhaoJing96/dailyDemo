# dailyDemo
日常demo合集
### javascript文件:

arrayLevel.html：多维数组确定层级

arrayReduce.html：Array.reduce((acc, cur, idx, src) => {}, initialValue)使用demo

bubbleSort.html：冒泡排序

hasObjectNull.html：判断对象是否为空方法

objectAssign.html：Object.assign()使用demo

bibaoDemo.html：闭包demo

echartZoom.html：echart图表缩放，拖拽，最大最小限制

### threejs文件: 
three.js Demo

##### GLTFLoader.html:导出GLTF模型
实现原理：GLTFLoader

##### eventGetPoint.html：点击事件回去点坐标
实现原理：通过监听鼠标点击获取与射线相交的对象数组
主要采用技术：Raycaster：这个类用于进行raycasting（光线投射）。 光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。

##### drawLine.html：鼠标点击点绘制成线
实现原理：通过Raycaster获取点坐标，点坐标集合绘制线

##### planeDrawShape.html:在平面绘制几何体
实现原理：点坐标集合绘制线，点坐标集合通过Shape转成形状，Shape形状绘制成几何体
主要采用技术：
Geometry
Line/LineLoop：绘制线
Shape：使用路径以及可选的孔洞来定义一个二维形状平面。
ShapeBufferGeometry/ShapeGeometry：从一个或多个路径形状中创建一个单面多边形几何体。


##### drawShape.html：在立方体上绘制几何体
实现原理：点坐标集合绘制线，点坐标集合通过Shape转成形状（二维坐标），通过ShapeBufferGeometry/ShapeGeometry将二维形状平面Shape绘制成几何体，由于二维坐标绘制和三围坐标系不同，需对生成几何体对象进行旋转即可
主要采用技术：
Geometry
Line/LineLoop：绘制线
Shape：使用路径以及可选的孔洞来定义一个二维形状平面。
ShapeBufferGeometry/ShapeGeometry：从一个或多个路径形状中创建一个单面多边形几何体。

