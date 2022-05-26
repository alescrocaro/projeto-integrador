import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

import { 
  BannerImage,
  StyledCardContent,
  StyledCardDescription,
  Titulo,
  DescricaoG, DescricaoB,
  Subtitulo
} from './style.js';

export default function StyledCard({ post }) {
  const date = new Date(post.dateFound);
  const url = post.Images.length > 0 ? process.env.REACT_APP_BASE_URL+'/uploads/images/' + post.Images[0].url : 
  require('../../img/placeholder.png')
  return (
    <Link 
      to={'/posts/'+post.id}
      style={{
        textDecoration: 'none',
        width: '100%',
        margin: '10px 0', 
      }}
    >
      <Card sx={{ 
        width:'100%',
        height: '150px',
        alignItems: 'center',
      }}>

        {/* card com tudo dentro */}
        <CardActionArea sx={{
          display: 'grid',
          gridTemplateColumns: '35% 65%',
          width: '100%',
          height: '100%',
        }}
        > 
          {/* imagem */}
          <BannerImage 
            component='img'
            src={url}
            alt='img'
          />

          {/* conteudo */}
          <StyledCardContent>

            {/* titulo do post */}
            <Titulo>
              {post.title}
            </Titulo>
            <DescricaoG>
              Observado por <b>{post.userName}</b> em <b>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</b>.
            </DescricaoG>

            {/* descriçao do post */}
            <StyledCardDescription>

              {/* especime */}
              <div>
                <Subtitulo>ESPÉCIME:</Subtitulo>
                <DescricaoB>
                  Espécie: {post.specie}<br/>
                  Gênero: {post.genus}<br/>
                  Família: {post.family}<br/>
                </DescricaoB>
              </div>

              {/* local */}
              <div>
                <Subtitulo>LOCAL:</Subtitulo>          
                <DescricaoB>
                  Bioma: {post.biome}{<br/>}
                  Clima: {post.weather}{<br/>}
                  Cidade: {post.city}{<br/>}
                </DescricaoB>
              </div>
            </StyledCardDescription>


          </StyledCardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}