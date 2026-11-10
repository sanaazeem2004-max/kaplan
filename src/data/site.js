// All content below is taken from https://www.kaplanlawatx.com/ (home, /about, /reviews,
// /speak-to-an-attorney, /blog) as captured on 2026-11-10. Nothing is invented.

const ORIGIN = 'https://www.kaplanlawatx.com';

export const firm = {
  name: 'Kaplan Law Firm',
  tagline: 'Employment & Civil Rights Law',
  // The live site displays (512) 814-8522 but its tel: link dials 512-553-9390.
  // We use the number the firm displays publicly; confirm with the client before launch.
  phoneDisplay: '(512) 814-8522',
  phoneHref: 'tel:+15128148522',
  links: {
    speak: `${ORIGIN}/speak-to-an-attorney`,
    employmentIntake: `${ORIGIN}/employment-intake-form`,
    civilRightsIntake: `${ORIGIN}/civil-rights-intake-form`,
    directBooking: `${ORIGIN}/direct-booking`,
    practiceAreas: `${ORIGIN}/specialities`,
    about: `${ORIGIN}/about`,
    reviews: `${ORIGIN}/reviews`,
    blog: `${ORIGIN}/blog`,
    press: `${ORIGIN}/press`,
    careers: `${ORIGIN}/careers`,
    locations: `${ORIGIN}/our-locations`,
    privacy: `${ORIGIN}/privacy-policy`,
    terms: `${ORIGIN}/terms-and-conditions`,
  },
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/KaplanLawAtx/' },
    { label: 'Instagram', href: 'https://www.instagram.com/KaplanLawAtx' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/austinkaplan/' },
    { label: 'X (Twitter)', href: 'https://twitter.com/KaplanLawATX' },
  ],
};

export const offices = [
  { city: 'Austin', region: 'Texas', lines: ['2901 Bee Caves Rd, Suite G', 'Austin, TX 78746'], href: `${ORIGIN}/austin--tx` },
  { city: 'Houston', region: 'Texas', lines: ['13105 Northwest Fwy, Suite 705, Office 3', 'Houston, TX 77040'], href: `${ORIGIN}/houston--tx` },
  { city: 'Chicago', region: 'Illinois', lines: ['318 W Adams Street, Suite 1715-4', 'Chicago, IL 60606'], href: `${ORIGIN}/chicago--il` },
  { city: 'Albuquerque', region: 'New Mexico', lines: ['912 6th St. NW, Suite B', 'Albuquerque, NM 87102'], href: `${ORIGIN}/albuquerque--nm` },
];

export const practiceAreas = [
  { key: 'termination', title: 'Wrongful Termination', href: `${ORIGIN}/wrongful-termination`,
    text: 'Defending your rights against unjust job loss, ensuring fair treatment and securing justice for wrongful termination.' },
  { key: 'overtime', title: 'Overtime Violations', href: `${ORIGIN}/overtime-violations`,
    text: 'Fighting for fair wages and overtime, helping you recover what you rightfully earned from your employer.' },
  { key: 'whistle', title: 'Whistleblowing', href: `${ORIGIN}/whistleblower`,
    text: 'Protecting those who expose wrongdoing, ensuring your rights are safeguarded against retaliation.' },
  { key: 'discrimination', title: 'Discrimination', href: `${ORIGIN}/pregnancy-discrimination`,
    text: 'Advocating for your rights in the workplace, ensuring fair treatment and protection against discrimination.' },
  { key: 'severance', title: 'Severance Agreements', href: `${ORIGIN}/severance-agreement`,
    text: 'Negotiating fair severance packages, ensuring you receive the benefits and compensation you deserve.' },
  { key: 'noncompete', title: 'Non-Compete Agreements', href: `${ORIGIN}/non-compete-review---litigation`,
    text: 'Defending employees against restrictive non-compete clauses, protecting your right to work freely and fairly.' },
];

// Additional matters named in Austin Kaplan's bio and the Chicago practice menu.
export const morePractice = [
  'Wage & Hour Violations', 'FMLA Violations', 'Retaliation', 'Sexual Harassment',
  'Unpaid Commissions', 'Breach of Employment Contract', 'Civil Rights Matters',
];

export const founder = {
  name: 'Austin Kaplan',
  role: 'Founder & Managing Attorney',
  photo: '/images/austin-kaplan.webp',
  href: `${ORIGIN}/austin-kaplan`,
  bio: 'Austin is an employment law and civil rights attorney and litigator. He represents individuals in a wide range of employment and civil rights matters, including claims for breach of employment contract, breach of noncompete agreements, discrimination, overtime violations, wage and hour violations, whistleblower retaliation, FMLA violations, and marriage equality matters.',
  pull: 'Austin spends most of his days litigating cases for the Firm’s clients in state and federal court.',
};

