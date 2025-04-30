<<<<<<< HEAD

    let boxes = document.querySelectorAll(".box");
    let resetGameBtn = document.querySelector("#reset-btn");
    let newGameBtn = document.querySelector("#new-btn")
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let playerO = document.querySelector("#Oscore");
    let playerX = document.querySelector("#Xscore");

    // let O;
    // let X;

    playerO = 0;
    playerX = 0;

    let turnO = true;

    let count = 0;



    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ];

    //for each conditions

    boxes.forEach((box) => {
        box.addEventListener("click", () => {


            if (turnO) {
                box.innerText = "O";
                box.classList.add("turnO");
                turnO = false;

            } else {
                box.innerText = "X"
                turnO = true;
                box.classList.add("turnX");

            }
            box.disabled = true;
            count++;

            let isWinner = checkWinner();  //for draw function

            if (count === 9 && !isWinner) {
                gameDraw();
            }
            turnO = false;
            setTimeout(() => {
                computerMove();
            }, 500);
        });
    });

    function computerMove() {
        let bestScore = -Infinity;
        let move = -1;

        boxes.forEach((box, index) => {
            if (box.innerText === "") {
                box.innerText = "X";
                let score = minimax(boxes, 0, false);
                box.innerText = "";
                if (score > bestScore) {
                    bestScore = score;
                    move = index;
                }
            }
        });

        if (move !== -1) {
            boxes[move].innerText = "X";
            boxes[move].classList.add("turnX");
            boxes[move].disabled = true;
            count++;
            if (!checkWinner() && count === 9) gameDraw();
            turnO = true;
        }
    }

    function minimax(boardState, depth, isMaximizing) {
        let result = getBoardWinner();
        if (result !== null) {
            if (result === "X") return 10 - depth;
            if (result === "O") return depth - 10;
            if (result === "tie") return 0;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (boardState[i].innerText === "") {
                    boardState[i].innerText = "X";
                    let score = minimax(boardState, depth + 1, false);
                    boardState[i].innerText = "";
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (boardState[i].innerText === "") {
                    boardState[i].innerText = "O";
                    let score = minimax(boardState, depth + 1, true);
                    boardState[i].innerText = "";
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    function getBoardWinner() {
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            let val1 = boxes[a].innerText;
            let val2 = boxes[b].innerText;
            let val3 = boxes[c].innerText;

            if (val1 && val1 === val2 && val2 === val3) {
                return val1;
            }
        }

        if ([...boxes].every(box => box.innerText !== "")) {
            return "tie";
        }

        return null;
    }


    //functions for conditions
    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    }

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = ""
        }
    }

    const gameDraw = () => {
        msg.innerText = `Game is draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }


    const showWinner = (winner) => {
        msg.innerText = `Winner is ${winner}`;
        msgContainer.classList.remove("hide");

        disableBoxes();


    }

    const checkWinner = () => {
        for (let pattern of winPatterns) {

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;





            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
                    boxes[pattern[0]].classList.add("win");
                    boxes[pattern[1]].classList.add("win");
                    boxes[pattern[2]].classList.add("win");
                    console.log(pos1Val);

                    if ("O" == pos1Val) {
                        playerO++;
                        document.getElementById("Oscore").innerHTML = playerO;
                        msgContainer.classList.add("winnerO");





                    }
                    else if ("X" == pos1Val) {
                        playerX++;
                        document.getElementById("Xscore").innerHTML = playerX;
                        msgContainer.classList.add("winnerX");

                    }
                    else if (gameDraw()) {
                        msgContainer.classList.add("gameDraw");
                    }

                    return true;

                }
            }

        }

    };

    const newGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();

        msgContainer.classList.add("hide");
        boxes.forEach((box) => {
            box.classList.remove("turnO");
            box.classList.remove("turnX");
            box.classList.remove("win");
        });


    }

    const resetGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();
        msgContainer.classList.add("hide");

        boxes.forEach((box) => {
            box.classList.remove("turnO");
            box.classList.remove("turnX");
            box.classList.remove("win");
        });
        document.getElementById("Oscore").innerText = "0";
        document.getElementById("Xscore").innerText = "0";

    }
    newGameBtn.addEventListener("click", newGame);
=======

    let boxes = document.querySelectorAll(".box");
    let resetGameBtn = document.querySelector("#reset-btn");
    let newGameBtn = document.querySelector("#new-btn")
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let playerO = document.querySelector("#Oscore");
    let playerX = document.querySelector("#Xscore");

    // let O;
    // let X;

    playerO = 0;
    playerX = 0;

    let turnO = true;

    let count = 0;



    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ];

    //for each conditions

    boxes.forEach((box) => {
        box.addEventListener("click", () => {


            if (turnO) {
                box.innerText = "O";
                box.classList.add("turnO");
                turnO = false;

            } else {
                box.innerText = "X"
                turnO = true;
                box.classList.add("turnX");

            }
            box.disabled = true;
            count++;

            let isWinner = checkWinner();  //for draw function

            if (count === 9 && !isWinner) {
                gameDraw();
            }
            turnO = false;
            setTimeout(() => {
                computerMove();
            }, 500);
        });
    });

    function computerMove() {
        let bestScore = -Infinity;
        let move = -1;

        boxes.forEach((box, index) => {
            if (box.innerText === "") {
                box.innerText = "X";
                let score = minimax(boxes, 0, false);
                box.innerText = "";
                if (score > bestScore) {
                    bestScore = score;
                    move = index;
                }
            }
        });

        if (move !== -1) {
            boxes[move].innerText = "X";
            boxes[move].classList.add("turnX");
            boxes[move].disabled = true;
            count++;
            if (!checkWinner() && count === 9) gameDraw();
            turnO = true;
        }
    }

    function minimax(boardState, depth, isMaximizing) {
        let result = getBoardWinner();
        if (result !== null) {
            if (result === "X") return 10 - depth;
            if (result === "O") return depth - 10;
            if (result === "tie") return 0;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (boardState[i].innerText === "") {
                    boardState[i].innerText = "X";
                    let score = minimax(boardState, depth + 1, false);
                    boardState[i].innerText = "";
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (boardState[i].innerText === "") {
                    boardState[i].innerText = "O";
                    let score = minimax(boardState, depth + 1, true);
                    boardState[i].innerText = "";
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    function getBoardWinner() {
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            let val1 = boxes[a].innerText;
            let val2 = boxes[b].innerText;
            let val3 = boxes[c].innerText;

            if (val1 && val1 === val2 && val2 === val3) {
                return val1;
            }
        }

        if ([...boxes].every(box => box.innerText !== "")) {
            return "tie";
        }

        return null;
    }


    //functions for conditions
    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    }

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = ""
        }
    }

    const gameDraw = () => {
        msg.innerText = `Game is draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }


    const showWinner = (winner) => {
        msg.innerText = `Winner is ${winner}`;
        msgContainer.classList.remove("hide");

        disableBoxes();


    }

    const checkWinner = () => {
        for (let pattern of winPatterns) {

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;





            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
                    boxes[pattern[0]].classList.add("win");
                    boxes[pattern[1]].classList.add("win");
                    boxes[pattern[2]].classList.add("win");
                    console.log(pos1Val);

                    if ("O" == pos1Val) {
                        playerO++;
                        document.getElementById("Oscore").innerHTML = playerO;
                        msgContainer.classList.add("winnerO");





                    }
                    else if ("X" == pos1Val) {
                        playerX++;
                        document.getElementById("Xscore").innerHTML = playerX;
                        msgContainer.classList.add("winnerX");

                    }
                    else if (gameDraw()) {
                        msgContainer.classList.add("gameDraw");
                    }

                    return true;

                }
            }

        }

    };

    const newGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();

        msgContainer.classList.add("hide");
        boxes.forEach((box) => {
            box.classList.remove("turnO");
            box.classList.remove("turnX");
            box.classList.remove("win");
        });


    }

    const resetGame = () => {
        turnO = true;
        count = 0;
        enableBoxes();
        msgContainer.classList.add("hide");

        boxes.forEach((box) => {
            box.classList.remove("turnO");
            box.classList.remove("turnX");
            box.classList.remove("win");
        });
        document.getElementById("Oscore").innerText = "0";
        document.getElementById("Xscore").innerText = "0";

    }
    newGameBtn.addEventListener("click", newGame);
>>>>>>> 16df296b021a9097f1622c51d47bb9a90fbd0aca
    resetGameBtn.addEventListener("click", resetGame);