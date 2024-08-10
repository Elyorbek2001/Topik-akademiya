import React from 'react';
import "./Accardion.css"

import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { useTranslation } from 'react-i18next';


const Accardion = () => {
    const { t, i18n } = useTranslation();
    return (

        <div id='Accardion' className='Accardion'>
            <p className='Topik'>{t("Kop beriladigan savollar")}</p>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?")}
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    {t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?")}
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    {t("O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?")}
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>

            </Accordion>

        </div>

    )
}

export default Accardion

