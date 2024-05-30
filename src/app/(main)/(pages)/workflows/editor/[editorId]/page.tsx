import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './components/editor-canvas'

type Props = {}

const Papge = (props: Props) => {
  return (
    <div className="h-full"> 
    
    <EditorProvider>
        <ConnectionsProvider>
            <EditorCanvas/>
        </ConnectionsProvider>

    </EditorProvider>
    
    </div>
  )
}

export default Papge