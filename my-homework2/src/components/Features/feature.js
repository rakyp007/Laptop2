import classes from "./Feature.module.css"



export const Feature = () => {
    return (
        <ul className={classes.nots} >
            <li className={classes.link}>Feature</li>
            <li className={classes.not } >Kara-balta</li>
            <li className={classes.not }>Russia</li>
            <li className={classes.not }>America</li>
        </ul>
    )
}