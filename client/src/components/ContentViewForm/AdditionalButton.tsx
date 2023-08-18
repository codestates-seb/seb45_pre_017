import React from "react";
import { styled } from "styled-components";

/**
 * Edit 외에 Delete 기능도 필요하기 때문에 추후 수정 예정
 *  -> 작성자 본인만 Delete 가능해야 하므로 관련 로직 구현 필요함
 */

const editButtonText: string = "Edit";
const deleteButtonText: string = "Delete";

const AdditonalButton = () => {
  return (
    <Container>
      <EditButton>{editButtonText}</EditButton>
      <DeleteButton>{deleteButtonText}</DeleteButton>
    </Container>
  );
};

export default AdditonalButton;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const EditButton = styled.div`
  font-size: 13px;
  color: #6a737c;
`;

const DeleteButton = styled.div`
  font-size: 13px;
  color: #6a737c;
`;
