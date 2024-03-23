// This example violates the DIP because the high-level component depends directly on the low-level component.

// High-level component (NotificationService) depends directly on the low-level component (EmailSender).

// Low-level component
class EmailSender extends React.Component {
  sendEmail() {
    // Logic to send email
    console.log("Sending email...");
  }

  render() {
    return null;
  }
}

// High-level component
class NotificationService extends React.Component {
  constructor(props) {
    super(props);
    this.emailSender = new EmailSender();
  }

  sendNotification() {
    this.emailSender.sendEmail();
  }

  render() {
    return <div>This is the NotificationService component</div>;
  }
}

// Usage
function App() {
  return (
    <div>
      <NotificationService />
    </div>
  );
}

export default App;
