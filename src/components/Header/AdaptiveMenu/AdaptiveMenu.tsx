import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { toggleHistoryWindow, toggleIncomesWindow } from '../../../actions/actions'

import s from "../Header.module.scss"

const AdaptiveMenu = () => {
    const dispatch = useDispatch()

    return (
        <div className={s["Header-AdaptiveMenu"]}>
            <div className={s["Header-AdaptiveMenuBox"]} >
                <Button
                    variant="contained"
                    color="primary"
                    className={s["Header-AdaptiveMenuBtn"]}
                    onClick={() => dispatch(toggleIncomesWindow(true))}
                >Добавить доходы</Button>

                <Button
                    variant="outlined"
                    className={s["Header-AdaptiveMenuBtn"]}
                    color="primary"
                    onClick={() => dispatch(toggleHistoryWindow('expenses'))}
                >История трат</Button>

                <Button
                    variant="outlined"
                    color="primary"
                    className={s["Header-AdaptiveMenuBtn"]}
                    onClick={() => dispatch(toggleHistoryWindow('incomes'))}
                >История доходов</Button>
            </div>
        </div >
    );
}

export default AdaptiveMenu;
