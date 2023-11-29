const Notification = (props) => {
  const { className, text, image } = props;
  return (
    <li className={"${className}"}>
      <img src={"${image}"} />
      <p>{text}</p>
    </li>
  );

  //  Write your code here.
};

const element = (
  <div>
    <h1>Notifications</h1>
    <ul class="container">
      <Notification
        className="inf"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="suc"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="war"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="err"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </ul>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
