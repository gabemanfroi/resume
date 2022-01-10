import { Container } from './style';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { WebsiteContentContext } from '../../../../contexts/WebsiteContentContext';
import { useContext } from 'react';

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

const WorkHistory = () => {
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { workExperiences } = currentPersonContent.resume;

  return (
    <Container>
      <h2>Work History</h2>

      <VerticalTimeline layout={'1-column-right'} lineColor={'#191923'}>
        {workExperiences.length && workExperiences.map(we => (
          <VerticalTimelineElement contentStyle={{ ...timelineContentStyle }}
                                   contentArrowStyle={{ ...contentArrowStyle }}
                                   className={'timeline-item-content'}
                                   iconStyle={{ ...iconStyle }}>
            <h5 className='timeline-header'>{we.companyName}</h5>
            <span className='timeline-subtitle'>{we.role}</span>
            <div className='time-range'>jan 2018 - may 2020</div>
            <div className='description'>{we.role}</div>
          </VerticalTimelineElement>
        ))

        }
      </VerticalTimeline>
    </Container>
  );
};

export default WorkHistory;