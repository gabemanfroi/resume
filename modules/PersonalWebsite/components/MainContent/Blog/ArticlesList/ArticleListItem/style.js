import styled from 'styled-components';

export const Container = styled.article`

  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
  margin-bottom: 30px;
  height: 80%;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    height: 100%;
  }
  @media screen and (min-width: 992px) {
    height: 70%;
    flex: 0 0 50%;
  }

  .image-container {
    width: 100%;
    height: 40%;
    background: url('${({ articleImage }) => articleImage}');
    background-size: cover;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    object-fit: cover;
    @media screen and (max-width: 600px) {
    }
    @media screen and (min-width: 600px) {
      height: 100%;
    }
    @media screen and (min-width: 992px) {
    }
  }

  .article-content {
    flex: 1 1;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    padding: 30px;
    display: flex;
    flex-direction: column;

    .general {
      background: #20202A;
      border-radius: 999px;
      margin-bottom: 8px;
      display: flex;
      justify-content: flex-end;
      margin-right: auto;

      @media screen and (max-width: 600px) {
        padding: 0 15px;
      }
      @media screen and (min-width: 601px) {
        padding: 5px 15px;
        margin-right: auto;
      }
      @media screen and (min-width: 992px) {
      }

      span {
        color: #8C8C8E;
        font-weight: 500;
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

      .tags {
        display: flex;
        flex-wrap: wrap;
        align-self: flex-end;
        flex-direction: row;
        margin-bottom: 8px;
        width: 100%;
        justify-content: flex-end;
      }

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