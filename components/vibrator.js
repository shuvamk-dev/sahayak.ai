import { Vibration } from "react-native";

const Vibrator = (code) => {
  let temp = [];

  code.map((ele) => {
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === "1") {
        temp.push(1000);
        temp.push(400);
      } else if (ele[i] === "2") {
        temp.push(2000);
        temp.push(400);
      } else {
        temp.push(3000);
        temp.push(400);
      }
    }
    temp.push(4000);
    temp.push(400);
  });
  Vibration.vibrate(temp);
};

export default Vibrator;
