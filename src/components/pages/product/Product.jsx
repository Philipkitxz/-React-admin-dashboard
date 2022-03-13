import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productData } from "../../../dummyData";
import Chart from "../../Charts/Chart";

import "./product.css";

export default function Product() {
  return (
    <div className="Product">
      <div className="productTitleContainer">
        <h2 className="productTitle">Product</h2>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          ></Chart>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="" className="productInfoImg" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue"> 1234 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue"> 3534 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active: </span>
              <span className="productInfoValue"> yes </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue"> no </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
