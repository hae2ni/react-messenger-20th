import styled from "styled-components";
import { rowFlex } from "style/commonStyle";
import { formattedTime } from "@utils/formattedTime";

interface TimeProps {
  time: string;
}

export default function MessageTime({ time }: TimeProps) {
  const formatTime = formattedTime(time);

  return <Text>{formatTime}</Text>;
}

const Text = styled.p`
  ${rowFlex}
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
  margin-left: 6px;
`;
