
import './child.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



export function Child() {

    let dispatch = useDispatch();


    let { register, handleSubmit } = useForm();



    const onSave = (formData) => {

        console.log(formData);


        // alert(11)
        dispatch({
            type: 'ADD_EXPENSE',
            data: formData
        })

        toast.success('Transection Added')

    }
    let transection = useSelector(function (store) {
        return store.adExpence
    })
    // console.log(transection);

    function getIncome() {
        let income = 0;

        transection.expense.map(function (d) {
            console.log(d);

            if (d.amount > 0) {
                income = income + +d.amount
            }

        })
        return income
    }

    function getExpense() {
        let expense = 0;

        transection.expense.map(function (a) {
            console.log(a);
            if (a.amount < 0) {
                expense += +a.amount;
            }
        })
        return expense

    }

    let income = getIncome();
    let expense = Math.abs(getExpense());

    return <div className='container'>
        <h1 className='text-center'>Expense Tracker by Muzammal</h1>

        <h3>You Balence <br /> ${income - expense} </h3>

        <div className='expense-container'>
            <h3 className='amount'>INCOME <br /> ${income}</h3>
            <h3 className='amount'>EXPENCE <br /> ${expense}</h3>
        </div>

        <h3>History</h3>

        <hr />
        <ul className='transection-list'>
            
            {
                transection.expense.map(function (data , meraIndex) {

                    return <li className='li-list'>
                        <button onClick={function(){
                            dispatch({
                                type:'delet_hogya',
                                del:meraIndex
                            })
                        }} id='X'>X</button>
                        <span>
                            {data.desc}
                        </span>
                        <span>
                            {data.amount}
                        </span>
                    </li>
                })

            }



        </ul>

        <h3>Add New Transection</h3>

        <hr />

        <form onSubmit={handleSubmit(onSave)} className='transection-form'>
            <label>
                Enter Discription <br />
                <input {...register('desc')} type="text" required />
            </label>
            <br />
            <label>
                Enter Amount <br />
                <input {...register('amount')} type="number" required />
            </label>
            <br />
            <input id='btn' type="submit" 
            />

        </form>
    </div>
}