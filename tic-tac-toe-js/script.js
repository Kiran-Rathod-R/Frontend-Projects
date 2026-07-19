 let boxs = document.querySelectorAll(".btn1");
            let reset = document.querySelector(".reset");

            let newgame = document.querySelector(".newgame");
            let msgcon = document.querySelector(".masg");
            let msg = document.querySelector("#win");


            let count=0;
            let turn = true;
            let winpattern = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6],


            ]

            boxs.forEach((box) => {
                box.addEventListener("click", () => {
                    count++;
                    console.log("box was clicked");
                    if (turn) {
                        console.log("O")
                        box.innerText = "O";
                        turn = false;
                    }
                    else {
                        console.log("X");
                        box.innerText = "X";
                        turn = true;
                    }
                    box.disabled = true;
                    checkwinner();

                });
            });

            const showwinner = (winner) => {

                disblebox();

                msg.innerText = `Congratulation, Winner is ${winner}`;
                msgcon.classList.remove("hide");


            };

            const enablebox = () => {
                for (let box of boxs) {
                    box.disabled = false;
                    box.innerText = "";
                }

            };

            const disblebox = () => {
                for (let box of boxs) {
                    box.disabled = true;
                }

            };

            const resetgame = () => {
                turn = true;
                enablebox();
                count=0;
                msgcon.classList.add("hide");
            }

            const draw = () => {

                disblebox();

                msg.innerText = `THE GAME IS DRAW`;
                msgcon.classList.remove("hide");
            }


            const checkwinner = () => {
                for (let pattern of winpattern) {

                    let pos1 = boxs[pattern[0]].innerText;
                    let pos2 = boxs[pattern[1]].innerText;
                    let pos3 = boxs[pattern[2]].innerText;

                

                if (pos1 != "" && pos2 != "" && pos3 != "") {
                    if (pos1 == pos2 && pos2 == pos3) {
                        showwinner(pos1);
                    }
                    else {
                        if(count==9){
                            draw();
                        }
                    }
                }
            }
            };

            newgame.addEventListener("click", resetgame);
            reset.addEventListener("click", resetgame);