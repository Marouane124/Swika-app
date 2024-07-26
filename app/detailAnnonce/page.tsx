"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

export default function DetailAnnonce() {
  // Sample product details
  const product = {
    title: "Produit Exemple",
    price: "50",
    description: "Ceci est une description de produit exemple.Ceci est une description de produit exemple. Ceci est une description de produit exemple. Ceci est une description de produit exempleCeci est une description de produit exemple. Ceci est une description de produit exemple. Ceci est une description de produit exemple Ceci est une description de produit exemple. Ceci est une description de produit exemple.",
    images: [
      "https://via.placeholder.com/300?text=Image+1",
      "https://via.placeholder.com/300?text=Image+2",
      "https://via.placeholder.com/300?text=Image+3",
      "https://via.placeholder.com/300?text=Image+4",
    ],
    type: "Accessoires",
    secteur: "Gueliz",
    etat: "Neuf",
    payer: "Marrakech",
    heur: "55 minute",
  };

  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);

  React.useEffect(() => {
    // Set global styles to ensure full height and width
    document.documentElement.style.height = '100%';
    document.documentElement.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <CssBaseline />
      <Box className="relative flex flex-col bg-white p-6 rounded-lg shadow-lg h-full w-full overflow-hidden">
        <Box className="absolute top-4 right-4">
          <Image
            src="/icons/x.png"
            alt="Close Icon"
            width={28}
            height={28} 
            className="w-7 h-7 cursor-pointer"
          />
        </Box>

        <Grid container spacing={2} className="flex-1 h-full mt-10"> {/* Added margin top here */}
          <Grid item xs={12} md={4} className="pr-4 h-full">
            <Box className="flex flex-col items-center p-2 h-full">
              <Avatar
                alt="Large Product Image"
                src={selectedImage}
                className="w-80 h-80 mb-2" // Increase the size here
                variant="square"
              />
              <Box className="flex flex-row overflow-x-auto">
                {product.images.map((image, index) => (
                  <IconButton
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="p-1 mx-1"
                  >
                    <Avatar
                      alt={`Thumbnail ${index + 1}`}
                      src={image}
                      className={`w-16 h-16 ${selectedImage === image ? 'ring-2 ring-purple-600' : ''}`}
                    />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} className="pl-8 h-full">
            <div className="pl-4 h-full"> 
              <Typography
                variant="h3"
                className="text-purple-600 font-semibold mb-4" // Added margin bottom here
              >
                {product.title}
              </Typography>
              <Box className="flex items-center mt-1">
                <Image
                  src="/icons/location.png"
                  alt="Location Icon"
                  width={28}
                  height={28} 
                  className="w-4 h-4 mr-2"
                />
                <Typography
                  variant="body2"
                  className="text-black"
                >
                  {product.payer}
                </Typography>
                <Box className="flex items-center ml-2">
                  <Image
                    src="/icons/time.png"
                    alt="Time Icon"
                    width={28}
                    height={28} 
                    className="w-4 h-4 mr-2"
                  />
                  <Typography
                    variant="body2"
                    className="text-black"
                  >
                    il y a {product.heur}
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <Typography className="text-black text-2xl">
                    {product.price}DH
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="mt-2 text-black text-base">
                {product.description}
              </Typography>
              <Box className="mt-2">
                <Typography className="text-black text-sm">
                  <strong>Type :</strong> {product.type}
                </Typography>
                <Typography className="text-black text-sm">
                  <strong>Secteur :</strong> {product.secteur}
                </Typography>
                <Typography className="text-black text-sm">
                  <strong>Etat :</strong> {product.etat}
                </Typography>
              </Box>
              <div className="flex justify-end gap-4 mt-4"> {/* Use gap-4 for spacing */}
                <Button
                  type="button"
                  variant="contained"
                  size="small"
                  className="bg-purple-600 text-white rounded-full hover:bg-purple-700 active:bg-purple-800 w-52 h-10 text-xs"
                >
                  Contactez le vendeur
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  size="small"
                  className="bg-purple-600 text-white rounded-full hover:bg-purple-700 active:bg-purple-800 w-40 h-10 text-xs"
                >
                  Acheter
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
