import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const SelectedImagesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SelectedImageWrapper = styled.View`
  position: relative;
  margin: 5px;
`;

export const SelectedImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
`;

export const AddImageButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-style: dashed;
  border-color: #ccc;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
