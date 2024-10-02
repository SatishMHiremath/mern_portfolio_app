import React from 'react';
import './workexp.css';
import { BsPersonWorkspace } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExp = () => {
    return (
        <>
            <div className='container workexp' id='workexp'>
                <h2 className='col-11 mt-3 mb-1 text-center text-uppercase'>
                    Work Experience Details
                </h2>
                <hr/>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2024-Feb - Present"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                        <h3 className="vertical-timeline-element-title">NatWest Group, Principal Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2021-Dec - 2024-Feb"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">Wipro, Tech Lead</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2019-Dec - 2021-Dec"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">IBM, Senior Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2017-Oct - 2019-Dec"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">Capgemini, Senior Consultant</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2015-Mar - 2017-Oct"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">Infosys, Technology Analyst</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2013-Jan - 2015-Mar"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">HCL, Senior Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2011-Mar - 2013-Mar"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<BsPersonWorkspace/>}>
                            <h3 className="vertical-timeline-element-title">Itwine Technologies, Associate Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );    
}

export default WorkExp;