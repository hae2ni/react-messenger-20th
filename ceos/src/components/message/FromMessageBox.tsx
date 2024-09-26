import styled from "styled-components";
import { MessageBoxProps } from "./types/messageBoxProps";
import { MessageBoxStyle, TextWrapper } from "./style/messageBoxStye";

export default function FromMessageBox({ showProfile, message }: MessageBoxProps) {
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
