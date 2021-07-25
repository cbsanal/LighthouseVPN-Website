function supportPage() {
  return (
    <section className="support">
      <form action="/">
        <fieldset className="fieldset">
          <legend>Support</legend>
          <div className="row">
            <div className="element">
              <label for="fname">First name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Please enter your first name"
              ></input>
            </div>
            <div className="element">
              <label for="fname">Last name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Please enter your last name"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="element">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
              ></input>
            </div>
            <div className="element">
              <label for="uname">User name</label>
              <input
                type="text"
                id="uname"
                name="uname"
                placeholder="Please enter your user name"
              ></input>
            </div>
          </div>
          <div className="last-row">
            <div className="element">
              <label for="fname">Your Problem</label>
              <textarea
                name=""
                id="fname"
                rows="5"
                placeholder="Please describe you problem"
              ></textarea>
            </div>
            <input className="form-btn" type="submit" value="Submit"></input>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default supportPage;
