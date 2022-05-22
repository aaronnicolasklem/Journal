const createLocation = (req, res) => {
    /*
    req
        currentNavhex
    */
    var localeObj = {
        /* 
         hex_Id
         hex_Name
         hex_terrainTypes
         terrain_elevation
         terrain_climate
         terrain_features
     */
    }
    var currentnavhex=0;
    var data=hexFlower(currentnavhex, testChart);
    currentnavhex=data[0];
    var result=data[1];
    console.log(currentnavhex+" "+result);
    
    
    return localeObj;
};

const assignTerrain = (navhex) => {
    hexFlower(navhex, terrainChart);

}
function rollDx(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

var testChart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const hexFlower = (navhex, chart) => {
    var newNavHex = 0, chartResult = 0;
    var package = [newNavHex, chartResult];
    var moveDirection = rollDx(1, 6)+rollDx(1, 6);

    switch (navhex) {
        case 0:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 4:
                case 5:
                    newNavHex = 13;
                    chartResult = chart[13];
                    break;
                case 6:
                case 7:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 8:
                case 9:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                case 10:
                case 11:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                case 12:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 1:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                case 4:
                case 5:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 6:
                case 7:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                case 8:
                case 9:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                case 10:
                case 11:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 12:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 2:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                case 4:
                case 5:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                case 6:
                case 7:
                    newNavHex = 13;
                    chartResult = chart[13];
                    break;
                case 8:
                case 9:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 10:
                case 11:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                case 12:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 3:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                case 4:
                case 5:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                case 6:
                case 7:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 8:
                case 9:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                case 10:
                case 11:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                case 12:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 4:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                case 4:
                case 5:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 6:
                case 7:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 8:
                case 9:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                case 10:
                case 11:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                case 12:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 5:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 4:
                case 5:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                case 6:
                case 7:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                case 8:
                case 9:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 10:
                case 11:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                case 12:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 6:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                case 4:
                case 5:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                case 6:
                case 7:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                case 8:
                case 9:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 10:
                case 11:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                case 12:
                    newNavHex = 11;
                    chartResult = chart[11];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 7:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                case 4:
                case 5:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                case 6:
                case 7:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 8:
                case 9:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                case 10:
                case 11:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                case 12:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 8:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 11;
                    chartResult = chart[11];
                    break;
                case 4:
                case 5:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                case 6:
                case 7:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 8:
                case 9:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                case 10:
                case 11:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                case 12:
                    newNavHex = 4;
                    chartResult = chart[13];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 9:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                case 4:
                case 5:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                case 6:
                case 7:
                    newNavHex = 4;
                    chartResult = chart[4];
                    break;
                case 8:
                case 9:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                case 10:
                case 11:
                    newNavHex = 1;
                    chartResult = chart[11];
                    break;
                case 12:
                    newNavHex = 4;
                    chartResult = chart[14];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 10:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                case 4:
                case 5:
                    newNavHex = 3;
                    chartResult = chart[3];
                    break;
                case 6:
                case 7:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                case 8:
                case 9:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                case 10:
                case 11:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                case 12:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 11:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 14;
                    chartResult = chart[14];
                    break;
                case 4:
                case 5:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                case 6:
                case 7:
                    newNavHex = 6;
                    chartResult = chart[6];
                    break;
                case 8:
                case 9:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                case 10:
                case 11:
                    newNavHex = 13;
                    chartResult = chart[13];
                    break;
                case 12:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 12:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                case 4:
                case 5:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                case 6:
                case 7:
                    newNavHex = 7;
                    chartResult = chart[7];
                    break;
                case 8:
                case 9:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                case 10:
                case 11:
                    newNavHex = 14;
                    chartResult = chart[14];
                    break;
                case 12:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 13:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                case 4:
                case 5:
                    newNavHex = 11;
                    chartResult = chart[11];
                    break;
                case 6:
                case 7:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                case 8:
                case 9:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                case 10:
                case 11:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 12:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 14:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                case 4:
                case 5:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                case 6:
                case 7:
                    newNavHex = 9;
                    chartResult = chart[9];
                    break;
                case 8:
                case 9:
                    newNavHex = 11;
                    chartResult = chart[11];
                    break;
                case 10:
                case 11:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                case 12:
                    newNavHex = 18;
                    chartResult = chart[18];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 15:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 13;
                    chartResult = chart[13];
                    break;
                case 4:
                case 5:
                    newNavHex = 8;
                    chartResult = chart[8];
                    break;
                case 6:
                case 7:
                    newNavHex = 10;
                    chartResult = chart[10];
                    break;
                case 8:
                case 9:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                case 10:
                case 11:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                case 12:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 16:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 18;
                    chartResult = chart[18];
                    break;
                case 4:
                case 5:
                    newNavHex = 14;
                    chartResult = chart[14];
                    break;
                case 6:
                case 7:
                    newNavHex = 11;
                    chartResult = chart[11];
                    break;
                case 8:
                case 9:
                    newNavHex = 13;
                    chartResult = chart[13];
                    break;
                case 10:
                case 11:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 12:
                    newNavHex = 5;
                    chartResult = chart[5];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 17:
            switch (moveDirection) {
                case 2:
                case 3:
                    newNavHex = 0;
                    chartResult = chart[0];
                    break;
                case 4:
                case 5:
                    newNavHex = 15;
                    chartResult = chart[15];
                    break;
                case 6:
                case 7:
                    newNavHex = 12;
                    chartResult = chart[12];
                    break;
                case 8:
                case 9:
                    newNavHex = 14;
                    chartResult = chart[14];
                    break;
                case 10:
                case 11:
                    newNavHex = 18;
                    chartResult = chart[18];
                    break;
                case 12:
                    newNavHex = 1;
                    chartResult = chart[1];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;
        case 18:
            switch (moveDirection) {
                case 10:
                case 11:
                case 12:
                case 2:
                case 3:
                    newNavHex = 2;
                    chartResult = chart[2];
                    break;
                case 4:
                case 5:
                    newNavHex = 17;
                    chartResult = chart[17];
                    break;
                case 6:
                case 7:
                    newNavHex = 14;
                    chartResult = chart[14];
                    break;
                case 8:
                case 9:
                    newNavHex = 16;
                    chartResult = chart[16];
                    break;
                default:
                    console.log("Move direction switch case defaulted");
                    console.log(moveDirection);
                    break;
            }
            break;

    

    }

    package = [newNavHex, chartResult];
    return package;
}




