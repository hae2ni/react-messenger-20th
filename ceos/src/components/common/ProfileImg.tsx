import styled from "styled-components";
import { friendListType } from "types/friendListType";

type ImgProps = Pick<friendListType, "profile">;

export const ProfileImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.profile,
  alt: "profileImg",
}))`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;
