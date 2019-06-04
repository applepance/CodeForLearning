LRU 缓存
Least Recently Used
操作系统

node fs 硬盘，内存

内存 是代码的运行空间 有限 2
存放变量 2个
3个来？

<!-- 1 put(1)
2 put(2)
3 放不下 1 2 -->
[] 内存 length 2
    原则：最近最少使用

1 put(1,1)
2 put(2,2)
3 get(1) 返回1  1最近使用 2最近最少使用
4 put(3,3) 3进去 2丢
5 get(2) 拿不到
6 put(4,4) 4 3 1丢
7 get(1) 找不到 -1
8 get(3) 3 
9 get(4) 4 

- cache LRUCache
    get
    set