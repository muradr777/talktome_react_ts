function LangsOverlay() {
  return (
    <div className="lang-overlay">
      <div className="langs-wrap">
        <h3 className="lang-title">Select Language</h3>
        <button type="button" data-get-lang="en" className="langs-btn">
          en
        </button>
        <button type="button" data-get-lang="ru" className="langs-btn">
          ru
        </button>
      </div>
    </div>
  );
}

export default LangsOverlay;
