import axios from "axios";
let catagoryDataOption = [];

axios.get("http://localhost:9000/api/v1/get_category").then((res) => {
  res.data.map((item) =>
    catagoryDataOption.push({ value: item.name, label: item.name })
  );
});
export default catagoryDataOption;
