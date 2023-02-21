/**
 * 1. Render song
 * 2 . Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9.Scroll active song into view
 * 10.Play song when click
//  */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app ={
  songs:[
  {
    
    name: 'Faded',
    singer: 'TrongRnDuc',
    path: './assett/song/faded.mp3',
    image:'./assett/image/1775dde5237f053b8734c1329c52dc9cdap-chan-ngu-ma-nuoc-mat-lung-trong.jpg'
   },
   {
      name: 'Anh tự do nhưng cô đơn',
      singer: 'ĐạtG',
      path: './assett/song/anh tu do nhung FA.mp3',
      image:'./assett/image/60866af4f4fef22bd1a0b0ca0dd8b15d.jpg'

  },
  {
      name: 'Attention',
      singer: 'TrongRnDuc',
      path: './assett/song/Attention.mp3',
      image:'./assett/image/90a9efee20eacf4484e863b1fc39564ctho-bay-mau-noi-may-giet-tao-luon-di.jpg'

  },
  {
      name: 'Beautiful In White',
      singer: 'TrongRnDuc',
      path: './assett/song/BeautifulInWhite-Chipmunk-3126588.mp3',
      image:'./assett/image/anh-che-meme-hai-huoc-nhat-12.jpg'

  },
  {
      name: 'Despacito',
      singer: 'TrongRnDuc',
      path: './assett/song/despacito.mp3',
      image:'./assett/image/b051c8d6e452512fc7ddc45d70b97933.jpg'

  },
  {
      name: 'Hạ còn vương nắng',
      singer: 'TrongRnDuc',
      path: './assett/song/Haconvuongnang.mp3',
      image:'./assett/image/im3 (1).jpg'

  },
  {
      name: 'Quả Phụ Tướng',
      singer: 'Dung Pham Hoang',
      path: './assett/song/QuaPhuTuong-DungHoangPham-8474634.mp3',
      image:'./assett/image/im4.jpg'

  },
  {
      name: 'Shape of you',
      singer: 'TrongRnDuc',
      path: './assett/song/shapeofyou.mp3',
      image:'./assett/image/image1.jpg'

  },
  {
      name: 'Tình yêu khủng long',
      singer: 'TrongRnDuc',
      path: './assett/song/tinhyeuKhunglong.mp3',
      image:'./assett/image/image2.jpg'

  }
  ],
  render: function(){
    
    const htmls = this.songs.map(song =>{
        return `
        <div class="song">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
       </div>
        `
    })
    $('.playlist').innerHTML = htmls.join('\n')
  },
  start: function() {
    this.render()
  }
}
 app.start();