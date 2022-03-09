import React from "react";

function Options({ name }) {
    return (
        <form>
            <input type="checkbox" id={`${name} option`} />
            &nbsp; <label htmlFor={`${name}`}>{name}</label>
        </form>
    );
}

export default Options;
