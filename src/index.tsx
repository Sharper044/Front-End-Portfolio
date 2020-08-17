import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_REIGION,
      userPoolId: process.env.REACT_APP_AWS_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_AWS_APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));
