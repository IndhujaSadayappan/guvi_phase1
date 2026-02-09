import '../styles/CollaborationSection.css'

/**
 * Collaboration section component
 * Highlights the partnership and benefits for students
 */
export default function CollaborationSection() {
  const benefits = [
    'Industry-aligned curriculum developed collaboratively',
    'Guest lectures from leading industry professionals',
    'Internship and placement opportunities',
    'Skill development workshops and bootcamps',
    'Mentorship from experienced industry mentors',
    'Access to real-world project experiences'
  ]

  return (
    <section className="collaboration-section">
      <div className="container">
        <div className="section-header">
          <h2>Strategic Partnership: Transforming Education</h2>
          <p>A powerful alliance designed to elevate skill training and career prospects</p>
        </div>
        <div className="collaboration-content">
          <div className="collaboration-text">
            <h3>Collaborative Industry Skill Training Program</h3>
            <p>
              The partnership between GUVI and Kongu Engineering College represents a commitment to bridging the gap between
              academic learning and industry demands. This strategic alliance brings together the expertise of a leading skill
              training platform with the academic rigor of a premier engineering institution.
            </p>
            <p>
              Students benefit from a unique blend of theoretical knowledge and practical, industry-relevant skills training.
              The program ensures that graduates are not just academically sound but also equipped with the competencies
              required by today's dynamic job market.
            </p>
          </div>
          <div className="benefits-list">
            <h3>Student Benefits</h3>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <span className="checkmark">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
