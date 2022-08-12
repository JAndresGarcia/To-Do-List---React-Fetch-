import React, { Fragment } from "react";

const Checkbox = props => {
  const {
    onChange,
    data: { id, label, done }
  } = props;
  
  return (
    <Fragment>
      <label className="todo  text-center new-item">
        <input
          className="state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="text-center justify-content-center texty" >
          <div className={` ${done?"terminado":""}`}>{label}</div>
        </div>
      </label>
    </Fragment>
  );
};

export default Checkbox;