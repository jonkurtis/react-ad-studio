import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'columns',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: '300px',
    width: '100%',
  },
  margin: {
    margin: '2rem',
  },
  withoutLabel: {
    marginTop: '1rem',
  },
  textField: {
    flexBasis: 20,
  },
}));

const CTAOptions = [ 
  'Click Here',
  'Shop Now',
  'Learn More',
  'Get Offer',
  'Claim Offer',
  'Get Started', 
];

const AdForm = props => {

  const {form, setValues} = props;
  const classes = useStyles();

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={classes.root}>
      <form className={classes.container} onSubmit={printValues}>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          label="Call To Action"
          id="call-to-action"
          name="CTA"
          value={form.CTA}
          onChange={updateField}

        >
          {CTAOptions.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
        </TextField>

        <br />
        <label>Upload Logo: </label>
        <input type="file" />
        <br />
        <label>Upload background: </label>
        <input type="file" />
        <br />
        <label>Upload Image: </label>
        <input type="file" />
      </form>
    </div>
  )
}

export default AdForm
