import React from "react";

const FaqPage = () => {
  return (
    <div className="faq-container">
      <div style={{ fontSize: "1.5em", marginBottom: "4%", fontWeight: 600 }}>
        {" "}
        Frequently Asked Questions{" "}
      </div>
      <div className="faq-sub-container">
        <div className="question-container">
          <div>
            <div>What is Netflix</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. <br></br>
            <br></br> You can watch as much as you want, whenever you want,
            without a single ad – all for one low monthly price. There's always
            something new to discover, and new TV shows and movies are added
            every week!
          </div>
        </div>
        {/* Q2 */}
        <div className="question-container">
          <div>
            <div>How much does Netflix cost?</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            199 to ₹ 799 a month. No extra costs, no contracts.
          </div>
        </div>
        {/* Q3 */}
        <div className="question-container">
          <div>
            <div>Where can I watch</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <br></br>
            <br></br> You can also download your favourite shows with the iOS,
            Android, or Windows 10 app. Use downloads to watch while you're on
            the go and without an internet connection. Take Netflix with you
            anywhere.
          </div>
        </div>
        {/* Q4 */}
        <div className="question-container">
          <div>
            <div>How do I cancel?</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        </div>
        {/* Q5 */}
        <div className="question-container">
          <div>
            <div>What can I watch on Netflix?</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </div>
        </div>
        {/* Q6 */}
        <div className="question-container">
          <div>
            <div>Is Netflix good for kids?</div>
            <div>
              <span>+</span> <span>x</span>
            </div>
          </div>
          <div>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space.<br></br>
            <br></br> Kids profiles come with PIN-protected parental controls
            that let you restrict the maturity rating of content kids can watch
            and block specific titles you don’t want kids to see.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
