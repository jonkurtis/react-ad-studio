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
  {
    value: 'Click Here',
    label: 'Click Here',
  },
  {
    value: 'Shop Now',
    label: 'Shop Now',
  },
  {
    value: 'Learn More',
    label: 'Learn More',
  },
  {
    value: 'Get Offer',
    label: 'Get Offer',
  },
  {
    value: 'Claim Offer',
    label: 'Claim Offer',
  },
  {
    value: 'Get Started',
    label: 'Get Started',
  },
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
          <MenuItem key={option.value} value={option.value}>
            {option.label}
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
