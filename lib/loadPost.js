var app = angular.module('myApp', ['ngMaterial', 'angularUtils.directives.dirPagination']);
app
.controller('PostController', function ($scope) {
  
  $scope.posts = [
    // tieu de bai viet
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image:"https://gamesmods.net/uploads/posts/2014-09/1410809219_farmingsimulator2013game-2014-09-14-02-34-40-196.jpg",
      tag:"VietGap, Thực phẩm sạch",
      time:"01/01/20 00:00",
      summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nesciunt necessitatibus nulla minima vero veniam quo eligendi repellat soluta reprehenderit quos, autem doloremque a harum debitis incidunt enim id. Quas.",
      link: "bai-viet/demo-post-detail.html"
    },
    // tieu de bai viet
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image:"https://gamesmods.net/uploads/posts/2014-09/1410809219_farmingsimulator2013game-2014-09-14-02-34-40-196.jpg",
      tag:"Test Tag",
      time:"01/01/20 00:00",
      summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nesciunt necessitatibus nulla minima vero veniam quo eligendi repellat soluta reprehenderit quos, autem doloremque a harum debitis incidunt enim id. Quas.",
      link: "bai-viet/demo-post-detail.html"
    },
    // tieu de bai viet
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image:"https://gamesmods.net/uploads/posts/2014-09/1410809219_farmingsimulator2013game-2014-09-14-02-34-40-196.jpg",
      tag:"Test Tag",
      time:"01/01/20 00:00",
      summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nesciunt necessitatibus nulla minima vero veniam quo eligendi repellat soluta reprehenderit quos, autem doloremque a harum debitis incidunt enim id. Quas.",
      link: "bai-viet/demo-post-detail.html"
    },
    // tieu de bai viet
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image:"https://gamesmods.net/uploads/posts/2014-09/1410809219_farmingsimulator2013game-2014-09-14-02-34-40-196.jpg",
      tag:"Test Tag",
      time:"01/01/20 00:00",
      summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nesciunt necessitatibus nulla minima vero veniam quo eligendi repellat soluta reprehenderit quos, autem doloremque a harum debitis incidunt enim id. Quas.",
      link: "bai-viet/demo-post-detail.html"
    },
    // tieu de bai viet
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      image:"https://gamesmods.net/uploads/posts/2014-09/1410809219_farmingsimulator2013game-2014-09-14-02-34-40-196.jpg",
      tag:"Test Tag",
      time:"01/01/20 00:00",
      summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nesciunt necessitatibus nulla minima vero veniam quo eligendi repellat soluta reprehenderit quos, autem doloremque a harum debitis incidunt enim id. Quas.",
      link: "bai-viet/demo-post-detail.html"
    }
  ];
/*
  $scope.current_post = $scope.posts[0];

  $scope.post_title = $scope.current_post.title;
  $scope.post_tag = $scope.current_post.tag;
  $scope.post_time = $scope.current_post.time;
  $scope.post_content =
  document.getElementById('post_content_place').insertAdjacentHTML("beforeend",
    $scope.posts[0].content);
  
  $scope.readDetail = function (item) {
    document.getElementById('post_content_place').innerHTML = "";

    $scope.post_title = item.title;
    $scope.post_tag = item.tag;
    $scope.post_time = item.time;
    $scope.post_content = document.getElementById('post_content_place').insertAdjacentHTML("beforeend",
    item.content);
  };*/
});