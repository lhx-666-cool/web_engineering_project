import {MessageType} from "@/ts/type";

export default class Session {
  message: MessageType[];
  id: string;
  title: string;

  constructor(message?: MessageType[], id?: string, title?: string) {
    if (message) {
      this.message = message;
    } else {
      this.message = [
        {
          'role': 'assistant',
          'content': '你好，请问我有什么可以帮助你的？'
        }
      ];
    }
    if (id) {
      this.id = id;
    } else {
      this.id = generateUUIDv4();
    }
    if (title) {
      this.title = title;
    } else {
      this.title = '新的聊天';
    }
  }

  addMessage(message: MessageType) {
    this.message.push(message);
  }

  changeLastMessage(delta: string) {
    this.message[this.message.length - 1].content += delta;
  }
}

function generateUUIDv4(): string {
  // 创建一个包含 16 个字节的 TypedArray
  const bytes = new Uint8Array(16);

  // 使用 crypto.getRandomValues 填充随机字节
  // 这个函数是浏览器环境提供的，所以在客户端组件中可以使用
  crypto.getRandomValues(bytes);

  // 设置 UUID 版本号 (v4)
  // 在字节的第 6 位（从 0 开始计数）设置版本号为 4
  // 字节的高 4 位需要设置为 0100 (十进制 4)
  bytes[6] = (bytes[6] & 0x0f) | 0x40;

  // 设置 UUID 变体 (变体 1，符合 RFC 4122)
  // 在字节的第 8 位设置变体信息
  // 字节的高 2 位需要设置为 10 (十进制 8、9、A、B)
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  // 将字节数组格式化为 UUID 字符串
  // 使用模板字符串方便格式化
  return `${toHex(bytes.slice(0, 4))}-${toHex(bytes.slice(4, 6))}-${toHex(bytes.slice(6, 8))}-${toHex(bytes.slice(8, 10))}-${toHex(bytes.slice(10, 16))}`;
}

// 辅助函数：将 Uint8Array 的片段转换为十六进制字符串
function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}