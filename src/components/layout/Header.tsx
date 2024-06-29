import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';

export function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#141414' }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Box
            component="span"
            sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}
          >
            <PhotoAlbumIcon fontSize="large" />
            <Typography component="p" sx={{ fontSize: '24px' }}>
              Albums
            </Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
