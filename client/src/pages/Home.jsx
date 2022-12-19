import React from "react";
import {useTranslation,Trans} from 'react-i18next'
function Home() {
  const {t} = useTranslation()
  return (
    
    <>
    <div className="alert alert-success" role="alert">
   <p> <Trans i18nKey="description.part1"></Trans></p>
        
   <h3>{t('description.part2')}</h3>
        <h1 class="display-3">{t('page.welcome.home')}</h1>
    </div>
    <div className="alert alert-success" role="alert">
    <h1 className="display-6">{t('parag.description')}</h1>
  </div>
    </>
  );
}

export default Home;