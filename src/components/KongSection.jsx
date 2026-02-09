import '../styles/KongSection.css'

/**
 * Kong Engineering College section component
 * Describes Kongu Engineering College and its excellence
 */
export default function KongSection() {
  const highlights = [
    {
      title: 'Academic Excellence',
      description: 'Premier technical institution with world-class faculty'
    },
    {
      title: 'Modern Infrastructure',
      description: 'State-of-the-art laboratories and learning facilities'
    },
    {
      title: 'Industry Partnerships',
      description: 'Strong connections with leading tech companies'
    },
    {
      title: 'Student Success',
      description: 'High placement rates and successful alumni network'
    }
  ]

  return (
    <section className="kong-section">
      <div className="container">
        <div className="section-header">
          <h2>Kongu Engineering College: Excellence in Education</h2>
          <p>A premier technical institution committed to quality education and student development</p>
        </div>
        <div className="kong-content">
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
          <div className="kong-description">
            <p>
              Kongu Engineering College, established with a vision of excellence, has been a beacon of quality technical
              education. With a strong commitment to nurturing talent and fostering innovation, the college has consistently
              produced graduates who make significant contributions to the industry.
            </p>
            <p>
              The college's collaborative approach with industry partners like GUVI ensures that students receive
              education that is aligned with current market demands and industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
