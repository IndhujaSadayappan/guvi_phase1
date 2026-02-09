import '../styles/GUVISection.css'

/**
 * GUVI section component
 * Describes GUVI as an industry skill training platform
 */
export default function GUVISection() {
  const features = [
    {
      title: 'Industry-Focused Training',
      description: 'Comprehensive curriculum designed by industry experts'
    },
    {
      title: 'Hands-On Projects',
      description: 'Real-world projects to build practical skills'
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn from seasoned professionals in the field'
    },
    {
      title: 'Career Support',
      description: 'Job placement assistance and career guidance'
    }
  ]

  return (
    <section className="guvi-section">
      <div className="container">
        <div className="section-header">
          <h2>GUVI: Industry Skill Training Platform</h2>
          <p>Empowering learners with in-demand technical and professional skills</p>
        </div>
        <div className="guvi-content">
          <div className="guvi-text">
            <p>
              GUVI is a leading platform dedicated to providing industry-relevant skill training to students and professionals.
              With a focus on practical learning, GUVI bridges the gap between academic knowledge and industry requirements.
            </p>
            <p>
              Through interactive courses, live projects, and mentorship from industry experts, GUVI equips learners with the
              skills needed to excel in the competitive job market.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-circle"></div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
