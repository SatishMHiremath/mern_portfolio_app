import React from 'react'
import './education.css';
import {MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <>
      <div className='container education' id='education'>
          <h2 className='col-11 mt-3 mb-1 text-center text-uppercase'>
              Education Details
          </h2>
          <hr/>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2010 - 2011"
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}>
                <h3 className="vertical-timeline-element-title">Java/J2EE course</h3>
                <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2006 - 2010"
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}>
                <h3 className="vertical-timeline-element-title">BE, Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">VTU, Karnataka</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
    </>
  )
}

export default Education