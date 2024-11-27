import React from 'react'

const Newbar = () => {
  return (
    <div className="news-area d-lg-block" id="news-area">
      <div className="container-fluid">
        {/* row */}
        <div className="row align-items-center">
          {/* col */}
          <div className="col-lg-6">
            {/* news */}
            <div className="news new d-flex align-items-center">
              {/* badge */}
              <div className="badge mr--sm-2">NEW</div>
              {/* link */}
              <a href="#" className="link">
                An economical, 25 GB plan with free matching domain.
              </a>
            </div>
          </div>
          {/* col */}
          <div className="col-lg-6 d-lg-block d-none">
            {/* links */}
            <ul className="links list-unstyled d-flex align-items-center justify-content-end">
              <li className="item mr-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
              <li className="item mr-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  About us
                </a>
              </li>
              <li className="item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newbar