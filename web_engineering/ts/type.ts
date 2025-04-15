interface agentType {
    name: string,
    id: string,
    desc: string,
    content: string,
    icon: string,
}

interface chatHistoryType {
    title: string,
    id: string,
}

interface userDataType {
    name: string, 
    count: number,
}

export type {
    agentType,
    chatHistoryType,
    userDataType,
}