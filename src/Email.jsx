import "./Email.css";

export default function Email() {
  const mystyles = {
    background: "none",
    border: "1px solid #3e207c",
    color: "white",
  };
  return (
    <div className="container-fluid">
      <h1 className="keys">Email Us</h1>
      <form
        style={{
          background: mystyles.background,
          border: mystyles.border,
        }}
        className="form-control"
      >
        <input
          className="form-control"
          style={{
            background: mystyles.background,
            border: mystyles.border,
            color: mystyles.color,
          }}
          required
          placeholder="First Name e.g John"
        />
        <br />
        <input
          style={{
            background: mystyles.background,
            border: mystyles.border,
            color: mystyles.color,
          }}
          required
          className="form-control"
          placeholder="Second Name e.g Doe"
        />
        <br />
        <input
          style={{
            background: mystyles.background,
            border: mystyles.border,
            color: mystyles.color,
          }}
          placeholder="Number e.g 07********"
          className="form-control"
          type="Number"
          required
        />
        <br />
        <input
          style={{
            background: mystyles.background,
            border: mystyles.border,
          }}
          type="email"
          placeholder="Email e.g johndoe@gmail.com"
          className="form-control"
          required
        />
        <br />
        <div>
          <button id="sendBtn" style={{ margin: "auto" }}>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
