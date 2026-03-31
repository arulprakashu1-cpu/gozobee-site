import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
<!-- ===== HERO ===== -->
<section class="page-hero">
  <div class="page-hero__inner">
    <span class="tag">Contact Us</span>
    <h1>Let's Secure Your Future</h1>
    <p>Whether you need a security assessment, want to explore our solutions, or have a question — our expert team is ready to help you build a stronger security posture.</p>
    <div class="page-hero__stats">
      <div class="hero-stat">
        <strong>&lt;15 min</strong>
        <span>Avg. Response Time</span>
      </div>
      <div class="hero-stat">
        <strong>24/7</strong>
        <span>Support Available</span>
      </div>
      <div class="hero-stat">
        <strong>30+</strong>
        <span>Global Offices</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONTACT CHANNELS ===== -->
<section class="channels-section">
  <div class="channels-section__inner">
    <div class="channel-card">
      <span class="material-symbols-outlined">email</span>
      <h3>Email Us</h3>
      <a href="mailto:servicegozobee&#64;gmail.com">servicegozobee&#64;gmail.com</a>
      <p>We respond within 24 hours</p>
    </div>
    <div class="channel-card">
      <span class="material-symbols-outlined">phone</span>
      <h3>Call Us</h3>
      <a href="tel:+919857363287">+91 985 736 3287</a>
      <p>Mon–Fri, 9 AM – 6 PM IST</p>
    </div>
    <div class="channel-card">
      <span class="material-symbols-outlined">support_agent</span>
      <h3>Live Chat</h3>
      <p class="channel-card__highlight">Available Now</p>
      <p>Instant support from security experts</p>
    </div>
    <div class="channel-card">
      <span class="material-symbols-outlined">emergency</span>
      <h3>Emergency Hotline</h3>
      <a href="tel:+919857363287">+91 985 736 3287</a>
      <p>24/7 Incident Response Line</p>
    </div>
  </div>
</section>

<!-- ===== FORM + SIDEBAR ===== -->
<section class="form-section">
  <div class="form-section__inner">

    <!-- Form -->
    <div class="contact-form-wrapper">
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and our team will get back to you within one business day.</p>

      <form class="contact-form" (submit)="onSubmit($event)" *ngIf="!formSubmitted">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name *</label>
            <input type="text" id="firstName" required placeholder="John">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input type="text" id="lastName" required placeholder="Doe">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Work Email *</label>
            <input type="email" id="email" required placeholder="john&#64;company.com">
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+91 000 000 0000">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company" placeholder="Company Name">
          </div>
          <div class="form-group">
            <label for="employees">Company Size</label>
            <select id="employees">
              <option value="">Select size</option>
              <option>1–50 employees</option>
              <option>51–200 employees</option>
              <option>201–1,000 employees</option>
              <option>1,001–5,000 employees</option>
              <option>5,000+ employees</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="interest">I'm interested in</label>
          <select id="interest">
            <option value="">Select a topic</option>
            <option>Security Assessment</option>
            <option>Managed Security Services</option>
            <option>Compliance Consulting</option>
            <option>Cloud Security</option>
            <option>Zero Trust Architecture</option>
            <option>Incident Response</option>
            <option>Partnership Inquiry</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea id="message" rows="5" required placeholder="Tell us about your security needs..."></textarea>
        </div>
        <button type="submit" class="btn btn--primary btn--lg btn--full">
          <span class="material-symbols-outlined">send</span> Send Message
        </button>
        <p class="form-disclaimer">By submitting this form, you agree to our <a routerLink="/">Privacy Policy</a>. We'll never share your information with third parties.</p>
      </form>

      <div class="form-success" *ngIf="formSubmitted">
        <span class="material-symbols-outlined">check_circle</span>
        <h3>Thank You!</h3>
        <p>Your message has been received. A dedicated security consultant will reach out within one business day.</p>
        <button class="btn btn--outline" (click)="formSubmitted = false">Send Another Message</button>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="contact-sidebar">
      <div class="sidebar-card">
        <span class="material-symbols-outlined">schedule</span>
        <h4>What happens next?</h4>
        <ol class="timeline">
          <li>
            <strong>1. We'll review your request</strong>
            <p>Our team evaluates your needs within 24 hours.</p>
          </li>
          <li>
            <strong>2. Discovery call</strong>
            <p>We schedule a brief call to understand your environment and goals.</p>
          </li>
          <li>
            <strong>3. Custom proposal</strong>
            <p>You receive a tailored security strategy and roadmap at no cost.</p>
          </li>
        </ol>
      </div>
      <div class="sidebar-card sidebar-card--highlight">
        <span class="material-symbols-outlined">verified</span>
        <h4>Free Security Assessment</h4>
        <p>Get a complimentary vulnerability scan and security posture report for your organization.</p>
        <a routerLink="/services" class="btn btn--primary">Learn More</a>
      </div>
      <div class="sidebar-card">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn"><span class="material-symbols-outlined">link</span> LinkedIn</a>
          <a href="#" aria-label="Twitter"><span class="material-symbols-outlined">tag</span> Twitter</a>
          <a href="#" aria-label="Instagram"><span class="material-symbols-outlined">photo_camera</span> Instagram</a>
        </div>
      </div>
    </aside>

  </div>
