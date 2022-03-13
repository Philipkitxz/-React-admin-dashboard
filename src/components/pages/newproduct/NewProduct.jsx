import "./newproduct.css";
import { Publish } from "@material-ui/icons";
export default function NewProduct() {
    return (
<div className="Product">
<h2 className="productTitle">New Product</h2>
     


        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>stock</label>
            <input type="text" placeholder="435" />
            <label>Price</label>
            <input type="text" placeholder="ksh 435" />
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="productUpload">
              <img
                src="/img/shopping.png"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Save</button>
          </div>
        </form>
      </div>
    
  );
    
}
