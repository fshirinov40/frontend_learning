    const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScore();

    function playGame(yourMove) {
      const computerMove = pickComputerMove();
      let result;

      if(yourMove === 'Rock') {
        if(computerMove === 'Rock') {
          result = 'Tie';
        }
        else if(computerMove === 'Paper') {
          result = 'You lose';
        }
        else if(computerMove === 'Scissors') {
          result = 'You win';
        }
      }

      if(yourMove === 'Paper') {
        if(computerMove === 'Rock') {
          result = 'You win';
        }
        else if(computerMove === 'Paper') {
          result = 'Tie';
        }
        else if(computerMove === 'Scissors') {
          result = 'You lose';
        }
      }

      if(yourMove === 'Scissors') {
        if(computerMove === 'Rock') {
          result = 'You lose';
        }
        else if(computerMove === 'Paper') {
          result = 'You win';
        }
        else if(computerMove === 'Scissors') {
          result = 'Tie';
        }
      }

      if(result === 'You win') {
        score.wins += 1;
      }
      else if(result === 'You lose') {
        score.losses += 1;
      }
      else if(result === 'Tie') {
        score.ties += 1;
      }

      document.querySelector(".js-result")
      .innerHTML= result;
      document.querySelector(".js-moves")
      .innerHTML = `You <img src="images/${yourMove}-emoji.png" class="emoji"> <img src="images/${computerMove}-emoji.png" class="emoji"> Computer`;

      localStorage.setItem('score', JSON.stringify(score));

      updateScore();
    }

    function updateScore() {
      document.querySelector(".js-score")
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove;

      if(randomNumber >=0 && randomNumber <1/3) {
        computerMove = 'Rock';
      }
      else if(randomNumber >=1/3 && randomNumber <2/3) {
        computerMove = 'Paper';
      }
      else if(randomNumber >=2/3 && randomNumber <1) {
        computerMove = 'Scissors';
      }

      return computerMove;
    }