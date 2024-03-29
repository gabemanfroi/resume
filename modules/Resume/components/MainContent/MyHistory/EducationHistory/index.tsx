import { Container } from './style';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useContext } from 'react';
import { ResumeContext } from '../../../../contexts/ResumeContext';

const timelineContentStyle = {
  background: 'linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)',
  boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%',
  borderRadius: 0,
};

const contentArrowStyle = {
  borderLeft: '7px solid rgba(43,43,53,.98)',
};

const iconStyle = {
  background: '#191923',
  boxShadow: '0 0 0 4px #3E98C7, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const EducationHistory = () => {
  const { currentPersonContent } = useContext(ResumeContext);
  const { educationHistoryItems } = currentPersonContent.resume;

  return (
    <Container>
      <h2>Education</h2>
      {
        educationHistoryItems.length > 0 &&
        <VerticalTimeline layout={'1-column-right'} lineColor={'#191923'}>

          {
            educationHistoryItems.map(item => (
              <VerticalTimelineElement key={item.id} contentStyle={{ ...timelineContentStyle }}
                                       contentArrowStyle={{ ...contentArrowStyle }}
                                       className={'timeline-item-content'}
                                       iconStyle={{ ...iconStyle }}>
                <h5 className='timeline-header'>{item.institutionName}</h5>
                <div className='time-range'>from {item.startDate} to {item.endDate}</div>
                <div className='description'>{item.graduationName}</div>
              </VerticalTimelineElement>

            ))
          }
        </VerticalTimeline>
      }

    </Container>
  );
};

export default EducationHistory;
