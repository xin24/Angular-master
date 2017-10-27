import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese-movie',
  templateUrl: './chinese-movie.component.html',
  styleUrls: ['./chinese-movie.component.css']
})
export class ChineseMovieComponent implements OnInit {

  private name: String[];
  private pic: String[];

  constructor() { }

  ngOnInit() {

    this.name = ["Wolf Warriors 2","Ip Man 3","The Mermaid","Kung Fu Yoga","Journey to the West: The Demons Strike Back",
                 "Lost in Thailand","Goodbye Mr.Loser","From Vegas to Macau III", "The Lost Tomb","Skiptrace","Detective Chinatown",
                "You're The Apple Of My Eye"];

    this.pic = ["https://i.pinimg.com/originals/3f/9f/56/3f9f56558d46015f9c7f146638042885.jpg"
      , "http://ent.southcn.com/8/images/attachement/jpg/site4/20160115/47/17522322514198199331.jpg"
      , "http://puui.qpic.cn/vcover_vt_pic/0/xg95sxi4q7zc4uot1460107848.jpg/0"
      , "https://img.mvmv.com.tw/gallery/20528/photos_20528_1484808806.jpg"
      , "http://v.114la.com/img/2017/04/15/qq/movie/1/0V758P60813.jpg"
      , "https://upload.wikimedia.org/wikipedia/zh/thumb/7/7b/Lost_in_Thailand.jpg/220px-Lost_in_Thailand.jpg"
      , "https://upload.wikimedia.org/wikipedia/en/4/40/Goodbye_Mr_Loser_film_poster.jpg"
      , "http://www.sinaimg.cn/dy/slidenews/4_img/2016_02/704_1829560_731554.jpg"
      , "http://img31.mtime.cn/mg/2016/08/01/100833.70920464_270X405X4.jpg"
      , "http://p2.ifengimg.com/cmpp/2016/05/23/08/c66080b4-72e3-4d87-a153-070b9b642c9e_size133_w500_h698.jpg"
      , "https://upload.wikimedia.org/wikipedia/zh/thumb/b/b0/Detective_Chinatown_poster.jpg/220px-Detective_Chinatown_poster.jpg"
      , "https://chenghui0706.files.wordpress.com/2011/12/front.jpg"

    ];
  }

}