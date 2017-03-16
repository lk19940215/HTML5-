
注意：在Canvas中，y轴正方向朝下；
     且Canvas中，采用弧度制；故
     
               sin(α) = Math.sin(α * Math.PI / 180),
               cos(α) = Math.cos(α * Math.PI / 180),
               
               arcsin(x / r) = Math.asin(x / r) * (180 / Math.PI),
               arccos(x / r) = Math.acos(x / r) * (180 / Math.PI),

!!!!!!!!!!!!!!：Math.atan2(dy, dx);    //用于获取角度值最好的公式
               ## 角度旋转
               dx = mouse.x - object.x;
               dy = mouse.y - object.y;
               object.rotation = Math.atan2(dy,dx)*180/Math.PI

               ## 平滑运动
                  value = center + Math.sin(angle)*range;
                  angle += speed;

               ## 正圆运动
                  x_position = centerX + Math.sin(angle)*radius;
                  y_position = centerY + Math.cos(angle)*radius;
                  angle += speed;

               ## 椭圆运动
                  x_position = centerX + Math.cos(angle)*radiusX;
                  y_position = centerY + Math.sin(angle)*radiusY;
                  angle += speed;

               ##两点间距离
               dx = x2 - x1;
               dy = y2 - y1;
               dist = Math.sqrt(dx*dx + dy*dy);

               
               //任意方向速度
               vx = speed * Math.cos(angle);
               vy = speed * Math.sin(angle);

               //任意方向加速度
               ax = force * Math.cos(angle);
               ay = force * Math.xin(angle);

               //改变速度
               vx += ax;
               vx += ay;

               //改变位置
               object.x += vx;
               object.y += vy;

               
               
               
使用HTML5的Canvas标签，绘制了一些有趣，好玩的实例；包括，一个最爱的黑客帝国的经典画面，一个树枝图；
  另外，编写了两个实际开发中可能使用到的 图片裁剪、loading加载的实例；还包括。。。。
 见证Canvas技能的增长的每一个实例！！
