import { Vibration } from "react-native";

const Vibrator = (code) => {
  let temp = [];

  code.map(ele => {
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === "1") temp.push(400);
      else if (ele[i] === "2") temp.push(1000);
      else temp.push(2000);
      if (i !== ele.length) temp.push(400);
    }
  })
  Vibration.vibrate(temp);
};

export default Vibrator;
