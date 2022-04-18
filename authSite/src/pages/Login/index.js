import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CopyRight from '../../components/commons/CopyRight'
import Button from '../../components/commons/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login} from '../../helpers/request';
import {loginhandle} from '../../helpers/general'
const theme = createTheme();

const Login = ({callbackReduxActions, SignInCallback}) => {
  const [submitting, setSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [isFormEdited, setIsFormEdited] = useState({
    email: false,
    password: false,
  });
  const [isError, setIsError] = useState(null);
  const handleLogin = async () => {
    setSubmitting(true);
    const params = {
      email,
      password,
    };
    loginhandle(
      params,
      callbackReduxActions.setUser,
      setSubmitting,
      SignInCallback,
      setIsError,
      setEmail,
      setPassword
    );
  };
  console.log('actions : ', callbackReduxActions)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(ev)=> setEmail(ev.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              onChange={(ev)=> setPassword(ev.target.value)}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button submitting={submitting} disabled={submitting} handleSubmit={()=> handleLogin()} label="Sign In" />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        {/* <CopyRight sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default Login;