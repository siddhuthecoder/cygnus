import { useState } from "react";

const useTogglePassword = () => {
  const [visibility, setVisibility] = useState({});

  const togglePassword = (field) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const getInputType = (field) => (visibility[field] ? "text" : "password");

  return { visibility, togglePassword, getInputType };
};

export default useTogglePassword;
