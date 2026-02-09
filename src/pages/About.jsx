import '../styles/About.css'

/**
 * About page component
 * Provides detailed information about the partnership, mission, and benefits
 */
export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About GUVI & KEC Partnership</h1>
          <p>Transforming Technical Education Through Collaboration</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To bridge the gap between academic education and industry requirements by providing students with comprehensive,
            practical, and up-to-date skill training that prepares them for successful careers in the technology sector.
          </p>
        </div>
      </section>

      <section className="about-section alternate-bg">
        <div className="container">
          <h2>The Partnership</h2>
          <p>
            The collaboration between GUVI, a leader in skill training, and Kongu Engineering College, a premier technical
            institution, brings together two complementary forces in education. This strategic partnership aims to enhance
            the learning experience for students and ensure their readiness for the modern job market.
          </p>
          <p>
            By combining GUVI's industry expertise with KEC's academic excellence, we create a comprehensive educational
            ecosystem that nurtures both intellectual growth and practical skill development.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Key Objectives</h2>
          <ul className="objectives-list">
            <li>Develop curriculum aligned with current industry standards and future trends</li>
            <li>Provide students with hands-on experience through real-world projects</li>
            <li>Facilitate mentorship and networking opportunities with industry professionals</li>
            <li>Enhance student employability and career prospects</li>
            <li>Foster innovation and entrepreneurial thinking among students</li>
            <li>Create a sustainable model for continuous skill development</li>
          </ul>
        </div>
      </section>

      <section className="about-section alternate-bg">
        <div className="container">
          <h2>Benefits for Students</h2>
          <div className="benefits-table">
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Quality Education</div>
              <div className="benefit-cell">Access to industry-standard curriculum and learning materials</div>
            </div>
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Practical Experience</div>
              <div className="benefit-cell">Hands-on projects and case studies based on real-world scenarios</div>
            </div>
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Expert Guidance</div>
              <div className="benefit-cell">Mentorship from experienced professionals in the industry</div>
            </div>
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Career Support</div>
              <div className="benefit-cell">Job placement assistance and career counseling services</div>
            </div>
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Networking</div>
              <div className="benefit-cell">Opportunities to connect with peers and industry leaders</div>
            </div>
            <div className="benefit-row">
              <div className="benefit-cell benefit-title">Certification</div>
              <div className="benefit-cell">Industry-recognized certifications upon program completion</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Impact and Vision</h2>
          <p>
            This partnership is designed to create a ripple effect across the educational landscape. By equipping students
            with both theoretical knowledge and practical skills, we aim to produce graduates who are not just job-ready but
            also capable of driving innovation and creating value in their respective fields.
          </p>
          <p>
            Our vision is to establish a model of educational excellence that other institutions can emulate, ultimately
            raising the standard of technical education and creating a more skilled workforce for the future.
          </p>
        </div>
      </section>
    </div>
  )
}
