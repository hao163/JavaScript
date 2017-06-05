# Github操作
* git init
* git remote -v
* git config --global user.email "you@example.com"  
* git config --global user.name "Your Name"
* git status
* git add .
* git commit -m "内容"
* git push origin master
* git clone https://github.com/hao163/JavaScript
* git pull

# Sublime Text3安装markdown  
### 按住ctrl + shift + P分别输入  
* package control install  
* markdown editting  
* markdown preview  
这样就完成了我们需要的包的安装了，重启之后即可使用。

### 额外的配置
```
preference--> key bunding user 中输入
[
    {
    "keys": ["alt+m"], 
    "command": "markdown_preview", 
    "args": { "target": "browser"}
    }
]

然后是设置语法高亮和mathjax支持
{
    "font_size": 13,
    "ignored_packages":["Vintage"],
    "enable_mathjax": true,
    "enable_highlight": true,
}
```
然后按住alt + m ，预览你编辑的文件吧。

