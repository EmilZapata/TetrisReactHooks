import React, { useState } from 'react'

import { createStage } from '../gameHelpers'

//Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

//Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//Custom hoooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

const Tetris = ({ callback }) => {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer] = usePlayer()
  const [stage, setStage] = useStage(player)

  console.log('re-render')

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    setStage(createStage())
    resetPlayer()
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 0, collided: false })
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    console.log({keyCode})
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        movePlayer()
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game OVer' />
          ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris