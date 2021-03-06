import React from 'react';
import { Grid, Grow, Typography, TextField } from '@material-ui/core';


import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
  { color: '#F9B208', title: 'Latest News', text: 'Give me the latest news'},
  { color: '#00838f', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Sports, Technology', text: 'Give me the latest sports news' },
  { color: '#1565c0', title: 'News by Terms', info: 'Bitcoin, Joe Biden, Smartphones, Donald Trump...', text: 'What\'s up with Donald Trump' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if(articles.length === 0){
      return (
        <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                    <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                          <Typography variant="h6">{infoCard.title}</Typography>
                          { infoCard.info ? (<Typography variant="standard">{infoCard.title.split(' ')[2]}: <br />
                          {infoCard.info}</Typography>) : null}
                          <Typography variant="standard">Test saying: <br /> <i>{infoCard.text}</i></Typography>
                    </div>
                </Grid>
            ))}
        </Grid>
        </Grow>
      );
  }
  
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
             <NewsCard article={article} activeArticle={activeArticle} i={i} /> 
          </Grid>    
        ))}
      </Grid>
    </Grow>
  );
}

export default NewsCards;