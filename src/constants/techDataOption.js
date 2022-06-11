import axios from "axios";

let techDataOption = [];
axios
  .get(`https://dsmeglobal-api.herokuapp.com/api/v1/get_techonologies`)
  .then((res) => {
    res.data.map((item) =>
      techDataOption.push({ value: item.name, label: item.name })
    );
  });

export default techDataOption;
