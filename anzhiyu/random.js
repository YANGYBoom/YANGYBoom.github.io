var posts=["posts/c04f398.html","posts/0.html","posts/58f95e06.html","posts/babe7091.html","posts/282517f4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};