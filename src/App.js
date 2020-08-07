import "./App.css";

const makeButton = (buttonName) => {
  const buttonLabel = `Button: ${buttonName}`;

  const button = document.createElement("button");
  button.innerText = buttonLabel;

  return button;
};

const button = makeButton("Yay! A Button!");
// button.style = makeColorStyle("cyan");
document.body.appendChild(button);
