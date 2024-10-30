import styled from "styled-components";
import FromBox from "./message/FromBox";
import { useStore } from "@core/useStore";
import ToBox from "./message/ToBox";
import { FRIEND_LIST } from "constant/friends";
import { ProfileImg } from "./common/ProfileImg";

export default function ChatBubble({ userId }) {
  const newDummyText = useStore((state) => state.dummyText);

  const friendData = newDummyText.find((friend) => friend.userId === userId);
  const friendProfile = FRIEND_LIST.find((friend) => friend.userId === userId)?.profile;
  console.log(friendProfile);

  if (!friendData) {
    return <p>친구가 없는데요?</p>;
  }

  return (
    <>
      {friendData.messages.map((data, index, array) => {
        const { sender, text, time } = data;

        const prevMessage = array[index - 1];
        const nextMessage = array[index + 1];

        //다음 메세지랑 동시에 엔터엔터,,,를 했냐마냐
        const isSameTime = nextMessage?.sender === sender && nextMessage?.time === time;

        //받은 메세지고, 전에랑 time이 달라짐!
        const showProfile = index === 0 || prevMessage?.sender !== sender || prevMessage?.time !== time;

        //user가 같고, time이 앞에 메세지랑 같지만, 그 시간에 그 사람이 마지막으로 보낸 메세지임
        const lastMessage = prevMessage?.sender === sender && prevMessage?.time === time && nextMessage?.time != time;

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
              <ToBox showProfile={showProfile} message={text} time={time} />
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
