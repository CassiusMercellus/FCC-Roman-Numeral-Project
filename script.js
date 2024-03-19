document.addEventListener("DOMContentLoaded", function() {

    const number = document.getElementById("number");
    const convertButton = document.getElementById("convert-btn");
    const output = document.getElementById("output");

    document.querySelector('#convert-btn').addEventListener("click", check);
    function check() {
        if (number.value === "") {
            output.innerText = "Please enter a valid number"
        } else if (number.value <= 0) {
            output.innerText = "Please enter a number greater than or equal to 1"
        } else if (number.value >= 4000) {
            output.innerText = "Please enter a number less than or equal to 3999"
        } else {
            convert()
        }
    }
    function convert() {
        const strNumber = number.value.toString();

        const onesPlace = strNumber.charAt(strNumber.length -1);
        const tensPlace = strNumber.charAt(strNumber.length -2);
        const hundredsPlace = strNumber.charAt(strNumber.length -3);
        const thousandsPlace = strNumber.charAt(strNumber.length -4);

        const temp1 = parseInt(onesPlace);
        const temp2 = parseInt(tensPlace);
        const temp3 = parseInt(hundredsPlace);
        const temp4 = parseInt(thousandsPlace);

        let one = '';
        let ten = '';
        let hundred = '';
        let thousand = '';

        let result = '';

        console.log(temp1)

        // thousands place
        if (temp4 < 5) {
            let i = temp4;
            while (i > 0) {
                i--;
                thousand += "M"
            }
            result += thousand;
        }

        // hundreds place
        if (temp3 == 9) {
            hundred += "CM"
            result += hundred;
        } else if (temp3 == 5) {
            hundred += "D"
            result += hundred;
        } else if (temp3 == 4) {
            hundred += "CD"
            result += hundred;
        } else if (temp3 < 5) {
            let i = temp3;
            while (i > 0) {
                i--;
                hundred += "C"
            }
            result += hundred;
        } else if (temp3 > 5) {
            hundred += "D"
            temp3 - 5
            let i = temp3 - 5;
            while (i > 0) {
                i--;
                hundred += "C"
            }
            result += hundred;
        }

        // tens place
        if (temp2 == 9) {
            ten += "XC"
            result += ten;
        } else if (temp2 == 5) {
            ten += "L"
            result += ten;
        } else if (temp2 == 4) {
            ten += "XL"
            result += ten;
        } else if (temp2 < 5) {
            let i = temp2;
            while (i > 0) {
                i--;
                ten += "X"
            }
            result += ten;
        } else if (temp2 > 5) {
            ten += "L"
            temp2 - 5
            let i = temp2 - 5;
            while (i > 0) {
                i--;
                ten += "X"
            }
            result += ten;
        }
        
        // ones place
        if (temp1 == 9) {
            one += "IX"
            result += one;
        } else if (temp1 == 5) {
            one += "V"
            result += one;
        } else if (temp1 == 4) {
            one += "IV"
            result += one;
        } else if (temp1 < 5) {
            let i = temp1;
            while (i > 0) {
                i--;
                one += "I"
            }
            result += one;
        } else if (temp1 > 5) {
            one += "V"
            temp1 - 5
            let i = temp1 - 5;
            while (i > 0) {
                i--;
                one += "I"
            }
            result += one;
        }
        output.innerText = result;
    }
})