import { rowFlex } from "style/commonStyle";
import styled from "styled-components";
import { textTypes } from "types/textType";

export default function MessageBox({ id, text }: textTypes) {
  return (
    <TextWrapper>
      <MessageText $color={id}>{text}</MessageText>
    </TextWrapper>
  );
}

const MessageText = styled.p<{ $color: string }>`
  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.black};

  max-width: fit-content;
  max-height: fit-content;
  padding: 10px;

  border-radius: 16px;
  background-color: ${({ theme, $color }) => ($color === "나" ? theme.colors.primary : theme.colors.white)};
`;

const TextWrapper = styled.div`
  ${rowFlex}
  max-width: 185px;
  min-height: 39px;
  padding: 10px;
`;
