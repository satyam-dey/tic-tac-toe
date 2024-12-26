const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
    const winnerText = document.querySelector('.winner');
    const resetButton = document.querySelector('.reset-button');

    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const checkWinner = () => {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a];
        }
      }
      return gameState.includes(null) ? null : 'Draw';
    };

    const handleClick = (e) => {
      const index = e.target.dataset.index;
      if (!gameState[index] && !winnerText.textContent) {
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add('taken');

        const winner = checkWinner();
        if (winner) {
          winnerText.textContent = winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };

    const resetGame = () => {
      gameState.fill(null);
      cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('taken');
      });
      winnerText.textContent = '';
      currentPlayer = 'X';
    };

    cells.forEach((cell) => cell.addEventListener('click', handleClick));
    resetButton.addEventListener('click', resetGame);