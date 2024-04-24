## 文件结构
如果有需要改链接的文件，可以用ctrl+f键搜索，很多短篇漫画会被直接归在comics下。

>[汉化首页](.//comics.html) comics.html 
>>[lucid1](./vol1lucid.html) vol1lucid.html 和 [lucid2](./vol2lucid.html) vol2lucid.html
>>>[漫画-简介页](icep.html) icep.html （这里用的是冰淇淋车，是不是统一设置成lucidX.html比较好呢？）
>>>>[漫画-漫画页](icecream.html) icecream.html （这里用的是冰淇淋车，是不是统一设置成lucidX-comic.html比较好呢？）

~~好想狠狠地把文件夹分门别类整理好啊……~~

<details>
	
<summary><h2>漫画阅读页模板（点我展开）</h2></summary>
直接将下面的代码复制黏贴进新的html文件之后做出相应的改动（标题，返回按钮，图片文件夹）即可快速制作漫画页。

```
<!-- 看右边 右边有个复制键 如果网页有问题的话删掉这行试试 -->
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
     <!-- ！！改这里的标题！ 例如: lucid32  - xxxxxx -->
    <title>
	我是标题，改我
    </title>
    <link href="./assets/style.css" rel="stylesheet" type="text/css" media="all">
    <link rel="icon" href="assets/icons/webbarego.gif">
  </head>
  <body id="pages">
    <div>
      <div id="imageContainer">
      </div>
      <center>
        <style>
          		td {
			border: 1px solid #999;
			padding: 0.1em 1em;
			background-color: black;
              }
        </style>
    <table><tr><td bgcolor="black">
      <table bgcolor="#FFFFF"> <center> 
          <br><BR>
         <a href="#" onclick="history.back();">返回</a>
         <br><br>
<!--！！下面的返回主页可能要改！！可能有lucid2和lucid1的区别，如果不属于任何lucid的话删掉这一行和下面的一行就可以了！-->
         <a href="https://ranfrenjz.github.io/vol2lucid.html">返回漫画页面</a>
         <br><br><a href="https://ranfrenjz.github.io/main.html">***主页***</a>
         <br><BR></td></tr>
         </center>
        </table>
      </center>
    </div>
    <script src="javaScript/ComicPage.js"></script>
    <script>
    //<!--！！！！改这里！！！！！-->
    //<!-- 括号里面的东西改成“文件夹名”，“文件格式（例如文件夹里的图叫p01.jpg - p34.jpg，那么第二个变量处写p）”，“图片数量”,"文件后缀（可有可无，默认jpg）" -->
    displayImages('31',"P",41)
    </script>

 
</body>
</html>
```

</details>

~~好想用react做单页再也不用复制黏贴啊……~~

[回到顶部](#readme)
