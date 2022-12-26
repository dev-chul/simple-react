import './portfolio.scss';

export default function Portfolio() {
    return (
        <div className="portfolio-wrap">
            <div className="base">
                <article className="article tile">
                    <div className="article-image"></div>
                    <section className="article-body">
                        <p className="datestamp">2013 Q3</p>
                        <p className="article-tags">UX, UI, Visual design</p>
                        <h2 className="article-heading">
                            YouTube "Tiger Team" stickersheets for Sketch.app
                        </h2>
                        <p className="article-contetns">
                            In addition to writing some docs and contributing to
                            the Sketch-users mailing list, I have taken to
                            creating Sketch versions of design resources
                            produced by the YouTube and Google UX teams.
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-large"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer">
                        <ul className="article-links">
                            <li>
                                <a href="#">Preview</a>
                            </li>
                            <li>
                                <a href="#">Download</a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
            <br />
            <div className="base">
                <article className="article tile">
                    <div className="article-image"></div>
                    <section className="article-body">
                        <p className="datestamp">2013 Q3</p>
                        <p className="article-tags">UX, UI, Visual design</p>
                        <h2 className="article-heading">
                            YouTube "Tiger Team" stickersheets for Sketch.app
                        </h2>
                        <p className="article-contetns">
                            In addition to writing some docs and contributing to
                            the Sketch-users mailing list, I have taken to
                            creating Sketch versions of design resources
                            produced by the YouTube and Google UX teams.
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-medium"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer">
                        <ul className="article-links">
                            <li>
                                <a href="#">Preview</a>
                            </li>
                            <li>
                                <a href="#">Download</a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
        </div>
    );
}
