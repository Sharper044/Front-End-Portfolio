import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useRef } from 'react';
import Header from '../Components/Header';
import { FormikProps } from 'formik';
// import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('Please tell me your name so I can know you better.')
//     .min(2, 'Too Short.')
//     .max(60, 'Too Long.'),
//   email: Yup.string()
//     .email('Please enter a valid email so I can get back with you.')
//     .required('Please enter your email so I can get back with you.'),
//   message: Yup.string()
//     .required('Please let me know how I can help before pressing send.')
// });

const useStyles = makeStyles((_theme: Theme) => ({
  root: {
    marginTop: '200px'
  },
  title: {
    fontFamily: 'Russo One',
    fontSize: '2.5rem',
    fontWeight: 300,
  },
  form: {
    width: '50%',
    minWidth: '300px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export interface IFormValues {
  name: string;
  email: string;
  message: string;
}


// const doHtmlFormPost = (values: IFormValues) => {
//   console.log(values);
//   if (formEl && formEl.current) {
//     formEl.current.submit();
//   }
// };

const ContactMe = ({ handleBlur, handleChange, handleSubmit, values, isSubmitting }: FormikProps<IFormValues>) => {
  const classes = useStyles();
  const formEl = useRef(null);
  const theme: Theme = useTheme();

  return (
    <div className={classes.root}>
      <Header/>
      <h1 className={classes.title}>Thank you for reaching out. How may I help you?</h1>
      <form className={classes.form} action="https://formspree.io/stuartharper044@gmail.com" ref={formEl} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          style={{marginBottom: '20px',}}
          name="name"
          label="Name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          style={{marginBottom: '20px',}}
          name="_replyto"
          label="Email"
          type="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <TextField
          style={{marginBottom: '20px',}}
          name="message"
          label="Message"
          fullWidth
          variant="outlined"
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}
          multiline
          rows={6}
        />
        <input hidden type="text" name="_gotcha"/>
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          variant="outlined"
          style={{color: theme.palette.primary.light, borderColor: theme.palette.primary.light, padding: '5px 50px'}}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

// export default withFormik({handleSubmit: doHtmlFormPost, validationSchema})(ContactMe);
export default ContactMe;