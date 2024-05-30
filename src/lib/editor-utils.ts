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
  