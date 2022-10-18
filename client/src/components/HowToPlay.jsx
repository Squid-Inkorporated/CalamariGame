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
              {gameName === "The Popular Thing" && (
                <p className="mb-0">
                  Pick your favorite thing from the provided options. Those who
                  choose the least popular option will be eliminated.
                </p>
              )}
              {gameName === "Red Light, Green Light" && (
                <p className="mb-0">
                  Run for your life! Tap the button and reach 50 within 15
                  seconds. The light will change from{" "}
                  <span style={{ color: "green" }}>green</span> to{" "}
                  <span style={{ color: "yellow" }}>yellow</span> to{" "}
                  <span style={{ color: "red" }}>red</span>. Do NOT run on a red
                  light!
                </p>
              )}
              {gameName === "GlassBridge" && (
                <p className="mb-0">
                  Start from LEFT to RIGHT. Pick the right tile and try not to fall.
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
