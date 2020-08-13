import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useState } from 'react';
import Header from '../Components/Header';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Footer from '../Sections/Footer';
import emailjs from 'emailjs-com';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please tell me your name so I can know you better.')
    .min(2, 'That name seems too short.')
    .max(60, 'Woah! Cool name, but a bit long. Could you shorten it a bit?'),
  email: Yup.string()
    .email('Please enter a valid email so I can get back with you.')
    .required('Please enter your email so I can get back with you.'),
  message: Yup.string()
    .required('Please let me know how I can help before pressing send.')
});

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    marginTop: '200px'
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2.5rem',
    fontWeight: 300,
    margin: '0 50px'
  },
  form: {
    width: '50%',
    minWidth: '300px',
    margin: '50px auto 200px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

export interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const sendStatusType = {
  unsent: "Unsent",
  sent: "Sent",
  error: "Error"
}

const ContactMe = () => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const [sendStatus, setSendStatus] = useState(sendStatusType.unsent);

  const sendEmail = async (values: any, actions: any) => {
    try {

      await emailjs.send("default_service", "portfolio_contact", values, process.env.REACT_APP_EMAIL_JS_USER_ID);
      
      actions.setSubmitting(false);
      setSendStatus(sendStatusType.sent);
    } catch (error) {
      actions.setSubmitting(false);
      setSendStatus(sendStatusType.error);
      console.error(error);
    }
  }
  
  return (
    <div className={classes.root}>
      <Header/>
      <Snackbar open={sendStatus === sendStatusType.error} autoHideDuration={10000} onClose={() => setSendStatus(sendStatusType.unsent)}>
        <Alert severity="error">There seems to be a problem with my email server. Please let me know by contacting me through any of the social media options in the footer.</Alert>
      </Snackbar>
      <Snackbar open={sendStatus === sendStatusType.sent} autoHideDuration={6000} onClose={() => setSendStatus(sendStatusType.unsent)}>
        <Alert severity="success">Your message is on its way! I will get back with you as soon as I can.</Alert>
      </Snackbar>
      <h1 className={classes.title}>Thank you for reaching out. How may I help you?</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        onSubmit={sendEmail}
        onReset={() => setSendStatus(sendStatusType.unsent)}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<IFormValues>) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;

          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                error={!!(errors.name && touched.name)}
                fullWidth
                helperText={errors.name}
                label="Name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                style={{marginBottom: '20px',}}
                value={values.name}
              />
              <TextField
                error={!!(errors.email && touched.email)}
                fullWidth
                helperText={errors.email}
                label="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                style={{marginBottom: '20px',}}
                type="email"
                value={values.email}
              />
              <TextField
                error={!!(errors.message && touched.message)}
                fullWidth
                helperText={errors.message}
                label="Message"
                multiline
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
                rows={6}
                style={{marginBottom: '20px',}}
                value={values.message}
                variant="outlined"
              />
              <Button
                disabled={!dirty || isSubmitting}
                onClick={handleReset}
                type="button"
              >
                Reset
              </Button>
              <Button 
                disabled={isSubmitting}
                style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light, padding: '5px 50px'}}
                type="submit" 
                variant="outlined"
              >
                Send
              </Button>
            </form>
          );
        }}
      </Formik>
      <Footer/>
    </div>
  );
};

// export default withFormik({handleSubmit: doHtmlFormPost, validationSchema})(ContactMe);
export default ContactMe;