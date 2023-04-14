import React from "react";

const UserIcon = ({ color = "#A2A2A8", background = false, onClick }) => {
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <svg
      onClick={onClick}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='user-icon'
    >
      {background && (
        <path
          className='background'
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
          fill="#F8F8F8"
        />
      )}
      <path
        d="M9.24187 23.0625V22.0625C8.88424 22.0625 8.55384 22.2535 8.37534 22.5634C8.19684 22.8733 8.19743 23.2549 8.37688 23.5643L9.24187 23.0625ZM26.7582 23.0625L27.6232 23.5643C27.8027 23.2549 27.8033 22.8733 27.6248 22.5634C27.4463 22.2535 27.1159 22.0625 26.7582 22.0625V23.0625ZM24.0625 18C24.0625 15.5479 22.5854 13.3373 20.32 12.399L19.5547 14.2467C21.0727 14.8755 22.0625 16.3569 22.0625 18H24.0625ZM20.32 12.399C18.0546 11.4606 15.447 11.9793 13.7132 13.7132L15.1274 15.1274C16.2892 13.9655 18.0366 13.6179 19.5547 14.2467L20.32 12.399ZM13.7132 13.7132C11.9793 15.447 11.4606 18.0546 12.399 20.32L14.2467 19.5547C13.6179 18.0366 13.9655 16.2892 15.1274 15.1274L13.7132 13.7132ZM12.399 20.32C13.3373 22.5854 15.5479 24.0625 18 24.0625V22.0625C16.3569 22.0625 14.8755 21.0727 14.2467 19.5547L12.399 20.32ZM18 24.0625C21.3482 24.0625 24.0625 21.3482 24.0625 18H22.0625C22.0625 20.2437 20.2437 22.0625 18 22.0625V24.0625ZM18.0001 22.0625H9.24187V24.0625H18.0001V22.0625ZM8.37688 23.5643C10.3671 26.9952 14.0336 29.1071 18.0001 29.1071V27.1071C14.7467 27.1071 11.7393 25.3749 10.1069 22.5607L8.37688 23.5643ZM18.0001 29.1071C21.9665 29.1071 25.633 26.9952 27.6232 23.5643L25.8932 22.5607C24.2608 25.3749 21.2535 27.1071 18.0001 27.1071V29.1071ZM26.7582 22.0625H18.0001V24.0625H26.7582V22.0625Z"
        fill={color}
      />
      <path
        d="M7.875 18C7.875 12.4081 12.4081 7.875 18 7.875C23.5919 7.875 28.125 12.4081 28.125 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
