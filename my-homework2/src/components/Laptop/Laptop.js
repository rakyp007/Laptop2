import classes from "./Laptop.module.css"


function Laptop () {
    return (
        <ul className={classes.Laptops}>
            <li className={classes.Laptop}>Geteway</li>
            <li className={classes.Laptop}>HP</li>
            <li className={classes.Laptop}>Asus</li>
        </ul>
    )
}
export default Laptop;