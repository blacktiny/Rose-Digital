import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import NewsPreview from '~layout/Post/NewsPreview'
import Typography from '~layout/Typography'
import Section from '~layout/Section'

import Image from 'assets/Images/Miscellaneous/RD_Header_News.jpg'
import WhatWeDoImage from '~assets/Images/Miscellaneous/RD_Header_WhatWeDo.jpg'

import HeaderImage from './layout/HeaderImage'
import BackButton from './layout/BackButton'
import BlogTitle from './layout/BlogTitle'
import TimeOffset from './layout/TimeOffset'
import Topic from './layout/Topic'
import Testimonial from './layout/Testimonial'
import BlogFooter from './layout/BlogFooter'

const topics = ['rose digital news', 'how to / best practices']
const testimonial = {
  content:
    'The team is composed of knowledgeable and experienced people that choose projects based on what they’re passionate about, and it shows.',
  provider: 'CEO, SaaS Platform'
}

export default () => (
  <div className='blog-post'>
    <HeaderImage img={Image} />
    <Row>
      <Col md={10} mdOffset={1}>
        <BackButton />
      </Col>
    </Row>
    <Row>
      <Col md={8} mdOffset={1}>
        <BlogTitle
          title='rose digital: a top ny company'
          time='2019-01-29T10:20:00'
        />
        <TimeOffset time='2019-01-29T10:20:00' />
        <Typography style='paragraph'>
          We are proud to announce that Rose Digital has recently been featured
          in the Leading Mobile App Developers Across the United States report
          for 2018, prepared by Clutch. We have also been named a top augmented
          reality, as well as top artificial intelligence company in New York.
        </Typography>
        <Typography style='paragraph'>
          Clutch, the online ratings and reviews firm, establishes a clear and
          consistent baseline for quality content across the world. Based in
          Washington, D.C., Clutch compiles client testimonials, case studies,
          and objective quantitative information that combine to create a
          powerful tool for understanding B2B companies.
        </Typography>
        <Typography style='paragraph'>
          Another interesting source for keeping up with B2B news is The
          Manifest. The online magazine also named Rose Digital a top AR/VR
          company in NYC.
        </Typography>
        <Typography style='paragraph'>
          While these achievements are exciting and telling, we couldn’t have
          gotten there without help from our clients, who pushed us to excel.
        </Typography>
        <Typography style='paragraph'>
          TJ Docena, Producer at Annex88, was thrilled to work with Rose
          Digital. “The team is composed of knowledgeable and experienced people
          that choose projects based on what they’re passionate about, and it
          shows. Since the work was so new, the research they did and provided
          us with was impressive. They found things that had never been done
          before, identified where there was competition, and validated and
          tested the product.”
        </Typography>
        <Typography style='paragraph'>
          The CEO of a SaaS Platform was impressed with Rose Digital as well.
          “Rose Digital is very confident in their software developing skills,
          which was very comforting for our team. Their in-house staff is
          exceptionally talented at translating the needs of the end-user into a
          useful platform.”
        </Typography>
      </Col>
      <Col md={2} className='topics-holder'>
        <Typography variant='subtitle' color='accent-lightgray'>
          topics
        </Typography>
        {topics.map((topic, idx) => (
          <Topic topic={topic} key={`topic_${idx}`} />
        ))}
      </Col>
    </Row>
    <Row>
      <Col md={10} mdOffset={1}>
        <Testimonial testimonial={testimonial} />
      </Col>
    </Row>
    <Row>
      <Col md={8} mdOffset={1}>
        <Typography variant='postTitle' style='paragraph'>
          An Agile Approach to Complex Projects
        </Typography>
        <Typography style='paragraph'>
          At Rose Digital, we believe in constant and close communication with
          our clients. Each project is treated like an internal startup, with a
          mixed team of developers and client representatives working together
          to achieve the end goal.
        </Typography>
        <Typography>
          Our 8 steps approach is the success formula we have developed after
          direct experiences with clients:
        </Typography>
        <Typography>
          <ol>
            <li>We discover the client’s problem</li>
            <li>We create the functional specification of the project</li>
            <li>We build the initial prototype</li>
            <li>We deliver the MVP</li>
            <li>We listen to user feedback</li>
            <li>We iterate the necessary steps</li>
            <li>We perform integration testing</li>
            <li>
              We deliver the project and support the client with implementation.
            </li>
          </ol>
        </Typography>
      </Col>
      <Col md={8} mdOffset={1}>
        <Typography style='paragraph'>
          This agile work process helped us adapt to the most advanced demands
          made by clients and complete some of the most challenging projects.
        </Typography>
      </Col>
      <Col md={8} mdOffset={1}>
        <Typography variant='postTitle' style='paragraph'>
          Looking Ahead
        </Typography>
        <Typography>
          The recognition offered by the Clutch report motivates us to improve
          our services and become an one-stop-shop for all our clients needs
          for:
        </Typography>
        <Typography>
          <ul>
            <li>Hybrid and native mobile applications</li>
            <li>Responsive single pages applications</li>
            <li>Microservice architecture</li>
            <li>
              Autoscaling environments, continuous integration and automated
              testing
            </li>
            <li>Augmented reality experiences</li>
          </ul>
        </Typography>
      </Col>
      <Col md={8} mdOffset={1}>
        <Typography style='last-paragraph'>
          At Rose Digital, your vision is taken from theoretical concept and
          delivered to you as a fully functional product. Let’s dream together,
          let’s build together!
        </Typography>
      </Col>
      <Col md={10} mdOffset={1}>
        <BlogFooter />
      </Col>
    </Row>
    <Section section='news'>
      <Col xsOffset={1} xs={10} className='blog-suggestion'>
        <Row>
          <Col xs={12} md={6}>
            <NewsPreview
              src={WhatWeDoImage}
              title='Rose Digital: A Top NY Company'
              subtitle='news'
              publishDate={new Date()}
            />
          </Col>
          <Col xs={12} md={6}>
            <NewsPreview
              src='https://cdn2.techworld.com/cmsdata/features/3612861/Hand_holding_smartphone_thumb800.jpg'
              title='guidlines for improving api design'
              subtitle='development   how to / best practices'
              publishDate={new Date()}
            />
          </Col>
        </Row>
      </Col>
    </Section>
  </div>
)
