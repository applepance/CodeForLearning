class Album {
  constructor(id, mId, name, 
    img, singer, publicTime) {
      this.id = id;
      this.mId = mId;
      this.name = name;
      this.img = img;
      this.singer = singer;
      this.publicTime = publicTime;
  }
}
export function createAlbumByItem(item) {
  // album_id: 7089819
// album_mid: "002gD15j363IEc"
// album_name: "祝你生日快乐"
// public_time: "2019-07-02"
// singers: Array(1)
// 0:
// singer_id: 159
// singer_mid: "0022VU5J1D8BRP"
// singer_name: "胡彦斌"
// week: 26
// year: 2019
  return new Album(
    item.album_id,
    item.album_mid,
    item.album_name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`,
    item.singers.map(sing => sing.singer_name).join('/'),
    item.public_time
  )
}
export function createAlbumBydetail(detail) {
  return new Album(
    detail.id,
    detail.mid,
    detail.name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${detail.mid}.jpg?max_age=2592000`,
    detail.singername,
    detail.aDate
  )
}
