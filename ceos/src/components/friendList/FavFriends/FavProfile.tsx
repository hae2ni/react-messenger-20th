import { ProfileImg } from "@components/common/ProfileImg";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import { friendListType } from "types/friendListType";

type FavProfileProps = Pick<friendListType, "profile" | "user">;

export default function FavProfile(props: FavProfileProps) {
  const { profile, user } = props;
  return (
    <Wrapper>
      <ProfileImg profile={profile} />
      <Name>{user}</Name>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  ${columnFlex}
  width: 48px;
  height: 68px;
  gap: 8px;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.medium12};
`;
