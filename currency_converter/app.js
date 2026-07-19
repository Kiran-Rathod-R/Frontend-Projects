const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

// const flag=document.querySelector(".select-container IMG");

const btn = document.querySelector(".msg button");

const fromcurre = document.querySelector(".from select");
const tocurre = document.querySelector(".to select");



const msg = document.querySelector(".msg p");


// for(let code in countryList){
//     console.log(code,countryList[code]);
// }


for (let select of dropdowns) {

    for (let currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;

        select.append(newOption);

        if (select.name == "from" && currcode == "USD") {
            newOption.selected = "selected";
        } else if (select.name == "to" && currcode == "INR") {
            newOption.selected = "selected";
        }

    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {

    let currcode = element.value;
    let countrycode = countryList[currcode];


    let img = element.parentElement.querySelector("img");

    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;

    img.src = newsrc;

}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    console.log(amount);
    let amountvalue = amount.value;
    console.log(amountvalue);

    if (amountvalue == "" || amountvalue < 0) {
        amountvalue = 1;
    }

    console.log(fromcurre, tocurre);

    let URL = `https://open.er-api.com/v6/latest/${fromcurre.value}`;

    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);
    console.log(data.rates);
    console.log(tocurre.value);

    let rate = data.rates[tocurre.value];


    let finalamount = amountvalue * rate;

    msg.innerText = `${amountvalue} ${fromcurre.value} = ${finalamount.toFixed(2)} ${tocurre.value}`;

})


// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });

// window.addEventListener("load", () => {
//     updateExchangeRate();
// });

// fromcurre.addEventListener("change", updateExchangeRate);
// tocurre.addEventListener("change", updateExchangeRate);

updateFlag(fromcurre);
updateFlag(tocurre);




