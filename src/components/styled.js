import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledTable = styled.table`
  width: 80%;
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-collapse: collapse;
  margin-top: 1em;
  font-size: 14px;

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

export const TableRow = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

export const SortIcon = styled.span`
  padding-top: 3px;
  float: right;
  font-size: 10px;
`;

export const ZenText = styled.div`
  font-style: italic;
  color: ${(props) => props.theme.colors.gray}
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

export const ErrorText = styled(H1)`
  color: ${(props) => props.theme.colors.red}
`;

export const StyledModal = Modal.styled`
  width: 40rem;
  height: 30rem;
  background-color: ${props => props.theme.colors.white};
`;

export const ModalWrapper = styled.div`
  margin: 1em;
`;

export const DetailAvatar = styled.img`
  margin-left: 1em;
  height: 5em;
`;

export const DetailWrapper = styled.div`
  margin: 0.3em 0 0.3em 1em;
`;

export const DetailTitle = styled.span`
  padding-right: 1em;
  font-weight: bold;
`;

export const DetailData = styled.span`
  font-style: italic;
`;

export const CloseButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  float: right;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.lightGray};
  }
`;

export const CloseIcon = styled.img`
  width: 20px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 1em;
`;

export const PaginationButton = styled.button`
  margin-right: 0.5em;
  background-color: ${(props) => props.theme.colors.darkGray};
  border: none;
  color: white;
  padding-top: 0.2em;
  text-align: center;
  text-decoration: none;
`;

export const PaginationInput = styled.input`
  margin: 0 0.5em;
`;

export const PaginationSelect = styled.select`
  background-color: ${(props) => props.theme.colors.darkGray};
  border: none;
  color: white;
  padding: 0.3em;
`;

export const EmojiWrapper = styled.div`
  width: 40%;
`;

export const Emoji = styled.img`
  width: 3em;
  margin: 1em;
`;
