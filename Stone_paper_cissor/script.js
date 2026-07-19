 let img1 = document.querySelector("#img1");
        let img2 = document.querySelector("#img2");
        let img3 = document.querySelector("#img3");

        let user = document.querySelector(".mypoint h1");
        let computer = document.querySelector(".computerpoint h1");

        let btn = document.querySelector("button");

        let resetbtn=document.querySelector("#reset");


        let userpoint = 0;
        let computerpoint = 0;
        let count = 0;



        const computerchoise = () => {

            let choise = ["Rock", "Paper", "Scissors"];

            let random = Math.floor(Math.random() * 3);
            return choise[random];



        };




        function playGame(choise) {

            let comchoise = computerchoise();

            
if(count>=5){
          alert("The Game is Over!Press RESET to play again.");
          resetAll();
        };

        

            if (choise == comchoise) {
                reset();
count++;
                 btn.style.background="blue";

                btn.innerText = "It's a Draw!";
                

            }

             else if((choise == "Rock" && comchoise == "Scissors") || (choise == "Paper" && comchoise == "Rock") || (choise == "Scissors" && comchoise == "Paper")) {
                reset();
                count++;

                btn.innerText = `YOU WIN! ${choise} Wins against ${comchoise}`;

                 btn.style.background="green";

                

                userpoint++;
                user.innerText = userpoint;

            }
            else {
                reset();
                computerpoint++;
                computer.innerText = computerpoint;
                btn.innerText = `YOU LOSE! ${choise} loses against ${comchoise}`;

                btn.style.background="red";
                count++;
            }


        }

        function reset() {
            img1.classList.remove("selected");
            img2.classList.remove("selected");
            img3.classList.remove("selected");
        }


        img1.addEventListener("click", () => {


            playGame("Rock");
            img1.classList.add("selected");
        });



        img2.addEventListener("click", () => {

            playGame("Paper")
            img2.classList.add("selected");

        });

        img3.addEventListener("click", () => {

            playGame("Scissors")

            img3.classList.add("selected");
        });


        
        

       function resetAll(){

        reset();
count=0;

    userpoint = 0;
    computerpoint = 0;

    user.innerText = 0;
    computer.innerText = 0;

    btn.innerText = "Welcome";
    btn.style.background="green";

       }

       resetbtn.addEventListener("click",()=>resetAll());

