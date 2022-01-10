import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;

  .timeline-item-content {
    text-align: left;

    .timeline-header {
      font-size: 14px;
      font-weight: 600;

    }

    .timeline-subtitle {
      font-size: 12px;
      font-style: italic;
      line-height: 1.2;
      width: 100%;
    }

    .time-range {
      font-size: 12px;
      text-align: center;
      background: #20202A;
      padding: 5px 15px;
      border-radius: 999px;
      margin-bottom: 15px;
      margin-right: auto;
    }

    .time-range, .description, .timeline-subtitle {
      color: #8C8C8E;
    }

    .description {
      font-size: 13px;
    }
  }


`;