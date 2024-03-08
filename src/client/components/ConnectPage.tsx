import React from 'react';
import Button from './Button';

const ConnectPage = () => {
  return (
    <section className="fade">
      <div className="connectPage">
        <main>
          <section title="CONNECT">
            <p className="highlight center">
              Want to connect? I'm open to new career opportunities and contract
              projects.
              <br />
              <br />
              Feel free to reach out, network on LinkedIn, or view my full
              portfolio on GitHub.
            </p>
            <div className="connectIcons">
              <div className="column">
                <a
                  href="mailto:the.codeasaur@gmail.com&subject=Website Inquiry"
                  target="_blank"
                >
                  <img
                    className="icon"
                    src={require('../../../public/assets/email_icon.png')}
                    alt="Email icon"
                  />
                </a>
                <Button
                  text="EMAIL"
                  url="mailto:the.codeasaur@gmail.com&subject=Website Inquiry"
                />
              </div>

              <div className="column">
                <a
                  href="https://www.linkedin.com/in/steph-cummins/"
                  target="_blank"
                >
                  <img
                    className="icon"
                    src={require('../../../public/assets/linkedin_icon.png')}
                    alt="LinkedIn icon by Icons8"
                  />
                </a>
                <Button
                  text="LINKEDIN"
                  url="https://www.linkedin.com/in/steph-cummins/"
                />
              </div>
              <div className="column">
                <a href="https://github.com/StephCummins" target="_blank">
                  <img
                    className="icon"
                    src={require('../../../public/assets/github_icon.png')}
                    alt="GitHub icon by Icons8"
                  />
                </a>
                <Button text="GITHUB" url="https://github.com/StephCummins" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default ConnectPage;
