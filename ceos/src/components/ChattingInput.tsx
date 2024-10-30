import { ContentContainer, Icon, rowFlex, IsActiveIcon } from "style/commonStyle";
import styled from "styled-components";

import PlusIC from "@/assets/icons/plus_ic.svg?react";
import SmileIC from "@/assets/icons/smile_ic.svg?react";
import HashtagIC from "@/assets/icons/hashtag_ic.svg?react";

import ActiveIc from "@/assets/icons/active_ic.svg?react";
import InActiveIc from "@/assets/icons/inactive_ic.svg?react";

import { useState } from "react";
import { useStore } from "@core/useStore";
import { useParams } from "react-router";

export default function ChattingInput() {
  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const { userId } = useParams();
  const setInputText = useStore((state) => state.setInputValue);
  const addNewText = useStore((state) => state.addNewText);

  function handleText() {
    if (inputValue.trim()) {
      setInputText(inputValue);
      addNewText(userId);
      setInputValue("");
    }
    setIsFocus(false);
  }

  function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      e.preventDefault();
      handleText();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleText();
  }

  function handleFocus() {
    setIsFocus(true);
  }

  return (
    <Wrapper>
      <ContentContainer>
        <PlusIcon />
        <Form onSubmit={handleSubmit}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
            onKeyDown={handlePressEnter}
            type="text"
          />
          <RightWrapper>
            <SmileICon />
            {!isFocus ? (
              <HashtagICon />
            ) : inputValue?.length !== 0 ? (
              <ActiveIcon onClick={handleText} />
            ) : (
              <InActiveIcon />
            )}
          </RightWrapper>
        </Form>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const RightWrapper = styled.div`
  ${rowFlex}
  gap: 16px;
`;

const PlusIcon = Icon(PlusIC);
const SmileICon = Icon(SmileIC);
const HashtagICon = Icon(HashtagIC);

const ActiveIcon = IsActiveIcon(ActiveIc);
const InActiveIcon = IsActiveIcon(InActiveIc);

const Form = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
  ${rowFlex}
  width: 223px;
  height: 32px;

  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.medium16};

  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border: none;
    outline: none;
  }
`;
