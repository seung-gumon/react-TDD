import React from "react";

function Products({ name, path }) {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={`http://localhost:5000/${path}`} alt={`${name} product`} style={{ width: "75%" }} />
            <form style={{ marginTop: "10px" }}>
                <label style={{ textAlign: "right" }}>{name}</label>
                <input style={{ marginLeft: 7 }} type="number" name="quantity" min={"0"} defaultValue={0} />
            </form>
        </div>
    );
}

export default Products;
