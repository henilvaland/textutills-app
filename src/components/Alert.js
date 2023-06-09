import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
//import Button from 'react-bootstrap/Button';

export default function AlertDismissibleExample(props) {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <strong>{props.alert.type}</strong>{props.alert.msg}
        </Alert>
      );
    }
    return ;
  }


