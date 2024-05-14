
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      if (data.country_code2 === 'CN') {
        window.location.href = 'https://example.com/blocked'; // 重定向到一个“访问被阻止”的页面
      }
    });



