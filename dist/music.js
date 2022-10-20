const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true, //自动播放
  audio: [
    {
      name: 'So Far Away',
      artist: 'Mary Lambert',
      url: 'http://www.ytmp3.cn/down/78313.mp3',
      cover: 'https://t13.baidu.com/it/u=3369314649,2117046377&fm=179&app=42&size=w931&n=0&f=' +
        'JPEG&fmt=auto?s=E1C503AECC130DED5D0FF4100300409B&sec=1666371600&t=fef86f993e8cc3a48062811495a79569',
    },
  ]
});
