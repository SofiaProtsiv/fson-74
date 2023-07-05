import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const skeletonAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const SkeletonList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const SkeletonCard = styled.li`
  width: 300px;
  background: #fff;
  border-radius: 5px;
  padding: 25px 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  .image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }

  .content {
    padding: 20px 30px;
  }

  .title {
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .price {
    width: 30%;
    height: 20px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }

  .button {
    width: 80px;
    height: 30px;
    background: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  }
`;
