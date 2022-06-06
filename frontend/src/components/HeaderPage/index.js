import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import {
  DescricaoG,
  DescricaoB,
  OpenFilterButton,
  FiltersContent,
  Filters,
  FilterButtonWrapper,
} from "./style";

export default function StyledCard({ title='SEM TITULO', userName, dateFound, filter=false, mapControls, applyFilters }) {
  // o mapsearchradius grava as potencias de 2, e o raio esta em km
  // ou seja, se eu selecionei 16km de raio o mapsearchradius guardara 4, pois 2⁴=16

  //slider do raio de busca
  const handleSearchRadius = (event, newValue) => {
    mapControls.setSearchRadius(newValue); //chamar funcao do mapcontrols
  };
  
  //hooks dos filtros
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  
  //botao de abrir os filtros
  const openFilters = () => {
    setFiltersOpen(!isFiltersOpen);
  }

  //filters
  const filters = {
    mapSearchRadius: 2 ** mapControls?.getSearchRadius(),
    mapCenter: mapControls?.getMapCenter(),
  }

  //botao de filtrar
  const handleFiltros = () => {
    openFilters();
    applyFilters(filters);
  }

  //display
  const date = new Date(dateFound);

  return (
    <>
    <Card 
      sx={{ 
        margin: '2vh 0',
        backgroundColor: '#3D3D3D',
        width: '100%',
        height: 'fit-content',
      }}
    >
      <CardContent
        sx={{
          padding: '16px !important',
        }}
      >
        <div 
          id='card-content'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '0px',
          }}
          >
          <div 
            id='texts'
            style={{
              display: 'flex',
              flexDirection: 'column', 
              color: 'white',
            }}  
          >
            
            {!userName && !dateFound &&
              <Typography vartiant='h5' style={{
                fontFamily: 'Montserrat, Sans Serif',
                fontWeight: '600',
                letterSpacing: '-0.05em',
              }}>
                {title}
              </Typography>
            }

            {!!userName && !!dateFound &&
              <div>
              <Typography vartiant='h5' style={{
                fontFamily: 'Montserrat, Sans Serif',
                fontWeight: '600',
                letterSpacing: '-0.05em',
                fontSize: '2em',
                lineHeight: '1',
              }}>
                {title}
              </Typography>

              <DescricaoG>
                Observado por <b>{userName}</b> em <b>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</b>.
              </DescricaoG>
              </div>
            }
          </div>
          <div id='filter'>
            {filter &&
              <OpenFilterButton onClick={openFilters}>
                <Typography
                  size="large"
                  style={{
                    fontFamily: 'Montserrat, Sans Serif',
                    fontWeight: '600',
                  }}
                >
                  FILTROS
                </Typography>
                <ArrowDropDownCircleIcon className={isFiltersOpen ? 'inverter' : ''} sx={{fontSize: '1.5rem', margin: '-.1em 0 0 5px'}} />
              </OpenFilterButton>
            } 
          </div>
        </div>
      </CardContent>
        
        {isFiltersOpen &&
          <Filters>
            <FiltersContent>
              {/* Slider raio de busca */}
              <div style={{maxWidth: '100%'}}>
                <DescricaoG><b>Raio de Busca:</b></DescricaoG>
                <Slider
                  value={mapControls.getSearchRadius()}
                  min={0}
                  step={1}
                  max={14}
                  scale={(v) => (2**v)}
                  getAriaValueText={(v) => `${v} KM`}
                  valueLabelFormat={(v) => `${v} KM`}
                  onChange={handleSearchRadius}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                  sx={{color: '#14aa6b', margin: '10px 0'}}
                />
                <DescricaoB>ℹ️ O filtro é aplicado com base no centro visual do mapa.</DescricaoB>
                <p>Mapcenter = {mapControls.getMapCenter()}<br/>
                searchradius = {mapControls.getSearchRadius()}</p>
              </div>
            </FiltersContent>

            {/* button */}
            <FilterButtonWrapper>
              <Button variant="contained" color="success" sx={{backgroundColor: '#14aa6b'}} onClick={handleFiltros}>
                Filtrar
              </Button>
            </FilterButtonWrapper>
          </Filters>
        }
        </Card>
                </>
  );
}