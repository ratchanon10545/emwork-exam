'use client'
import React, { useState } from 'react'
import List from '../types/listtype'
import { create } from 'domain'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { li } from 'framer-motion/client'


export default function ToDoList({list}: {list: List[]}) {
    const [listdata , setListData] = useState(list)
    const [newList , setNewList] = useState('')
    const [amount , setAmount] = useState('')
    const [spent , setSpent] = useState('')
    const [type, setType] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [currentid , setCurrentId] = useState(0)
    const router = useRouter()
    // console.log(listdata)

    const AddList = async () => {
        // console.log(newList)
        if(newList === '' || amount === '' || spent === '' || type==='') return
        const newId = listdata.length + 1
        const newItem = {
            id: newId,
            listname: newList,
            amount: parseFloat(parseFloat(amount).toFixed(2)),
            spent_at: new Date(spent),
            type: type,
            created_at: new Date(),
            updated_at: new Date(),
        }
        setListData([ newItem , ...listdata])
        setNewList('')
        setAmount('')
        setSpent('')
        setType('')

        await fetch('/api/incomeexpenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: newId,
                listname: newList,
                amount:parseFloat(parseFloat(amount).toFixed(2)),
                spent_at: spent,
                type: type,}),
        })
        .then((response) => response.json())   
    }

    const DeletList = (id: number) => {
        // alert('Are you sure you want to delete this task?')
        return async () => {
            alert('Are you sure you want to delete this task?')
            const newList = listdata.filter((item) => item.id !== id)
            setListData(newList)

            await fetch(`/api/incomeexpenses/${id}`, {
                method: 'DELETE',
            })
            .then((response) => response.json())
        }
    }

    const EditList = (id: number) => {
        return async () => {
            const currentItem = listdata.find((item) => item.id === id)
            if (currentItem) {
                currentItem.listname = newList
                currentItem.amount = parseFloat(parseFloat(amount).toFixed(2))
                currentItem.spent_at = new Date(spent)
                currentItem.type = type
                currentItem.updated_at = new Date()

                setListData([...listdata])

                setNewList('')
                setAmount('')
                setSpent('')
                setType('')
                setIsOpen(false)
                setCurrentId(0)
                // console.log(listdata)
                

                await fetch(`/api/incomeexpenses/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({listname: newList,
                        amount: parseFloat(parseFloat(amount).toFixed(2)),
                        spent_at: spent,
                        type: type
                        }),
                })
                .then((response) => response.json())   
            }
            else{
                return ''
            }
        }
    }

    const ModalOpen: any = (id: number) => {
        
        return async () => {
            const currentItem = listdata.find((item) => item.id === id)
            if (currentItem) {
                setNewList(currentItem.listname)
                setAmount(currentItem.amount.toString())
                setSpent(currentItem.spent_at.toString().split('T')[0])
                setType(currentItem.type)
                setIsOpen(true)
                setCurrentId(id);
            }
        }
    }

    const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event : any) => {
    setSelectedMonth(event.target.value);
    
    console.log(event.target.value);
    const currentItem = list.find((item) =>new Date(item.spent_at).getMonth() + 1 === parseInt(event.target.value))
    if (currentItem) {
        setListData([currentItem])
    }
    else{
        const list = {
            id: -1, // Assign a default or placeholder ID
            listname: 'No data',
            amount: 0,
            spent_at: new Date(),
            type: 'No data',
            created_at: new Date(),
            updated_at: new Date(),
        }
        setListData([list])
    }
  };
  return (
    <div className='w-full'>
        <div className=" md:flex space-x-2 mt-4 w-full">
          <input
            type="text"
            className="text-white w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a new list"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
          />
          <input
            type="text"
            className="text-white w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a amonut"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            className="text-white w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a amonut"
            value={spent}
            onChange={(e) => setSpent(e.target.value)}
          />
          <select
            className="text-white w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
        >
            <option value="" >type select</option>
            <option value="income" className='text-gray-900'>รายรับ (Income)</option>
            <option value="expense" className='text-gray-900'>รายจ่าย (Expense)</option>
        </select>
          <button onClick={AddList}   className="w-full p-2 mt-4 bg-blue-500 text-white rounded-lg">
            Add
          </button>
        </div>

        <div className='mt-4 border-2 w-full border-gray-800 p-2 rounded-lg '>
            <label className='text-white ' htmlFor="month-select">Select Month: </label>
            <select className='text-white ' id="month-select" value={selectedMonth} onChange={handleMonthChange}>
                <option  value="">--Choose a Month--</option>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <option key={index} value={index + 1} className='text-black'>
                    {month}
                </option>
                ))}
            </select>
        </div>

        <div >
        <table className="table-auto text-white mt-4 w-full">
            <thead className='bg-gray-800 '>
                <tr>
                    <th>ListName</th>
                    <th>Amount</th>
                    <th>Spent_at</th>
                    <th>type</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                    <th>manage</th>
                </tr>
            </thead>
            <tbody>
            {listdata.map((item) => (
                
                <tr key={item.id} className='w-full'>
                    <td>{item.listname}</td>
                    <td>{item.amount}</td>
                    <td>{new Date(item.spent_at).toLocaleDateString('th-TH')}</td>
                    <td>{item.type}</td>
                    <td>{new Date(item.created_at).toLocaleDateString('th-TH')}</td>
                    <td>{new Date(item.updated_at).toLocaleDateString('th-TH')}</td>
                    <td className='flex justify-center space-x-2'>
                        <button onClick={ModalOpen(item.id)} className='bg-blue-500 text-white p-2 rounded-lg'>Edit</button>
                        <button onClick={DeletList(item.id)} className='bg-red-500 text-white p-2 rounded-lg'>Delete</button>
                    </td>
                </tr>
                    
               
            ))}
               
            </tbody>
        </table>
            
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
        <input
            type="text"
            className="text-black w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a new list"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
          />
          <input
            type="text"
            className="text-black w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a amonut"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            className="text-black w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            placeholder="Add a amonut"
            value={spent}
            onChange={(e) => setSpent(e.target.value)}
          />
          <select
            className="text-black w-full p-2 mt-4 rounded-lg outline-1 focus:outline-blue-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
        >
            <option value="" >type select</option>
            <option value="income" className='text-gray-900'>รายรับ (Income)</option>
            <option value="expense" className='text-gray-900'>รายจ่าย (Expense)</option>
        </select>
         <button onClick={EditList(currentid)}   className="w-full p-2 mt-4 bg-blue-500 text-white rounded-lg">
            Save
          </button>
        </div>
      </Modal>
        </div>
    </div>
  )
}
