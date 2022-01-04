import styled from 'styled-components';

export const Container = styled.article`

  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
  background: url(${({ articleImage }) => articleImage});
  background-size: cover;
  height: 100%;
  margin-bottom: 30px;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);


  @media screen and (max-width: 600px) {

  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 992px) {
  }

  img {
    width: 100%;
    height: 40%;
    @media screen and (max-width: 600px) {

    }
    @media screen and (min-width: 600px) {
    }
    @media screen and (min-width: 992px) {
    }
  }

  .article-content {
    flex: 1 1;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    padding: 30px;
    display: flex;
    flex-direction: column;

    .tags {
      display: flex;
      flex-wrap: wrap;


      margin-bottom: 8px;
    }

    .general {
      width: 100%;
      background: #20202A;
      height: 20%;
      padding: 3%;
      border-radius: 5px;
      margin-bottom: 8px;

      span {
        color: #FAFAFC;
        font-weight: 300;
        font-size: 12px;
      }
    }

    h5.title {
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 14px;
    }

    .bottom-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      flex: 1 0;

      p.description {
        font-size: 13px;
        line-height: 1.7;
        letter-spacing: .25px;
        color: #8C8C8E;
      }

      span.read-more {
        font-size: 12px;
        color: #3E98C7;
        letter-spacing: 1.25px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }


  }

`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 1%;
  border-radius: 8px;
  background: ${({ tagColor }) => tagColor};
  margin: 0 5px;
`;