export default function UserInput({ onInputChange, userInput }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) => {
                onInputChange(e.target.value, "initialInvestment");
              }}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(e) => {
                onInputChange(e.target.value, "annualInvestment");
              }}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) => {
                onInputChange(e.target.value, "expectedReturn");
              }}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => {
                onInputChange(e.target.value, "duration");
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
