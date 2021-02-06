import { useSelector } from 'react-redux'
import { RootState } from "../../../redusers/rootReducer"


import { Doughnut } from 'react-chartjs-2'

const MainDiagram = () => {

    const itemsExpenses = useSelector((state: RootState) => state.itemsExpenses.itemsExpenses)

    const expensesNames: any = []
    const expensesMoney: any = []
    const expensesColor: any = []

    itemsExpenses.map(
        function (e: any) {
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
        <Doughnut data={data} width={750} height={200} />
    );
}


export default MainDiagram;
