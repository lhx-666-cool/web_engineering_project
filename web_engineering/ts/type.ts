interface agentType {
  name: string,
  id: string,
  desc: string,
  content: string,
  icon: string,
}

interface chatHistoryType {
  title: string,
  sessionId: string,
}

interface userDataType {
  username: string,
  count: number,
  userId: number,
}

interface modelDataType {
  model: string,
  count: number,
}

interface MessageType {
  role: string,
  content: string
}

export type {
  agentType,
  chatHistoryType,
  userDataType,
  MessageType,
  modelDataType,
}