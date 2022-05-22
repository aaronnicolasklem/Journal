//case g:
    switch (moveDirection) {
        case 2:
        case 3:
            newNavHex = navhex+3;
            chartResult = chart[newNavHex];
            break;
        case 4:
        case 5:
            newNavHex = navhex-2;
            chartResult = chart[newNavHex];
            break;
        case 6:
        case 7:
            newNavHex = navhex-5;
            chartResult = chart[newNavHex];
            break;
        case 8:
        case 9:
            newNavHex = navhex-3;
            chartResult = chart[newNavHex];
            break;
        case 10:
        case 11:
            newNavHex = navhex+2;
            chartResult = chart[newNavHex];
            break;
        case 12:
            newNavHex = navhex+5;
            chartResult = chart[newNavHex];
            break;
        default:
            console.log("Move direction switch case defaulted");
            console.log(moveDirection);
            break;
    }