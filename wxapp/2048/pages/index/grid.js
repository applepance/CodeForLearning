function Grid(size){
  this.size = size;
  this.cells = this.empty();
}
Grid.prototype = {
  // 返回一个空的矩阵（网格），二维数组
  empty: function(){
    var cells = [];
    for(let i=0;i<this.size;i++){
      cells[i] = [];
      for(let j=0;j<this.size;j++){
        cells[i].push(null);
      }
    }
    return cells;
  },
  // 找出空位置
  available() {
    var cells = [];
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (!this.cells[i][j]) {
          cells.push({
            x: i,
            y: j
          })
        }
      }
    }
    return cells;
  },
  cellAvailable() {
    // 0 || >0
    // 强转为 true || false
    return !!this.available().length;
  },
  // 从一堆空位置里面随机挑一个
  randomAvailableCell(){
    const cells = this.available();
    return cells[Math.floor(Math.random() * cells.length)]
  },
  insertTile(tile){
    this.cells[tile.x][tile.y] = tile;
  }
}

// commonJS
module.exports = Grid;

// ecm
// export