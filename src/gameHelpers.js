export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x6 = 1) {
      //1. Check that we'are on an acutal tetromino cell
      if(player.tetromino[y][x] !== 0){
        //2. check tahat our move is inside the game areas height (y)
        //we shouldn't go through the buttom of the play area

        //3. check that our move is inside the agame area width (x)

        //4 check taht the cell we're moving to ins't set to clear
      }
    }
  }
}