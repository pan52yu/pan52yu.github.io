const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: false,
  autoplay: false, //自动播放
  audio: [
    {
      name: '起风了',
      artist: '买辣椒也用券',
      url: 'https://www.ytmp3.cn/down/75687.mp3',
      cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002u9Brw2zqK6N_2.jpg?max_age=2592000',
    },
    {
      name: '缺氧',
      artist: '安苏羽',
      url: 'http://www.ytmp3.cn/down/78370.mp3',
      cover: 'https://t13.baidu.com/it/u=3369314649,2117046377&fm=179&app=42&size=w931&n=0&f=' +
        'JPEG&fmt=auto?s=E1C503AECC130DED5D0FF4100300409B&sec=1666371600&t=fef86f993e8cc3a48062811495a79569',
    },

    {
      name: 'So Far Away',
      artist: 'Mary Lambert',
      url: 'http://www.ytmp3.cn/down/78313.mp3',
      cover: 'https://t13.baidu.com/it/u=3369314649,2117046377&fm=179&app=42&size=w931&n=0&f=' +
        'JPEG&fmt=auto?s=E1C503AECC130DED5D0FF4100300409B&sec=1666371600&t=fef86f993e8cc3a48062811495a79569',
    },

  ]
});
