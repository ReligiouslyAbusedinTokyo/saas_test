import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorCanvasCardType } from './types'
import { EditorState } from '@/providers/editor-provider'
// import { getDiscordConnectionUrl } from '@/app/(main)/(pages)/connections/_actions/discord-connection'
// import {
//   getNotionConnection,
//   getNotionDatabase,
// } from '@/app/(main)/(pages)/connections/_actions/notion-connection'
// import {
//   getSlackConnection,
//   listBotChannels,
// } from '@/app/(main)/(pages)/connections/_actions/slack-connection'
// import { Option } from '@/components/ui/multiple-selector'


export const onDragStart = (
    event: any,
    nodeType: EditorCanvasCardType['type']
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }


export const onSlackContent =(
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>
)=>{
  nodeConnection.setSlackNode((prev:any)=>({
    ...prev,
    content:event.target.value
  }))
}  

export const onDiscordContent =(
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>
)=>{
  nodeConnection.setDiscordNode((prev:any)=>({
    ...prev,
    content:event.target.value
  }))
}


export const onContentChange = (
  nodeConnection: ConnectionProviderProps,
  nodeType: string,
  event : React.ChangeEvent<HTMLInputElement>
)=>{
  if(nodeType==='Slack'){
    onSlackContent(nodeConnection,event) 
  } else if (nodeType==='Discord') {
    onDiscordContent(nodeConnection, event)
  }
}

export const onAddTemplateSlack = (
  nodeConnection: ConnectionProviderProps,
  template: string
) => {
  nodeConnection.setSlackNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }))
}

export const onAddTemplateDiscord = (
  nodeConnection: ConnectionProviderProps,
  template: string
) => {
  nodeConnection.setDiscordNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }))
}

export const onAddTemplate = (
  nodeConnection: ConnectionProviderProps,
  title: string,
  template: string
) => {
  if (title === 'Slack') {
    onAddTemplateSlack(nodeConnection, template)
  } else if (title === 'Discord') {
    onAddTemplateDiscord(nodeConnection, template)
  }
}
  

