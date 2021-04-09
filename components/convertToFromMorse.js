export function convertFromMorse(message) {

    var alphabet = {
        "22222": "0",
        "12222": "1",
        "11222": "2",
        "11122": "3",
        "11112": "4",
        "11111": "5",
        "21111": "6",
        "22111": "7",
        "22211": "8",
        "22221": "9",
        "12": "a",
        "2111": "b",
        "2121": "c",
        "211": "d",
        "1": "e",
        "1121": "f",
        "221": "g",
        "1111": "h",
        "11": "i",
        "1222": "j",
        "212": "k",
        "1211": "l",
        "22": "m",
        "21": "n",
        "222": "o",
        "1221": "p",
        "2212": "q",
        "121": "r",
        "111": "s",
        "2": "t",
        "112": "u",
        "1112": "v",
        "122": "w",
        "2112": "x",
        "2122": "y",
        "2211": "z",
        "/": " ",
        "212122": "!",
        "121212": ".",
        "221122": ","
    };

    var messageConverted = [];

    message.split("  ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ");
    });

    return (messageConverted.join(""));

}

const morseCode = {
    "A": "12",
    "B": "2111",
    "C": "2121",
    "D": "211",
    "E": "1",
    "F": "1121",
    "G": "221",
    "H": "1111",
    "I": "11",
    "J": "1222",
    "K": "212",
    "L": "1211",
    "M": "22",
    "N": "21",
    "O": "222",
    "P": "1221",
    "Q": "2212",
    "R": "121",
    "S": "111",
    "T": "2",
    "U": "112",
    "W": "122",
    "X": "2112",
    "Y": "2122",
    "Z": "2211",
    "0": "22222",
    "1": "12222",
    "2": "11222",
    "3": "11122",
    "4": "11112",
    "5": "11111",
    "6": "21111",
    "7": "22111",
    "8": "22211",
    "9": "22221"
}
export const convertToMorse = (str) => {
    const code = str.toUpperCase().split(" ").map(el => el.split("").map(ele => {
        return morseCode[ele] ? morseCode[ele] : ele;
    }).join(" "));
    return code;
};

