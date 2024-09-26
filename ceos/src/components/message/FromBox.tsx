import styled from "styled-components";
import MessageTime from "./MessageTime";
import { chatType } from "types/chatType";
import FromMessageBox from "./FromMessageBox";

interface FromBoxPropType extends chatType {
  showProfile: boolean;
  isSameTime: boolean;
  lastMessage: boolean;
}

export default function FromBox(props: FromBoxPropType) {
  const { id, message, time, showProfile, isSameTime, lastMessage } = props;

  return (
    <>
      <FromWrapper>
        {showProfile && <Name>{id}</Name>}
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
  ${({ theme }) => theme.fonts.medium12};
`;

const FromWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageTimeWrapper = styled.div<{ $showProfile: boolean }>`
  display: flex;
  align-items: flex-end;
  padding-left: ${({ $showProfile }) => ($showProfile ? 0 : "50px")};
`;
