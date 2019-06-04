- git 使用笔记
1. 初始化 git init 会创建一个 .git 隐藏文件夹用于识别储存一些信息
2. 在一个新的电脑上获取远程版本库 --> git clone [url]
3. git add [文件路径] 添加文件到暂存区 可使用 git add . 命令使得所有文件树加入暂存区
4. git status 查看状态
5. git commit -m '备注信息' 提交暂存区的文件到本地库，并附带一条提交的备注
6. git push origin master 上传默认本地库至github网站上的默认库
7. git diff 查看变动的内容
8. git log 可以查看提交日志 -p [file]查看指定文件的提交历史
9. git reset --hard HEAD 撤销目录所有未提交的修改内容
10. git checkout HEAD [file] 撤销指定文件未提交内容
11. git revert [commit] 撤销指定提交，这个[commit]来自于日志文件中的看到的一大串的字符串，只需要输入前5个就够了
12. git pull origin master 下载默认远程库代码并快速合并至默认本地分支

git使用总结：https://www.cnblogs.com/Gxiaopan/p/6714539.html