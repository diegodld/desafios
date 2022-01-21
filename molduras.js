function moldura(a, b) {
    var conversao1 = parseInt(a);
    var conversao2 = parseInt(b);

    var vetor = [];
    var vetor2 = [];
    temp = "";
    temp2 = "";
    temp3 = "";
    var t = [];

    if (conversao1 > 0 && conversao2 > 0) {
        for (let j = 1; j <= conversao2; j++) {
            vetor2[j + 1] = " ";
            vetor2 = Array.from(vetor2)
            temp += j + " ";
            t = vetor2.toString();

        }
        console.log(vetor2.length)
        console.log(temp);

        for (let i = 1; i <= conversao1; i++) {
            temp3 = i + t + i;
            //console.log(temp3);
            vetor = Array.from(temp3)
            console.log(vetor.toString().replaceAll(",", ""))

        }

        for (let j = 1; j <= conversao2; j++) {
            temp2 += j + " ";
        }
        console.log(temp2);
    }
}

moldura(3, 10);