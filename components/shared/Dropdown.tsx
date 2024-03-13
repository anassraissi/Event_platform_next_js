import React, { startTransition, useState } from 'react'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {AlertDialog,AlertDialogAction,AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog"
import { ICategory } from '@/lib/database/models/category.model'
import { Input } from '../ui/input'
type DropdownProps={ 
    value ?:string,    //The question mark (?) means the value is optional, so a dropdown can exist without an initial value.
    onChangeHandler ?: () => void
}

const Dropdown = ({onChangeHandler,value}:DropdownProps) => {

    const [newCategory, setNewCategory] = useState("");
    const [category, setCategory] = useState <ICategory[]>([

    ])
    const handelAddCategory=()=>{
        
    }

  return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {category.length > 0  && category.map((category)=>(
            <SelectItem  key={category._id} value={category._id}>{category.name}</SelectItem>
            ))}
            <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent className='bg-white'>
                        <AlertDialogHeader>
                        <AlertDialogTitle>New Category</AlertDialogTitle>
                        <AlertDialogDescription>
                            <Input type='text' placeholder='Category name' className='input-field mt-3' onChange={(e)=>setNewCategory(e.target.value)}/>
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={()=>startTransition(handelAddCategory)}>Add</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
            </AlertDialog>
        </SelectContent>
        </Select>
  )
}

export default Dropdown