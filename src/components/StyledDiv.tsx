import styled from "styled-components";

const StyledDiv = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

export default StyledDiv;