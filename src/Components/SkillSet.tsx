import React from "react";
import { Theme } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import { ISkillSet } from "../Sections/IntroAndSkills";

const useStyles = makeStyles((theme: Theme) => ({
    cardSectionLarge: {
        padding: theme.spacing(4),
        width: '33%'
    },
    cardSectionLargeSide: {
        borderRight: 'lightGrey solid 1px',
    },
    cardSectionSmall: {
        padding: theme.spacing(4),
        width: '100%'
    },
    cardSectionSmallSide: {
        borderBottom: 'lightGrey solid 1px',
    },
    img: {
        width: '75px'
    },
    skillTitle: {
        fontFamily: 'Russo One',
        fontSize: '1.5rem',
        fontWeight: 300,
        color: theme.palette.primary.light,
    },
    skillSubtitle: {
        color: theme.palette.primary.light,
        fontFamily: 'Russo One',
    },

}));

const SkillSet = ({skillSet, isEnd}: {skillSet: ISkillSet, isEnd: boolean}) => {
    const classes = useStyles();
    const theme: Theme = useTheme();

    return (
        <div key={skillSet.title} className={
            useMediaQuery(theme.breakpoints.up('md')) ?
            (isEnd ? `${classes.cardSectionLarge} ${classes.cardSectionLargeSide}`:classes.cardSectionLarge) :
            (isEnd ? `${classes.cardSectionSmall} ${classes.cardSectionSmallSide}`:classes.cardSectionSmall)
        }>
            <img src={skillSet.imgUrl} alt={skillSet.imgAria} className={classes.img}/>
            <h2 className={classes.skillTitle}>{skillSet.title}</h2>
            <Typography>{skillSet.description}</Typography>
            <img src={skillSet.mainSkillLogo} alt={skillSet.mainSkillDesc} className={classes.img} style={{ marginTop: theme.spacing(3)}}/>
            <Typography className={classes.skillSubtitle} style={{marginBottom: theme.spacing(1)}}>{skillSet.mainSkillDesc}</Typography>
            <Typography>{skillSet.mainSkillText}</Typography>
            <Typography className={classes.skillSubtitle} style={{marginTop: theme.spacing(3), marginBottom: theme.spacing(1)}}>{skillSet.toolsDesc}</Typography>
            {
            skillSet.toolsArr.map(tool => (
                <Typography key={tool}>{tool}</Typography>
            ))
            }
        </div>
    )
};

export default SkillSet;