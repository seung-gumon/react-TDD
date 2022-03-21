import React from "react";

function Products({ name, path, updateItemCount }) {
    const handleChange = (event) => {
        const value = event.currentTarget.value;
        updateItemCount(name, value);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <img src={`http://localhost:5001/${path}`} alt={`${name} product`} style={{ width: "75%" }} />
            <form style={{ marginTop: "10px" }}>
                <label htmlFor={name} style={{ textAlign: "right" }}>
                    {name}
                </label>
                <input id={name} style={{ marginLeft: 7 }} type="number" name="quantity" min={"0"} defaultValue={0} onChange={handleChange} />
            </form>
        </div>
    );
}

export default Products;
