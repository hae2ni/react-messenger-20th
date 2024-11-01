import styled from "styled-components";
import MessageTime from "./MessageTime";
import FromMessageBox from "./FromMessageBox";
import { BoxPropType } from "../types/messageBoxProps";

export default function FromBox(props: BoxPropType) {
  const { user, message, time, showProfile, isSameTime, lastMessage } = props;

  return (
    <>
      <FromWrapper>
        {showProfile && <Name>{user}</Name>}
        <MessageTimeWrapper $showProfile={showProfile}>
          <FromMessageBox showProfile={showProfile} message={message} />
          {!isSameTime || lastMessage ? <MessageTime time={time} /> : null}
        </MessageTimeWrapper>
      </FromWrapper>
    </>
  );
}

const Name = styled.p`
  padding-left: 10px;
  margin-top: 12px;
  margin-bottom: 4px;
  ${({ theme }) => theme.fonts.medium12};
`;

const FromWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageTimeWrapper = styled.div<{ $showProfile: boolean }>`
  display: flex;
  align-items: flex-end;

  margin: 0;
  margin-bottom: ${({ $showProfile }) => ($showProfile ? "8px" : "12px")};
  padding: 0;
  padding-left: ${({ $showProfile }) => ($showProfile ? 0 : "50px")};
`;
