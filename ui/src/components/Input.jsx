import TextField from "@mui/material/TextField";
import styled from "styled-components";
// eslint-disable-next-line react-refresh/only-export-components
const Input = (props) => {
  return (
    <div className={props.className}>
      {/* <TextField {...props} {...field} variant="filled" /> */}
      {/* {meta.error[props.name] && <span>{meta.error[props.name]}</span>} */}
    </div>
  );
};

export default styled(Input)`
  width: fit-content;
  min-height: 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  span {
    color: #a35b5b;
  }
`;
