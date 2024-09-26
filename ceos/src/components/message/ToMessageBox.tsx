import styled from "styled-components";
import { MessageBoxStyle, TextWrapper } from "./style/messageBoxStye";
import { MessageBoxProps } from "./types/messageBoxProps";

export default function ToMessageBox({ showProfile, message }: MessageBoxProps) {
  return (
    <TextWrapper>
      <MessageText $showProfile={showProfile}>{message}</MessageText>
    </TextWrapper>
  );
}

const MessageText = styled(MessageBoxStyle)<{ $showProfile: boolean }>`
  margin-top: ${({ $showProfile }) => ($showProfile ? "12px" : "8px")};
  margin-right: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: ${({ $showProfile }) => ($showProfile ? 0 : "16px")};
`;