export const attorneys = [
  { name: 'Caitlin Boehne', role: 'Attorney', photo: '/images/caitlin-boehne.webp', href: `${ORIGIN}/caitlin-boehne`,
    note: 'Impact employment litigation; wage theft, harassment and class claims.' },
  { name: 'Matthew (Maff) Caponi', role: 'Attorney', photo: '/images/maff-caponi.webp', href: `${ORIGIN}/matthew--maff--caponi`,
    note: 'Discrimination, wage and overtime, whistleblower retaliation.' },
  { name: 'Ryan Estes', role: 'Attorney', photo: '/images/ryan-estes.webp', href: `${ORIGIN}/ryan-estes`,
    note: 'Employment and civil rights law exclusively since 2013.' },
  { name: 'Andrew Eckhous', role: 'Attorney', photo: '/images/andrew-eckhous.webp', href: `${ORIGIN}/andrew-eckhous`,
    note: 'Overtime, disability and police misconduct matters.' },
  { name: 'Trenton Lacy', role: 'Attorney', photo: '/images/trenton-lacy.webp', href: `${ORIGIN}/trenton-lacy`,
    note: 'Discrimination, retaliation, noncompete and severance disputes.' },
  { name: 'Tanner Michelle Scheef', role: 'Attorney', photo: '/images/tanner-scheef.webp', href: `${ORIGIN}/tanner-michelle-scheef`,
    note: 'Trial advocate; Baylor Law, Public Interest Track.' },
];

export const steps = [
  { n: '01', title: 'Submit your case information',
    text: 'Fill out our confidential intake form and upload your documents. Everything you share is protected by attorney-client privilege.',
    aside: 'Document review (severance, non-compete, employment contracts)? Skip straight to Step 2.' },
  { n: '02', title: 'Get your case reviewed',
    text: 'Within 24 hours of your intake, we’ll let you know whether a virtual Paid Hour Appointment is right for you — where an attorney gives legal advice on the details of your case.',
    aside: 'If we can’t assist, we refer you to a trusted attorney partner.' },
  { n: '03', title: 'Discuss representation & next steps',
    text: 'After your appointment, you either continue with our firm for ongoing representation, or find that one hour of expert advice and a few follow-ups is exactly what you need.' },
];

// Verbatim from /reviews. Attribution as shown on that page.
export const reviews = {
  featured: { name: 'Chris Markey', quote: 'Everyone I dealt with at the firm was knowledgeable, helpful and operated with a high degree of integrity.' },
  list: [
    { name: 'Jason', about: 'Austin Kaplan & team',
      quote: 'After having worked with many law firms for many reasons, it’s clear that Austin and his team are exceptional. They’re consistently friendly, professional, flexible, and available when you need them.' },
    { name: 'Margie Eggen', about: 'Maff Caponi',
      quote: 'I appreciated their straightforward online scheduling platform — you can book for exactly the topic you need and pricing is transparent. My experience with Maff was efficient and effective.' },
    { name: 'Ginger Hart', about: 'Gabriel Loya',
      quote: 'Gabriel Loya is patient, kind, and professional. He was able to resolve my employment issue and I am forever grateful for his advice and assistance.' },
    { name: 'Scott Crosbie', about: 'Austin Kaplan & Caitlin Boehne',
      quote: 'Kaplan and Caitlin — Extremely helpful, knowledgeable, informative and truthful. Highly recommend.' },
    { name: 'Ryan Sapp', about: 'Tanner Michelle Scheef',
      quote: 'I worked with Tanner. She went above and beyond, and even assist past the initial consultation to make sure I had all the expertise insight I required.' },
  ],
};

export const posts = [
  { title: 'Can Your Employer Fire You for Being Pregnant? Understanding Pregnancy Discrimination',
    date: 'November 6, 2026', iso: '2026-11-06', tag: 'Discrimination', image: '/images/post-pregnancy.webp',
    href: `${ORIGIN}/can-your-employer-fire-you-for-being-pregnant-understanding-pregnancy-discrimination` },
  { title: 'Navigating Corporate Layoffs in Chicago: What Tech and Corporate Professionals Need to Know About Severance',
    date: 'October 26, 2026', iso: '2026-10-26', tag: 'Severance', byline: 'Austin Kaplan & Caitlin Boehne', image: '/images/post-severance.webp',
    href: `${ORIGIN}/navigating-corporate-layoffs-in-chicago-what-tech-and-corporate-professionals-need-to-know-about-severance` },
  { title: 'When HR professionals speak up about potential legal violations, are they protected from retaliation?',
    date: 'October 20, 2026', iso: '2026-10-20', tag: 'Retaliation', byline: 'Tanner Michelle Scheef', image: '/images/post-hr.webp',
    href: `${ORIGIN}/when-managers-or-hr-professionals-speak-up-about-potential-legal-violations-are-they-protected-from-retaliation` },
  { title: 'Chicago Attorney Explains Sexual Harassment in the Workplace',
    date: 'October 14, 2026', iso: '2026-10-14', tag: 'Harassment', image: '/images/post-harassment.webp',
    href: `${ORIGIN}/chicago-attorney-explains-what-is-sexual-harassment-in-the-workplace` },
];
