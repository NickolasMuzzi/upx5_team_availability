import TextField from "@mui/material/TextField";
import { useField } from "formik";
import styled from "styled-components";
// eslint-disable-next-line react-refresh/only-export-components
const Input = (props) => {
  const [field] = useField(props);
  return (
    <div className={props.className}>
      <TextField fullWidth required {...props} {...field} variant="filled" />
    </div>
  );
};

export default styled(Input)`
  width: 70%;
  min-height: 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: #a35b5b;
  }
`;
