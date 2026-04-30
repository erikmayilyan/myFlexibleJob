import React from 'react';
import "./About.css";

const AboutCard = () => {
  return (
    <div>
      <h1 className='about-title'>WHO WE ARE - ABOUT US</h1>
      <div className='about-cards'>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>🎓 For Students</h3>
              <p>
                myFlexibleJob helps students in Luxembourg find part-time jobs, internships,
                and side hustles that fit around their studies.
              </p>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>💼 Real Opportunities</h3>
              <p>
                We connect you with trusted companies in Luxembourg offering flexible
                student-friendly roles across multiple industries.
              </p>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>⏰ Flexible Work</h3>
              <p>
                Choose jobs that fit your schedule — during weekends, holidays,
                or alongside your studies without stress.
              </p>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>📍 Based in Luxembourg</h3>
              <p>
                Focused on the Luxembourg job market, including companies in finance,
                tech, retail, and hospitality.
              </p>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>🚀 Build Experience</h3>
              <p>
                Gain real-world experience, earn income, and strengthen your CV
                while still studying.
              </p>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='content'>
            <div className='individual-card'>
              <h3>🔍 Easy Job Search</h3>
              <p>
                Quickly search and filter student jobs by company, role, or category
                in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard;