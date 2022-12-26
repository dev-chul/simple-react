import './portfolio.scss';

export default function Portfolio() {
    return (
        <div className="portfolio-wrap">
            <div className="base">
                <article className="article tile">
                    <div className="article-image-1"></div>
                    <section className="article-body">
                        <p className="datestamp">2021</p>
                        <p className="article-tags">
                            [Fornt-End] Vue.JS, WEBPACK
                            <br />
                            [Back-End] DevOn(LG), RDB, NoSQL
                        </p>
                        <h2 className="article-heading">
                            신한카드의 <br />
                            종합생활금융 플랫폼
                        </h2>
                        <p className="article-contetns">
                            · Vue.JS 환경 구성(WEBPACK 이용한 번들링 및 개발)
                            담당
                            <br />· API 서버 환경 구성 및 로그인 프로세스 담당
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-large"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer">
                        <ul className="article-links">
                            <li>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.shcard.smartpay&hl=ko&gl=US"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Preview
                                </a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
            <br />
            <div className="base">
                <article className="article tile">
                    <div className="article-image-2"></div>
                    <section className="article-body">
                        <p className="datestamp">2020</p>
                        <p className="article-tags">
                            [Fornt-End] Vue.JS, WEBPACK
                            <br />
                            [Back-End] Spring Boot, MariaDB, Redis, Kafka
                        </p>
                        <h2 className="article-heading">
                            블록체인 시세제공 플랫폼
                        </h2>
                        <p className="article-contetns">
                            · Vue.JS, Spring Boot, Kafka 등 다양한 오픈소스를
                            이용하여 개발환경 구성
                            <br />· 다양한 거래소의 시세 정보를 연동하여
                            안정적인 시세 제공이 가능한 플랫폼 개발
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-small"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer"></footer>
                </article>
            </div>
            <br />
            <div className="base">
                <article className="article tile">
                    <div className="article-image-3"></div>
                    <section className="article-body">
                        <p className="datestamp">2021</p>
                        <p className="article-tags">
                            [Fornt/Back End] Spring, RDB
                        </p>
                        <h2 className="article-heading">
                            SKT의 타겟팅 광고 플랫폼을 이용한 서비스
                        </h2>
                        <p className="article-contetns">
                            · 안정적인 속도로 발송 가능한 AGENT 개발
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-medium"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer">
                        <ul className="article-links">
                            <li>
                                <a
                                    href="https://pc.tdeal.kr"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Preview
                                </a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
            <br />
            <div className="base">
                <article className="article tile">
                    <div className="article-image-4"></div>
                    <section className="article-body">
                        <p className="datestamp">2017</p>
                        <p className="article-tags">
                            [Fornt/Back End] Spring, RDB
                        </p>
                        <h2 className="article-heading">
                            롯데카드의 대표결제 플랫폼
                        </h2>
                        <p className="article-contetns">
                            · 롯데카드의 개발환경 구성과 간편결제 서비스를 개발
                            및 관리
                        </p>
                    </section>
                    <section className="chart">
                        <div className="rating-bar-1 rating-medium"></div>
                        <div className="rating-bar-2 rating-large"></div>
                    </section>
                    <footer className="article-footer">
                        <ul className="article-links">
                            <li>
                                <a
                                    href="https://www.lottecard.co.kr/app/LPLIFGA_P100.lc"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Preview
                                </a>
                            </li>
                        </ul>
                    </footer>
                </article>
            </div>
        </div>
    );
}
