import React from "react";

function Options({ name, updateItemCounts }) {
    return (
        <form>
            <input
                type="checkbox"
                id={`${name} option`}
                onChange={(e) => {
                    updateItemCounts(name, e.currentTarget.checked ? 1 : 0);
                }}
            />
            &nbsp; <label htmlFor={`${name}`}>{name}</label>
        </form>
    );
}

export default Options;
