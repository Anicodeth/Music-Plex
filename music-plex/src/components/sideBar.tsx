import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../styles/sidebar.module.css';
export default function SideBar(){
    return (
        <div className={style['sidebar-container']}>
            <div className={style['sidebar']}>
                <div className={style['icon-container']}>
                    <FontAwesomeIcon icon="music" />
                </div>
                <div className={style['icon-container']}>
                    <FontAwesomeIcon icon="music" />
                </div>          
                <div className={style['icon-container']}>
                    <FontAwesomeIcon icon="music" />
                </div>            
                <div className={style['icon-container']}>
                    <FontAwesomeIcon icon="music" />
                </div>


            </div>
        </div>
    )
}