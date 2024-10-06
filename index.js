    let wins = 100;
    let lose = 30;
    let level;

    function balance(wins, lose){
        winning_balance = wins - lose;
        return winning_balance
    }

    switch(true){

        case (wins <= 10):
            level = "Ferro";
            break;
        
        case (wins >= 11 && wins <= 20):
            level  = "Bronze";
            break;

        case (wins >= 21 && wins <= 50):
            level = "Prata";
            break;

        case (wins >= 51 && wins <= 80):
            level = "Ouro";
            break;

        case (wins >= 81 && wins <= 90):
            level = "Diamante";
            break;

        case (wins >= 91 && wins <= 100):
            level = "Lendário"
            break;

        case (wins >= 101):
            level = "Imortal";
            break;
    }

    const saldo = balance(wins,lose);
    console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${level}.`);


