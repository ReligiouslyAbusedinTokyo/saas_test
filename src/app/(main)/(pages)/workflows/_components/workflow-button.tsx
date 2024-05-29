'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useModal } from '@/providers/modal-provider'
import React from 'react'
import CustomModel from '@/components/global/custom-modal'
import WorkflowForm from '@/components/forms/workflow-form'

type Props = {}



const WorkflowButton = (props: Props) => {
    const {setOpen, setClose} = useModal()

const handleClick=()=>{
   setOpen(
    <CustomModel
    title="Create a Workflow Automation"
    subheading="workflows are powerful that help you automate task"
    >
       <WorkflowForm/>

    </CustomModel>
   )
}

  return (
    <Button size={'icon'} onClick={handleClick}>
        <Plus/>
    </Button>
  )
}

export default WorkflowButton