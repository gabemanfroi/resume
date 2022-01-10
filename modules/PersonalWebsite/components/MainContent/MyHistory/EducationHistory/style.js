import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  .timeline-item-content {
    text-align: left;

    .timeline-header {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;

    }


    .time-range {
      font-size: 12px;
      text-align: center;
      background: #20202A;
      padding: 5px 15px;
      border-radius: 999px;
      margin-bottom: 15px;
      @media screen and (min-width: 1200px) {
        width: 50%;
      }
    }

    .time-range, .description {
      color: #8C8C8E;
    }

    .description {
      font-size: 13px;
    }
  }


`;