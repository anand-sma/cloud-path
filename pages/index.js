import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Tour from '../compos/Tour';
import GetNewsData from '../compos/ExternalApi/GetNewData';
import CovidUpdate from '../compos/ExternalApi/covidUpdate';
import BlogPost from '../compos/ExternalApi/BlogPost';
import Image from 'next/image';
import FlipCard from '../compos/Modules/FlipCard';
import ButtonComp from '../compos/button.btn';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/logo.png' type='image/x-icon' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='coaching: smarter online education' />
        <title>cloud-path || simply the smarter</title>
        <link></link>
      </Head>
      <main className={`${styles.main}`}>
        {/* PRIMARY SECTION */}
        <section className={`${styles.primary} flex-x `}>
          {/* PRIMARY COLUMN 1/2 */}
          <div className={`${styles.primary_col1} p pl  flex-x centerXY`}>
            <div className={`${styles.banner_head} pl`}>
              <h1 className={`pl`}>
                <span>CLOUD-PATH</span> EDUCATION
              </h1>
              <h1 className={`pl`}>OF DIGITAL INDIA</h1>

              <p className={`pl pt-vlg`}>
                In the speed of competition, to get yourself ahead... Make a
                mark, a way to gain expertise for the careers of your dream-job.
              </p>
            </div>
            <Image
              className={`${styles.img}`}
              src='/study.jpg'
              height={800}
              width={900}
            />
          </div>
          {/* PRIMARY COLUMN 2/2 */}
          <aside className={`${styles.primary_col2} flex-y centerXY`}>
            <h3>Top 20 News Headlines</h3>
            <div className={`${styles.primary_col2_row1} pl mt  scroll`}>
              <GetNewsData />
            </div>
            <h3>India Covid-19 Update</h3>
            <div className={`${styles.primary_col2_row2} pl `}>
              <CovidUpdate style='flex-x scroll' />
            </div>
          </aside>
        </section>

        {/* SECONDARY SECTION */}
        <section className={`${styles.secondary}  flex-x`}>
          {/* SECONDARY SECTION COLUMN 1/3 */}
          <div className={`${styles.secondary_col1} `}>
            <div className={`${styles.secondary_col1_row1} p `}>
              {/* CARD ENGLISH */}
              <div className={`${styles.primary_2b_card} flip-card`}>
                <div className={`flip-card-inner`}>
                  <div
                    className={`flip-card-front bt`}
                    style={{
                      backgroundImage: 'url(/grammar.jpg)',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    <h1>ENGLISH</h1>
                  </div>
                  <div className={`flip-card-back bt`}>
                    <h1>ENGLISH</h1>
                    <p>Communicative & Grammatical</p>
                    <p>
                      Clear definition and practical examples, in-depth guiding
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.secondary_col1_row2} p `}>
              {/* CARD MATHEMATICS */}
              <div className={`${styles.primary_2d_card} flip-card`}>
                <div className={`flip-card-inner`}>
                  <div
                    className={`flip-card-front bt`}
                    style={{
                      backgroundImage: 'url(/maths.jpg)',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    <h1>MATHEMATICS</h1>
                  </div>
                  <div className={`flip-card-back bt`}>
                    <h1>MATHEMATICS</h1>
                    <p>Step-wise & In-short</p>
                    <p>
                      No more arithmophobia now on, you will master number
                      hereafter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECONDARY SECTION COLUMN 2/3 */}
          <div className={`${styles.secondary_col2} pl-lg scroll`}>
            {/* Blog Post for onload preview */}
            <BlogPost />
          </div>
          {/* SECONDARY SECTION COLUMN 3/3 */}
          <div className={`${styles.secondary_col3} b`}>
            <div className={`${styles.secondary_col3_row1} b`}>
              secondary_col3_row1
            </div>
            <div className={`${styles.secondary_col3_row2} b`}>
              secondary_col3_row2
            </div>
            <div className={`${styles.secondary_col3_row3} b`}>
              secondary_col3_row3
            </div>
          </div>
        </section>

        {/* TERTIARY SECTION */}
        <section className={`${styles.tertiary} b flex-x`}>
          {/* TERTIARY COLUMN 1/3 */}
          <div className={`${styles.tertiary_col1} b flex-y`}>
            <div className={`${styles.tertiary_col1_row1} b`}>
              tertiary_col1_row1
            </div>
            <div className={`${styles.tertiary_col1_row2} b`}>
              tertiary_col1_row2
            </div>
            <div className={`${styles.tertiary_col1_row3} b`}>
              tertiary_col1_row3
            </div>
          </div>
          {/* TERTIARY COLUMN 2/3 */}
          <div className={`${styles.tertiary_col2} b`}></div>
          {/* TERTIARY COLUMN 3/3 */}
          <div className={`${styles.tertiary_col3}  flex-y`}>
            <div className={`${styles.tertiary_col3_row1} p`}>
              {/* CARD COMPUTER */}
              <div className={`${styles.primary_2b_card} flip-card`}>
                <div className={`flip-card-inner`}>
                  <div
                    className={`flip-card-front bt`}
                    style={{
                      backgroundImage: 'url(/computer.jpg)',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    <h1>COMPUTER</h1>
                  </div>
                  <div className={`flip-card-back bt`}>
                    <h1>COMPUTER</h1>
                    <p>Crash Courses</p>
                    <p>
                      We help you walk with the Fundamentals to Advance level
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.tertiary_col3_row2} p`}>
              {/* CARD HISTORY */}
              <div className={`${styles.primary_2b_card} flip-card`}>
                <div className={`flip-card-inner`}>
                  <div
                    className={`flip-card-front bt`}
                    style={{
                      backgroundImage: 'url(/history.jpg)',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    <h1>HISTORY</h1>
                  </div>
                  <div className={`flip-card-back bt`}>
                    <h1>HISTORY</h1>
                    <p>Ancient & Modern</p>
                    <p>
                      Chronological, topical, thematical etc in lucid writing
                      and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUATERNARY SECTION */}
        <section className={`${styles.quaternary}`}>
          <ButtonComp title='custom button' />
        </section>
      </main>
    </>
  );
}
