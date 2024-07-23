"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import GoogleSignInButton from '@/components/GoogleButton';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          Swika {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
      toast.error('Veuillez remplir tous les champs !',{
        duration: 1500, 
      });
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast.error('Email ou mot de passe incorrect !',{
        duration: 1500, 
      });
      console.log(result.error);
    } else {
      toast.success('Connecté avec succès !',{
        duration: 1000, 
      });
      router.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="pt-16 mx-auto">
      <CssBaseline />
      <Box className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <Avatar className="bg-blue-500 m-1">
          <LockOutlinedIcon />
        </Avatar>
        <h1 className="text-blue-500 text-xl font-semibold">
          Connectez-vous
        </h1>
        <Box component="form" onSubmit={handleSubmit} noValidate className="mt-4 w-full">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            className="mt-4"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white mt-4"
          >
            Se connecter
          </Button>
          <hr className="my-4 border-t border-gray-300" />
        </Box>
        <GoogleSignInButton />
        <Grid container className="text-sm mt-4">
          <Grid item xs>
            <Link href="/forgot" passHref className="text-blue-500 hover:underline">
                Mot de passe oublié?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" passHref className="text-blue-500 hover:underline">
                {"Pas de compte? S'inscrire"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Copyright className="mt-8 mb-5" />
    </Container>
  );
}
