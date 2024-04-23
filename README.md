<h2>page模板</h2>
直接将下面的代码复制黏贴进新的html文件之后做出相应的改动（标题和图片文件夹）即可快速制作漫画页。

```
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>
     ！！改这里的标题！ 例如: lucid32  - xxxxxx 
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
         <a href="https://ranfrenjz.github.io/vol2lucid.html">返回漫画页面</a>
         <br><br><a href="https://ranfrenjz.github.io/main.html">***主页***</a>
         <br><BR></td></tr>
         </center>
        </table>
      </center>
    </div>
    <script src="javaScript/ComicPage.js"></script>
    <script>
    <!--！！！！改这里！！！！！-->
    <!-- 括号里面的东西改成“文件夹名”，“文件格式（例如文件夹里的图叫p01.jpg - p34.jpg，那么第二个变量处写p）”，“图片数量”,"文件后缀（可有可无，默认jpg）" -->
    displayImages('31',"P",41)
    </script>

 
</body>
</html>
```
