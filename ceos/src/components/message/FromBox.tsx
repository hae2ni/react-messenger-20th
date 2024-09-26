import styled from "styled-components";
import MessageBox from "./MessageBox";
import MessageTime from "./MessageTime";
import { chatType } from "types/chatType";

export default function FromBox(props: chatType) {
  const { id, message, time } = props;
  return (
    <>
      <FromWrapper>
        <Name>{id}</Name>
        <MessageTimeWrapper>
          <MessageBox id={id} text={message} />
          <MessageTime time={time} />
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

const MessageTimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
