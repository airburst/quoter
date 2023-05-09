import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 972.68 250"
      width={150}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="304.72"
          x2="43.41"
          y1="263.68"
          y2="2.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4632d8"></stop>
          <stop offset="1" stopColor="#9084e8"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M464.78 76.44c0-16.85-13.75-22.62-25.88-27.72-8.98-3.77-16.73-7.03-16.73-14.03 0-5.86 5.21-9.65 13.27-9.65 7.11 0 12.17 2.96 15.55 4.94 1.29.68 3.23 1.51 5.05.94 1.25-.39 2.31-1.4 3.13-2.99l2.32-4.24c1.77-3.22 1.14-5.96-1.85-8.13-3.58-2.62-12.65-7.06-23.94-7.06-18.49 0-31.4 11.14-31.4 27.09s13.59 22.28 25.58 27.51c9.14 3.99 17.03 7.43 17.03 14.63 0 5.94-5.11 9.78-13.02 9.78-8.72 0-15.04-4.39-18.08-6.5l-.15-.1c-3.64-2.04-6.12-1.63-8.29 1.35l-2.83 4.1c-3.04 4.1-.96 6.7.9 8.32 5.62 4.33 16.44 9.38 28.45 9.38 18.18 0 30.88-11.35 30.88-27.6zM494.78 96.48V41.76c0-3.89-2.1-6.03-5.91-6.03h-5.67c-3.81 0-5.91 2.14-5.91 6.03v54.72c0 3.94 2.04 6.03 5.91 6.03h5.67c3.87 0 5.91-2.08 5.91-6.03zM483.03 28.38h5.15c3.54 0 5.49-1.9 5.49-5.36v-3.5c0-3.48-2-5.47-5.49-5.47h-5.15c-3.46 0-5.37 1.94-5.37 5.47v3.5c0 3.45 1.91 5.36 5.37 5.36zM626.01 165.35h5.15c3.54 0 5.49-1.9 5.49-5.36v-3.5c0-3.48-2-5.47-5.49-5.47h-5.15c-3.46 0-5.37 1.94-5.37 5.47v3.5c0 3.45 1.91 5.36 5.37 5.36zM583.67 34.2c-10.38 0-16.23 6.48-19.95 12.84-2.98-8.4-9.68-12.84-19.42-12.84-9.23 0-14.47 5.97-18.42 12.15 0-.2.01-.4.01-.6v-3.98c0-3.89-2.1-6.03-5.91-6.03h-5.02c-3.81 0-5.91 2.14-5.91 6.03v54.72c0 3.94 2.04 6.03 5.91 6.03h5.67c3.87 0 5.91-2.08 5.91-6.03V72.47c0-15.19 6.02-22.11 13.9-22.11 6.77 0 8.12 4.77 8.12 12.47v33.65c0 3.89 2.14 6.03 6.04 6.03h5.67c3.87 0 5.91-2.08 5.91-6.03V72.46c0-15.19 5.88-22.11 13.64-22.11 6.96 0 8.38 4.99 8.38 12.47v33.65c0 3.94 2.09 6.03 6.04 6.03h5.54c3.89 0 6.04-2.14 6.04-6.03V59.73c0-16.95-7.45-25.55-22.13-25.55zM656.7 104.05c18.11 0 30.76-14.36 30.76-34.92s-12-34.93-29.86-34.93c-11.93 0-18.29 6.96-20.62 10.24V40.87c0-3.11-2.32-5.13-5.91-5.13h-4.12c-3.84 0-6.03 2.2-6.03 6.03v80.41c0 3.89 2.14 6.03 6.03 6.03h5.54c3.95 0 6.03-2.08 6.03-6.03V99.06c0-1.43-.07-2.68-.15-3.64 2.27 2.95 7.99 8.63 18.32 8.63zm-18.68-34.54c0-9.25 4.19-20.05 15.98-20.05 9.33 0 15.59 8.01 15.59 19.92s-6.37 19.66-15.85 19.66c-10.32 0-15.72-9.83-15.72-19.54zM725.62 97v-4.37c0-3.02-1.66-4.93-4.56-5.25-2.27-.24-4.58-1.28-4.58-7.21v-64.1c0-3.83-2.15-6.03-5.91-6.03h-5.67c-3.81 0-5.91 2.14-5.91 6.03v65.38c0 8.53 2.34 14.61 6.95 18.07 4.33 3.25 9.86 3.63 13.64 3.63s6.03-2.19 6.03-6.16zM789.45 35.74h-6.44c-3.5 0-5.68 1.62-6.65 4.92l-11.59 33.55c-.62 2.09-1.29 4.81-1.73 6.63-.49-1.9-1.25-4.78-1.97-6.93l-12.35-33.39c-1.14-3.27-3.25-4.79-6.65-4.79h-6.95c-2.85 0-4.16 1.11-4.77 2.05-.6.93-1.07 2.57.07 5.12l24.87 57.94-2.34 5.54c-1.69 4.04-5.16 8.35-9.85 8.35-1.75 0-3.18-.57-4.38-1.1l-.11-.04c-2.89-.68-5.15.45-6.52 3.33l-1.14 2.79c-.83 1.73-.97 3.47-.39 4.89.53 1.32 1.63 2.32 3.18 2.9 2.18.84 5.52 1.97 9.37 1.97 11.04 0 20.12-6.59 24.28-17.61l27.05-69.13c.71-2.04.6-3.8-.3-5.07-.9-1.27-2.52-1.93-4.67-1.93zM457.02 191.16c6.56-3.97 10.44-11.18 10.44-19.53 0-14.66-11.36-24.13-28.95-24.13h-27.29c-3.81 0-5.91 2.14-5.91 6.03v80.41c0 3.94 2.04 6.03 5.91 6.03h27.68c9.07 0 16.86-2.25 22.52-6.52 6.31-4.75 9.65-11.86 9.65-20.57 0-10.24-5.48-18.63-14.05-21.7zm-33.97-6.42v-21.73h15.21c6.86 0 10.96 3.99 10.96 10.68s-4.15 11.06-10.57 11.06h-15.59zm29.77 27.09c0 7.77-4.84 12.6-12.63 12.6h-17.14v-25.07h17.14c7.67 0 12.63 4.9 12.63 12.47zM538.18 173.18h-5.54c-3.89 0-6.04 2.14-6.04 6.03v24.66c0 14.75-9.22 21.46-17.78 21.46-6.78 0-9.54-3.69-9.54-12.73v-33.4c0-3.89-2.14-6.03-6.04-6.03h-5.54c-3.84 0-6.04 2.2-6.04 6.03v36.73c0 16.95 7.88 25.55 23.42 25.55 10.33 0 18.34-5.84 22.17-11.92v4.36c0 3.94 2.04 6.03 5.91 6.03h5.02c3.89 0 6.04-2.14 6.04-6.03V179.2c0-3.83-2.2-6.03-6.04-6.03zM585.16 199.76c-6.18-2.14-11.51-3.99-11.51-7.97 0-5.04 5.17-5.79 8.25-5.79 5.27 0 9.46 1.9 12.23 3.16 3.73 1.63 6.43.85 8.01-2.32l1.3-2.35c1.68-3.5.87-6.42-2.19-8.02-2.16-1.19-8.72-4.83-18.59-4.83-15.39 0-25.73 8.15-25.73 20.28 0 13.76 11.73 17.9 21.16 21.23 6.12 2.16 11.41 4.03 11.41 7.93s-3.26 6.05-8.51 6.05c-6.23 0-10.87-2.52-13.95-4.19l-.44-.24c-3.57-1.86-6.08-1.4-8.15 1.49l-1.55 2.31c-1.15 1.69-1.58 3.38-1.22 4.89.32 1.35 1.26 2.51 2.68 3.31 6.66 4.5 14.14 6.79 22.24 6.79 15.08 0 25.61-8.55 25.61-20.8 0-13.63-11.68-17.68-21.06-20.93zM631.84 173.18h-5.67c-3.81 0-5.91 2.14-5.91 6.03v54.72c0 3.94 2.04 6.03 5.91 6.03h5.67c3.87 0 5.91-2.08 5.91-6.03v-54.72c0-3.83-2.15-6.03-5.91-6.03zM694.75 171.64c-12.99 0-19.84 7.77-22.69 12.19 0-.21.01-.43.01-.64v-3.98c0-3.89-2.1-6.03-5.91-6.03h-5.02c-3.81 0-5.91 2.14-5.91 6.03v54.72c0 3.94 2.04 6.03 5.91 6.03h5.67c3.87 0 5.91-2.08 5.91-6.03v-25.3c0-12.06 7.69-20.82 18.3-20.82 6.87 0 9.67 3.69 9.67 12.73v33.4c0 3.89 2.14 6.03 6.04 6.03h5.54c3.95 0 6.04-2.08 6.04-6.03V197.2c0-16.95-7.92-25.55-23.55-25.55zM765.45 171.64c-20 0-33.98 14.36-33.98 34.93s15.1 34.92 35.91 34.92c10.04 0 17.83-3.62 22.59-6.64 3.03-1.79 3.77-4.71 2.02-8.06l-1.54-2.55c-1.77-3.12-4.4-3.8-8.03-2.06l-.06.03c-3.03 1.89-7.89 4.14-13.83 4.14-10.43 0-17.82-6.54-19-16.72h39.35c3.41 0 6.29-2.82 6.29-6.15 0-19.34-11.67-31.84-29.73-31.84zm-.39 13.59c7.24 0 12.14 5.18 12.6 13.26h-27.68c1.72-8.2 7.44-13.26 15.07-13.26zM833.73 199.76c-6.18-2.14-11.51-3.99-11.51-7.97 0-5.04 5.17-5.79 8.25-5.79 5.27 0 9.45 1.9 12.24 3.16 3.73 1.63 6.43.85 8.01-2.32l1.3-2.35c1.68-3.5.87-6.42-2.19-8.02-2.16-1.19-8.72-4.83-18.59-4.83-15.39 0-25.73 8.15-25.73 20.28 0 13.76 11.73 17.9 21.16 21.23 6.12 2.16 11.41 4.03 11.41 7.93s-3.26 6.05-8.51 6.05c-6.23 0-10.87-2.52-13.94-4.18l-.44-.24c-3.57-1.85-6.08-1.4-8.15 1.49l-1.54 2.31c-1.15 1.69-1.58 3.38-1.23 4.89.32 1.36 1.26 2.51 2.68 3.31 6.66 4.5 14.15 6.79 22.24 6.79 15.08 0 25.61-8.55 25.61-20.8 0-13.63-11.68-17.68-21.06-20.93zM893.12 199.76c-6.18-2.14-11.51-3.99-11.51-7.97 0-5.04 5.17-5.79 8.25-5.79 5.27 0 9.45 1.9 12.24 3.16 3.73 1.63 6.43.85 8.01-2.32l1.3-2.35c1.68-3.5.87-6.42-2.19-8.02-2.15-1.2-8.71-4.83-18.59-4.83-15.39 0-25.73 8.15-25.73 20.28 0 13.76 11.73 17.9 21.16 21.23 6.12 2.16 11.41 4.03 11.41 7.93s-3.26 6.05-8.51 6.05c-6.23 0-10.87-2.52-13.94-4.18l-.44-.24c-3.57-1.85-6.08-1.4-8.15 1.49l-1.54 2.31c-1.15 1.69-1.58 3.38-1.23 4.89.32 1.36 1.26 2.51 2.68 3.31 6.66 4.5 14.15 6.79 22.24 6.79 15.08 0 25.61-8.55 25.61-20.8 0-13.63-11.68-17.68-21.06-20.93z"
          className={styles.text}
        ></path>
        <path
          d="M153.69 150.62c4.14 8.18 6.21 17.49 6.21 27.95 0 9.83-1.8 19.06-5.4 27.68-3.6 8.62-8.75 16.19-15.45 22.7-6.7 6.52-15.14 11.66-25.33 15.42C103.53 248.12 92.29 250 80 250c-15.27 0-29.44-2.58-42.5-7.73-13.06-5.15-23.6-10.78-31.59-16.87-2.11-1.66-3.67-3.38-4.67-5.15-.78-1.33-1.17-2.94-1.17-4.82-.11-.55-.11-1.11 0-1.66.22-2.55 1.44-5.26 3.67-8.14l7.67-10.81c2.66-3.66 5.55-5.71 8.66-6.15.44-.11.94-.16 1.5-.16 2.74 0 5.87 1.07 9.39 3.21C47.8 203.77 64.15 209.79 80 209.79c11.13 0 19.96-2.56 26.47-7.68 6.51-5.11 9.77-11.79 9.77-20.02 0-4.89-1.28-9.37-3.84-13.43-2.56-4.06-6.04-7.59-10.44-10.6-4.4-3-9.44-5.89-15.12-8.68a386.46 386.46 0 00-17.87-8.18c-6.24-2.67-12.44-5.51-18.61-8.51s-12.06-6.48-17.68-10.43c-5.62-3.95-10.6-8.29-14.95-13.01-4.35-4.73-7.79-10.46-10.33-17.19-2.53-6.73-3.8-14.1-3.8-22.11 0-13.81 3.61-26.07 10.83-36.79 7.22-10.72 17-18.92 29.32-24.61C56.1 2.84 69.93 0 85.26 0c12.89 0 24.93 1.91 36.15 5.73 11.22 3.82 19.99 8.06 26.32 12.72 4.55 3.21 6.83 6.98 6.83 11.3 0 2.55-.84 5.26-2.51 8.15l-6.2 11.14c-2.57 4.99-6.08 7.48-10.54 7.48-2.68 0-5.64-.91-8.87-2.72-4.35-2.6-8.15-4.72-11.38-6.36-3.24-1.64-7.73-3.25-13.47-4.84a64.698 64.698 0 00-17.33-2.37c-11.27 0-20.25 2.5-26.95 7.51-6.7 5.01-10.04 11.62-10.04 19.85 0 6.12 2.09 11.55 6.26 16.27 4.17 4.73 9.57 8.76 16.2 12.1 6.62 3.34 13.94 6.65 21.96 9.93 8.02 3.29 16.03 6.95 24.04 11.01 8.01 4.06 15.3 8.65 21.87 13.77 6.57 5.11 11.93 11.76 16.08 19.94zm211.26 19.89c0 21.62-7.82 41.14-22.02 54.96-15.28 14.88-37.18 22.74-63.33 22.74h-72.1c-16.47 0-28.9-12.41-28.9-28.87V30.65c0-8.06 2.91-15.4 8.2-20.68 5.28-5.28 12.64-8.18 20.7-8.18h60.94c23.12 0 42.7 7.42 56.63 21.47C337.92 36.22 345 54.06 345 73.51c0 15.5-4.23 28.39-12.93 39.29 9.3 5.24 16.77 12.03 22.23 20.21 7.06 10.57 10.64 23.19 10.64 37.51zm-81.85-51.92c.33-.2 33.24-20.44 33.24-45.08 0-11.86-4.13-22.56-11.64-30.12-10.64-10.73-25.59-12.98-36.26-12.98H207.27V219.6h72.32c18.51 0 33.49-5.05 43.31-14.61 8.62-8.39 13.37-20.64 13.37-34.48 0-8.57-1.96-15.85-5.83-21.64l-.04-.06-.04-.07c-9.21-15.85-46.24-25.53-46.61-25.63l-5.66-1.46s-.02-.02 0-.03l5-3.03z"
          className={styles.sb}
        ></path>
        <path
          d="M933.8 172.02c0-2.74.5-5.32 1.52-7.74 1.01-2.42 2.39-4.52 4.14-6.31 1.75-1.79 3.8-3.19 6.15-4.22 2.35-1.03 4.85-1.54 7.53-1.54s5.25.51 7.63 1.54 4.46 2.44 6.23 4.22c1.77 1.79 3.16 3.89 4.17 6.31 1.01 2.42 1.52 5 1.52 7.74s-.51 5.32-1.52 7.74-2.4 4.52-4.17 6.31-3.84 3.2-6.23 4.25-4.93 1.57-7.63 1.57-5.18-.52-7.53-1.57c-2.35-1.05-4.4-2.46-6.15-4.25s-3.13-3.89-4.14-6.31c-1.01-2.42-1.52-5-1.52-7.74zm4.82 0c0 2.17.37 4.19 1.11 6.06.74 1.88 1.76 3.52 3.06 4.93 1.3 1.41 2.83 2.51 4.6 3.3 1.77.79 3.68 1.19 5.74 1.19s4.03-.4 5.82-1.19c1.79-.79 3.34-1.9 4.66-3.3a15.59 15.59 0 003.11-4.93c.76-1.88 1.14-3.9 1.14-6.06s-.38-4.19-1.14-6.06c-.76-1.88-1.8-3.51-3.11-4.9a14.516 14.516 0 00-4.66-3.28c-1.79-.79-3.73-1.19-5.82-1.19s-3.97.4-5.74 1.19c-1.77.79-3.3 1.89-4.6 3.28-1.3 1.39-2.32 3.02-3.06 4.9-.74 1.88-1.11 3.9-1.11 6.06zm7.74-7.74c0-1.52.76-2.27 2.27-2.27h5.96c1.98 0 3.56.57 4.74 1.71 1.17 1.14 1.76 2.66 1.76 4.58 0 .76-.12 1.43-.35 2.03-.24.6-.52 1.11-.87 1.54-.34.43-.72.78-1.14 1.03-.42.25-.79.43-1.11.54v.11s.09.11.16.22c.07.07.14.19.22.35.07.16.18.35.32.57l2.33 4.49c.4.79.49 1.43.27 1.92s-.69.73-1.41.73h-.7c-1.26 0-2.13-.56-2.6-1.68l-2.6-5.63h-2.65v5.04c0 1.52-.7 2.27-2.11 2.27h-.38c-1.41 0-2.11-.76-2.11-2.27v-15.27zm7.15 6.98c.94 0 1.65-.26 2.14-.79.49-.52.73-1.25.73-2.19s-.24-1.66-.73-2.17c-.49-.5-1.16-.76-2.03-.76h-2.65v5.9h2.54z"
          className={styles.text}
        ></path>
      </g>
    </svg>
  );
};
