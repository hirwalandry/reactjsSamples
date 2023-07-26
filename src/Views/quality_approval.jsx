import React, { useState, useEffect, useMemo } from "react";

function Quality_approval(props) {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    approved: false,
  });
 const item = useMemo(() => ({
        name: state.name,
        approved: state.approved
  }), [state.name, state.approved])
  useEffect(() => {
    console.log("state has changed, useEffect runs");
    return () => {
      console.log("clean up funtions");
    }
  }, [item]);
  const handleName = () => {
    
    setState(prev => ({...prev, name }));
  };
  const handleApprove = () => {
    setState((prev) => ({ ...prev, approved: true }));
  };
  console.log(state);
  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button className="p-2 bg-blue-600" onClick={handleName}>
          Add name
        </button>
        <br />
        <button className="p-2 bg-blue-600" onClick={handleApprove}>
          Approve
        </button>
      </div>
      <div>{`{item: ${state.name},approved: ${state.approved}
        }`}</div>
    </div>
  );
}

export default Quality_approval;
