import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: 100%;

  .article-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;

    .header-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      h1 {
        margin-bottom: 0;
        margin-left: 30%;
      }

      button {
        font-size: 16px;
        color: white;
        z-index: 999;
      }
    }

  }

  .article-image-container {
    height: 30%;
    width: 100%;
    background: url('${({ articleImage }) => {
      console.log(articleImage);
      return articleImage;
    }}');
    background-size: cover;
    margin-bottom: 16px;

    @media screen and (min-width: 600px) {
      height: 50%;
    }
  }

  .article-content-container {
    padding: 30px;
    flex: 1 1;
    font-weight: 400;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    letter-spacing: .25px;
    font-size: 14px;
    color: #fafafc;
    line-height: 1.8;
    margin-bottom: 16px;
    word-wrap: break-word;
  }


`;