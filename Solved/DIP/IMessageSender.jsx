// This example adheres to the DIP because the high-level component depends on an abstraction (IMessageSender) instead of a concrete implementation (EmailSender).

// IMessageSender interface representing the behavior of a message sender
class IMessageSender extends React.Component {
  send() {
    throw new Error('send method must be implemented');
  }
}

// Concrete implementation of IMessageSender for sending emails
class EmailSender extends IMessageSender {
  send() {
    console.log("Sending email...");
  }

  render() {
    return null;
  }
}

// High-level component (NotificationService) depends on the abstraction (IMessageSender) instead of the concrete implementation (EmailSender)
class NotificationService extends React.Component {
  constructor(props) {
    super(props);
    this.sender = props.sender;
  }

  sendNotification() {
    this.sender.send();
  }

  render() {
    return <div>This is the NotificationService component</div>;
  }
}

// Usage
function App() {
  // Instantiate EmailSender and pass it to NotificationService
  const emailSender = new EmailSender();
  
  return (
    <div>
      <NotificationService sender={emailSender} />
    </div>
  );
}

export default App;
