"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Container from '@mui/material/Container';
import Copyright from '@/components/Copyright';

export default function Forgot() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
      });
    };

    return ( 
        <Container component="main" maxWidth="xs" className="pt-16 mx-auto">
      <CssBaseline />
      <Box
        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
      >
        <Avatar className="bg-blue-500 m-1">
          <LockResetIcon />
        </Avatar>
        <h1 className="text-blue-500 text-xl font-semibold">
            Mot de passe oublié ?
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

          <Button
            type="reset"
            fullWidth
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white mt-4"
          >
            Annuler
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white mt-4"
          >
            Reintialiser mot de passe
          </Button>
        </Box>
      </Box>
      <Copyright className="mt-8 mb-4" />
    </Container>
    );
}