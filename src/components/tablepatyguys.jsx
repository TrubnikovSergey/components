import React, {useState} from 'react'
import API from '../api'

const TablePatyGuys = () => {

    const [guys, setGuys] = useState(API.users.fetchAll())

    const qualitiesList = (qList) => {

        const list = qList.map(item => {
    
            const classes = `m-2 badge bg-${item.color}`    
            return <span className = {classes}>{item.name}</span>

        })
    
        return list
    }
    
    const handlerDeletGuy = (id) => {
        setGuys(guys.filter(guy => guy._id !== id))
    }

    const users = guys
                    .map(user => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{qualitiesList(user.qualities)}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td><button type = "button" className = "btn btn-danger badge m-2" onClick={() => handlerDeletGuy(user._id)}>delete</button></td>
                            </tr>
                        )
                    })

    const thead =   <thead>
                        <tr>
                            <th scope = "col">Имя</th>
                            <th scope = "col">Качество</th>
                            <th scope = "col">Профессия</th>
                            <th scope = "col">Встретился, раз</th>
                            <th scope = "col">Оценка</th>
                            <th scope = "col"></th>
                        </tr>
                    </thead>

    
    const table =   <table className = "table">
                            {thead}
                            <tbody>
                                {users}
                            </tbody>
                        </table>

    const stringCountGuys = (count) => {

        const strCount = String(count)
        const lastNumber = Number(strCount[strCount.length - 1])

        if(lastNumber === 2 || lastNumber === 3 || lastNumber === 4){

            return `${count} человека тусанет с тобой сегодня`

        }else{

            return `${count} человек тусанет с тобой сегодня`

        }

    }

    if(guys.length){

        return  <>
                    <span className = "badge bg-primary">{stringCountGuys(guys.length)}</span>
                    {table}
                </>

    }else{

        return <span className = "badge bg-danger">Никто не хочет тусить</span>

    }

}

export default TablePatyGuys