import styled from "styled-components";

//type visibleProps = { visible: boolean };

const StyledDiv = styled.div<{ visible: boolean }>
`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

export default StyledDiv;