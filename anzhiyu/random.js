var posts=["posts/3655.html","posts/8990.html","posts/24658.html","posts/59643.html","posts/17087.html","posts/45598.html","posts/36878.html","posts/2198.html","posts/44377.html","posts/19357.html","posts/58727.html","posts/45836.html","posts/65033.html","posts/58641.html","posts/50652.html","posts/9275.html","posts/30429.html","posts/48966.html","posts/17557.html","posts/51281.html","posts/1791.html","posts/2964.html","posts/44210.html","posts/12573.html","posts/32529.html","posts/8101.html","posts/28439.html","posts/63142.html","posts/47241.html","posts/6256.html","posts/8736.html","posts/21040.html","posts/57058.html","posts/49666.html","posts/15503.html","posts/38825.html","posts/64859.html","posts/12458.html","posts/22447.html","posts/6134.html","posts/21141.html","posts/50437.html","posts/9983.html","posts/37642.html","posts/43495.html","posts/37031.html","posts/42451.html","posts/61913.html","posts/34759.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};