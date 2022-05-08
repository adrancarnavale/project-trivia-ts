import styled from 'styled-components';

export const OptionButtonCorrect = styled.button.attrs(
  (props: { theme: boolean }) => props
)`
  color: ${(props) => props.theme === true && 'green'};
`;

export const OptionButtonIncorrect = styled.button.attrs(
  (props: { theme: boolean }) => props
)`
  color: ${(props) => props.theme === true && 'red'};
`;
