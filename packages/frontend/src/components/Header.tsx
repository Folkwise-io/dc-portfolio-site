import React from 'react'; 
import LoginForm from "../LoginForm";

function noop() {
  return;
}

const Header = () => {
    return (
      <div>
      <LoginForm
        shouldRemember={true}
        onPasswordChange={noop}
        onRememberChange={noop}
        onSubmit={noop}
        onUsernameChange={noop}
      />
      </div>
    )
}

export default Header; 