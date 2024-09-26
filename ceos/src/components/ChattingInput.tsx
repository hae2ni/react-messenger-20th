import { ContentContainer, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import PlusIC from "@/assets/icons/plus_ic.svg?react";
import SmileIC from "@/assets/icons/smile_ic.svg?react";
import HashtagIC from "@/assets/icons/hashtag_ic.svg?react";

import { useRef } from "react";
import { useStore } from "@core/useStore";

export default function ChattingInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setInputText = useStore((state) => state.setInputValue);
  const setDummyText = useStore((state) => state.setDummyText);

  function handleText() {
    if (inputRef.current) {
      const enteredText = inputRef.current.value;
      setInputText(enteredText);
      setDummyText();
      inputRef.current.value = "";
    }
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

  return (
    <Wrapper>
      <ContentContainer>
        <PlusIcon />
        <Form onSubmit={handleSubmit}>
          <Input onKeyDown={handlePressEnter} type="text" ref={inputRef} autoFocus={true} />
          <RightWrapper>
            <SmileICon />
            <HashtagICon onClick={handleText} />
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

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  ${rowFlex}
  width: 223px;
  height: 32px;
  border: none;
  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border: none;
    outline: none;
  }
`;
