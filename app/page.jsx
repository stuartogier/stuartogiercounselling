import Image from 'next/image';
import Nav from '@/components/Nav';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <>
      <ScrollObserver />

      {/* ── HERO ── */}
      <Nav />
      <section className="hero">
        <div className="hero__bg">
          <video
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__heading">
            A space where you can be <em>truly</em> heard.
          </h1>
          <div className="hero__bottom">
            <p className="hero__desc">
              I&apos;m Stuart Ogier. I offer a confidential space for people who wish to talk through their challenges.
            </p>
          </div>
        </div>
      </section>
      <div className="hero-spacer" aria-hidden="true" />

      {/* ── ABOUT ── */}
      <section className="section section--cream" id="about">
        <div className="section__inner">
          <p className="section__label fade-up">About me</p>
          <h2 className="about__heading fade-up delay-1">
            I came to counselling through lived experience and a desire to give back.
          </h2>

          <div className="about__photo-a fade-up delay-2">
            <Image src="/images/me2.png" alt="Stuart Ogier" fill style={{ objectFit: 'cover' }} />
          </div>

          <div className="about__body fade-up delay-3">
            <p>
              I came to counselling through my own experience of difficulty, and through
              receiving the kind of support that changed things for me.
            </p>
            <p>
              Since then I&apos;ve trained as a Samaritans listening volunteer, supported others
              through their own recoveries, and come to believe that the most powerful thing
              you can offer someone is your complete, undivided presence. That belief is at
              the heart of how I work.
            </p>
            <p>
              I am currently completing my Level 4 Diploma in Therapeutic Integrative
              Counselling at Langley Therapy and Training. I am working with clients through
              supervised placements as part of that course and not yet seeing clients privately.
            </p>
          </div>

          <div className="about__photo-b fade-up delay-2">
            <Image src="/images/chair3.png" alt="Therapy room" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── DARK PHOTO — how I work intro ── */}
      <div className="dark-photo" id="how">
        <div className="dark-photo__bg">
          <Image src="/images/mountain.jpg" alt="Mountain" fill style={{ objectFit: 'cover' }} />
          <div className="dark-photo__bg-placeholder">Photo</div>
        </div>
        <div className="dark-photo__overlay" />
        <div className="dark-photo__content">
          <p className="section__label fade-up">How I work</p>
          <h2 className="dark-photo__heading fade-up">
            Person-centred, integrative, present.
          </h2>
          <p className="dark-photo__body fade-up delay-1">
            You are the expert on your own life. My role is not to advise or fix, it&apos;s
            to be curious, present, and genuinely with you as you explore what&apos;s going on.
            I work with people facing anxiety, depression, addiction, bereavement, low
            self-esteem, life transitions, and relationship challenges. As an integrative
            counsellor I draw on a range of therapeutic approaches, always with the
            relationship between us at the centre.
          </p>
        </div>
      </div>

      {/* ── CREDENTIALS ── */}
      <section className="section section--cream-dark" id="credentials">
        <div className="section__inner">
          <p className="section__label fade-up">Training &amp; credentials</p>
          <h2 className="about__heading fade-up delay-1">
            Counsellor in training.
          </h2>
          <p className="light-photo__body fade-up delay-1">
            I&apos;m currently working towards my Level 4 Diploma and will be welcoming private clients from summer 2027.
          </p>
          <ul className="creds__list">
            {[
              'Level 4 Diploma in Therapeutic Integrative Counselling, CPCAB (currently studying)',
              'Level 3 Certificate in Counselling Studies, CPCAB',
              'Level 2 Certificate in Counselling Skills, CPCAB',
              'Samaritans listening volunteer since 2019',
            ].map((item, i) => (
              <li key={i} className="fade-up">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section--plum" id="contact">
        <div className="section__inner">
          <div className="contact-panel fade-up delay-1">
            <div className="contact-panel__copy">
              <p className="section__label">Get in touch</p>
              <h2 className="contact__heading">Let&apos;s talk.</h2>
              <p className="contact__intro">
                Either email me directly or use the form and I&apos;ll get back to you as soon as possible.
              </p>
              <a href="mailto:hi@stuartogiercounselling.com" className="contact__email">
                hi@stuartogiercounselling.com
              </a>
            </div>

            <form className="contact-form" action="https://formspree.io/f/mvznzwwv" method="POST">
              <label className="contact__label" htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" className="contact__input" />

              <label className="contact__label" htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" className="contact__input" />

              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="6" className="contact__textarea" />

              <button type="submit" className="contact__button">Send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__name">© {new Date().getFullYear()} Stuart Ogier</p>
        </div>
      </footer>
    </>
  );
}
