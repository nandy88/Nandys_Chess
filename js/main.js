$(function() {
  init()
  console.log("Main Init Called");
});

function initializeFileAndRankBoard() {

  var index = 0;
  var file = files.fileA;
  var rank = revRanks.rank1;
  var square = squares.a1;

  for(index = 0; index < boardSqrNum; ++index) {
    filesBoard[index] = squares.offBoard;
    ranksBoard[index] = squares.offBoard; 
  }

  for(rank = revRanks.rank1; rank < revRanks.rank8; ++rank) {
    for(file = files.fileA; file < files.fileH; ++file) {
      square = fileAndRankToSquare(file, rank);
      filesBoard[square] = file;
      ranksBoard[square] = rank;
    }
  }
}

function init() {
  console.log("init() called")
}