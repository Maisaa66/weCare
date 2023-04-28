import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProfileId } from "../Redux Store/slices/userSlice";

const RequestTest = () => {
  const dispatch = useDispatch();

  const id = "6448407b0f4bf0d55f1dabba";
  return (
    <div>
      <Link to="/userProfile" onClick={() => dispatch(setProfileId(id))}>
        go to profile
      </Link>
    </div>
  );
};

export default RequestTest;
