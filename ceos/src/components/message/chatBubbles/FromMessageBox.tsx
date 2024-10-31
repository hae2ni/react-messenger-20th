import styled from "styled-components";
import { MessageBoxStyle, TextWrapper } from "../style/messageBoxStye";
import { MessageBoxPropType } from "../types/messageBoxProps";

export default function FromMessageBox({ showProfile, message }: MessageBoxPropType) {
  return (
    <TextWrapper>
      <MessageText $showProfile={showProfile}>{message}</MessageText>
    </TextWrapper>
  );
}

const MessageText = styled(MessageBoxStyle)<{ $showProfile: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ $showProfile }) => ($showProfile ? 0 : "16px")};
`;
