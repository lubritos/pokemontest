import styled from "styled-components";

const CardPoke = styled.div`
  width: 18rem;
  height: 20rem;
`;

const Card = ({ name, ThumbnailImage }) => {
  return (
    <CardPoke>
      <h2>{name}</h2>
      <label></label>
      <img src={ThumbnailImage} alt="" />
    </CardPoke>
  );
};
export default Card;
