import React from 'react'
import styles from './ChatBotContainer.module.css'

export default function ChatBotContainer() {
  return (
    <div className="row justify-content-center">
        <div className="col-6">
            <div className="rounded-top">
                <div className="p-3 rounded-top bg-dark">
                    <p className="text-white mb-0">Udemy Chatbot</p>
                </div>
            </div>

            <div className={`${styles.MessageBoxContainer} px-3 py-4`}>
                <div className={`${styles.SenderMessage} d-flex align-items-center`}>
                    <p className={`${styles.MessageText} mb-0`}>Lorem IpsumLorem IpsumLorem Ipsum</p>
                </div>

                <div className={`${styles.ReceiverMessage} d-flex align-items-center justify-content-end mt-3`}>
                    <p className={`${styles.MessageText} mb-0`}>Lorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
            </div>

            <div>
                <input/>
            </div>
        </div>
    </div>
  )
}
