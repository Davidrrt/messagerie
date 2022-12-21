const baseUrl = 'https://576cc2bd-e943-49e1-8075-1f9a1ede52a8.mock.pstmn.io';

export interface Message {
  _id: string;
  picture: string;
  author: boolean;
  content:any;
  createdAt: Date;
  status:string;
  active?:boolean;
}

export type Messages = Message[] | undefined[];

interface MessageState {
  items: Messages;
}

const state = (): MessageState => ({
  items: []

});

const getters = {
  getMessageActive: (state: MessageState) => {
   let messageList: any = state.items;
    return messageList.find((item:Message) => !!item && item.active === true);
  },

  getFilterMessages:(state: MessageState) => {
    return (status: string) => [...state.items].filter(message => message?.status === status);
  },

  getSortedMessages: (state: MessageState) => {
    return [...state.items].sort(
      (a:any, b:any) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  },
};

export const useMessageStore = defineStore('message',{
  state,
  getters,
  actions: {
    updateAllActive(){
      this.items.forEach((message: any,index) =>{
        message.active = false;
        this.items[index] = message;
      });
    },
    async allMessage() {
      const response = (await $fetch(`${baseUrl}/messages`, {
      })) as any;

      if (response !== null) {
        this.items = response;
      }
    },
      async messageOne(id:string, testMes:boolean) {
        let url = testMes ? `${baseUrl}/message1` : `${baseUrl}/message2`;
        const response = (await $fetch(url, {
        })) as any;
        if (response !== null) {
          let messageApi = response.data.message;
          this.items.forEach((message: any,index) =>{
            if(message._id === id){
              let chat ={
                id: messageApi._id,
                message: messageApi.content,
                createdAt: messageApi.createdAt,
                userId: testMes ? '123456' : '123457'
              }
              message.content.push(chat);
              message.status = messageApi.status;
              this.items[index] = message;
            }
          });
        }
      },
  }
});