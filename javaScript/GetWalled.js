function EatAWall(){
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=c708e0003bba4906a4a189e3d26bc41f')
    .then(response => response.json())
    .then(data => {
      if (data.country_code2 === 'CN') {
        window.location.href = 'https://google.com'; // 重定向到一个“访问被阻止”的页面
      }
    });
}
EatAWall()