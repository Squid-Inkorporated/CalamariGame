import React from "react"

const HowToPlay = ({ gameName }) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>How to play</h3>
              </div>
              {gameName === "Trivia" && (
                <p className="mb-0">
                  Select the right answer from multiple options. You have 15
                  seconds to choose and
                  <span className="text-danger"> possibly</span> live!
                </p>
              )}
              {gameName === "ThePopularThing" && (
                <p className="mb-0">
                  Pick your favorite thing from the provided options. Those who
                  choose the least popular option will be eliminated.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
