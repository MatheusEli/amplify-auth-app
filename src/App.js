
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';


import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);


const App = ({ signOut, user }) => {
  return (
    <div style='container'>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <h2>Amplify Todos</h2>
    </div>
  );
};

export default withAuthenticator(App);
