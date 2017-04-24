# 在 Windows 上设置你的工作空间

更改背景色
如果不喜欢 Git Bash 的背景色为黑色，可在“颜色”选项卡下的“默认值”菜单中更改背景色。如果喜欢原来的背景色，则无需进行更改。

### 下载必要的文件
将 git-completion.bash git-prompt.sh保存在你的主目录中
将 bash_profile 移到你的主目录中 （如果有兴趣详细了解 bash 提示符的工作方式，请参阅[此页](https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)。）

### 配置 Git
运行以下 Git 配置命令。如果使用的文本编辑器不是 Sublime，或者 Sublime 安装在其他位置中，则需要修改第一条命令。有关适用于其他多个常见文本编辑器的正确命令，请参阅此页。对于任何其他编辑器，你需要输入从 Git Bash 启动该编辑器时使用的命令。

git config --global core.editor "'C:/Program Files/Sublime Text 2/sublime_text.exe' -n -w"
git config --global push.default upstream
git config --global merge.conflictstyle diff3
确保可从 Git Bash 启动编辑器
如果你使用 Sublime Text，则可通过将以下一行添加到 .bash_profile 中来这样做：

alias subl="C:/Program\ Files/Sublime\ Text\ 2/sublime_text.exe"
重新启动 Git Bash
必须关闭 Git Bash，然后重新打开它，这样所有更改才会生效。

### 全局设置
git config --global core.editor "'D:/Program Files/Sublime Text 2/sublime_text.exe' -n -w"
git config --global push.default upstream
git config --global merge.conflictstyle diff3

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

Ref:
https://classroom.udacity.com/courses/ud775/lessons/2980038599/concepts/33417185870923