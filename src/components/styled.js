import styled from 'styled-components';

export const StyledTable = styled.table`
  width: auto;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-collapse: collapse;
  margin-top: 1em;

  th {
    padding: 5px 10px;
    background: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.darkGray};
    font-weight: 400;
    text-align: left;
  }

  td {
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.colors.darkGray};
  }
`;

export const SortIcon = styled.span`
  padding: 4px;
  float: right;
  font-size: 10px;
`;

export const ZenText = styled.div`
  font-style: italic;
  color: ${(props) => props.theme.colors.Gray}
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 600;
`;

export const ToolTip = styled.div`
  font-style: italic;
`;

export const ZenWrapper = styled.div`
  margin: 1em;
`;
