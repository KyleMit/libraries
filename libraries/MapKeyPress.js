function MapKeyPressToActualCharacter(event) {
    var isShiftKey = event.shiftKey;
    var characterCode = event.keyCode;
    var isAlphabetChar = characterCode >= 65 && characterCode <= 90;
    var specialChars = [8,9,13,16,17,18,20,27,91,92];
    var character = "";
    
    if (valueInArray(characterCode, specialChars)) {
        return false;
    }

    if (isAlphabetChar) {
        character = String.fromCharCode(characterCode);
    } else if (isShiftKey) {
        character = GetShiftedCharacters()[characterCode];
    } else {
        character = String.fromCharCode(characterCode);
    }
    return character;
}

function valueInArray(value, array) {
    return array.indexOf(value) > -1;
}

function GetShiftedCharacters() {
    var characterMap = {32: " ",
                        48: ")",
                        49: "!",
                        50: "@",
                        51: "#",
                        52: "$",
                        53: "%",
                        54: "^",
                        55: "&",
                        56: "*",
                        57: "(",
                        59: ":",
                        107: "+",
                        109: "_",
                        188: "<",
                        190: ">",
                        191: "?",
                        192: "~",
                        219: "{",
                        220: "|",
                        221: "}",
                        222: "\\" };
    return characterMap;
}
