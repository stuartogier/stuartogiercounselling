import Image from 'next/image';
import Banner from '@/components/Banner';
import Nav from '@/components/Nav';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Banner />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          {/*
            ADD YOUR HERO PHOTO:
            1. Save your photo as hero.jpg in public/images/
            2. Replace the placeholder div with:
            <Image
              src="/images/hero.jpg"
              alt="Stuart Ogier"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          */}
          <div className="hero__bg-placeholder">Your photo</div>
        </div>
        <div className="hero__overlay" />
        <Nav />
        <div className="hero__content">
          <h1 className="hero__heading">
            A space to be <em>truly</em> heard.
          </h1>
          <div className="hero__bottom">
            <p className="hero__desc">
              Trainee integrative counsellor supporting people in and around
              addiction recovery. On placement at The Living Room, St&nbsp;Albans.
            </p>
            <div className="hero__scroll" aria-hidden="true">
              <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              Scroll
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section section--cream" id="about">
        <p className="section__label fade-up">About me</p>
        <h2 className="about__heading fade-up delay-1">
          I came to counselling through{' '}
          <em>lived experience</em>{' '}
          and a desire to give back.
        </h2>

        <div className="about__photos fade-up delay-2">
          <div className="about__photo-a">
            {/*
              ADD PHOTO A:
              <Image src="/images/about-1.jpg" alt="Stuart Ogier" fill style={{ objectFit: 'cover' }} />
            */}
            <div className="about__photo-placeholder">Photo</div>
          </div>
          <div className="about__photo-b">
            {/*
              ADD PHOTO B:
              <Image src="/images/about-2.jpg" alt="Stuart Ogier" fill style={{ objectFit: 'cover' }} />
            */}
            <div className="about__photo-placeholder">Photo</div>
          </div>
        </div>

        <div className="about__body fade-up delay-3">
          <p>
            I have been in recovery from addiction since 2011, and it was that
            journey — and the support I received along the way — that first showed
            me what it means to be truly heard by another person.
          </p>
          <p>
            Over the following years I trained as a Samaritans listening volunteer,
            taking more than 800 calls across six years, and supported others
            through their own recoveries as a sponsor. I discovered that the most
            powerful thing you can offer someone in difficulty is your full,
            undivided presence.
          </p>
          <p>
            I am now studying for a Level 4 Diploma in Therapeutic Integrative
            Counselling at Langley Training and Therapy, working toward full
            qualification as a counsellor.
          </p>
        </div>
      </section>

      {/* ── DARK PHOTO — how I work intro ── */}
      <div className="dark-photo" id="how">
        <div className="dark-photo__bg">
          {/*
            ADD DARK PHOTO:
            <Image src="/images/dark-photo.jpg" alt="" fill style={{ objectFit: 'cover' }} />
          */}
          <div className="dark-photo__bg-placeholder">Photo</div>
        </div>
        <div className="dark-photo__overlay" />
        <div className="dark-photo__content">
          <h2 className="dark-photo__heading fade-up">
            A space where you don&apos;t have to <em>manage</em> how I feel.
          </h2>
          <p className="dark-photo__body fade-up delay-1">
            I work integratively, drawing on a range of approaches depending on
            what each person brings. My approach is person-centred at its core —
            curious, present, and non-directive.
          </p>
          <a href="#how-detail" className="dark-photo__cta fade-up delay-2">
            How I work
            <span className="dark-photo__cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* ── HOW I WORK detail ── */}
      <section className="section section--cream" id="how-detail">
        <p className="section__label fade-up">How I work</p>
        <h2 className="how__heading fade-up delay-1">Person-centred, integrative, present.</h2>
        <div className="how__list">
          {[
            {
              n: '01',
              title: 'Person-centred',
              body: 'You are the expert on your own life. My role is to support you in exploring it — not to direct, advise, or fix.',
            },
            {
              n: '02',
              title: 'Integrative',
              body: 'I draw on a range of therapeutic approaches depending on what each person brings, rather than applying a single fixed method to everyone.',
            },
            {
              n: '03',
              title: 'Present',
              body: 'I try to stay curious rather than certain — to offer a space where you can speak without having to manage how I feel about what you\'re saying.',
            },
          ].map((item, i) => (
            <div key={item.n} className={`how__item fade-up delay-${i + 1}`}>
              <span className="how__num" aria-hidden="true">{item.n}</span>
              <div>
                <p className="how__title">{item.title}</p>
                <p className="how__body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section className="section section--cream-dark" id="credentials">
        <p className="section__label fade-up">Training &amp; credentials</p>
        <ul className="creds__list">
          {[
            'Level 4 Diploma in Therapeutic Integrative Counselling — CPCAB (in progress, Langley Training and Therapy)',
            'Level 3 Certificate in Counselling Studies — CPCAB',
            'Level 2 Certificate in Counselling Skills — CPCAB',
            'Samaritans listening volunteer — 6 years, 800+ hours',
            'Volunteer Care Lead, South West Herts Samaritans',
            'BACP Member (Student) — 01040403',
            'Enhanced DBS checked — September 2025',
          ].map((item, i) => (
            <li key={i} className="fade-up">
              {item.includes('in progress') ? (
                <>
                  {item.replace(' (in progress, Langley Training and Therapy)', '')}{' '}
                  <em>(in progress, Langley Training and Therapy)</em>
                </>
              ) : item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section--plum" id="contact">
        <p className="section__label fade-up">Get in touch</p>
        <h2 className="contact__heading fade-up delay-1">
          If you&apos;ve been referred to me, I&apos;d be glad to hear from you.
        </h2>
        <div className="contact__grid fade-up delay-2">
          <div>
            <p className="contact__label">Email</p>
            <p className="contact__val">
              <a href="mailto:stuartogier@gmail.com">stuartogier@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="contact__label">Location</p>
            <p className="contact__val">The Living Room, St Albans</p>
          </div>
        </div>
        <p className="contact__note fade-up delay-3">
          I am a trainee counsellor working toward full qualification and am not
          currently able to take private clients. All sessions are held in
          confidence within the limits of the BACP Ethical Framework. I work
          under the clinical supervision of a qualified counsellor throughout
          my placement.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer__name">Stuart Ogier</span>
        <span className="footer__small">BACP Member (Student) · 01040403</span>
      </footer>
    </>
  );
}
