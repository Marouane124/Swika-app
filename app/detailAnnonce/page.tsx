import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function DetailAnnonce() {
  // Sample product details
  const product = {
    title: "Produit Exemple",
    price: "50€",
    description: "Ceci est une description de produit exemple. Ceci est une description de produit exemple. Ceci est une description de produit exemple.",
    image: "https://via.placeholder.com/300",
    type: "Accessoires",
    secteur: "Gueliz",
    etat: "Neuf",
  };

  return (
    <Container component="main" maxWidth="md" className="pt-16 mx-auto">
      <CssBaseline />
      <Box
        className="relative flex flex-row items-center bg-white p-6 rounded-lg shadow-lg"
      >
        
        <Button
          type="button"
          variant="contained"
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            borderRadius: '50px',
            '&:hover': { backgroundColor: '#5113D7FF' },
            '&:active': { backgroundColor: '#3F0EA6FF' },
            fontSize: '10px', // Smaller font size for the small button
          }}
          startIcon={
            <img
              src="/icons/x.png" // Path to the image relative to the public directory
              alt="Icon"
              style={{ width: '18px', height: '18px' }}
            />
          }
        >
        </Button>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Avatar
              alt="Product Image"
              src={product.image}
              sx={{ width: 300, height: 300 }}
              variant="square"
              className="m-1"
            />
          </Grid>
          <Grid item xs={12} md={6} className="flex flex-col justify-between">
            <div>
              <Typography
                variant="h4"
                sx={{ color: '#6D31EDFF' }} // Title color
                className="font-semibold"
              >
                {product.title}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" className="text-black">
                    {product.price}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" className="mt-2 text-black">
                {product.description}
              </Typography>
              <Box mt={2}>
                <Typography variant="body1" className="text-black">
                  <strong>Type :</strong> {product.type}
                </Typography>
                <Typography variant="body1" className="text-black">
                  <strong>Secteur :</strong> {product.secteur}
                </Typography>
                <Typography variant="body1" className="text-black">
                  <strong>Etat :</strong> {product.etat}
                </Typography>
              </Box>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#6D31EDFF',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  '&:hover': { backgroundColor: '#5113D7FF' },
                  '&:active': { backgroundColor: '#3F0EA6FF' },
                  width: '200px', 
                  height: '40px', 
                  fontSize: '12px',
                }}
              >
                Contactez le vendeur
              </Button>
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#6D31EDFF',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  '&:hover': { backgroundColor: '#5113D7FF' },
                  '&:active': { backgroundColor: '#3F0EA6FF' },
                  width: '150px', 
                  height: '40px',
                  fontSize: '12px', 
                }}
              >
                Acheter
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
