function MapKeyPressToActualCharacter(event) {
    var isShiftKey = event.shiftKey;
    var characterCode = event.keyCode;
    
    var specialChars = [27,8,9,20,16,17,91,13,92,18];
    if (valueInArray(characterCode, specialChars)) {
        return false;
    }
    
    if (typeof isShiftKey != "boolean" || typeof characterCode != "number") {
        return false;
    }
    
    var characterMap = [];
    characterMap[192] = "~";
    characterMap[49] = "!";
    characterMap[50] = "@";
    characterMap[51] = "#";
    characterMap[52] = "$";
    characterMap[53] = "%";
    characterMap[54] = "^";
    characterMap[55] = "&";
    characterMap[56] = "*";
    characterMap[57] = "(";
    characterMap[48] = ")";
    characterMap[109] = "_";
    characterMap[107] = "+";
    characterMap[219] = "{";
    characterMap[221] = "}";
    characterMap[220] = "|";
    characterMap[59] = ":";
    characterMap[222] = "\"";
    characterMap[188] = "<";
    characterMap[190] = ">";
    characterMap[191] = "?";
    characterMap[32] = " ";
    
    var character = "";
    if (isShiftKey) {
        if ( characterCode >= 65 && characterCode <= 90 ) {
            character = String.fromCharCode(characterCode);
        } else {
            character = characterMap[characterCode];
        }
    } else {
        if ( characterCode >= 65 && characterCode <= 90 ) {
            character = String.fromCharCode(characterCode);
        } else {
            character = String.fromCharCode(characterCode);
        }
    }
    return character;
}

function valueInArray(value, array) {
    return array.indexOf(value) > -1;
}