</section>

<!-- ===== OFFICES ===== -->
<section class="offices-section">
  <div class="offices-section__inner">
    <span class="tag">Our Offices</span>
    <h2>Global Presence, Local Expertise</h2>
    <p class="offices-section__subtitle">With SOC centers and offices across 3 continents, we provide 24/7 coverage and on-the-ground expertise wherever you operate.</p>
    <div class="offices-grid">
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>Bengaluru, India</h4>
        <span class="office-card__badge">Headquarters</span>
        <p>Global HQ & Primary SOC</p>
        <p class="office-card__detail">123 Cyber Tower, Whitefield<br>Bengaluru, KA 560066</p>
      </div>
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>New York, USA</h4>
        <span class="office-card__badge">Americas</span>
        <p>North America Operations</p>
        <p class="office-card__detail">One World Trade Center<br>New York, NY 10007</p>
      </div>
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>London, UK</h4>
        <span class="office-card__badge">EMEA</span>
        <p>Europe & MEA Operations</p>
        <p class="office-card__detail">30 St Mary Axe<br>London, EC3A 8BF</p>
      </div>
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>Singapore</h4>
        <span class="office-card__badge">APAC</span>
        <p>Asia Pacific Hub</p>
        <p class="office-card__detail">One Raffles Place, Tower 2<br>Singapore, 048616</p>
      </div>
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>Dubai, UAE</h4>
        <span class="office-card__badge">Middle East</span>
        <p>Gulf Region Office</p>
        <p class="office-card__detail">DIFC Gate Avenue<br>Dubai, UAE</p>
      </div>
      <div class="office-card">
        <span class="material-symbols-outlined">location_on</span>
        <h4>Tokyo, Japan</h4>
        <span class="office-card__badge">East Asia</span>
        <p>Japan & Korea Operations</p>
        <p class="office-card__detail">Marunouchi Park Building<br>Chiyoda-ku, Tokyo</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq-section">
  <div class="faq-section__inner">
    <span class="tag">FAQ</span>
    <h2>Frequently Asked Questions</h2>
    <div class="faq-grid">
      <div class="faq-card" *ngFor="let faq of faqs" (click)="faq.open = !faq.open" [class.faq-card--open]="faq.open">
        <div class="faq-card__header">
          <h4>{{ faq.q }}</h4>
          <span class="material-symbols-outlined">{{ faq.open ? 'remove' : 'add' }}</span>
        </div>
        <div class="faq-card__body" *ngIf="faq.open">
          <p>{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== SUPPORT TIERS ===== -->
<section class="support-section">
  <div class="support-section__inner">
    <span class="tag">Support Plans</span>
    <h2>Choose the Right Support for Your Business</h2>
    <div class="support-grid">
      <div class="support-card">
        <div class="support-card__header">
          <span class="material-symbols-outlined">support</span>
          <h3>Standard</h3>
        </div>
        <ul>
          <li><span class="material-symbols-outlined">check</span> Email support (24h response)</li>
          <li><span class="material-symbols-outlined">check</span> Knowledge base access</li>
          <li><span class="material-symbols-outlined">check</span> Monthly security reports</li>
          <li><span class="material-symbols-outlined">check</span> Business hours coverage</li>
        </ul>
        <a routerLink="/services" class="btn btn--outline">Learn More</a>
      </div>
      <div class="support-card support-card--featured">
        <div class="support-card__badge">Most Popular</div>
        <div class="support-card__header">
          <span class="material-symbols-outlined">verified_user</span>
          <h3>Professional</h3>
        </div>
        <ul>
          <li><span class="material-symbols-outlined">check</span> Priority email & phone (4h response)</li>
          <li><span class="material-symbols-outlined">check</span> Dedicated account manager</li>
          <li><span class="material-symbols-outlined">check</span> Weekly threat briefings</li>
          <li><span class="material-symbols-outlined">check</span> 24/7 SOC monitoring</li>
          <li><span class="material-symbols-outlined">check</span> Quarterly security reviews</li>
        </ul>
        <a routerLink="/services" class="btn btn--primary">Learn More</a>
      </div>
      <div class="support-card">
        <div class="support-card__header">
          <span class="material-symbols-outlined">shield</span>
          <h3>Enterprise</h3>
        </div>
        <ul>
          <li><span class="material-symbols-outlined">check</span> 15-minute SLA response</li>
          <li><span class="material-symbols-outlined">check</span> Dedicated security team</li>
          <li><span class="material-symbols-outlined">check</span> Real-time threat intelligence</li>
          <li><span class="material-symbols-outlined">check</span> 24/7 priority hotline</li>
          <li><span class="material-symbols-outlined">check</span> On-site incident response</li>
          <li><span class="material-symbols-outlined">check</span> Custom SLA agreements</li>
        </ul>
        <a routerLink="/services" class="btn btn--outline">Contact Sales</a>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA ===== -->
<section class="cta">
  <div class="cta__inner">
    <h2>Ready to Protect What Matters?</h2>
    <p>Schedule a free consultation with our security experts and discover how GOZOBEE can strengthen your defenses.</p>
    <div class="cta__actions">
      <a href="tel:+919857363287" class="btn btn--primary btn--lg">
        <span class="material-symbols-outlined">phone</span> Call +91 985 736 3287
      </a>
      <a href="mailto:servicegozobee&#64;gmail.com" class="btn btn--outline btn--lg">
        <span class="material-symbols-outlined">email</span> Email Us
      </a>
    </div>
  </div>
</section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formSubmitted = false;

  faqs = [
    { q: 'How quickly can GOZOBEE respond to a security incident?', a: 'Our Enterprise clients receive a guaranteed 15-minute response time. Professional tier clients get a 4-hour response SLA. All incidents are handled by our 24/7 Security Operations Center staffed by certified analysts.', open: false },
    { q: 'Do you offer a free security assessment?', a: 'Yes! We provide a complimentary vulnerability scan and security posture report for qualifying organizations. This includes an executive summary, risk scoring, and prioritized remediation recommendations.', open: false },
    { q: 'What certifications does GOZOBEE hold?', a: 'GOZOBEE is ISO 27001 certified, SOC 2 Type II audited, and GDPR compliant. Our team holds certifications including CISSP, CISM, CEH, OSCP, and AWS/Azure security specializations.', open: false },
    { q: 'Can you help with regulatory compliance?', a: 'Absolutely. We specialize in ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS, and industry-specific frameworks. Our compliance team has guided over 200 enterprises to successful certification.', open: false },
    { q: 'Do you support multi-cloud environments?', a: 'Yes. We provide end-to-end security for AWS, Azure, GCP, and hybrid environments. Our cloud security solutions include CSPM, CWPP, container security, and cloud-native threat detection.', open: false },
    { q: 'What industries do you serve?', a: 'We serve financial services, healthcare, government, retail, manufacturing, education, and technology sectors. Each engagement is tailored to your industry\'s unique regulatory and threat landscape.', open: false },
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    this.formSubmitted = true;
  }
}
