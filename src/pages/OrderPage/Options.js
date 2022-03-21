import React from "react";

function Options({ name, updateItemCount }) {
    return (
        <form>
            <input
                type="checkbox"
                id={name}
                onChange={(e) => {
                    updateItemCount(name, e.currentTarget.checked ? 1 : 0);
                }}
            />
            &nbsp; <label htmlFor={name}>{name}</label>
        </form>
    );
}

export default Options;
