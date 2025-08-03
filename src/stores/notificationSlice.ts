import type { StateCreator } from "zustand";

export type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}

export const notificationSlice: StateCreator<NotificationSliceType> = (set) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            set({
                notification: {
                    text: '',
                    error: false,
                    show: false
                }
            });
        }, 5000);
    },
    hideNotification: () => {
        set({   
            notification: {
                text: '',
                error: false,
                show: false
            }
        });
    }
})