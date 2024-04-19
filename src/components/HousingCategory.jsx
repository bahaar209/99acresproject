import css from "../CSS modules/HousingCategory.module.css"
import gpsimg from "../images/GPS_symbol.png";
import micimg from "../images/Mic_img.png";

const HousingCategory = () => {
    const OptionArray = [
        "Buy", "Rent", "New Launch", "PG / Co-living", "Commercial", "Plots/Land", "Projects"
    ];


    return (
        <>
            <div className={css['user-search-area-container']}>

                <div className={css['user-search-area']}>
                    <ul className={css['user-search-area-options']}>
                        {OptionArray.map(item => (
                            <li className={css['user-search-area-options-list']}>{item}</li>
                        ))}
                    </ul>

                    <div className={css['user-custom-search-area']}>
                        <p className={css["all-residentials"]}>All Residentials</p>
                        <input className={css["user-custom-search-text-area"]} type="text" placeholder="Search `Hyderabad`" />
                        <img className = {css['logo-img']} src={gpsimg} alt="" />
                        <img className = {css['logo-img']} src={micimg} alt="" />
                        <button type="button" className={css['search-button']} >Search</button>
                    </div>


                </div>


            </div>
        </>
    )
}

export default HousingCategory;