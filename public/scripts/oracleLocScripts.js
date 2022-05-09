const createLocation = (req, res) => {
    var localeObj = {
        /* 
         hex_Id
         hex_Name
         hex_terrainTypes
         terrain_elevation
         terrain_climate
         terrain_features
         navhex
     */
    }

    console.log('Hello world');
    return localeObj;
};

const assignTerrain = (navhex) => {
    roll2D6();
    switch (navhex) {
        case 2, 3:
            break;
        case 4, 5:
            break;
        case 6, 7:
            break;
        case 8, 9:
            break;
        case 10, 11:
            break;
        case 12:
            break;
    }
}



const roll2D6 = () => {
    return (Math.random(5) + 1) + (Math.random(5) + 1);
}