import styled from "styled-components";
import FromBox from "./FromBox";
import { useStore } from "@core/useStore";
import ToBox from "./ToBox";
import { FRIEND_LIST } from "constant/friends";
import { ProfileImg } from "../../common/ProfileImg";
import NewChat from "../../common/NewChat";

interface ChatBubbleProps {
  userId: string | undefined;
}

export default function ChatBubble({ userId }: ChatBubbleProps) {
  const newDummyText = useStore((state) => state.dummyText);

  const friendData = newDummyText.find((friend) => friend.userId === userId);
  const friendProfile = FRIEND_LIST.find((friend) => friend.userId === userId)?.profile;

  if (!friendData) {
    return (
      <WrapperNewChat>
        <NewChat />
      </WrapperNewChat>
    );
  }

  return (
    <>
      {friendData.messages.map((data, index, array) => {
        const { sender, text, time } = data;

        const prevMessage = array[index - 1];
        const nextMessage = array[index + 1];

        //다음 메세지랑 동시에 엔터엔터,,,를 했냐마냐
        const isSameTime =
          nextMessage?.sender === sender && new Date(nextMessage?.time).getTime === new Date(time).getTime;

        //받은 메세지고, 전에랑 time이 달라짐!
        const showProfile =
          index === 0 ||
          prevMessage?.sender !== sender ||
          new Date(prevMessage.time).getTime !== new Date(time).getTime;

        //user가 같고, time이 앞에 메세지랑 같지만, 그 시간에 그 사람이 마지막으로 보낸 메세지임
        const lastMessage =
          prevMessage?.sender === sender &&
          new Date(prevMessage.time).getTime !== new Date(time).getTime &&
          (new Date(nextMessage?.time).getTime === new Date(time).getTime || !nextMessage);

        if (sender != "me") {
          return (
            <FromContainer key={Math.random()}>
              {showProfile && <ProfileImg profile={friendProfile} />}
              <FromBox
                lastMessage={lastMessage}
                isSameTime={isSameTime}
                showProfile={showProfile}
                user={sender}
                message={text}
                time={time}
              />
            </FromContainer>
          );
        } else {
          return (
            <ToWrapper key={Math.random()}>
              <ToBox
                lastMessage={lastMessage}
                isSameTime={isSameTime}
                showProfile={showProfile}
                message={text}
                time={time}
              />
            </ToWrapper>
          );
        }
      })}
    </>
  );
}

const FromContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
`;

const ToWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const WrapperNewChat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
