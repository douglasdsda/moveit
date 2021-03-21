import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  padding: 2.5rem 0rem;

  display: flex;
  flex-direction: column;
  background: var(--blue01);

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.25rem;
    align-content: center;

    @media (max-width: 1000px) {
      justify-content: center;
      margin: 0 auto;
    
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Form = styled.div`
  margin: auto 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 2rem;
 

  > h1 {
    margin-bottom: 1.5rem;
    margin-top: 6rem;
    color: var(--white);
    font-size: 2rem;
    font-weight: 600;
  }

  > div {
    margin-bottom: 2rem;

    display: flex;
    flex-direction: row;
    color: var(--text-blue);
  }

  > div > svg {
    fill: var(--text-blue);
    width: 2.2rem;
    height: 2.2rem;
    flex-shrink: 0;
    margin-right: 1rem;
  }

  > div > span {
    max-width: 16rem;
    font-size: 1.2rem;
  }

  @media (max-width: 1100px) {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
 
    width: 100vw;
    img {
      width: 25rem;
    }
    div {
      justify-content: center;
      align-items: center;
      strong {
        margin-top: 4rem;
      }
    }
  }
`;

export const Gitbutton = styled.div`
  display: flex;
  align-items: center;

  > div input {
    border: 0;
    padding: 2rem;
    text-decoration: 0;
    color: var(--text-blue);
    width: 20rem;
    height: 4rem;
    outline: none;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;

    background-color: var(--linear);
    background-image: linear-gradient(
      127deg,
      rgba(73, 83, 184, 1) rgb(73, 83, 184) 70%
    );
  }
`;

export const GitbuttonClick = styled.button`
  height: 4rem;
  width: 4rem;
  background-color: var(--blue02);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  svg {
    fill: var(--white);
    width: 2.2rem;
    height: 2.2rem;
    flex-shrink: 0;
  }

  &:hover {
    opacity: 0.9;
  }
`;
