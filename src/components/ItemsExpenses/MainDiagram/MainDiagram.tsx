import { useSelector } from 'react-redux'
import { RootState } from "../../../redusers/rootReducer"


import { Doughnut } from 'react-chartjs-2'
import { ItemsExpensesType } from '../../../redusers/itemsExpensesReducer'

const MainDiagram: React.FC = () => {

    let itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)

    const expensesNames: string[] = []
    const expensesMoney: number[] = []
    const expensesColor: string[] = []

    itemsExpenses.map(
        (e: ItemsExpensesType) => {
            expensesNames.push(e.expensesName)
            expensesMoney.push(e.moneySpend)
            expensesColor.push(e.bgColor)
        })

    const data = {
        labels: expensesNames,
        datasets: [{
            data: expensesMoney,
            backgroundColor: expensesColor,
            hoverBackgroundColor: expensesColor
        }]
    };

    return (
        <Doughnut data={data} width={750} height={200}
            options={
                {
                    legend: {
                        display: false,
                    },
                }}
        />
    );
}


export default MainDiagram;
