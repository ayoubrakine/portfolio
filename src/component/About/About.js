// import React from 'react';
// import { SiPhp, SiWordpress, SiCss3, SiJavascript } from 'react-icons/si';

// const About = () => {
//   return (
//     <div>
//       <SiPhp size={50} color="#777bb3" />
//       <SiWordpress size={50} color="#21759b" />
//       <SiCss3 size={50} color="#2965f1" />
//       <SiJavascript size={50} color="#f7df1e" />
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './BiographieContainer.css';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiCsharp, SiPhp, SiLaravel, SiReact, SiMongodb, SiMysql, SiOracle, SiGit, SiPython } from 'react-icons/si';

const About = () => {
  const prenom = 'AYOUB';
  const nom = 'RAKINE';
  const age = 21;
  const profession = 'ETUDIANT';
  const tel = '+212642665231';
  const mail = 'ayoubrrakine@gmail.com';
  const ville = 'EL JADIDA';

  return (
    <Box
      sx={{
        backgroundColor: '#F0F0F0',
        minHeight: '100vh',
        padding: '3rem',
      }}
    >
           <div className="biographie-container">
      <h2>Biographie</h2>
      <div className="biographie-content">
      <div className="biographie-info left-info">
  <p><strong>Prénom:</strong> {prenom}</p>
  <p><strong>Âge:</strong> {age} <strong>ans</strong></p>
</div>

        <div className="biographie-info centered-info">
          <p><strong>Nom:</strong> {nom}</p>
          <p><strong>Profession:</strong> {profession}</p>
        </div>
        <div className="biographie-info centered-info">
          <p><strong>E-mail:</strong> {mail}</p>
          <p><strong>Tel:</strong> {tel}</p>
        </div>
        <div className="biographie-info">
          <p><strong>Ville:</strong> {ville}</p>
        </div>
      </div>
    </div>

        

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#26515A', color: '#fff' }}>
              <Typography variant="h4" gutterBottom sx={{fontWeight:'bold',color:'#F4C430',fontFamily:'monospace'}}>
                About Me
              </Typography>
              <Typography variant="h4" gutterBottom sx={{fontWeight:'bold',color:'#F4C430',fontFamily:'monospace'}}>
                
              </Typography>
              <Typography variant="body1" sx={{fontSize:'17px',fontWeight:'bold',fontFamily:'monospace' }}>
              Je suis un étudiant en génie informatique et technologies émergentes, passionné par la programmation et le développement de solutions innovantes. Actuellement inscrit dans un programme d'ingénierie à l'ENSA d'El Jadida, j'ai acquis des compétences avancées en conception, développement et maintenance de logiciels. J'ai une expérience variée dans la collaboration sur des projets, que ce soit de manière indépendante ou en équipe, ce qui m'a permis d'explorer plusieurs langages de programmation, frameworks et méthodologies de développement.
              
              </Typography>
             
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#26515A', color: '#fff' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '2rem', marginBottom: '1rem',fontWeight:'bold',color:'#F4C430',fontFamily:'monospace' }}>
              Technologies Acquises
              </Typography>
              <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiHtml5 size={24} color="#e34c26"  />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="HTML" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiCss3 size={24} color="#2965f1" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="CSS" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiJavascript size={24} color="#f7df1e" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="JavaScript" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiCsharp size={24} color="#007396" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="C Sharp" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiPhp size={24} color="#777bb3" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="PHP" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiLaravel size={24} color="#ff2d20" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="Laravel" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiReact size={24} color="#61dafb" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="React.js" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiMongodb size={24} color="#47a248" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="MongoDB" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiMysql size={24} color="#4479a1" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="MySQL" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiOracle size={24} color="#f80000" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace'} }} primary="Oracle" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiGit size={24} style={{ color: 'blue' }} />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem',fontWeight:'bold',fontFamily:'monospace' } }} primary="Git" />
                </ListItem>
                <ListItem sx={{ width: '33%', paddingRight: '16px', marginBottom: '16px' }}>
                  <SiPython size={24} color="#3776ab" />
                  <ListItemText primaryTypographyProps={{ sx: { fontSize: '1.2rem', marginLeft: '0.5rem' ,fontWeight:'bold',fontFamily:'monospace'} }} primary="Python" />
                </ListItem>
              </List>
            </Paper>



          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;









