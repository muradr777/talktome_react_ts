export default function Form() {
  return (
    <form id="mindForm">
      <div className="form-group">
        <label
          className="lang-text"
          data-lang="what_you_think"
          htmlFor="message"
        >
          What're you thinking about?
        </label>
        <div className="input-wrap">
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Type your message here..."
            autoComplete="off"
          />
          <button className="submit-btn">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <span id="alert" className="alert"></span>
      </div>
    </form>
  );
}
